import React, { useState, useCallback, useRef } from 'react';
import Cropper from 'react-easy-crop';
import useProfileStore from '../../store/profileStore';
import { Button, Modal, Typography } from "antd"
import { css } from '@emotion/react';
import { FaPen } from "react-icons/fa";

/**
 * Utility: membuat elemen <img> dari sebuah URL/objectURL, dibungkus Promise
 */
function createImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.crossOrigin = 'anonymous';
    image.src = url;
  });
}

/**
 * Utility: memotong gambar sesuai area crop (pixel) menggunakan canvas,
 * lalu mengembalikan hasilnya sebagai Blob URL.
 *
 * @param {string} imageSrc - objectURL/dataURL gambar asli
 * @param {object} pixelCrop - { x, y, width, height } dari react-easy-crop
 */
async function getCroppedImageUrl(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Gagal membuat blob dari canvas'));
        return;
      }
      resolve(URL.createObjectURL(blob));
    }, 'image/jpeg');
  });
}

function ImageCropUploader({imageSrc, setImageSrc, croppedImage, setCroppedImage, setCroppedAreaPixels, fileInputRef, handleAreaClick}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  // Saat user memilih file
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      // alert('File yang dipilih harus berupa gambar.');
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setImageSrc(objectUrl);
    setCroppedImage(null); // reset hasil crop sebelumnya
    setCrop({ x: 0, y: 0 });
    setZoom(1);

    // reset value input supaya bisa pilih file yang sama lagi jika perlu
    e.target.value = '';
  };

  // Dipanggil react-easy-crop setiap kali area crop berubah
  const onCropComplete = useCallback((_croppedArea, croppedAreaPixelsValue) => {
    setCroppedAreaPixels(croppedAreaPixelsValue);
  }, []);

  return (
    <div style={styles.wrapper}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* Mode 1: belum ada gambar sama sekali -> area klik untuk pilih file */}
      {!imageSrc && !croppedImage && (
        <div style={styles.dropArea} onClick={handleAreaClick}>
          <span style={styles.dropIcon}>+</span>
          <p style={styles.dropText}>Klik untuk memilih gambar</p>
        </div>
      )}

      {/* Mode 2: gambar dipilih -> tampilkan cropper */}
      {imageSrc && (
        <div>
          <div style={styles.cropContainer}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
        </div>
      )}

      {/* Mode 3: sudah ada hasil crop -> tampilkan preview */}
      {croppedImage && (
        <div style={styles.previewWrapper}>
          <img src={croppedImage} alt="Hasil crop" style={styles.previewImage} />
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '5px 0',
    fontFamily: 'system-ui, sans-serif',
  },
  dropArea: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '54px 0',
    border: '2px dashed #bbb',
    borderRadius: 8,
    textAlign: 'center',
    cursor: 'pointer',
    color: '#666',
    background: '#fafafa',
  },
  dropIcon: {
    fontSize: 32,
    display: 'block',
    marginBottom: 8,
  },
  dropText: {
    margin: 0,
    fontSize: 14,
  },
  cropContainer: {
    position: 'relative',
    width: '100%',
    height: 320,
    background: '#333',
    borderRadius: 8,
    overflow: 'hidden',
  },
  controls: {
    marginTop: 12,
  },
  zoomLabel: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 13,
    color: '#444',
    gap: 4,
  },
  zoomSlider: {
    width: '100%',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 8,
  },
  buttonPrimary: {
    padding: '8px 16px',
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 14,
  },
  buttonSecondary: {
    padding: '8px 16px',
    background: '#eee',
    color: '#333',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 14,
  },
  previewWrapper: {
    textAlign: 'center',
    width: '100%',
  },
  previewImage: {
    width: '100%',
    borderRadius: 8,
    border: '1px solid #ddd',
  },
};


const ModalTitle = () => {
  return <Typography.Title css={css`font-size: 18px; color: var(--text-color); margin: 0; font-weight: 500; border-bottom: 1px solid var(--blur-color); padding-bottom: 20px;`}>Edit Gambar</Typography.Title>
}

const Control = ({handleCancelCrop, handleConfirmCrop, handleAreaClick, handleReset, imageSrc, croppedImage, handleSimpanCropped}) => {
  const handleSimpan = () => {
    handleSimpanCropped()
  }

  return (
    <div style={styles.controls}>
      <div style={styles.buttonRow}>
        {(croppedImage) && (
          <div style={styles.buttonRow}>
            <Button onClick={handleAreaClick} variant="outlined" size="large" css={css`font-size: 15px; font-weight: 500;`}>Ganti Gambar</Button>
            <Button onClick={handleReset} variant="outlined" size="large" css={css`font-size: 15px; font-weight: 500;`}>Hapus</Button>
          </div>
        )}
        {(imageSrc) && (
          <Button onClick={handleConfirmCrop} variant="outlined" size="large" css={css`font-size: 15px; font-weight: 500;`}>Terapkan Crop</Button>
        )}
        <Button onClick={handleSimpan} type="primary" size="large" css={css`font-size: 15px; font-weight: 500; color: var(--background-color);`}>Simpan</Button>
      </div>
    </div>
  )
}

const UploadImg = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [imageSrc, setImageSrc] = useState(null); // gambar asli (sebelum crop)
  const [croppedImage, setCroppedImage] = useState(null); // hasil crop (preview akhir)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const fileInputRef = useRef(null);
  const setEditImg = useProfileStore(state => state.setEditImg)
  const imgUrl = useProfileStore(state => state.imgUrl)
  const editMode = useProfileStore(state => state.editMode)

  if(editMode == false && (imageSrc || croppedImage)) {
    setCroppedImage(null)
    setImageSrc(null)
  }

   // Konfirmasi crop -> proses gambar & tampilkan preview
   const handleConfirmCrop = async () => {
    if (!imageSrc || !croppedAreaPixels) return;
    try {
      const croppedUrl = await getCroppedImageUrl(imageSrc, croppedAreaPixels);
      setCroppedImage(croppedUrl);
      setImageSrc(null); // tutup mode crop, kembali ke tampilan preview
    } catch (err) {
      console.error(err);
      // alert('Gagal memproses gambar.');
    }
  };

  const handleCancelCrop = () => {
    setImageSrc(null);
  };

  const handleReset = () => {
    setCroppedImage(null);
    setImageSrc(null);
  };

  // Buka dialog pilih file saat area diklik
  const handleAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleCloseModal = () => {
    setOpenDialog(false)
    setImageSrc(null)
    setCroppedImage(null)
  }

  const handleSimpanCropped = async () => {
    const cropped = await fetch(croppedImage).then(res => res.blob())
    setEditImg(cropped)
    setOpenDialog(false)
  }

  return (<>
    <div css={css`width: max-content; height: max-content; border-radius: 50%; overflow: hidden; position: relative;`}>
      <img src={`${croppedImage || imgUrl}`} alt={name} css={css`width: 73px; height: 73px; border-radius: 50%; object-fit: cover; object-position: center;`} />
      <div onClick={() => setOpenDialog(true)} css={css`position: absolute; top: 0; left: 0; right: 0; bottom: 0; transition: 0.2s; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.5); opacity: 0; cursor: pointer; &:hover { opacity: 1; }`}>
        <FaPen size={22} css={css`color: var(--background-color);`} />
      </div>
    </div>

    <Modal
      open={openDialog}
      title={<ModalTitle />}
      centered={true}
      footer={<Control handleConfirmCrop={handleConfirmCrop} handleCancelCrop={handleCancelCrop} handleAreaClick={handleAreaClick} handleReset={handleReset} imageSrc={imageSrc} croppedImage={croppedImage} handleSimpanCropped={handleSimpanCropped} />}
      width={566}
      destroyOnHidden={true}
      onCancel={handleCloseModal}
    >
      <ImageCropUploader imageSrc={imageSrc} setImageSrc={setImageSrc} croppedImage={croppedImage} setCroppedImage={setCroppedImage} setCroppedAreaPixels={setCroppedAreaPixels} fileInputRef={fileInputRef} handleAreaClick={handleAreaClick} />
    </Modal>
  </>)
}

export default UploadImg
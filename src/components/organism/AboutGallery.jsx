import { css } from "@emotion/react"
import { Image } from "antd";
import { useRef } from "react";
import AboutGalleryAnimation from "../animation/AboutGalleryAnimation";

const containerStyle = css`
  height: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 1fr);  
  gap: 10px;
  grid-template-areas: 
    "a b"
    "a c"
    "d c"
    "d e"
    "f e"
    "f g"
    "h g"
  ;

  @media(min-width: 768px) {
    height: 450px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);  
    grid-template-areas: 
      "a b b c"
      "a d e f"
      "g g h f"
    ;
  }
`

const ImageItem = ({area, imgUrl}) => {
  const img = useRef()

  const handleClick = () => {
    img.current.click()
  }

  return (
    <div onClick={handleClick} css={css`cursor: pointer; border-radius: 5px; grid-area: ${area}; background-image: url('${imgUrl}'); background-size: cover; background-position: center;`}>
      <Image ref={img} css={css`display: none;`} src={imgUrl} />
    </div>
  )
}

const AboutGallery = () => {
  const galleryList = [
    {
      area: 'a',
      imgUrl: 'https://www.allsportamerica.com/wp-content/uploads/Futsal4.jpg'
    },
    {
      area: 'b',
      imgUrl: 'https://asset.kompas.com/crop/0x21:971x668/750x500/data/photo/2018/07/23/544914177.jpg'
    },
    {
      area: 'c',
      imgUrl: 'https://www.sports-floor.com/data/watermark/20240924/66f2579980085.jpg'
    },
    {
      area: 'd',
      imgUrl: 'https://admin.saraga.id/storage/images/cfc_1625094771.jpg'
    },
    {
      area: 'e',
      imgUrl: 'https://asset.ayo.co.id/image/venue/169140593238604.image_cropper_B155D29D-015B-404B-AE19-749A9D7DE348-1824-00000286240ABF75.jpg'
    },
    {
      area: 'f',
      imgUrl: 'https://konten.usu.ac.id/storage/satker/0/statis/fasilitas/lapfutsal_1.webp'
    },
    {
      area: 'g',
      imgUrl: 'https://admin.saraga.id/storage/images/20211019-230305_1634659815.jpg'
    },
    {
      area: 'h',
      imgUrl: 'https://www.umn.ac.id/wp-content/uploads/2024/01/futsal-3.webp'
    },
  ]

  return (
    <section css={css`margin: 100px 12px 0 12px;`}>
      <AboutGalleryAnimation marginView={200}>
        <div css={css`max-width: 960px; margin: 0 auto;`}>
          <h1 css={css`font-size: 24px; font-weight: bold; color: var(--text-color); text-align: center; margin-bottom: 32px;`}>Galeri</h1>
          <Image.PreviewGroup>
            <div css={containerStyle}>
              {galleryList.map((item, index) => (
                <ImageItem key={index} area={item.area} imgUrl={item.imgUrl} />
              ))}
            </div>
          </Image.PreviewGroup>
        </div>
      </AboutGalleryAnimation>
    </section>
  )
}

export default AboutGallery
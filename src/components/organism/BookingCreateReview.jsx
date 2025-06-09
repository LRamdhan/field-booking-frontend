import { css } from "@emotion/react"
import { Modal, Typography, Input, Rate, Button, notification, Result } from "antd"
import { useCreateReview } from "../../hook/field.hooks"
import { useEffect, useState } from "react"
import { MdOutlineError } from "react-icons/md";
import { useCheckAuth } from "../../hook/utils.hook";

const CreateReviewTitle = () => {
  return <Typography.Title css={css`font-size: 18px; color: var(--text-color); margin: 0; font-weight: 500; border-bottom: 1px solid var(--blur-color); padding-bottom: 20px;`}>Berikan Ulasan</Typography.Title>
}

const BookingCreateReview = ({fieldId, setFieldId, bookingId, setBookingId}) => {
  const {mutate: createReview, isPending, error, isSuccess} = useCreateReview(fieldId)
  const [description, setDescription] = useState('')
  const [rate, setRate] = useState(0)
  const [api, contextHolder] = notification.useNotification();

  const handleCancel = () => {
    setFieldId(null)
    setBookingId(null)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleRateChange = (e) => {
    setRate(e);
  }

  const handleSubmit = () => {
    createReview({
      booking_id: bookingId,
      rating: rate,
      description
    })
  }

  useEffect(() => {
    if(error) {
      if(error.status === 400) {
        api.error({
          message: 'Isi Data yang diperlukan',
          description: 'Pastikan deskripsi dan rating diisi',
          placement: 'top',
          icon: <MdOutlineError color="#E5342F" size={24} />
        })
      } else {
        api.error({
          message: 'Terjadi Kesalahan di server',
          description: 'Silahkan coba lagi nanti',
          placement: 'top',
          icon: <MdOutlineError color="#E5342F" size={24} />
        })
      }
    }
  }, [error])

  useCheckAuth(error)

  return (<>
    {contextHolder}
    {isSuccess && (
      <Modal
        open={true}
        centered={true}
        footer={null}
        width={600}
        destroyOnHidden={true}
        onCancel={handleCancel}
      >
        <Result
          status="success"
          title="Ulasan Berhasil Dikirim!"
          subTitle="Terima kasih sudah memberikan ulasan anda"
          extra={[
            <Button type="primary" key="back" onClick={handleCancel}>Kembali</Button>,
          ]}
        />
      </Modal>
    )}
    {!isSuccess && (
      <Modal
        open={true}
        title={<CreateReviewTitle />}
        centered={true}
        footer={null}
        width={600}
        destroyOnHidden={true}
        onCancel={handleCancel}
      >
        <Typography.Text css={css`font-size: 15px; color: var(--text-color); margin: 0; padding-top: 20px; display: block;`}>Bagaimana pengalaman dan penilaian anda setelah menggunakan lapang kami?</Typography.Text>
        <Input.TextArea rows={5} value={description} onChange={handleDescriptionChange} css={css`font-size: 15px; color: var(--text-color); margin-top: 13px;`} />
        <Typography.Text css={css`font-size: 15px; color: var(--text-color); margin: 0; display: block; padding-top: 24px;`}>Berapa rating yang akan berikan untuk lapang ini?</Typography.Text>
        <Rate value={rate} onChange={handleRateChange} css={css`margin-top: 13px; display: block;`} />
        <Button type="primary" size="large" onClick={handleSubmit} loading={isPending} css={css`width: 100px; margin-top: 40px; margin-left: auto; margin-right: auto; display: block;`}>Kirim</Button>
      </Modal>
    )}
  </>)
}

export default BookingCreateReview
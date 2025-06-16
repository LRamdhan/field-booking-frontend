import { Button, Result } from 'antd';

const FetchError = ({refetch}) => {
  return (
    <Result
      status="error"
      title="Gagal Mengambil Data"
      subTitle="Terjadi error, silahkan coba beberapa saat lagi"
      extra={
        <Button type="primary" onClick={() => refetch()}>
          Coba Lagi
        </Button>
      }
    />
  )
}

export default FetchError
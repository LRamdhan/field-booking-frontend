import { Helmet } from "react-helmet"
import CenterLayout from "../components/layout/CenterLayout"
import DeviceContent from "../components/organism/DeviceContent"
import { Typography } from "antd"
import { css } from "@emotion/react"

const DevicePage = () => {
  return (
    <>
      <Helmet>
        <title>Perangkat</title>
      </Helmet>
      <CenterLayout>
        <Typography.Title level={1} css={css`font-size: 24px; color: var(--text-color); font-weight: 500;`}>Perangkat</Typography.Title>
        <Typography.Text level={1} css={css`font-size: 15px; color: var(--text-color); margin: 0;`}>Perangkat yang terkoneksi</Typography.Text>
        <DeviceContent />
      </CenterLayout>
    </>
  )
}

export default DevicePage
import Cookies from "js-cookie"
import { Link, Navigate } from "react-router-dom"
import { Flex, Typography, Button } from "antd";
import { css } from "@emotion/react";
const {Title, Text} = Typography

const OauthErrorPage = () => {
  const accessToken = Cookies.get('access_token')
  const refreshToken = Cookies.get('refresh_token')

  return (<>
    {(accessToken || refreshToken) ? (
      <Navigate to="/" /> 
    ) : (
      <Flex justify="center" align="center" css={css`width: 100%; height: 100vh; padding: 12px;`}>
        <Flex vertical align="center">
          <Title level={2} css={css`font-size: 26px; margin-bottom: 28px;`}>Error!</Title>
          <Text align="center" css={css`margin-bottom: 18px; max-width: 400px;`}>Proses yang anda lakukan mengalami gangguan, silahkan coba lagi setelah beberapa saat</Text>
          <Link to="/login">
            <Button type="primary">Kembali</Button>
          </Link>
        </Flex>
      </Flex>
    )}
  </>)
}

export default OauthErrorPage
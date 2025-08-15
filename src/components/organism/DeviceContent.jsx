import React from 'react';
import { Button, Col, Collapse, Flex, Image, Row, Typography, Skeleton, notification } from 'antd';
import { css } from '@emotion/react';
import destopImg from '/img/desktop.svg'
import phoneImg from '/img/phone.svg'
import { useGetDevice, useLogoutDevice } from '../../hook/user.hooks';
import FetchError from '../molecules/FetchError';
import { useEffect } from 'react';
import { MdOutlineError } from 'react-icons/md';

const Label = ({icon, os, browser, lastLogin, logout, id}) => {
  const handleLogout = (e) => {
    e.stopPropagation();
    logout(id)
  }

  return (
    <Flex align="center">
      <Image preview={false} src={icon} css={css`width: 57px; margin-right: 25px; display: none; @media(min-width: 768px) {display: block;}`} />
      <div>
        {/*actually browser should be os, but there's still a bug where android is recognized as linux */}
        <Typography.Text css={css`display: block; font-size: 15px; color: var(--text-color); text-transform: capitalize; margin: 0;`}>{browser}</Typography.Text>
        <Typography.Text css={css`display: block; font-size: 14px; color: var(--secondary-color); text-transform: capitalize; margin-top: 2px;`}>Terakhir Login : {lastLogin}</Typography.Text>
      </div>
      <div css={css`flex-grow: 1;`}></div>
      {logout && <Button type="primary" onClick={handleLogout}>Logout</Button>}
    </Flex>
  )
}

const Content = ({device, platform, browser}) => {
  return (
    <div css={css`margin-left: 24px; @media(min-width: 768px) {margin-left: 106px;}`}>
      <div css={css`max-width: 350px;`}>
        <Row>
          <Col span={12}>
            <Typography.Text css={css`font-size: 15px; color: var(--secondary-color); margin: 0;`}>Device</Typography.Text>
          </Col>
          <Col span={12}>
            <Typography.Text css={css`font-size: 15px; color: var(--text-color); margin: 0;`}>{device}</Typography.Text>
          </Col>
        </Row>
        <Row css={css`margin: 12px 0 0 0;`}>
          <Col span={12}>
            <Typography.Text css={css`font-size: 15px; color: var(--secondary-color); margin: 0;`}>Platform</Typography.Text>
          </Col>
          <Col span={12}>            
            <Typography.Text css={css`font-size: 15px; color: var(--text-color); margin: 0;`}>{platform}</Typography.Text>
          </Col>
        </Row>
        <Row css={css`margin: 12px 0 0 0;`}>
          <Col span={12}>
            <Typography.Text css={css`font-size: 15px; color: var(--secondary-color); margin: 0;`}>Browser</Typography.Text>
          </Col>
          <Col span={12}>
            <Typography.Text css={css`font-size: 15px; color: var(--text-color); margin: 0;`}>{browser}</Typography.Text>
          </Col>
        </Row>
      </div>
    </div>
  )
}

const DeviceContent = () => {
  const {data, isPending, error, refetch} = useGetDevice()
  let itemsOthers = []
  let itemsCurrent = []
  const {mutate: logoutDevice, isPending: logoutPending, error: logoutError, isSuccess: logoutSuccess} = useLogoutDevice()
  const [api, contextHolder] = notification.useNotification();

  if(data) {
    itemsOthers = data.others.map(item => {
      return {
        key: item.id,
        label: <Label icon={item.device === 'Desktop' ? destopImg : phoneImg} os={item.os} browser={item.browser} lastLogin={item.last_login} logout={logoutDevice} id={item.id} />,
        children: <Content device={item.device} platform={item.platform} browser={item.browser} />,
      }
    })
    itemsCurrent.push({
      key: data.current.id,
      label: <Label icon={data.current.device === 'Desktop' ? destopImg : phoneImg} os={data.current.os} browser={data.current.browser} lastLogin={data.current.last_login} logout={null} id={data.current.id} />,
      children: <Content device={data.current.device} platform={data.current.platform} browser={data.current.browser} />,
    })
  }

  useEffect(() => {
    if(logoutError) {
      if(logoutError.status === 409) {
        api.error({
          message: 'Logout Gagal',
          description: 'Perangkat yang anda pilih adalah perangkat saat ini',
          placement: 'top',
          icon: <MdOutlineError color="#E5342F" size={24} />
        })
      } else {
        api.error({
          message: 'Terjadi Error',
          description: 'Silahkan coba lagi nanti',
          placement: 'top',
          icon: <MdOutlineError color="#E5342F" size={24} />
        })
      }
    }

    if(logoutSuccess) {
      api.success({
        message: 'Logout Berhasil',
        placement: 'top',
      })
    }
  }, [logoutPending, logoutError, logoutSuccess])

  return (
    <>
      {contextHolder}
      <div css={css`margin-top: 25px;`} >
        {isPending && (<>
          <Skeleton avatar active paragraph={{ rows: 1 }} />
          <Skeleton avatar active paragraph={{ rows: 1 }} />
          <Skeleton avatar active paragraph={{ rows: 1 }} />
        </>)}
        {data && (<>
          <div>
            <Typography.Title css={css`font-size: 16px; color: var(--text-color); margin-bottom: 15px; font-weight: 500;`}>Perangkat saat ini</Typography.Title>
            <Collapse items={itemsCurrent} />
          </div>
          {itemsOthers.length !== 0 && (
            <div css={css`margin-top: 30px;`}>
              <Typography.Title css={css`font-size: 16px; color: var(--text-color); margin-bottom: 15px; font-weight: 500;`}>Perangkat lain</Typography.Title>
              <Collapse items={itemsOthers} />
            </div>
          )}
        </>)}
        {(error && !data) && <FetchError refetch={refetch} />}
      </div>
    </>
  )
};

export default DeviceContent;
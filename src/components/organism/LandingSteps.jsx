import { css } from "@emotion/react"
import { Flex } from "antd"
import { IoMdPersonAdd } from "react-icons/io";
import { TbSoccerField } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import fieldImg1 from "/img/field-image1.png"
import fieldImg2 from "/img/field-image2.png"
import FadeUp from "../animation/FadeUp";
import LandingStepImagesAnimation from "../animation/LandingStepImagesAnimation";
import { useRef } from "react";
import LandingStepPoint from "../animation/LandingStepPoint";

const Step = ({isLast, title, icon, description}) => {
  return (
    <Flex css={css`width: max-content;`} gap={28}>
      <Flex vertical justify="flex-start" align="center" css={css`width: max-content;`}>
        <div css={css`padding: 10px; background-color: var(--primary-color); border-radius: 100px; width: max-content;`}>
          { <icon.value css={css`font-size: 25px; color: var(--background-color);`} /> }
        </div>
        {!isLast && <div css={css`width: 2px; height: 80px; background-color: var(--primary-color);`}></div>}
      </Flex>
      <div css={css`width: 280px;`}>
        <h3 css={css`font-size: 18px; font-weight: bold; color: var(--text-color);`}>{title}</h3>
        <p css={css`font-size: 15px; color: var(--text-color); margin-top: 10px;`}>{description}</p>
      </div>
    </Flex>
  )
}

const LandingSteps = () => {
  const circleElement = useRef()
  const image1Element = useRef()
  const image2Element = useRef()
  const stepContent = [
    {
      icon: { value: IoMdPersonAdd },
      title: 'Daftar Akun',
      description: 'Buat akun baru dengan mengisi data diri untuk memulai proses booking.'
    },
    {
      icon: { value: TbSoccerField },
      title: 'Pilih Lapang',
      description: 'Tentukan lapangan yang ingin digunakan sesuai kebutuhan.'
    },
    {
      icon: { value: MdAccessTime },
      title: 'Tentukan Tanggal & Waktu',
      description: 'Pilih jadwal bermain yang masih tersedia di sistem.'
    },
    {
      icon: { value: MdPayment },
      title: 'Bayar',
      description: 'Lakukan pembayaran melalui metode yang tersedia.'
    },
    {
      icon: { value: IoIosFootball },
      title: 'Datang & Main',
      description: 'Hadir sesuai jadwal, nikmati permainan futsal bersama tim.'
    },
  ]

  return (
    <section css={css`margin: 75px 12px 0 12px;`}>
      <FadeUp marginView={250}>
        <h2 align="center" css={css`max-width: 960px; margin: 0 auto; font-size: 24px; font-weight: bold; color: var(--text-color);`}>Mulai Dengan 5 Langkah Mudah</h2>
      </FadeUp>
      <Flex justify="center" align="center" css={css`width: 100%; margin-top: 43px; `}>
        <div css={css`width: 960px; @media(min-width: 768px) {display: flex; justify-content: center;}`}>
          <div css={css`display: flex; justify-content: center; order: 1; @media(min-width: 768px) {justify-content: flex-start; order: 3; width: max-content;} @media(min-width: 928px) {width: 450px;}`}>
            <LandingStepPoint marginView={250} css={css`width: max-content;`}>
              {
                stepContent.map((item, index) => (
                  <Step key={index} icon={item.icon} title={item.title} description={item.description} isLast={index === stepContent.length - 1} />
                ))
              }
            </LandingStepPoint>
          </div>
          <LandingStepImagesAnimation marginView={250} circle={circleElement} image1={image1Element} image2={image2Element} css={css`order: 2; margin-top: 50px; @media(min-width: 768px) {margin-top: 0; flex-grow: 1;}`}>
            <div css={css`height: 100%; display: flex; justify-content: center; @media(min-width: 768px) { align-items: center;}`}>
              <div css={css`width: 385px; height: max-content; position: relative; overflow: hidden;`}>
                <div ref={circleElement} css={css`position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; justify-content: center; align-items: center;`}>
                  <div css={css`width: 228px; height: 228px; background-color: var(--primary-color); border-radius: 300px;`}></div>
                </div>
                <div ref={image1Element} css={css`width: 100%; height: max-content; display: flex; justify-content: flex-start; position: relative;`}>
                  <img src={fieldImg1} alt="field 1" css={css`width: 253px; self-align: flex-start;`} />
                </div>
                <div ref={image2Element} css={css`width: 100%; height: max-content; display: flex; justify-content: flex-end; margin-top: 15px; position: relative;`}>
                  <img src={fieldImg2} alt="field 2" css={css`width: 253px; self-align: flex-start;`} />
                </div>
              </div>
            </div>
          </LandingStepImagesAnimation>
        </div>
      </Flex>
    </section>
  )
}

export default LandingSteps
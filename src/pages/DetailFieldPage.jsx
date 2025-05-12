import { css } from "@emotion/react";
import ContentLayout from "../components/layout/ContentLayout"
import { Carousel, Image } from 'antd';
import FieldContent from "../components/organism/FieldContent";

const DetailFieldPage = () => {
  const dummyImg = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVgQdSyp6MLiQs0C5bz1-f504eBz6xQh2pg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVECM7gd1zOfYJew9cUNxCuaefi-R4Mlfipg&s',
    'htq=tbn:ANd9GcSUaFZ_pn3AOPe2vEHXI1IkUMXzHZgtsTKhBA&s',
  ]

  return (
    <ContentLayout>
      <Carousel arrows infinite={false} css={css`width: 100%; height: 250px;`}>
        {dummyImg.map((e, i) => (
          <Image
            width="100%"
            height={250}
            preview={false}
            css={css`object-fit: cover; object-position: center;`}
            key={i}
            src={e}
            fallback={'/img/error-img-load.svg'}
          />
        ))}
      </Carousel>
      <FieldContent />
    </ContentLayout>
  )
}

export default DetailFieldPage
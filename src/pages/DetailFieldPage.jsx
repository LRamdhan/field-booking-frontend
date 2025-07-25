import { css } from "@emotion/react";
import ContentLayout from "../components/layout/ContentLayout"
import { Carousel, Image, Skeleton } from 'antd';
import FieldContent from "../components/organism/FieldContent";
import { Outlet, useParams } from "react-router-dom";
import { useFieldDetail } from "../hook/field.hooks";
import useFieldDetailStore from "../store/fieldDetailStore";
import FetchError from "../components/molecules/FetchError";
import { Helmet } from "react-helmet";

const carouselStyle = css`width: 100%; height: 250px;`

const DetailFieldPage = () => {
  const {id} = useParams()
  useFieldDetail(id)
  const images = useFieldDetailStore(state => state.images)
  const name = useFieldDetailStore(state => state.name)
  const isPending = useFieldDetailStore(state => state.isPending)
  const error = useFieldDetailStore(state => state.error)
  const refetch = useFieldDetailStore(state => state.refetch)

  return (<>
    <Helmet>
      {name && <title>{name}</title>}
      {isPending && <title>...</title>}
      {error && <title>Error</title>}
    </Helmet>
    <ContentLayout>
      {error && <FetchError refetch={() => refetch()} />}
      {isPending && (
        <Skeleton.Image active css={carouselStyle} />
      )}
      {images && (
        <Carousel arrows infinite={false} css={carouselStyle}>
          {images.map((e, i) => (
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
      )}
      {!error && <FieldContent />}
      <Outlet />
    </ContentLayout>
  </>)
}

export default DetailFieldPage
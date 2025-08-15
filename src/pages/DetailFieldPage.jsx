import { css } from "@emotion/react";
import { Carousel, Image, Skeleton, Breadcrumb, Flex, Button  } from 'antd';
import FieldContent from "../components/organism/FieldContent";
import { Link, Outlet, useParams } from "react-router-dom";
import { useFieldDetail } from "../hook/field.hooks";
import useFieldDetailStore from "../store/fieldDetailStore";
import FetchError from "../components/molecules/FetchError";
import { Helmet } from "react-helmet";
import { IoArrowBackOutline } from "react-icons/io5";

const carouselStyle = css`width: 100%; height: 250px;`

const mainStyle = css`
  margin: 15px auto 0 auto;
  padding: 0 12px;
  max-width: 960px;
  @media(min-width: 984px) {
    padding: 0;
  }
`

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
    <main css={mainStyle}>
      <Flex align="center" gap={10} css={css`width: max-content; margin-bottom: 15px;`}>
        <Link to="/lapang">
          <Button color="default" variant="text" icon={<IoArrowBackOutline css={css`font-size: 15px; color: var(--text-color);`} />} />
        </Link>
        <Breadcrumb
          items={[
            {
              title: <Link to="/lapang" css={css`font-size: 15px; color: var(--text-color);`}>Lapang</Link>,
            },
            {
              title: <p css={css`font-size: 15px; color: var(--text-color);`}>{(isPending || error) ? '...' : name}</p>,
            },
          ]}
        />
      </Flex>
      {error && <FetchError refetch={() => refetch()} />}
      {isPending && (
        <Skeleton.Image active css={carouselStyle} />
      )}
      {(images && !error) && (
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
    </main>
  </>)
}

export default DetailFieldPage
import { Pagination } from "antd"
import useUserBookingStore from "../../store/userBookingStore"

const UserBookingPagination = () => {
  const page = useUserBookingStore(state => state.page)
  const setPage = useUserBookingStore(state => state.setPage)
  const total_page = useUserBookingStore(state => state.total_page)

  const handleChange = page => {
    setPage(page);
  }

  return (
    <Pagination current={page} total={total_page * 10} onChange={handleChange} align="center" />
  )
}

export default UserBookingPagination
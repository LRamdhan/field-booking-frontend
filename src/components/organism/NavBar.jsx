import { css } from "@emotion/react"
import { Link, useNavigate } from "react-router-dom"
import { Button, notification } from "antd";
import userApi from "../../api/userApi";
import { MdOutlineError } from "react-icons/md";

const NavBar = () => {
  const navigate = useNavigate()
  const [api, contextHolder] = notification.useNotification();

  const handleLogout = async () => {
    try {
      await userApi.logout()
      navigate('/login')
    } catch(err) {
      if(err.response?.status === 401) {
        navigate('/login')
      }
      api.error({
        message: 'Logout Gagal',
        description: "Terjadi error, silahkan coba lagi nanti",
        placement: 'top',
        icon: <MdOutlineError color="#E5342F" size={24} />
      })
    }
  }

  return (
    <nav css={css`background-color: var(--blur-color); padding: 15px 0; height: max-content; text-align: center;`}>
      {contextHolder}
      <Link to="/">Dashboard</Link>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Link to="/lapang">Lapang</Link>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Link to="/booking">Booking</Link>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Button type="primary" onClick={handleLogout}>Logout</Button>
    </nav>
  )
}

export default NavBar
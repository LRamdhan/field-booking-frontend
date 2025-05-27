import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axiosBackend from '../config/axiosBackend';
import UnauthorizeError from '../exception/UnauthorizeError.js';
import { useNavigate } from 'react-router-dom';

const DasboardPage = () => {
  const navigate = useNavigate()

  // example pattern | get client's bookings
  useEffect(() => {
    (async () => {
      try {
        const result = await axiosBackend.get('/bookings', {
          params: {
            page: 1,
            limit: 5
          }
        })
        console.log(result.data);
      } catch(err) {
        if(err instanceof UnauthorizeError) {
          navigate("/login")
        }
      }
    })()
  }, [])

  return (<>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <h1>Dashboard</h1>
  </>)
}

export default DasboardPage
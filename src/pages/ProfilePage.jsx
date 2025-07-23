import ProfileLayout from '../components/layout/ProfileLayout';
import ProfileHead from '../components/molecules/ProfileHead';
import ProfileGeneral from '../components/molecules/ProfileGeneral';
import ProfileAddress from '../components/molecules/ProfileAddress';
import ProfileEditButton from '../components/molecules/ProfileEditButton';
import { useProfile } from '../hook/user.hooks';
import { Helmet } from 'react-helmet';
import useProfileStore from '../store/profileStore';
import FetchError from '../components/molecules/FetchError';

const ProfilePage = () => {
  const refetch = useProfileStore(state => state.refetch)
  const error = useProfileStore(state => state.error)

  useProfile()
  
  if(error) console.log(error.message);

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <ProfileLayout>
        <ProfileHead />
        {error ?
          <FetchError refetch={() => refetch()} />
        :
          <>
            <ProfileGeneral />
            <ProfileAddress />
            <ProfileEditButton />
          </>
        }
      </ProfileLayout>
    </>
  )
}

export default ProfilePage
// src/components/ProfilePage.jsx
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import UserInfo from './UserInfo';

function ProfilePage() {
  const userData = useContext(UserContext);

  return <UserInfo />; // no props needed
}

export default ProfilePage;


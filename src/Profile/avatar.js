import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import photo from '../assets/photo.png';
export default function GroupAvatars() {
  return (
    <AvatarGroup>
      <Avatar sx={{height:"50px"}} alt="photo" src={photo} />
   </AvatarGroup>
  );
}

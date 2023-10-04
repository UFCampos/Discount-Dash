import { useSelector, useDispatch } from '@/lib/redux/hooks';
import { toggleMenu } from '@/lib/redux/features/menuSlice';
import { setUser } from '@/lib/redux/features/userProfile';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { useEffect, useState } from 'react';

import "./Menu.css"

const MenuButton = () => {
  const dispatch = useDispatch();

  const isOPen=useSelector((state)=>state.menu.isOpen)

  const handleToggleMenu = () => {

        dispatch(toggleMenu()); 

  };
  

  const user = useSelector((state) => state.userProfile);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let mappedUser = {};
        user.providerData.forEach((profile) => {
          mappedUser = {
            id: profile.uid,
            email: profile.email,
            photoUrl: profile.photoURL,
            name: profile.displayName
          };
        });
        dispatch(setUser(mappedUser));
      }
    });
  }, [user, dispatch]);

  return (
    <div>
      <input type="checkbox" checked={isOPen} id="checkbox" onClick={handleToggleMenu} />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>
  );
};

export default MenuButton;

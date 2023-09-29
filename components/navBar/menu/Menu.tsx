'use client'
import { useSelector, useDispatch } from '@/lib/redux/hooks';
import { toggleMenu } from '@/lib/redux/features/menuSlice';
import { setUser } from '@/lib/redux/features/userProfile';
import styles from './menu.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { useEffect } from 'react';
import { button } from '@nextui-org/react';

const MenuButton = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isOpen);
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
          }
        })
        dispatch(setUser(mappedUser));
      }
    })
  },[user, dispatch])

  const { id, name } = useSelector((state) => state.userProfile);

  return (
    <div>
      
      <button onClick={handleToggleMenu} className={styles.menuButton}>
        <Image className={styles.fotoMenu} src='/menu-abierto.png' width={50} height={50} color='with' alt='menu'></Image>
      </button>
      {isMenuOpen && (
        <div className={styles.menu}>
          <ul>
            <Link href="/register"><li>Register</li></Link>
            <Link href="/addProduct"><li>Create Products</li></Link>
            <Link href={`/users/profile/${id}`}><li>perfil: {name}</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
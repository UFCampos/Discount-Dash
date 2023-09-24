'use client'
import { useSelector, useDispatch } from '@/lib/redux/hooks';
import { toggleMenu } from '@/lib/redux/features/menuSlice';
import styles from './menu.module.css'; 
import Link from 'next/link';
import Image from 'next/image';

const MenuButton = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

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
            <li>Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
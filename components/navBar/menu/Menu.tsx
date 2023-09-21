'use client'
import { useSelector, useDispatch } from '@/lib/redux/hooks';
import { toggleMenu } from '@/lib/redux/features/menuSlice';
import styles from './menu.module.css'; 

const MenuButton = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <button onClick={handleToggleMenu} className={styles.menuButton}>
        {isMenuOpen ? 'Cerrar Menú' : 'Abrir Menú'}
      </button>
      {isMenuOpen && (
        <div className={styles.menu}>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
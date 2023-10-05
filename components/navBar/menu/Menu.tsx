"use client";
import { useSelector, useDispatch } from "@/lib/redux/hooks";
import { toggleMenu } from "@/lib/redux/features/menuSlice";
import { setUser } from "@/lib/redux/features/userProfile";
import styles from "./menu.module.css";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useEffect } from "react";

const MenuButton = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isOpen);
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const user = useSelector((state) => state.userProfile);


  return (
    <div>
      <button onClick={handleToggleMenu} className={styles.menuButton}>
        <Image
          className={styles.fotoMenu}
          src="/menu-abierto.png"
          width={50}
          height={50}
          color="with"
          alt="menu"
        ></Image>
      </button>
      {isMenuOpen && (
        <div className={styles.menu}>
          <ul>
            <Link href="/register">
              <li>Register</li>
            </Link>
            <Link href="/addProduct">
              <li>Create Products</li>
            </Link>
            <Link href={`/users/profile/${user?.id}`}>
              <li>perfil: no hay</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;

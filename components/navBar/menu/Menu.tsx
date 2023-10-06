"use client";
import { useSelector, useDispatch } from "@/lib/redux/hooks";
import { toggleMenu } from "@/lib/redux/features/menuSlice";
import "./Menu.css";

const MenuButton = () => {
  const dispatch = useDispatch();

  const isOPen = useSelector((state) => state.menu.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isOPen}
        id="checkbox"
        onClick={handleToggleMenu}
      />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>
  );
};

export default MenuButton;

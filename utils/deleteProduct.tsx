"use client";
import { useDelProductCartMutation } from "@/lib/redux/service/cartProductsAPI";

const deleteProduct = (id: string) => {
  const [delProductCart, { isLoading }] = useDelProductCartMutation();

  const handleDelete = async () => {
    try {
      await delProductCart(id).unwrap();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <button onClick={handleDelete} disabled={isLoading}>
      Eliminar Producto
    </button>
  );
};

export default deleteProduct;

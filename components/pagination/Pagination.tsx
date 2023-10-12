// 'use client'
// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from '@/lib/redux/hooks';
// import { loadProductsPagination } from '@/lib/redux/features/itemsSlice';

// const Pagination = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(8);
//     const products = useSelector((state) => state.items.products);

//     const dispatch = useDispatch();

//     if (products === undefined || products === null) {
//         return <div>Cargando...</div>; // O muestra un indicador de carga apropiado
//     }

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const pruductsPage = products.slice(indexOfFirstItem, indexOfLastItem);

//     useEffect(() => {
//         if(products.length > 0){
//             dispatch(loadProductsPagination(pruductsPage));
//         }
//     },[pruductsPage])

//     const handlePageChange = (page : number ) => {
//         setCurrentPage(page)
//       };

//   return (
//     <div>
//           <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//             Anterior
//           </button>
//           <p>{currentPage} of {Math.ceil(products.length / itemsPerPage)}</p>
//           <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= indexOfFirstItem}>
//             Siguiente
//           </button>
//     </div>
//   );
// };

// export default Pagination;

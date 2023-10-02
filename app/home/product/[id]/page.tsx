import Detail from "@/components/product/detail/Detail";
const DetailProduct = ({params} : {params: {id: string}}) => {
    const id = params.id;
    return (
        <div>
            <Detail id={id}/>
        </div>
    );
}

export default DetailProduct
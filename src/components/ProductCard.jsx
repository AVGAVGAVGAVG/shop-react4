import { Link } from "react-router-dom";

const ProductCard =()=>{
    return(
        <div className="bg-white round shsdov p-4">
            <img src="{product.image} alt={product.title}" className="w-full h-48 object-cover rounder"/>
            <h3 className="mt-2 font-bold text-lg">{product.title}</h3>
            <p className="text-gray-700">{product.price}</p>
            <Link to={`/product/$ {product.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 round hover:bg-blue-600">
            Подробнее
            
            </Link>
        </div>
    )
}
export default ProductCard
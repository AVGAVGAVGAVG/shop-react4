import { useEffect } from "react"
import { useParams } from "react-router-dom"
import products from "../Product"


const ProductDetail = ({addToCart}) => {
    const {id}=useParams()
    const [product,setProduct] = useState(null)

    useEffect(() =>{
        const foundProduct = products.find(item => item.id===parseInt(id))
        setProduct(foundProduct)
    },[id])

    if (!product) return <div>Товар не найден</div>



return (

        <div className="conttainer mx-auto p-4 flex flex-col md:flex-row"
        img src={product.image} alt={product.title} className="w-full md:1/2 rounded"/>

        <div>
    <h1 className="text-3xl font-bold">{product.title}</h1>
    <p className="text-xl text-gray-700 mt-2">{product.price}</p>
    <p className=" mt-4">{product.descriptuon}</p>
    <button onClick={()=>addToCart(product)} className="mt-6 bg-green-500 text-white px-2 rouded 
    hover:bg-green-600"> Добавить в корзину </button>
    </div>

    </div>
    )
}


    export default ProductDetail
import { Link,useLocation } from "react-router-dom" 

const ThankYouPage = () =>{
    const location=useLocation()
    const{orderId ,total }=location.state || {}

    return(
        <div className='container mx-auto p-4 bg-white dark:bg-gray-800 transition-colors duration-300'>
            <div className='max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 shadow rouded text-center'>
                <h2 className='text-2xl font-bold mb-4 dark:text-gray-200'>
                Спасибо за заказ!
                </h2>
                {orderId ? (
                    <>
                    <p className='text-gray-800 dark:text-gray-200'>
                    Ваш заказ успешно оформлен.Мы свяжемся с вами для подтверждения доставки!  
                    </p>
                    <p className='mt-4 text-gray-800 dark:text-gray-200'>
                Номер заказа <strong>№{orderId}</strong>
                    </p>
                    <p p className='mt-4 text-gray-800 dark:text-gray-200'>
                Общая стоимость:<strong>{Number(total).toFixed(2)} ₽</strong>
                    </p>
                    </>
                    ):(
                    <p className='text-gray-800 dark:text-gray-200'>
                Информация о заказе не найдена!
                    </p>
                )}
                <div className='mt-6'>
                    <Link to={"/"} className='inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-color'>
                        Вернуться на главную
                    </Link>
                </div>
               
            </div>
        </div>
    )
}
export default ThankYouPage
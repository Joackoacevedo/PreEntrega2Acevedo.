import carrito from '../../../public/carrito-de-compras.png'
import './CartWidget.css'


const CartWidget = () => {

    return (
        <div>
            <img className='carrito' src={carrito}/>
            <span className='numero'>0</span>
        </div>
    )
}

export default CartWidget
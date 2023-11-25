import styles from './Cart.module.scss'
import { Delete } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'

function Cart() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.products)
  const totalPrice = () => {
    let total = 0
    products.forEach((item) => (total += item.quantity * item.price))
    return total.toFixed(2)
  }
  return (
    <div className={styles.cart}>
      <h1>Products in your cart</h1>
      {products.map((i) => (
        <div className={styles.item} key={i.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + i.img} alt="" />
          <div className={styles.details}>
            <h1>{i.title}</h1>
            <p>
              {i.desc?.substring(0, 50)}
              {i.desc?.length > 50 ? '...' : null}
            </p>
            <div className={styles.price}>
              {i.quantity} x ${i.price}
            </div>
          </div>
          <Delete
            className={styles.delete}
            onClick={() => dispatch(removeItem(i.id))}
          />
        </div>
      ))}
      <div className={styles.total}>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className={styles.reset} onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  )
}
export default Cart

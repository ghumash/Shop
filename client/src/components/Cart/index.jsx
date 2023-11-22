import styles from './Cart.module.scss'
import { productsSectionData } from '../../js/static'
import { Delete } from '@mui/icons-material'

function Cart() {
  return (
    <div className={styles.cart}>
      <h1>Products in your cart</h1>
      {productsSectionData.map((i) => (
        <div className={styles.item} key={i.id}>
          <img src={i.img} alt="" />
          <div className={styles.details}>
            <h1>{i.title}</h1>
            <p>
              {i.desc?.substring(0, 50)}
              {i.desc?.length > 50 ? '...' : null}
            </p>
            <div className={styles.price}>1 x ${i.price}</div>
          </div>
          <Delete className={styles.delete} />
        </div>
      ))}
      <div className={styles.total}>
        <span>SUBTOTAL</span>
        <span>$700</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className={styles.reset}>Reset Cart</span>
    </div>
  )
}
export default Cart

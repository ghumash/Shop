import styles from './Product.module.scss'
import { sliderData } from '../../js/static'
import { useState } from 'react'
import { AddShoppingCart, Balance, FavoriteBorder } from '@mui/icons-material'

function Product() {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.images}>
          <img src={sliderData[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={sliderData[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className={styles.mainImg}>
          <img src={sliderData[selectedImg]} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>Title</h1>
        <span className={styles.price}>$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          doloremque et, ipsam minus molestiae molestias nihil odio quisquam
          quos recusandae, sequi tempora vero, voluptas? Autem cumque doloribus
          earum magnam optio!
        </p>
        <div className={styles.quantity}>
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className={styles.add}>
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className={styles.links}>
          <div className={styles.item}>
            <FavoriteBorder /> ADD TO WISH LIST
          </div>
          <div className={styles.item}>
            <Balance /> ADD TO COMPARE
          </div>
        </div>
        <div className={styles.info}>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Ta: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className={styles.details}>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
export default Product

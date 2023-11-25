import styles from './Product.module.scss'
import { useState } from 'react'
import { AddShoppingCart, Balance, FavoriteBorder } from '@mui/icons-material'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'

function Product() {
  const dispatch = useDispatch()
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState('img')
  const [quantity, setQuantity] = useState(1)
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
  if (loading) {
    return '...loading'
  }
  if (error) {
    return 'Something went wrong!'
  }
  if (!data) {
    return 'No data'
  }
  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.images}>
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            onClick={() => setSelectedImg('img')}
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            onClick={() => setSelectedImg('img2')}
          />
        </div>
        <div className={styles.mainImg}>
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes[selectedImg]?.data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1>{data?.attributes?.title}</h1>
        <span className={styles.price}>${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className={styles.quantity}>
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className={styles.add}
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity
              })
            )
          }
        >
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

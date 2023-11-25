import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

function Card({ item }) {
  return (
    <Link className={'link'} to={`/product/${item?.id}`}>
      <div className={styles.card}>
        <div className={styles.images}>
          {item?.attributes?.isNew && <span>New Season</span>}
          <img
            className={styles.mainImg}
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt=""
          />
          <img
            className={styles.secondImg}
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <h2>{item?.attributes?.title}</h2>
        <div className={styles.prices}>
          <h3>${item?.attributes?.oldPrice || item?.attributes?.price + 20}</h3>
          <h3>${item?.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  )
}
export default Card

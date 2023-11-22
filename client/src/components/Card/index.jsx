import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

function Card({ item }) {
  return (
    <Link className={'link'} to={`/product/:${item.id}`}>
      <div className={styles.card}>
        <div className={styles.images}>
          {item.isNew && <span>New Season</span>}
          <img className={styles.mainImg} src={item.img} alt="" />
          <img className={styles.secondImg} src={item.img2} alt="" />
        </div>
        <h2>{item.title}</h2>
        <div className={styles.prices}>
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  )
}
export default Card

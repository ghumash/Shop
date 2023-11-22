import styles from './Products.module.scss'
import List from '../../components/List'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function Products() {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Product Categories</h2>
          <div className={styles.inputItem}>
            <input type="checkbox" id={'1'} value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className={styles.inputItem}>
            <input type="checkbox" id={'2'} value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className={styles.inputItem}>
            <input type="checkbox" id={'3'} value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2>Filter by price</h2>
          <div className={styles.inputItem}>
            <span>0</span>
            <input
              type="range"
              id={'3'}
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2>Sort by</h2>
          <div className={styles.inputItem}>
            <input
              type="radio"
              id={'ask'}
              value={'ask'}
              name={'price'}
              onChange={() => setSort('ask')}
            />
            <label htmlFor="ask">Price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input
              type="radio"
              id={'desc'}
              value={'desc'}
              name={'price'}
              onChange={() => setSort('desc')}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img
          className={styles.catImg}
          src="https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}
export default Products

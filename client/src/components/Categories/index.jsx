import styles from './Categories.module.scss'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className={''}>
            <Link className={'link'} to={'/products/1'}>
              Sale
            </Link>
          </button>
        </div>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className={''}>
            <Link className={'link'} to={'/products/1'}>
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className={''}>
            <Link className={'link'} to={'/products/1'}>
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className={`${styles.col} ${styles.col_l}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className={''}>
                <Link className={'link'} to={'/products/1'}>
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className={''}>
                <Link className={'link'} to={'/products/1'}>
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className={''}>
            <Link className={'link'} to={'/products/1'}>
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Categories

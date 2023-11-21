import styles from './Navbar.module.scss'
import enFlag from '../../assets/img/en.png'
import {
  FavoriteBorderOutlined,
  KeyboardArrowDown,
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            <img src={enFlag} alt="EN" width={25} height={25} />
            <KeyboardArrowDown />
          </div>
          <div className={styles.item}>
            <span>USD</span>
            <KeyboardArrowDown />
          </div>
          <div className={styles.item}>
            <Link className={'link'} to={'/products/1'}>
              Women
            </Link>
          </div>
          <div className={styles.item}>
            <Link className={'link'} to={'/products/2'}>
              Men
            </Link>
          </div>
          <div className={styles.item}>
            <Link className={'link'} to={'/products/3'}>
              Children
            </Link>
          </div>
        </div>

        <div className={styles.center}>
          <Link className={'link'} to={'/'}>
            TG STORE
          </Link>
        </div>

        <div className={styles.right}>
          <div className={styles.item}>
            <Link className={'link'} to={'/'}>
              Homepage
            </Link>
          </div>
          <div className={styles.item}>
            <Link className={'link'} to={'/'}>
              About
            </Link>
          </div>
          <div className={styles.item}>
            <Link className={'link'} to={'/'}>
              Contact
            </Link>
          </div>
          <div className={styles.item}>
            <Link className={'link'} to={'/'}>
              Stores
            </Link>
          </div>
          <div className={styles.icons}>
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className={styles.cartIcon}>
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar

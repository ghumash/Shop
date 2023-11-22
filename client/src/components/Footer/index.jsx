import styles from './Footer.module.scss'
import payment from '../../assets/img/payment.png'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.item}>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
        </div>
        <div className={styles.item}>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className={styles.item}>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            asperiores blanditiis culpa eligendi iste labore praesentium quos
            ratione repudiandae voluptate.
          </span>
        </div>
        <div className={styles.item}>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            asperiores blanditiis culpa eligendi iste labore praesentium quos
            ratione repudiandae voluptate.
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span className={styles.logo}>TG Store</span>
          <span className={styles.copyright}>
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className={styles.right}>
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Footer

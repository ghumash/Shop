import styles from './Contact.module.scss'
import {
  Facebook,
  Google,
  Instagram,
  Pinterest,
  Twitter
} from '@mui/icons-material'

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <span>BE IN TOUCH WITH US:</span>
        <div className={styles.mail}>
          <input type="text" placeholder={'Enter your e-mail'} />
          <button>JOIN US</button>
        </div>
        <div className={styles.icons}>
          <Facebook />
          <Instagram />
          <Twitter />
          <Google />
          <Pinterest />
        </div>
      </div>
    </div>
  )
}
export default Contact

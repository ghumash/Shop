import Slider from '../../components/Slider'
import styles from './Home.module.scss'
import ProductsSection from '../../components/ProductsSection'
import Categories from '../../components/Categories'
import Contact from '../../components/Contact'

function Home() {
  return (
    <div className={styles.home}>
      <Slider />
      <ProductsSection type={'featured'} />
      <Categories />
      <ProductsSection type={'trending'} />
      <Contact />
    </div>
  )
}
export default Home

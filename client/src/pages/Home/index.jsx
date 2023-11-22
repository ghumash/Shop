import Slider from '../../components/Slider'
import styles from './Home.module.scss'
import ProductsSection from '../../components/ProductsSection'

function Home() {
  return (
    <div className={styles.home}>
      <Slider />
      <ProductsSection type={'featured'} />
      <ProductsSection type={'trending'} />
    </div>
  )
}
export default Home

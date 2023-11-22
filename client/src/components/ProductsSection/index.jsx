import styles from './ProductsSection.module.scss'
import { productsSectionData } from '../../js/static'
import Card from '../Card'

function ProductsSection({ type }) {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <h1>{type} producSliderts</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
          animi aspernatur culpa cumque eos expedita neque pariatur ratione
          veritatis! Alias cumque dolores eligendi ex itaque magni nostrum
          perferendis, sit?
        </p>
      </div>
      <div className={styles.bottom}>
        {productsSectionData.map((i) => (
          <Card key={i.id} item={i} />
        ))}
      </div>
    </div>
  )
}
export default ProductsSection

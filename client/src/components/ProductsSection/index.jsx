import styles from './ProductsSection.module.scss'
import Card from '../Card'
import useFetch from '../../hooks/useFetch'

function ProductsSection({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  )
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
          animi aspernatur culpa cumque eos expedita neque pariatur ratione
          veritatis! Alias cumque dolores eligendi ex itaque magni nostrum
          perferendis, sit?
        </p>
      </div>
      <div className={styles.bottom}>
        {error
          ? 'Something went wrong!'
          : loading
            ? '...loading'
            : data.map((i) => <Card key={i.id} item={i} />)}
      </div>
    </div>
  )
}
export default ProductsSection

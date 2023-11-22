import styles from './List.module.scss'
import { productsSectionData } from '../../js/static'
import Card from '../Card'

function List() {
  return (
    <div className={styles.list}>
      {productsSectionData.map((i) => (
        <Card key={i.id} item={i} />
      ))}
    </div>
  )
}
export default List

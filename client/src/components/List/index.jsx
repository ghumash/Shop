import styles from './List.module.scss'
import Card from '../Card'
import useFetch from '../../hooks/useFetch'

function List({ subCats, maxPrice, sort, catId }) {
  const endpoint = `/products?populate=*`
  const bySubCategories = `&[filters][categories][id]=${catId}${subCats.map(
    (i) => `&[filters][sub_categories][id][$eq]=${i}`
  )}`
  const byPrice = `&[filters][price][$lte]=${maxPrice}`
  const byLowestOrHighest = `&:pluralApiId?sort=${sort}`
  const { data, loading, error } = useFetch(
    `${endpoint}${bySubCategories}${byPrice}${byLowestOrHighest}`
  )
  return (
    <div className={styles.list}>
      {loading ? '...loading' : data.map((i) => <Card key={i.id} item={i} />)}
    </div>
  )
}
export default List

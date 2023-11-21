import Slider from "../../components/Slider";
import styles from "./Home.module.scss";
import ProductsSection from "../../components/ProductsSection";

function Home() {
  return (
    <div className={styles.home}>
      <Slider />
      <ProductsSection type={"Featured"} />
      <ProductsSection type={"Trending"} />
    </div>
  );
}
export default Home;

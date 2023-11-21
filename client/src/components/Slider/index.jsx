import styles from './Slider.module.scss'
import { sliderData } from '../../js/static'
import { EastOutlined, WestOutlined } from '@mui/icons-material'
import { useState } from 'react'

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }
  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw` }}
      >
        {sliderData.map((i) => (
          <img src={i} alt="" />
        ))}
      </div>
      <div className={styles.icons}>
        <div className={styles.icon} onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className={styles.icon} onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  )
}
export default Slider

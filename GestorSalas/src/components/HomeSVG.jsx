import Man from '../assets/Man2.png'
import HomeImage from '../assets/sw-js-blob-svg.png'
import './HomeSVG.css'

export default function HomeSVG() {
  return (
        <div className='img-container'>
            <img src={Man} className='home-image img-1' />
            <img src={HomeImage} className='home-image img-3' />
        </div>
  )
}

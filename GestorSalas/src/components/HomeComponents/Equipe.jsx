import Louise from '../../assets/louise_img.jpeg'
import Rodrigo from '../../assets/Rodrigo_img1.jpeg'
import Rafael from '../../assets/Rafael_img.jpeg'
import Thiago from '../../assets/thiago_img.jpeg'
import Bruno from '../../assets/bruno_img.jpeg'
import Vinicius from '../../assets/vinicius_Img.jpeg'
import Vector from '../../assets/Vector.png'
import './Equipe.css'
/*
==========================================================
SEÇÃO DE EQUIPE DA PAGINA HOME
==========================================================
*/
export default function Equipe() {
  return (

    <section className="equipe">
        <div className="equipe-header">
        <div className="equipe-info">
            <hr style={{backgroundColor:'#033567', width:'10rem',height:'.3rem', borderRadius:'5px'}}/>
            <h3>Equipe</h3>
            <p>Conheça um pouco sobre nosso <span className='span'>Time!</span></p>
        </div>
        <img src={Vector}  />
        </div>   
        <div className="equipe-content">
            <div className='pessoa'>
            <img src={Rodrigo}  className='pessoa-img'/>
            <p>Rodrigo</p>
            </div>
            <div className='pessoa'>
            <img src={Thiago} className='pessoa-img' />
            <p>Thiago</p>
            </div>
            <div className='pessoa'>
            <img src={Louise} className='pessoa-img' />
            <p>Louise</p>
            </div>
            <div className='pessoa'>
            <img src={Rafael} className='pessoa-img'/>
            <p>Rafael</p>
            </div>
            <div className='pessoa'>
            <img src={Bruno} className='pessoa-img'/>
            <p>Bruno</p>
            </div>
            <div className='pessoa'>
            <img src={Vinicius} className='pessoa-img' />
            <p>Vinicius</p>
            </div>
        </div>
    </section>

  )
}

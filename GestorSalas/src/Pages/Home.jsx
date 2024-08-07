import './Home.css'
import Welcome from '../components/HomeComponents/Welcome';
import Solucao from '../components/HomeComponents/Solucao';
import Equipe from '../components/HomeComponents/Equipe';
import Footer from '../components/HomeComponents/Footer'

export default function Home() {
  return (
    <div className="mainpage-container">
      <Welcome />
      <Solucao />
      <Equipe />
      <Footer />
    </div>
  )
}

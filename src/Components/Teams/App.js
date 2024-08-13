
import TeamDetails from './TeamDetails'
import Hero from './Hero';
import Career from './Career'
import Footer from '../Footer'
import Header from '../Header'
function App() {  
  return (
    <div className='bg-[#1E1E25]'>
    <Header className="bg-[#1E1E25]"/>
    <Hero/>
    <TeamDetails/>
    <Career/>
    <Footer/>
    </div>
  );
}

export default App;
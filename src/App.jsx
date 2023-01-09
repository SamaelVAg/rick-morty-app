import RequestComp from './components/RequestComp'
import banner from './assets/images/banner.svg'
import bannerText from './assets/images/banner-text.svg'
import './App.css'


function App() {

  return (
    <div className="app">
      <header className='app-header'>
        <img className='header-banner' src={banner} alt="Banner" />
        <img className='header-text' src={bannerText} alt="Banner text" />
      </header>
      <RequestComp />
    </div>
  )
}

export default App

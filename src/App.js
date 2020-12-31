import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/header/header'
import Featured from'./components/featured/featured'
import Services from './components/services/services'
import About from './components/about/about'
import Gallery from './components/gallery/gallery'
import Location from './components/location/location'
import Footer from './components/footer/footer'
import Routes from './routes'
import './styles.css'

const App = () =>{
    return(
        <BrowserRouter>
             <div className = "App">
                 <Routes />
           {/* <Header />
           
           
           <Services />
           <About />
           <Location />
           <Footer /> */}
          
            
        </div>
        </BrowserRouter>
       
    )
}
export default App
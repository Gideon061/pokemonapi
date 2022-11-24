import React from 'react'
import { Link } from 'react-router-dom'
import Gardevior_bg from '../Assets/kindpng_2596582-removebg-preview.png'
import Footer from '../Components/Footer'
import useWindowDimensions from '../Hooks/useWindowDimension'
import Kirlia from '../Assets/kirlia.png'


const Home = () => {
    const { width,height } = useWindowDimensions();

    console.log(width)

  return (
    <div>
        <main>
            <section className='home-section'>
            <div className='container full-height'>
                <div className='middle-padding home-flex'>
                    <div className='landing-page-text'>
                        <h1>Welcome to Pokendo</h1>
                        <button className='custom-button-light'><Link to='/pokedex'>Use Pokedex</Link></button>
                    </div>
                    <div className='hero-show'>
                    {width>1024 && <img src={Gardevior_bg} className='hero-handler' />}
                    {width<1024 && height > 840 && <div className='bullet-wrapper-small'>
                        <div className='bullet'>
                            <img src={Kirlia} className='small-hero-handler' />
                        </div>
                    </div>}
                    </div>
                        <div className='bullet-3'>
                        </div>
                </div>
            </div>
            {/* <Charizard /> */}
            </section>
            <section className='berry-section'>
                <div className='container full-height'>
                    <div className={width < 1024 ? 'half-padding berry-flex':'middle-padding berry-flex'} >
                        <img className='berry-img-handler' src='https://samurai-gamers.com/wp-content/uploads/2016/11/snorlax-berries.png' />
                        <div className='berries-text'>
                        <h2>Looking for berries?</h2>
                        <button className='custom-button-light'><Link>Find Berries</Link></button>
                        </div>
                    </div>
                </div>

            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Home
import React from 'react'
import Charizard from '../Components/Charizard';
import Footer from '../Components/Footer';
import Rayquaza from '../Components/Rayquaza';
import useWindowDimensions from '../Hooks/useWindowDimension';

const News = () => {
  const {width} = useWindowDimensions()
  return (
    <div>
      <main>
        <section className='section-1'>
          <div className='container top-mid'>
          <article className='article-1'>
            <div className='card'>
              <div className='card-flex'>
                <div>
                  <h1>Pokemon Scarlet and Violet shows off version exclusive Pokemon - Official Website updates info on upcoming Raid Battle Events</h1>
                  <p>It's a little over 3 weeks out from the broadcast of The Game Awards 2022, and the nominees for the event have finally been announced. Only one Pokémon title was nominated for an award this year, with Pokémon Legends: Arceus picking up a nomination for Best Role Playing. Pokémon Legends: Arceus is the first Pokémon core series game to secure a Game Awards nomination since Omega Ruby & Alpha Sapphire in 2014.</p>
                </div>
              <img className='img-handler' alt='news' src='https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/dlc/switch-dlc/pokemon-violet-dlc/rom-bundle/pokemon-scarlet-and-pokemon-violet-double-pack/image' />
              </div>
            </div>
          </ article>
          <article>
          <div className='card'>
              <div className='card-flex'>
                <div>
                  <h1>Pokemon Scarlet and Violet shows off version exclusive Pokemon - Official Website updates info on upcoming Raid Battle Events</h1>
                  <p>It's a little over 3 weeks out from the broadcast of The Game Awards 2022, and the nominees for the event have finally been announced. Only one Pokémon title was nominated for an award this year, with Pokémon Legends: Arceus picking up a nomination for Best Role Playing. Pokémon Legends: Arceus is the first Pokémon core series game to secure a Game Awards nomination since Omega Ruby & Alpha Sapphire in 2014.</p>
                </div>
              <img className='img-handler' alt='news-1' src='https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/dlc/switch-dlc/pokemon-violet-dlc/rom-bundle/pokemon-scarlet-and-pokemon-violet-double-pack/image' />
              </div>
            </div>
          </article>
          </div>
        </section>
        {width>1024 && <Rayquaza />}
        {width>1024 && <Charizard />}
      </main>
      <Footer />
    </div>
  )
}

export default News
import {FiFacebook, FiInstagram, FiTwitter,FiYoutube} from 'react-icons/fi'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='footer-container'>
                <div className='flex'>
                    <div>
                        <h1>Pokendo</h1>
                        <div className='flex-column'>
                            <FiFacebook />
                            <FiInstagram />
                            <FiTwitter />
                            <FiYoutube />
                        </div>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <ul>
                            <li><a href='/'>Contact Us</a></li>
                            <li><a href='/'>FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Pokendo</h3>
                        <ul>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>News</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
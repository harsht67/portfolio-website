// styles
import './Header.scss'

// components
import Navigation from './Nav'

// icons
import { RiMoonFill, RiSunFill, RiCloseFill } from 'react-icons/ri'
import { GrDocumentDownload } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'

// images
import { images } from '../../constants'

import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header(props) {

    const [menuDisplay, setMenuDisplay] = useState(false)

    // opens/closes hamburger menu
    const toggleMenu = () => {
        setMenuDisplay(prev => !prev)
    }

    return (
        <header className="header">

            <div className={`menu f5 ${menuDisplay ? 'menu-open' : 'menu-close'} `}>

                <div 
                    className="menu__btnContainer" 
                    onClick={toggleMenu}
                >
                    <span className="menu__btn"></span>
                </div>

                <div className="menu__content">

                    <h2 className="content__title text">
                        Navigation
                    </h2>

                    <Navigation onClick={toggleMenu} />

                    <div className="content__socials">

                        <a 
                            href="https://github.com/harsht67"
                            target="_blank"
                        >
                            <img src={images.github} alt="github img" />
                        </a>

                        <a 
                            href="https://linkedin.com/in/harsht67"
                            target="_blank"
                        >
                            <img src={images.linkedin} alt="linkedin img" /> 
                        </a>

                    </div>

                </div>
            
            </div>

            <Link 
                to="/"
                className="header__logo logo"
            >

                &lt;<span>HT</span>/&gt;
            
            </Link>

            <nav className="header__nav text">
            
                <Navigation/>
            
            </nav>

            <div 
                className="header__btns"
                onClick={() => props.toggleTheme()}
            >
            
                {props.theme=='light'
                    ? <RiMoonFill/>
                    : <RiSunFill/>
                }
            
            </div>

        </header>
    )
}

export default Header
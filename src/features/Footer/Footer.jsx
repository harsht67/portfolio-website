// styles
import './Footer.scss'

import { images } from '../../constants'

import { BiCopyright } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <footer className="footer">

            <section className="footer__info">
                
                <Link 
                    to="/" 
                    className="footer__logo logo"
                >

                    &lt;<span>HT</span>/&gt;
                
                </Link>

                <div className="footer__copyright sm-text">
                
                    <BiCopyright/> 2022, Built &#38; designed by <br/> Harsh Tomar
                
                </div>

            </section>

            <section className="footer__socials">

                <a
                    href="https://github.com/harsht67"
                    target="_blank"
                >
                    <motion.img 
                        src={images.github} 
                        alt="github image" 
                        whileHover={{ scale: [1, 1.1] }}
                        transition={{ duration: 0.1 }}    
                    />
                </a>

                <a
                    href="https://linkedin.com/in/harsht67"
                    target="_blank"
                >
                    <motion.img 
                        src={images.linkedin} 
                        alt="linkedin image" 
                        whileHover={{ scale: [1, 1.1] }}
                        transition={{ duration: 0.1 }}
                    />
                </a>

            </section>

        </footer>
    )
}

export default Footer
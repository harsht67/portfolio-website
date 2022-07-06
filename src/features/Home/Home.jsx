// styles
import './Home.scss'

import { images } from '../../constants'
import { client } from '../../client'

import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// components
import Greeting from './Greeting'
import { Button } from '../../components'
import { InView, Nav} from '../../wrappers'

function Home() {

    const [works, setWorks] = useState([])

    useEffect(() => {
        const query = '*[_type == "works"]'

        client
            .fetch(query)
            .then(data => setWorks(data))
    }, [])

    const navigate = useNavigate()

    const goToWork = (name) => {
        navigate('/work/'+name)
    }

    return (
        <div className="home">
            
            <Nav>home</Nav>
            
            <InView className="home__container">

                <section className="msg">
                    
                    <div className="msg__vertical f3">
                        web developer
                    </div>

                    <p className="msg__greeting f2">
                        {/* नमस्ते! */}
                        <Greeting/>
                    </p>

                    <p className="msg__name f1">
                        I'm <span className="acc-text">Harsh</span>
                    </p>

                    <div className="msg__socials">

                        <motion.img 
                            src={images.github} 
                            alt="github image" 
                            whileHover={{ scale: [1, 1.1] }}
                            transition={{ duration: 0.1 }}    
                        />

                        <motion.img 
                            src={images.linkedin} 
                            alt="linkedin image" 
                            whileHover={{ scale: [1, 1.1] }}
                            transition={{ duration: 0.1 }}
                        />

                    </div>

                    <p className="msg__brief text"> 
                        I love building beautiful interfaces, web apps, and everything in between!
                    </p>

                </section>

                <section
                    className="home__works"
                >

                    <h3 className="sm-text">
                        <Link to="/work">
                            Previous work
                        </Link>
                    </h3>

                    <ul className="f2">

                        { works && 
                            works.map(work => (
                                <li 
                                    key={work.name}
                                    onClick={() => goToWork(work.name)}
                                >
                                    <motion.div
                                        whileHover={{ x: [0, 25] }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        {work.name} 
                                    </motion.div>
                                </li>
                            ))
                        }

                    </ul>

                    <Link to="/work">
                        <Button className="btn">
                            All work
                        </Button>
                    </Link>

                </section>

                <section className="contact">

                    <h3 className="f1">
                        Let's work together
                    </h3>

                    <a 
                        className="contact__email f6 acc-text"
                        href="mailto:harsh@gmail.com"
                    >
                        harsh@gmail.com
                    </a>

                    <Link to="/contact">
                        <Button>
                            Get in touch
                        </Button>
                    </Link>


                </section>

            </InView>

        </div>
    )
}

export default Home
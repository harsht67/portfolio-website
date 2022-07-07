// styles
import './Work.scss'

import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import { client, urlFor } from '../../client'

function Work() {

    const { name } = useParams()

    const [work, setWork] = useState({})

    const [x, setX] = useState(0)

    useEffect(() => {
        const query = '*[_type == "works"]'

        client
            .fetch(query)
            .then(data => {
                data.forEach(d => {
                    if(d.name==name) {
                        setWork(d)
                    }
                })
            })
            
    }, [])

    const moveLeft = () => {
        x>0 
          ? setX(prev => prev-100)
          : setX(prev => (imgurl.length-1)*100)
      }
    
      const moveRight = () => {
        x<(imgurl.length-1)*100 
          ? setX(prev => prev+100)
          : setX(prev => 0)
      }

    const { github, live, desc, stack, imgurl } = work 

    return (
        <div className="work">

            <motion.div
                className="work__backBtn f4"
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.15 }}
            >

                <Link to="/work">
                    <MdOutlineKeyboardArrowLeft/>
                </Link>

            </motion.div>

            <header>
            
                <h1 className="work__title f3">

                    {work.name}
                
                </h1>

                <div className="work__links f5">

                    <motion.a
                        className="flex--center"
                        href={github}
                        target="_blank"
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.15 }}
                    >
                        <AiFillGithub/>
                    </motion.a>

                    <motion.a
                        className="flex--center"
                        href={live}
                        target="_blank"
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.15 }}
                    >
                        <AiOutlineLink/>
                    </motion.a>

                </div>

            </header>

            <section className="work__desc">

                <h2 className="work__subtitle f6">
                    Summary
                </h2>

                <p className="text">
                    
                    {desc && desc}
                
                </p>

            </section>

            <section className="work__stack">

                <h2 className="work__subtitle f6">
                    Stack
                </h2>

                <ul className="ul sm-text">
                    { stack && stack.map(s => (
                        <li>
                            {s}
                        </li>
                    )) }
                </ul>
            
            </section>

            <section className="work__img">

                <div
                    className="img__btn f2"
                    onClick={moveLeft}
                >
                    <MdOutlineKeyboardArrowLeft/>
                    <MdOutlineKeyboardArrowLeft/>
                </div>
                
                <div className="img__container">
                
                    <div 
                        className="img__imgs"
                        style={{transform: `translateX(-${x}%)`}}
                    >
                
                    { imgurl &&
                        imgurl.map(img => (
                            <img
                                key={img}
                                src={urlFor(img)}
                                alt="screenshot"
                                className="img__img"
                            />
                        ))
                    }     

                    </div>
                
                </div>

                <div
                    className="img__btn f2"
                    onClick={moveRight}
                >
                    <MdOutlineKeyboardArrowRight/>
                    <MdOutlineKeyboardArrowRight/>
                </div>

            </section>  

        </div>
    )
}

export default Work
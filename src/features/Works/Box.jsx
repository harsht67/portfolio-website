// styles
import './Box.scss'

import { AiFillGithub, AiFillEye, AiOutlineLink } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { urlFor } from '../../client'

function Box({data}) {

    const { name, desc, stack, imgurl, github, live } = data

    return (
        <div className="box">

            <div className="box__img">
                
                {/* <div 
                    style={{backgroundImage: `url(${urlFor(imgurl[0])})`}}
                    className="img"
                >
                </div> */}

                <img
                    src={urlFor(imgurl[0])}
                    className="img"
                />

                <motion.div
                    className="hover"
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                >

                    <motion.div
                        className="hover__item f6"
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.15 }}
                    >
                        <Link to={`/work/${name}`}>
                            <AiFillEye/>
                        </Link>

                    </motion.div>


                    <motion.a 
                        className="hover__item f6"
                        href={live} 
                        target="_blank" 
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.15 }}
                    >

                        <AiOutlineLink/>

                    </motion.a>

                    <motion.a 
                        className="hover__item f6"
                        href={github}
                        target="_blank"
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.15 }}
                    >

                        <AiFillGithub/>

                    </motion.a>

                </motion.div>

            </div>
            
            <section className="box__text">

                <h2 className="box__name f5">
                    {name}
                </h2>

                <p className="box__desc sm-text">
                    {desc}
                </p>

                {/* <ul className="box__stack ul sm-text">
                    { stack && stack.map(s => (
                        <li>
                            {s}
                        </li>
                    )) }
                </ul> */}

            </section>
   
        </div>
    )
}

export default Box
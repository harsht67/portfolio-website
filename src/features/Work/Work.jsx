// styles
import './Work.scss'

import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

import { client, urlFor } from '../../client'

function Work() {

    const { name } = useParams()

    const [work, setWork] = useState({})

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

    const { github, live, desc, stack, imgurl } = work 

    return (
        <div className="work">

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

                <p className="lg-text">
                    
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

            { imgurl &&
                <img
                    src={urlFor(imgurl)}
                    alt="screenshot"
                    className="work__img"
                />
            }

        </div>
    )
}

export default Work
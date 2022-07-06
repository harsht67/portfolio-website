// styles
import './Works.scss'

// components
import Box from './Box'
import { InView, Nav } from '../../wrappers'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { client, urlFor } from '../../client'

const filters = ['all', 'frontend', 'fullstack']

function Works() {

    const [works, setWorks] = useState([])

    const [filterWorks, setFilterWorks] = useState([])

    const [currFilter, setCurrFilter] = useState('all')

    // fetch all works
    useEffect(() => {
        const query = '*[_type == "works"]'

        client
            .fetch(query)
            .then(data => {
                setWorks(data)
                setFilterWorks(data)
            })
            
    }, [])

    // filters work wrt to current filter 
    const filterFunc = (filter) => {
        console.log('>>>>>>'+filter)

        if(filter=='all') {
            setFilterWorks(works)
        }
        else {
            setFilterWorks(works.filter(work => work.type==filter))
        }

    }

    // changes current filter
    const changeFilter = (filter) => {
        setCurrFilter(filter)

        filterFunc(filter)
    }

    return (
        <div className="works">

            <Nav>work</Nav>

            <InView>

                <h1 className="works__title title">
                    Previous Work
                </h1>

                <ul className="works__filters text">

                    { filters.map(filter => (
                        <motion.li 
                            key={filter}
                            className={currFilter==filter && 'active'}
                            onClick={() => changeFilter(filter)}
                            whileHover={{scale: [1, 0.975]}}
                            transition={{duration: 0.15}}
                        >
                            {filter}
                        </motion.li>
                    )) }

                </ul>

                <section className="works__content">

                    { filterWorks.map(work => <Box data={work} /> )}

                </section>

                <a 
                    className="works__link lg-text"
                    href="https://github.com/harsht67"
                    target="_blank"
                >
                    Check my <b className="acc-text">Github</b> for more! 
                </a>


            </InView>

        </div>
    )
}

export default Works
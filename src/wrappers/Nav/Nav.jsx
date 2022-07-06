// styles
import './Nav.scss'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Nav(props) {

    const [classes, setClasses] = useState('')

    useEffect(() => {
        setClasses("nav--add nav--delay")
        func()
    }, [])

    const func = () => {
        setTimeout(()=>{setClasses("nav--remove nav--delay")}, 1000)
    }

    return (
        <div className={`nav ${classes}`}>
            
            <motion.span 
                className="f4"
                whileInView={{ y: [50, 0] }}
                transition={{ duration: 0.6 }}
            >
                {props.children}
            </motion.span>

        </div>
    )
}

export default Nav
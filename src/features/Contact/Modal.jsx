import './Modal.scss'   

import { useEffect } from 'react'
import { motion } from 'framer-motion'

function Modal(props) {

    useEffect(() => {
        setTimeout(() => {
            console.log('hiding', props.style)
            props.hideModal()            
        }, 2500)
    }, [])

    return (
        <motion.article 
            className="modal lg-text"
            whileInView={{ opacity: [0, 1], y: [0, 100], x: ['-50%', '-50%']}}
            transition={{ duration: 0.25 }}
        >
        
            {props.data}
        
        </motion.article>
    )
}

export default Modal
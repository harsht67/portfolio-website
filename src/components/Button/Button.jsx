import './Button.scss'

import { motion } from 'framer-motion'

function Button(props) {
    return (
        <motion.button
            className={`${props.className} button text`}
            whileHover={{ scale: [1, 0.975] }}
            transition={{ duration: 0.15 }}
        >

            {props.children}
        
        </motion.button>
    )
}

export default Button
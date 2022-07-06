import { motion } from 'framer-motion'

function InView(props) {
    return (
        <motion.div
            className={props.className}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.25, delay: 1.2 }}
        >
            
            {props.children}

        </motion.div>
    )
}

export default InView
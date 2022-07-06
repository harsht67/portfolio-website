import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop(props) {

    const location = useLocation() 

    useEffect(() => {
        // document.querySelector('body').scrollTo(0,0)
        window.scrollTo(0, 0)
    }, [location])

    return (
        <>
            {props.children}
        </>
    )
}

export default ScrollToTop
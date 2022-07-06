import { useLocation, Link } from 'react-router-dom'

const nav = ["home", "about", "work", "contact"]

function Navigation(props) {

    let location = useLocation().pathname.split('/')[1]

    return (
        <ul {...props} >
            
            <li className={location=="" && 'curr--nav'}>
                <Link to='/'>
                    home
                </Link>
            </li>
    
            <li className={location=="about" && 'curr--nav'}>
                <Link to='/about'>
                    about
                </Link>
            </li>
    
            <li className={location=="work" && 'curr--nav'}>
                <Link to='/work'>
                    work
                </Link>
            </li>
    
            <li className={location=="contact" && 'curr--nav'}>
                <Link to='/contact'>
                    contact
                </Link>
            </li>
    
        </ul>
    )
}

export default Navigation
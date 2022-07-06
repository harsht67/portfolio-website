// styles
import './App.scss'

// components
import { Header, Footer, Home, About, Works, Work, Contact } from './features'
import { ScrollToTop } from './wrappers'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import Nav from './wrappers/Nav/Nav'

function App() {

    const isDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const [theme, setTheme] = useLocalStorage('theme', isDefaultDark ? 'dark' : 'light')

    const toggleTheme = () => {
        setTheme(prev => prev=='light'?'dark':'light')
    }
    
    return (
        <div className={`app theme-${theme}`}>

            <Router>
            
                <Header 
                    theme={theme}
                    toggleTheme={toggleTheme} 
                />

                <Nav title="Home"></Nav>

                <ScrollToTop>

                    <Routes>

                        <Route path='/' element={<Home/>} />

                        <Route path='/about' element={<About/>} />

                        <Route path='/work' element={<Works/>} />

                        <Route path='/work/:name' element={<Work/>} />

                        <Route path='/contact' element={<Contact/>} />

                    </Routes>

                </ScrollToTop>

               <Footer/>

           </Router>

        </div>
    )
}

export default App
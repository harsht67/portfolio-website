import { useEffect, useState } from "react"

const greetings = ["Hello", "Namaste", "Konnichiwa", "Hola", "Bonjour", "Guten tag"]

function Greeting() {

    const [msg, setMsg] = useState('')
    const [n, setN] = useState(0)
    const [i, setI] = useState(1)
    const [isPaused, setIsPaused] = useState(false)
    const [style, setStyle] = useState(0)
    let timeout, interval

    const blink = () => {
        interval = setInterval(function() {
            setStyle(prev => {
                return prev==0 ? 100 : 0 
            })
        }, 500)  
    }

    const f3 = () => {
        setIsPaused(false); 
        clearTimeout(timeout)
        clearInterval(interval)
    }

    const f2 = () => { 

        setMsg(greetings[n].substring(0, i))
        
        let newI = i<greetings[n].length ? i+1 : 0 
        setI(newI)

        if(newI==0) {
            setIsPaused(true)
            timeout = setTimeout(f3, 2000)
            blink()
            
            if(n<greetings.length-1) {
                setN(prev => prev+1)
            }   
            else {
                setN(0)
            }
        }

    }

    const f1 = () => {
        !isPaused && setTimeout(f2, 100)
    }

    useEffect(() => {
        f1()
    }, [msg, isPaused, style])


    return (
        <div>
            {msg}
            <span style={{opacity: isPaused ? style : 100}}>
                |
            </span>
        </div>
    )
}

export default Greeting
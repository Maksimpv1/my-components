import { useState } from "react"

export const useBlinkLinks = () => {
    const [blink, setBlink ] = useState<boolean>(false)
    const handleBlink = () => {
        setBlink(false)
        setTimeout(()=> {setBlink(true ) 
            },1)
    }

    return {blink, handleBlink};
}
import { useEffect, useState } from "react"

export const useLiveText = (line:string,when?:boolean) => {
        const [text, setText] = useState<string>('')
        const fulltitle = line
        const [index,setIndex] = useState<number>(0)
        const [next,setNext] = useState<boolean>(false)
    
        useEffect(()=>{
        if(when || when=== undefined){           
            if(index < fulltitle.length){
                const timeout = setTimeout(()=>{
                    setText((prev)=> prev + fulltitle[index])
                    setIndex(index+1)
                },100)
    
                return() => clearTimeout(timeout)
            }else{
                setNext(true)
            }
        }
        },[index,fulltitle,when])

        return {text,next}
}
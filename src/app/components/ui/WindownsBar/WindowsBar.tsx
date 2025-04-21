import { useEffect, useState } from "react"
import * as SC from "./WindownsBar"
import { removeListener } from "process"

export const WindownsBar = () => {
    const [height, getHeight] = useState<number>(0)
    const [perBar, getPerBar] = useState<number>(0)
    useEffect(()=>{
        const fullScreen = document.documentElement.scrollHeight - window.outerHeight
        window.addEventListener("scroll",()=>{
            const scrolltap = window.scrollY
            getHeight(scrolltap)
        })        
        if(fullScreen > height){
            getPerBar(Math.round(height/fullScreen * 100))
        }
        console.log(`fullScreen: ${fullScreen} + height:${height}`)
        console.log(perBar)
        return () => {            
            window.removeEventListener("scroll",()=>{})        
        }
    },[height])
    return(
        <SC.Container percent={perBar + ''}>
            
        </SC.Container>
    )
}
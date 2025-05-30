import { useOneBlink } from "./oneBlink"

export const useScrollTo = () => {
        const handleBlink = useOneBlink()
        const scrollTo = (ID: string) => {
            const element = document.getElementById(ID)
            if(element){
                element.scrollIntoView({ behavior: "smooth"})
            }    
            if(ID === 'header'){
                handleBlink()
            }
        }


        return scrollTo
}

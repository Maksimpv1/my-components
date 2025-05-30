import { setBlink } from "../redux/Slice/ContactSlice"
import { useAppDispatch } from "../redux/store/store"

export const useOneBlink = () =>{
    const dispatch = useAppDispatch()
    
    const handleBlink = () => {
        dispatch(setBlink(false))
        setTimeout(() => dispatch(setBlink(true)),1 )
    }

    return handleBlink;
}
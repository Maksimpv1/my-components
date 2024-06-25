import { FC } from 'react'
import * as SC from './CustomButton.style'

interface ICustomButton {
    func?: () => void,
    children?: React.ReactNode,
    className?: string
}

export const CustomButton: FC<ICustomButton> = ({func, children, className}) => {

    return(
        <SC.Container onClick={func} className={className}>
            {children}
        </SC.Container>
    )
}
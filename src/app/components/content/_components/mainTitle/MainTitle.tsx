import * as SC from "./MainTitle.style"
import { useLiveText } from "../../../../../hooks/liveText"

export const MainTitle = () => {
    const { text, next } = useLiveText("Hello, I'm Frontend Developer");
    const { text: text2 } = useLiveText(
        "Here I will talk about my skills and about myself.",
        next 
    );

    const colorizeText = (inputText: string) => {
        const colors = ['#FF6B6B', '#000000']; 
        return inputText.split(' ').map((word, idx) => (
            <span
                key={idx}
                style={{
                    color: idx % 2 === 0 ? colors[0] : colors[1], 
                    marginRight: '5px', 
                }}
            >
                {word}
            </span>
        ));
    };

    return(
        <SC.Container>
            <SC.ImgContainer>
                <SC.AvatarImg src={"/img/avatar.jpg"} />
            </SC.ImgContainer>
            <SC.MainName>Popov Maksim</SC.MainName>
                <SC.MainTitle>
                    {colorizeText(text)}
                </SC.MainTitle>
                <SC.TextDiscriptiom>
                    {text2}
                </SC.TextDiscriptiom>
        </SC.Container>
    )
}
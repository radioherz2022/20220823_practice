import styled from "styled-components";
import {IoLogoGithub, IoLogoSlack, IoLogoCodepen,IoLogoFlickr} from "react-icons/io"

export default function Footer(){
    return (
    <Block>
        <ul>
            <li><IoLogoGithub/></li>
            <li><IoLogoSlack/></li>
            <li><IoLogoCodepen/></li>
            <li><IoLogoFlickr/></li>
        </ul>
        <p>Copyright © 2022 Das Radioherz Studio</p>
    </Block>
    )
}


let Block = styled.div`
    background-color: #626262;
    text-align: center;
    width: 100vw;
    height: 300px;
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul li{
        color:#fff;
        font-size: 3.2em;
        margin: 100px 25px;
    }

    p{
        color:#fff;
        font-size: 0.8em;
        font-weight: 100;
    }
`
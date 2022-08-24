import styled from "styled-components";

export default function Home(){
    return (
    <Block>
        <IntroText>
        <h1>Hi, my name is Your Name <br/>
        I'm the Unknown Developer. </h1>
        <button>know more</button>
        </IntroText>
    </Block>
    )
}

let Block = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

const IntroText = styled.div`
text-align: center;
    h1{
        font-size: 3.6em;
        font-weight: 700;
        line-height: 1.2em;
        margin-bottom: 50px;
    }
    button{
        width: 130px;
        height: 50px;
        font-size: 1.2em;
        font-weight: 700;
        border: 3px solid #000;
        cursor: pointer;
    }
`
import styled from "styled-components";

export default function Contact(){
    return <Block>
        <ContactTitle>
            <h2>Contact</h2>
            <p> Would you like to work with me? Awesome! </p>
            <button>Let's Talk</button>

        </ContactTitle>
    </Block>;
}

let Block = styled.div`
    background-color: #ddd;
    text-align: center;
    width: 100vw;
    max-height: 100%;
    padding-bottom: 100px;
`

let ContactTitle = styled.div`
h2{
    font-size: 2.0em;
    font-weight: 700;
    text-align: center;
    padding-top: 100px;
}
p{
    text-align: center;
    margin: 30px 180px;
    font-size: 1.3em;
    line-height: 2em;
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

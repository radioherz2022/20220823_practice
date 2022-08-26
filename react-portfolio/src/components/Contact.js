import styled from "styled-components";
import {RiChatDeleteLine} from "react-icons/ri"
import { useRef, useState } from "react";

export default function Contact(){

    return (
    <Block>
        <ContactTitle>
            <h2>Contact</h2>
            <p> Would you like to work with me? Awesome! </p>
        </ContactTitle>
        <CommentBox/>
    </Block>
    )
}

function CommentBox() {
    const[comList, setComList] = useState([
        {id:1, text:"너무 잘 만든 사이트네요"},
        {id:2, text:"앞으로도 기대되네요. WOW!!!"},
    ]);
    const [input, setInput] = useState("")
    const nextId = useRef(3);
    const onCreate = (text) => {
        setComList(comList.concat({id:nextId.current, text:text}))
    }
    return(
    <CommentArea>
        <InputBox>
            <input type="text" onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={() =>{
                if(input !== "") onCreate(input);
            }}>comment</button>
        </InputBox>
        <CommentText >
        {comList.map((comment) => (<CommentList comment={comment}/>))}
        </CommentText>
    </CommentArea>
    )
}

function CommentList({comment}){
    return(
        <ComList>
            {comment.text}
            <span><RiChatDeleteLine/></span>
        </ComList>
    )
}

const Block = styled.div`
    background-color: #ddd;
    width: 100vw;
    max-height: 100%;
    padding-bottom: 100px;
`

const ContactTitle = styled.div`
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

`
const CommentArea = styled.div`
    text-align: center;
`

const InputBox = styled.div`
    button{
    padding: 0.8rem 1.6rem;
    font-size: 1.2em;
    font-weight: 700;
    border: 3px solid #000;
    cursor: pointer;
    user-select: none;
    }
    input {
        font-size:1.2em;
        padding:0.7em 0.6em;
        width: 420px;
        margin-right: 10px;
        outline:none;
    }
`

const CommentText = styled.ul`
    text-align: center;
    margin-left: 312px;
`

const ComList = styled.li`
    font-size: 1.3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bbb;
    width:60vh;
    height: 70px;
    line-height: 70px;
    span{
        font-size: 1.4em;
    }
`
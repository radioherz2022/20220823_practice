import styled from "styled-components";
import {BsFillArrowUpSquareFill} from "react-icons/bs"

export default function SlideBtn(){
    return (
    <Block>
        <BsFillArrowUpSquareFill onClick ={() => window.scrollTo({top:0, left:0, behavior:"smooth"})}/>
    </Block>
    ) 
}


const Block = styled.div`
z-index: 999;
position: absolute;
position: fixed;
margin-right: 50px;
right: 0;
top:90vh;
font-size: 2.6em;
cursor: pointer;

`
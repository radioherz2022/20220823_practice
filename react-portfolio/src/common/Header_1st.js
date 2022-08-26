import styled from "styled-components";
import {BiMenu} from "react-icons/bi"

export default function Header(){
    return ( 
    <Block>
        <GnbBox>
        <Logo>Logo</Logo>
        <MenuBtn><BiMenu/></MenuBtn>
        </GnbBox>
    </Block>
    )
}

const Block = styled.header`
    width:100%;
    height: 100px;
    position: absolute;
    position: fixed;

`

const GnbBox = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 50px;
`

const Logo = styled.h2`
    font-size: 2.4em;
`

const MenuBtn = styled.div`
    font-size:30px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    color:#fff;
    background-color: #007aff;
    text-align: center;
    line-height: 54px;
    cursor: pointer;
`
import styled, { css } from "styled-components";
import {BiMenu} from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../components/Home";


export default function Header(){
    const [active, setActive] = useState(false);
    // menu를 누르면 펼쳐지는 아코디언 메뉴(8/9일짜 강의)를 구현하기 위한 useState
    return (
    <Block>
        <GnbBox active = {active}>
            <MenuTitleBlock onClick={() => setActive(!active)}>
            <h3>menu</h3>
            <span><BiMenu/></span>
            </MenuTitleBlock>
            <ul>
                <li><a href="../components/Home">Home</a></li>
                <li><a href="../components/About">About</a></li>
                <li><a href="../components/Work">Work</a></li>
                <li><a href="../components/Contact">Contact</a></li>
            </ul>
        </GnbBox>
    </Block>
    )
}

const Block = styled.div`
    position: absolute;
    position: fixed;
    right:0;
    margin-top: 50px;
    margin-right: 50px;
`

const GnbBox = styled.div`
    width: 110px;
    height: 50px;
    text-align: center;
    background-color: #ddd;
    transition: 0.25s;

    ul{
        display:none;
        font-size: 1em;
        line-height: 1.8em;
        background-color: #ddd;
        li a{
            text-decoration:none;
        }
        ${({active}) => active && css`
            display:block;
            height: 130px;
            
        `}
    }
`

const MenuTitleBlock = styled.div`
        font-size: 1.4em;
        line-height: 2em;
        padding-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
    h3{
        padding-right: 5px;
    }
`


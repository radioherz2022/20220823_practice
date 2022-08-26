import styled from "styled-components";


export default function Header(){
    return ( 
    <Block>
        <GnbBox>
        <Logo>Logo</Logo>
        <MenuBox>
            <MenuList>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </MenuList>
        </MenuBox>
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
    background-color: rgba(256,256,256,0.6);
`

const Logo = styled.h2`
    font-size: 2em;
    font-weight: 700;
`

const MenuBox = styled.div`
    font-size:1em;
    cursor: pointer;

`

const MenuList = styled.ul`
    display: flex;

li + li {
    margin-left: 40px;
}
`
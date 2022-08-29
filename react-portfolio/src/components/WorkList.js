import { useState } from "react";
import styled from "styled-components";


export default function WorkList(){

    const [thumbList, setThumbList] = useState(
        [{
            title: "Button Designs Free",
            sub_title: "dddddddddd",
            imgUrl:"img/sample1.jpg"
            },{
            title: "Branding for Theme Designer",
            sub_title: "jjjjjjjjjjjjj",
            imgUrl:"img/sample2.jpg"
            },{
            title: "BBBBB",
            sub_title: "aaaaa",
            imgUrl:"img/sample3.jpg"
            }
            ]
    )
    return (
    <Block>
        {thumbList.map((list) => (
            <ListBox>
            <ImgBox><img src="{list.imgUrl}" alt=""></img></ImgBox>
            <DescBox>
                <h3>{list.title}</h3>
                <p>{list.sub_title}</p>
            </DescBox>
        </ListBox>

        ))}

    </Block>
    )
}

const Block = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 40px;
`


const ListBox = styled.div`
    margin:15px;
    width: 300px;
    height: 300px;
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0px 0px 6px 2px #89898919;
    cursor: pointer;
`

const ImgBox = styled.div`
    max-width: 100%;
    height: 220px;
    background-color: #ddd;
    box-sizing: border-box;
    overflow: hidden;

    &:hover {
        transform: scale(110%);
        transition: 0.4s;
    }

`
const DescBox = styled.div`
    padding: 10px 0 20px 20px;
    background-color: #fff;
    h3{
        font-size: 1.2em;
        font-weight: 700;
        margin: 5px 0 5px;
    }
`

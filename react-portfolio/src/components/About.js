import styled from "styled-components";

export default function About(){
    return <Block>
        <AboutTitle>
            <h2>About Brand</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, 
            iusto labore omnis vel error tempore? Tenetur vel, consequatur sunt suscipit voluptate, 
            vero omnis assumenda libero rem, non a iusto veritatis accusamus ut! Molestias 
            recusandae beatae consequatur voluptatibus molestiae reprehenderit, tenetur 
            dignissimos debitis error, nihil fugiat? Consequuntur, repellendus labore. 
            Illum, ea at. Exercitationem voluptas, odio dolorum est, ratione qui minus quos 
            quisquam corrupti rem eveniet, facere dignissimos cum pariatur perferendis consectetur.
        </p>
        </AboutTitle>
    </Block>;
}

let Block = styled.div`
    background-color: #ddd;
    text-align: center;
    width: 100vw;
    max-height: 100%;
    padding-bottom: 100px;
`

let AboutTitle = styled.div`
h2{
    font-size: 2.0em;
    font-weight: 700;
    text-align: center;
    padding-top: 100px;
    animation: fadein 2s;
    @keyframes fadein {
        from {transform:translateX(-10px); opacity: 0;}
        to {transform:translateX(0); opacity: 1;}
    }
}
p{
    text-align: center;
    margin: 30px 180px;
    font-size: 1.3em;
    line-height: 2em;
    animation: fadein 2s 0.4s;
}

`

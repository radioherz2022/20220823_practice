import styled from "styled-components";
import WorkList from "./WorkList";

export default function Work(){
    return <Block>
    <WorkTitle>
        <h2>Our Recent work with three column</h2>
        <p>You can relay on our amazing features list and also our customer <br/> services will be great experience for you without doubt and in no-time</p>
    </WorkTitle>
    <WorkList/>
    </Block>;
}

const Block = styled.div`
    max-height:100%;
    margin-bottom:100px;
`

const WorkTitle = styled.div`
h2{
    font-size: 2.0em;
    font-weight: 700;
    text-align: center;
    padding-top: 100px;
}
p{
    text-align: center;
    margin: 30px 100px;
    font-size: 0.9em;
    line-height: 1.4em;
}

`

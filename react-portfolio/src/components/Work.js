import styled from "styled-components";

export default function Work(){
    return <Block>
    <WorkTitle>
        <h2>Our Recent work with three column</h2>
        <p>You can relay on our amazing features list and also our customer <br/> services will be great experience for you without doubt and in no-time</p>
    </WorkTitle>
    <WorkList>
        <ListBox>
            <ImgBox><img src="https://next-kit-free.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fportfolio%2Fimg1.11363702b922342b34f3b1d791c079c2.jpg&w=1200&q=75"></img></ImgBox>
            <DescBox>
                <h3>title1</h3>
                <p>sub_title</p>
            </DescBox>
        </ListBox>
        <ListBox>
            <ImgBox><img src="https://next-kit-free.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fportfolio%2Fimg2.f39ec2b4c1f76e246c9477d26f289447.jpg&w=1200&q=75"></img></ImgBox>
            <DescBox>
                <h3>title1</h3>
                <p>sub_title</p>
            </DescBox>
        </ListBox>
        <ListBox>
            <ImgBox><img src="https://next-kit-free.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fportfolio%2Fimg1.11363702b922342b34f3b1d791c079c2.jpg&w=1200&q=75"></img></ImgBox>
            <DescBox>
                <h3>title1</h3>
                <p>sub_title</p>
            </DescBox>
        </ListBox>
        <ListBox>
            <ImgBox><img src="https://next-kit-free.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fportfolio%2Fimg2.f39ec2b4c1f76e246c9477d26f289447.jpg&w=1200&q=75"></img></ImgBox>
            <DescBox>
                <h3>title1</h3>
                <p>sub_title</p>
            </DescBox>
        </ListBox>
        <ListBox>
            <ImgBox><img src="https://next-kit-free.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fportfolio%2Fimg1.11363702b922342b34f3b1d791c079c2.jpg&w=1200&q=75"></img></ImgBox>
            <DescBox>
                <h3>title1</h3>
                <p>sub_title</p>
            </DescBox>
        </ListBox>
        <ListBox>
            <ImgBox><img src="https://next-kit-free.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fportfolio%2Fimg2.f39ec2b4c1f76e246c9477d26f289447.jpg&w=1200&q=75"></img></ImgBox>
            <DescBox>
                <h3>title1</h3>
                <p>sub_title</p>
            </DescBox>
        </ListBox>
    </WorkList>

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

const WorkList = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

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

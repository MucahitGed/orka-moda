import styled from "styled-components";
import { mobile } from "../responsive";
import '../css/hover.css';
import '../css/main.css';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={process.env.PUBLIC_URL+item.img} />
      <Info>
        <Title>{item.title}</Title>
        <a href={item.path}>
        <Button className="btn_slide2">SHOP NOW</Button>
        </a>
      </Info>
    </Container>
  );
};

export default CategoryItem;

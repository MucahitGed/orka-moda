import {
  SearchOutlined
} from "@material-ui/icons";
import {NavLink} from 'react-router-dom'
import styled from "styled-components";
import '../css/hover.css'
import '../css/main.css'
import {useState} from 'react'
import { popularProducts } from './data.js'


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

  
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
max-width: 295px !important;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
&:hover ${Info}{
  opacity: 1;
}
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const [filter , SetFilter] = useState(popularProducts)

  function filterProduct(num){
    const singleProduct = filter.filter((item) => item.id === num)
    SetFilter(singleProduct)
  }
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
        <NavLink to={`/popproduct/${item.id}`}> 
        {/* buraya tiklanicak id belirlenicek sadece */}
          <button className="btn_checker" onClick={()=>filterProduct(item.id)}>
          <SearchOutlined />
          </button>
        </NavLink>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

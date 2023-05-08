import styled from "styled-components";
import {  woman } from "./data";
import WomanProduct from "./WomanProduct";
import '../css/hover.css'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const Products = () => {
  return (
    <Container>
      {woman.map((item) => (
        <WomanProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

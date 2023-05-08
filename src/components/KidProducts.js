import styled from "styled-components";
import { cosmetics } from "./data";
import KidProduct from "./KidProduct";
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
      {cosmetics.map((item) => (
        <KidProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

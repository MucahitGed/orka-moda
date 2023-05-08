import styled from "styled-components";
import { men } from "./data";
import MenProduct from "./MenProduct";
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
      <div className="category_men">
          <a href="/men"><button className="category_item_btn">All Products</button></a>
          <a href="/suit"><button className="category_item_btn">Men Suit</button></a>
          <a href="/sport"><button className="category_item_btn">Sport</button></a>  
      </div>
      {men.map((item) => (
        <MenProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

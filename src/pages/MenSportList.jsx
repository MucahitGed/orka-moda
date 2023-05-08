import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/MenSportComponents";
import '../css/hover.css'
import '../css/main.css'
import Footer from "../components/Footer";

import { DocumentTitle } from "../components/DocumentTitle";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const ProductList = () => {
  DocumentTitle('OЯKA MODA')
  return (
    <Container>
      <Navbar />
      <Title className="title">Man Clothes</Title>
      <Products />      
      <Footer />
    </Container>
  );
};

export default ProductList;

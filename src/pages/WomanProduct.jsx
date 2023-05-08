import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import '../css/hover.css'
import '../css/main.css'

import { woman } from '../components/data';
import {useParams} from 'react-router-dom'
import { DocumentTitle } from "../components/DocumentTitle";
import { useState } from "react";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Product = () => {
  const proid = useParams()
  const proDetail = woman.filter(x => x.id == proid.id)
  const product = proDetail[0]
  console.log(product)

  DocumentTitle('OЯKA MODA')
  return (
    <Container>
      <Navbar />
      <Wrapper className="wrapper">
      <ImgContainer>
        <Image src={product.img} />
      </ImgContainer>
      <InfoContainer className="infoContainer">
        <Title className="title">{product.title}</Title>        
          
          <div className="kod_product">SKU: {product.kod}</div>
          {/* <div className="composotionDiv">
            <div className="compositionBtn">Skład:</div>
            <div className="composotion_content shower" >
              <div className="compontent">{product.sklad1}</div>
              <div className="compontent">{product.sklad2}</div>
              <div className="compontent">{product.sklad3}</div>
            </div>
          </div> */}
          <div className="table_div">
            <table className="table">
                <tr className="tr">
                  <td className="td">XL</td>
                  <td className="td">XXL</td>
                  <td className="td">XXXL</td>
                </tr>
                <tr>
                  <td className="td">44-45</td>
                  <td className="td">46-47</td>
                  <td className="td">48</td>
                </tr>
            </table>  
          </div>
         
        <AddContainer>
          {/* <Button>ADD TO CART</Button> */}
        </AddContainer>
      </InfoContainer>
    </Wrapper>
    
      
      <Footer />
    </Container>
  );
};

export default Product;

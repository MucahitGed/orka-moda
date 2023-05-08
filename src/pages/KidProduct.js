import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import '../css/hover.css'
import { DocumentTitle } from "../components/DocumentTitle"; 
import { useParams } from "react-router-dom";
import { cosmetics } from '../components/data'
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

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const proid = useParams()
  const proDetail = cosmetics.filter(x => x.id == proid.id)
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
          <div className="composotionDiv">
            <div className="compositionBtn">Skład:</div>
            <div className="composotion_content shower" >
              <div className="compontent">{product.sklad1}</div>
              <div className="compontent">{product.sklad2}</div>
              <div className="compontent">{product.sklad3}</div>
            </div>
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

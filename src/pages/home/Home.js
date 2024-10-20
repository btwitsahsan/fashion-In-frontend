import React from "react";
import Slider from "../../components/slider/Slider";
import HomeInfoBox from "./HomeInfoBox";
import "./Home.scss";
import { productData } from "../../components/carousel/data";
import CarouselItem from "../../components/carousel/CarouselItem";
import ProductCarousel from "../../components/carousel/Carousel";
import ProductCategory from "../../components/productCategory/ProductCategory";
import FooterLinks from "../../components/footer/FooterLinks";

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="pageHeadingMain">
        <h2 className="pageHeading">{heading}</h2>
        <button className="anmoBTN2">{btnText}</button>
      </div>
      <div className="hr"></div>
    </>
  );
};

const Home = () => {
  const productss = productData.map((item, index) => (
    <div key={item.id}>
      <CarouselItem
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      />
    </div>
  ));
  return (
    <>
      <Slider />
      <section>
        <div className="container">
          <HomeInfoBox />
          <PageHeading heading={"Latest Products"} btnText={"Shop Now!!"} />
          <ProductCarousel products={productss} />
        </div>
      </section>
      <section>
        <div className="container">
         <h3>Category</h3>
         <ProductCategory/>
        </div>
      </section>
      <section>
        <div className="container">
          <PageHeading heading={"Mobile Phones"} btnText={"Shop Now!!"} />
          <ProductCarousel products={productss} />
        </div>
      </section>
      <FooterLinks/>
    </>
  );
};

export default Home;

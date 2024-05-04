import React from "react";
import Container from "./Container";
import Section from "./Section";
import Title from "./Title";
import Product from "./Product";
import Flex from "./Flex";

const NewArrivals = () => {
  return (
    <Section className="mb-16">
      <Container>
        <Title className="mb-8" heading="New Arrival" />
        <Flex className="gap-4 sm:gap-2  flex-wrap lg:flex-nowrap">
        <Product pimage={"images/product1.png"} pitem={"Basic Crew Neck Tee"} ProductPrice={`$44.00`} ProductColor={"Black"} isNew={true}/>
        <Product pimage={"images/product2.png"} pitem={"Hand Watch"} ProductPrice={`$120.00`} ProductColor={"Black"} isNew={false}/>
        <Product pimage={"images/product3.png"} pitem={"Wicker basket"} ProductPrice={`$24.00`} ProductColor={`Black-Grey`} isNew={false}/>
        <Product pimage={"images/product4.png"} pitem={"Toy"} ProductPrice={`$20.00`} ProductColor={`Grey`} isNew={true}/>
        </Flex>
      </Container>
    </Section>
  );
};

export default NewArrivals;

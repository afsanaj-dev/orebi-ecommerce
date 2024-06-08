import React from "react";
import Breadcrumb from "../component/Breadcrumb";
import Flex from "../component/Flex";
import Container from "../component/Container";
import Section from "../component/Section";

const Shop = ({ title }) => {
  return (
    <Section>
      <Container>
        <Breadcrumb title={title} />
        <Flex>
          
        </Flex>
      </Container>
    </Section>
  );
};

export default Shop;

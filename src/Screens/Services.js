import React, { useEffect } from "react";
import styled from "styled-components";

import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";

const Services = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const Icons = [
    "flaticon-camera",
    "flaticon-camera",
    "flaticon-camera",
    "flaticon-camera",
    "flaticon-camera",
    "flaticon-camera",
  ];
  const Services = [
    "Photography",
    "Photography",
    "Photography",
    "Photography",
    "Photography",
    "Photography",
  ];
  const Description = [
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia far from the countries Vokalia and Consonantia",
  ];
  const Cards = [];
  for (var i = 0; i < 6; i++) {
    Cards.push(
      <CardHolder className="col-md-4" key={i}>
        <Card>
          <Icon id="cube" className={Icons[i]}></Icon>
          <Service>{Services[i]}</Service>
          <CardText>{Description[0]}</CardText>
        </Card>
      </CardHolder>
    );
  }

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },

    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <Background className="container-fluid" id="services">
      <TextRow
        className="row"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={animation}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <H2>Services</H2>
      </TextRow>
      <TextRow
        className="row"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={animation}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <P>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </P>
      </TextRow>
      <motion.div
        className="row"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={animation}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {Cards}
      </motion.div>
    </Background>
  );
};

export default Services;

const H2 = styled.h2`
  font-family: "Poppins", sans-serif;
  @media (min-width: 1400px) and (max-width: 1920px) {
    font-size: 80px;
  }

  font-size: 50px;
  font-weight: 700;
  color: #000;
`;

const P = styled.p`
  font-family: "Poppins", sans-serif;

  @media (min-width: 1400px) and (max-width: 1920px) {
    font-size: 20px;
  }
  font-size: 16px;
  font-weight: 400;
  color: #999;
`;

const Service = styled.h3`
  font-family: "Poppins", sans-serif;

  @media (min-width: 750px) and (max-width: 900px) {
    font-size: 14px;
    margin-bottom: 1rem;
    line-height: 1;
  }
  @media (min-width: 1400px) and (max-width: 1920px) {
    font-size: 30px;
    margin-bottom: 3rem;
    line-height: 1.8;
  }
  font-size: 18px;
  color: #000;
  line-height: 1.8;
  margin-bottom: 3rem;
`;
const CardText = styled.p`
  font-family: "Poppins", sans-serif;

  @media (min-width: 750px) and (max-width: 1024px) {
    font-size: 9px;
    width: 80%;
  }

  @media (min-width: 1400px) and (max-width: 1920px) {
    font-size: 22px;
  }
  font-size: 16px;
  text-align: center !important;
  text-justify: center;
  color: black;
`;
const Card = styled.div`
  width: 93%;
  @media (min-width: 900px) and (max-width: 1024px) {
    padding: 2rem 0.8rem 2rem 0.8rem;
  }

  @media (min-width: 750px) and (max-width: 900px) {
    padding: 2rem 0.5rem 2rem 0.5rem;
    width: 100%;
  }

  @media (min-width: 1400px) and (max-width: 1920px) {
    padding: 2rem 2rem 0rem 2rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem 2rem 2rem 2rem;

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  transition: 0.3s ease-in-out;
  &: hover {
    background-color: blue;
    i {
      color: white;
    }
  }
`;

const CardHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 1rem 1rem;
`;

const Background = styled.div`
  margin-top: 3rem;
  background-color: #ffffff;
`;

const TextRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center !important;
  margin-bottom: 2rem;
`;

const Icon = styled.i`
  font-size: 4rem;
  color: #000;
`;

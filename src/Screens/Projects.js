import React, { useEffect } from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import photo from "../Images/photo.jpg";
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView();
  const picture = [photo, photo, photo, photo, photo, photo];
  const Countervalue = [120, 240, 450, 340];
  const CounterTitle = [
    "Happy Customer",
    "Happy Customer",
    "Happy Customer",
    "Happy Customer",
  ];
  const PictureCards = [];

  const Cards = [];

  for (var i = 0; i < 6; i++) {
    PictureCards.push(
      <PictureHolder className="col-md-4" key={i}>
        <Image src={picture[0]} alt="image" />
        <HoverText>
          <h2>Branding & Illustration Design</h2>
          <p>Web Design</p>
        </HoverText>
      </PictureHolder>
    );
  }

  for (var c = 0; c < 4; c++) {
    Cards.push(
      <CardHolder className="col-md-3" key={c}>
        <Card>
          <CountUp
            className="wow"
            delay={2}
            end={Countervalue[0]}
            style={{ color: "blue", fontSize: "40px" }}
          />
          <span>{CounterTitle[0]}</span>
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
    <Background className="container-fluid" id="projects">
      <TextRow
        className="row"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={animation}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <H2 style={{ fontSize: "50px", fontWeight: 700, color: "#000" }}>
          Projects
        </H2>
      </TextRow>
      <TextRow
        className="row"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={animation}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <P style={{ fontSize: "16px", fontWeight: 400, color: "#999" }}>
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
        {PictureCards}
      </motion.div>

      <motion.div
        className="row"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
        // ref={ref}
        // variants={variants}
        // initial="hidden"
        // animate={animation}
        // transition={{ delay: 1.1, duration: 0.8 }}
      >
        {Cards}
      </motion.div>
    </Background>
  );
};

export default Projects;

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
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  text-align: center !important;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  padding: 2rem 0 2rem 0;
`;
const CardHolder = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  @media (min-width: 750px) and (max-width: 1024px) {
  }
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

const PictureHolder = styled.div`
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  position: relative;
  @media (min-width: 750px) and (max-width: 1024px) {
  }
  display: flex;
`;

const HoverText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  @media (min-width: 0px) and (max-width: 1024px) {
    opacity: 1;
  }
  opacity: 0;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  text-align: center !important;
  justify-content: center;
  padding-left: 3rem;
  padding-right: 3rem;
  transition: 0.3s ease-in-out;
  @media (min-width: 1024px) and (max-width: 1920px) {
    &: hover {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

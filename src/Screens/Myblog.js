import React, { useEffect } from "react";
import styled from "styled-components";
import photo from "../Images/photo.jpg";
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";

const Myblog = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView();
  const BlogPhoto = [photo, photo, photo];
  const BlogTitle = [
    "my very first blog give it a read",
    "my very first blog give it a read",
    "my very first blog give it a read",
  ];
  const BlogDescription = [
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  ];

  const BlogCards = [];

  for (var i = 0; i < 3; i++) {
    BlogCards.push(
      <BlogCard className="col-md-4" key={i}>
        <Image src={BlogPhoto[i]} alt="image"></Image>
        <H3>{BlogTitle[i]}</H3>
        <SPAN>
          21,Sep 2016&nbsp;&nbsp;Admin &nbsp;
          <i
            className="flaticon-sms"
            style={{ color: "blue", fontSize: "12px" }}
          ></i>{" "}
          3
        </SPAN>
        <P1>{BlogDescription[0]}</P1>
      </BlogCard>
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
    <Background className="container-fluid" id="myblog">
      <TextRow
        className="row"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={animation}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <H2>Myblog</H2>
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
        {BlogCards}
      </motion.div>
    </Background>
  );
};

export default Myblog;

const P1 = styled.p`
  font-family: "Poppins", sans-serif;
  width: 90%;
  font-size: 16px;
  font-weight: 500;
  color: #999;
`;

const SPAN = styled.span`
  font-family: "Poppins", sans-serif;
  width: 90%;
  font-size: 16px;
  font-weight: 500;
  color: blue;
`;

const H3 = styled.h3`
  font-family: "Poppins", sans-serif;
  width: 90%;
  font-size: 25px;
  font-weight: 500;
  color: #000;
`;

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

const Image = styled.img`
  width: 98%;
  height: 80%;
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left !important;
  padding: 2rem 1rem 2rem 1rem;
  @media (min-width: 750px) and (max-width: 1024px) {
  }
`;

const Background = styled.div`
  margin-top: 3rem;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  padding-left: 7rem;
  padding-right: 7rem;
  background-color: #ffffff;
`;

const TextRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center !important;
  margin-bottom: 2rem;
`;

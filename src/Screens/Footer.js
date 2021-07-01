import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";
const Footer = () => {
  const Links = ["Home", "About", "Services", "Projects", "MyBlog", "Contact"];
  const Services = [
    "Web Design",
    "Web Development",
    "Photography",
    "App Development",
    "UI/UX Design",
    "Courses",
  ];
  const contact = [
    "203 Fake St. Mountain View, San Francisco, California, USA",
    "+2 392 3929 210",
    "info@yourdomain.com",
  ];

  const List1 = [];
  const List2 = [];
  const List3 = [];

  for (var i = 0; i < 6; i++) {
    List1.push(
      <a href="#" style={{ textDecoration: "none" }} key={i}>
        <LI>
          <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
          {Links[i]}
        </LI>
      </a>
    );
  }

  for (var c = 0; c < 6; c++) {
    List2.push(
      <a href="#" style={{ textDecoration: "none" }} key={c}>
        <LI>
          <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
          {Services[c]}
        </LI>
      </a>
    );
  }

  for (var x = 0; x < 3; x++) {
    List3.push(
      <a href="#" style={{ textDecoration: "none" }} key={x}>
        <LI>
          <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
          {contact[x]}
        </LI>
      </a>
    );
  }

  const animation = useAnimation();
  const [ref, inView] = useInView();

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
    <Background className="container-fluid">
      <div className="row">
        <Column
          className="col-md-3"
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={animation}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h2
            style={{ fontSize: "30px", color: "white", marginBottom: "3rem" }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,.7)",
              marginBottom: "3rem",
            }}
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <Socialicon>
            <i
              className="flaticon-twitter"
              style={{ color: "rgba(255,255,255,.1)", fontSize: "50px" }}
            ></i>
            <i
              className="flaticon-facebook"
              style={{ color: "rgba(255,255,255,.1)", fontSize: "50px" }}
            ></i>
            <i
              className="flaticon-instagram"
              style={{ color: "rgba(255,255,255,.1)", fontSize: "50px" }}
            ></i>
          </Socialicon>
        </Column>
        <Column
          className="col-md-3"
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={animation}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2
            style={{ fontSize: "30px", color: "white", marginBottom: "3rem" }}
          >
            Links
          </h2>
          <ul style={{ paddingLeft: "0" }}>{List1}</ul>
        </Column>
        <Column
          className="col-md-3"
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={animation}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2
            style={{ fontSize: "30px", color: "white", marginBottom: "3rem" }}
          >
            Services
          </h2>
          <ul style={{ paddingLeft: "0" }}>{List2}</ul>
        </Column>
        <Column
          className="col-md-3"
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={animation}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2
            style={{ fontSize: "30px", color: "white", marginBottom: "3rem" }}
          >
            Have a Question?
          </h2>
          <ul style={{ paddingLeft: "0" }}>{List3}</ul>
        </Column>
      </div>
      <CC className="row">
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,.7)" }}>
          Copyright ©2021 All rights reserved | This template is made with by
          Colorlib
        </p>
      </CC>
    </Background>
  );
};

export default Footer;

const CC = styled.div`
  text-align: center !important;
  margin-top: 3rem;
`;

const LI = styled.li`
  width: 70%;
  list-style: none;
  margin-bottom: 0.8rem;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
`;

const Socialicon = styled.div`
  margin-top: 5rem;
  display: flex;
  @media (min-width: 750px) and (max-width: 1024px) {
    width: 100%;
    margin-top: 0.5rem;
  }

  width: 70%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Column = styled(motion.div)`
  display: flex;
  text-align: left !important;
  flex-direction: column;
`;

const Background = styled.div`
  background-color: #000000;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 6rem 2rem 3rem 2rem;
  }
  padding: 6rem 8rem 8rem 8rem;
`;

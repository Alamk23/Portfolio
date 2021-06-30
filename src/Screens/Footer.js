import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";
const Footer = () => {
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
          <ul style={{ paddingLeft: "0" }}>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              Home
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              About
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              Services
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              Project
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              Blog
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              Contact
            </LI>
          </ul>
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
          <ul style={{ paddingLeft: "0" }}>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              Web Design
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              Web Development
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              Photography
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              App development
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              UI/UX Design
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              Courses
            </LI>
          </ul>
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
            Services
          </h2>
          <ul style={{ paddingLeft: "0" }}>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              203 Fake St. Mountain View, San Francisco, California, USA
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              +2 392 3929 210
            </LI>
            <LI>
              <i className="flaticon-right-arrow" style={{ fontSize: 11 }}></i>{" "}
              info@yourdomain.com
            </LI>
          </ul>
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

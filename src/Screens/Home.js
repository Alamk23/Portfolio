import React from "react";
import styled, { keyframes } from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
import { zoomInDown } from "react-animations";

import "./Screen.css";
const Home = () => {
  return (
    <Background className="container-fluid wow" id="home">
      <Text
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Span>Hey! I AM</Span>
        <Name>Ronaldo Fredrickson</Name>
        <TypeText>
          <Intro>
            I'm a&nbsp;
            <ReactTypingEffect
              style={{
                color: "#3e64ff",
                borderBottom: "3px solid #3e64ff ",
                borderRadius: "2px",
              }}
              speed="200"
              eraseSpeed="100"
              eraseDelay="1000"
              typingDelay="1000"
              text={["Designer.", "Developer.", "Photographer.", "Blogger."]}
            />
          </Intro>
        </TypeText>
        <Scrollbox>
          <Arrowbutton>
            <Scrollarrow className="flaticon-download-arrow"></Scrollarrow>
          </Arrowbutton>
        </Scrollbox>
      </Text>
    </Background>
  );
};

export default Home;

const ArrowAniamtion = keyframes`${zoomInDown}`;

const Arrowbutton = styled.button`
  border: none;
  background-color: transparent;
  transform: rotate(-45deg);
`;

const Scrollarrow = styled.i`
  color: #3e64ff;
  font-size: 22px;
  transform: rotate(-45deg);
  animation: infinite 0.9s ${ArrowAniamtion};
`;

const Scrollbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  width: 80px;
  height: 80px;
  background-color: #edf0ff;
  transform: rotate(45deg);
`;

const Intro = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #000000;
  font-weight: 700;
  line-height: 1.8;
`;

const Text = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center !important;
`;

const TypeText = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center !important;
`;
const Span = styled.span`
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-size: 19px;
  font-weight: 800;
  color: #3e64ff;
  letter-spacing: 4px;
  text-align: center !important;
`;
const Name = styled.h1`
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  color: #000;
  font-size: 4rem;
  font-weight: 800;
  text-align: center !important;
`;

const Background = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #edf0ff 50%, #ffffff 50%);
`;

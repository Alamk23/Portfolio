import React, { useEffect } from "react";
import styled from "styled-components";
import dp from "../Images/person.jpg";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const field = [
    "Name",
    "Date of Birth",
    "Address",
    "Zip Code",
    "Email",
    "Phone",
  ];
  const value = [
    "Ronaldo Fedrickson",
    "23/07/1995",
    "Baria Town Phase 8 Rawalpindi",
    "46000",
    "mutahhar_mu@gmail.com",
    "+92090078601",
  ];
  const List = [];
  for (var i = 0; i < 6; i++) {
    List.push(
      <LI key={i}>
        <Span1>{field[i]}</Span1>
        <Span2>{value[i]}</Span2>
      </LI>
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
      y: 50,
    },
  };

  return (
    <Background className="container-fluid" id="about">
      <AboutSection className="row">
        <AboutPicture className="col-md-6" background={dp}></AboutPicture>
        <AboutDescription
          className="col-md-6"
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={animation}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="row">
            <Aboutinfo className="col-12">
              <H2>About Me</H2>
              <P>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </P>
              <ul style={{ paddingLeft: "0" }}>{List}</ul>
              <div style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                <Counter>
                  <CountUp delay={2} end={120} style={{ color: "blue" }} />
                  &nbsp;Project complete
                </Counter>
              </div>
              <div>
                <Button>Download cv</Button>
              </div>
            </Aboutinfo>
          </div>
        </AboutDescription>
      </AboutSection>
    </Background>
  );
};

export default About;

const Counter = styled.span`
  font-family: "Poppins", sans-serif;
  @media (min-width: 1400px) and (max-width: 1920px) {
    font-size: 40px;
  }
  font-size: 20px;
  font-weight: 400;
  color: #000;
`;

const Aboutinfo = styled.div`
  @media (min-width: 0px) and (max-width: 750px) {
    padding-left: 0 !important;
  }
  padding: 3rem 0 3rem 3rem;
`;

const Button = styled.button`
  background: #3e64ff;
  border: 1px solid #3e64ff !important;
  color: #fff !important;
  box-shadow: 0 24px 36px -11px rgb(0 0 0 / 9%);
  @media (min-width: 1400px) and (max-width: 1920px) {
    font-size: 24px;
    padding: 1.5rem 2rem 1.5rem 2rem;
  }

  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  border-radius: 40px;
  padding: 1rem 1rem 1rem 1rem;

  &: hover {
    color: #000 !important;
  }
`;

const Span1 = styled.span`
  font-family: "Poppins", sans-serif;

  font-weight: 600;
  @media (min-width: 300px) and (max-width: 400px) {
    width: 90px;
  }
  @media (min-width: 1400px) and (max-width: 1920px) {
    font-size: 28px;
    width: 230px;
  }

  font-size: 16px;
  color: #000;
  width: 130px;
  @media (min-width: 600px) and (max-width: 768px) {
    line-height: 1.2;
  }
  line-height: 1.8;
`;

const Span2 = styled.span`
  font-family: "Poppins", sans-serif;
  @media (min-width: 300px) and (max-width: 400px) {
    width: calc(100% - 90px);
  }
  @media (min-width: 1400px) and (max-width: 1920px) {
    font-size: 28px;
    width: calc(100% - 230px);
  }
  font-weight: 600;
  font-size: 16px;
  color: #999999;
  line-height: 1.8;
  @media (min-width: 600px) and (max-width: 768px) {
    width: calc(100%);
    line-height: 1.2;
  }
  width: calc(100%-130px);
`;

const P = styled.p`
  font-family: "Poppins", sans-serif;
  @media (min-width: 1400px) and (max-width: 1920px) {
    font-size: 28px;
  }
  font-size: 16px;
  line-height: 1.8;
  font-weight: 400;
  color: #999;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const H2 = styled.h2`
  font-family: "Poppins", sans-serif;
  @media (min-width: 1400px) and (max-width: 1920px) {
    font-size: 90px;
  }
  font-size: 50px;
  font-weight: 700;
  color: #000000;
`;
const LI = styled.li`
  font-family: "Poppins", sans-serif;

  list-style: none;
  margin-bottom: 10px;
  display: flex;
`;

const AboutPicture = styled.div`
  @media (min-width: 0px) and (max-width: 750px) {
    display: none;
  }

  background-image: url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  align-items: center;
`;

const AboutDescription = styled(motion.div)`
  background-color: #ffffff;
`;

const AboutSection = styled.div`
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 0px) and (max-width: 768px) {
    width: 100%;
  }
  width: 82%;
  height: 100%;
  display: flex;
`;

const Background = styled.div`
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

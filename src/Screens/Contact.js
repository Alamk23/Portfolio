import React, { useEffect } from "react";
import styled from "styled-components";
import cover from "../Images/cover.jpg";
import dp from "../Images/person.jpg";
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView();
  const Cardlogo = [
    "flaticon-worldwide",
    "flaticon-address",
    "flaticon-address",
    "flaticon-address",
  ];
  const CardTitle = ["Webiste", "Address", "Email", "Phone"];
  const CardDescription = [
    "www.website.com",
    "Bahria phase 8",
    "mutahhar_mu@gmail.com",
    "+92090078601",
  ];

  const Cards = [];

  for (var i = 0; i < 4; i++) {
    Cards.push(
      <CardHolder className="col-md-3" key={i}>
        <Card>
          <Circle>
            <i
              className={Cardlogo[i]}
              style={{ color: "white", fontSize: "40px" }}
            />
          </Circle>
          <H3>{CardTitle[i]}</H3>
          <P3>{CardDescription[i]}</P3>
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
    <Background className="container-fluid" id="contact">
      <CoverContainer className="row">
        <Image src={cover} alt="cover" />
        <CoverText>
          <h2
            style={{
              color: "#fff",
              fontSize: "40px",
              fontWeight: 900,
              lineHeight: 1.8,
            }}
          >
            I am Available For Freelancing
          </h2>
          <p
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: 1.8,
            }}
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
          <Button>Hire me</Button>
        </CoverText>
      </CoverContainer>
      <CardContainer>
        <TextRow
          className="row"
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={animation}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <H2 style={{ fontSize: "50px", fontWeight: 700, color: "#000" }}>
            Contact
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
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={animation}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {Cards}
        </motion.div>
      </CardContainer>
      <ContactForm className=" row">
        <ContactImage className="col-md-6" background={dp}></ContactImage>
        <ContactField className="col-md-6">
          <Field type="text" className="form-control" placeholder="Name" />
          <Field
            type="text"
            className="form-control"
            placeholder="Your Email"
          />
          <Field type="text" className="form-control" placeholder="Subject" />
          <MessageField className="form-control" placeholder="Message" />
          <Button>Send Message</Button>
        </ContactField>
      </ContactForm>
    </Background>
  );
};

export default Contact;

const H3 = styled.h3`
  font-family: "Poppins", sans-serif;
  color: #000;
  font-size: 20px;
  @media (min-width: 750px) and (max-width: 900px) {
    font-size: 18px;
  }
`;

const P3 = styled.p`
  font-family: "Poppins", sans-serif;
  color: #999;
  font-size: 16px;
  border: 1px solid green;
  width: 100%;
  overflow-wrap: break-word;

  @media (min-width: 750px) and (max-width: 900px) {
    font-size: 12px;
  }
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
const MessageField = styled.textarea`
  font-size: 20px;
  margin-bottom: 2rem;
`;

const Field = styled.input`
  padding: 0.6rem 1rem 0.6rem 1rem;
  color: #000000;
  font-size: 20px;
  margin-bottom: 2rem;
`;

const ContactField = styled.div`
  background-color: #f8f9fb;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 3rem 2rem 3rem;
`;
const ContactImage = styled.div`
  @media (min-width: 0px) and (max-width: 750px) {
    display: none;
  }

  height: 32rem;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  align-items: center;
`;
const ContactForm = styled.div`
  margin-top: 3rem;
  padding-left: 6.5rem;
  padding-right: 6.5rem;
  @media (min-width: 0px) and (max-width: 750px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 750px) and (max-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const CardContainer = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;
  @media (min-width: 0px) and (max-width: 750px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 750px) and (max-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: blue;

  @media (min-width: 1400px) and (max-width: 1920px) {
    width: 90px;
    height: 90px;
  }

  @media (min-width: 750px) and (max-width: 900px) {
    width: 50px;
    height: 50px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 1rem 1rem 1rem 1rem;
  @media (min-width: 1440px) and (max-width: 1920) {
    padding: 3rem 1rem 3rem 1rem;
  }
  @media (min-width: 750px) and (max-width: 900px) {
    width: 95%;
    padding: 1rem 1rem 0.3rem 1rem;
  }
  width: 88%;
  height: 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`;

const CardHolder = styled.div`
  padding: 1rem 0.5rem 1rem 0.5rem;
  @media (min-width: 900px) and (max-width: 1024px) {
  }

  @media (min-width: 750px) and (max-width: 900px) {
  }
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TextRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center !important;
  margin-bottom: 2rem;
`;
const Button = styled.button`
  background: #3e64ff;
  border: 1px solid #3e64ff !important;
  color: #fff !important;
  box-shadow: 0 24px 36px -11px rgb(0 0 0 / 9%);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  border-radius: 40px;
  padding: 1rem 3rem 1rem 3rem;
`;

const CoverText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center !important;
  justify-content: center;
`;
const Background = styled.div`
  margin-top: 5rem;
  background-color: #ffffff;
`;

const CoverContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
  height: 28rem;

  @media (min-width: 750px) and (max-width: 1024px) {
  }
`;

const Image = styled.img`
  padding-left: 0 !important;
  padding-right: 0 !important;
  width: 100%;
  height: 100%;
`;

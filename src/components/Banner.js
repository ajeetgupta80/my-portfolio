import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";



export const Banner = () => {
  // for word displaying 
  const toRotate = ["web developement", "competitve programming", "machine learning"];
  // it is like an index no from which word it start 
  const [loopNum, setLoopNum] = useState(0);
  // it is the deleting state of word initially it is false coz we first type the word then delete it
  const [isDeleting, setIsDeleting] = useState(false);
  // it is to know which text is show now
  const [text, setText] = useState('');
  // it is for the time passout in one letter typing
  const period = 2000;
  //it is a state 
  const [delta, setDelta] = useState(300 - Math.random() * 100);


  // this function take care of typing or deleting 
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    // it is for the pace of deleting and typing
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }


  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-ceter">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">welcome to my portfolio</span>
            <br />
            <br />
            <h1 >{"Hi There, "}</h1>
            <h1>I'm Ajeet <span style={{ color: 'rgb(23, 217, 224)' }}>Gupta</span>.</h1>
            <h2> <span style={{ color: 'white' }}>Iam Into </span><span className="wrap">{text}</span></h2>
            <br />
            <p> Passionate Web Developer | Machine Learning Enthusiast  <br />
            <br />
              Third-Year CSE Undergraduate Student At Gyan Ganga institute of technology. <br />
              i have developed a  keen interest in solving technical and algorithmic problems.
              I am just another guy who wanna add value to the future.</p>
            <button onClick={() => console.log('connect')}>Lets Connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
          
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}




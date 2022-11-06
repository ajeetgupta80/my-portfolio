import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html5 from "../assets/img/icons8-html-5.svg";
import jsv   from "../assets/img/icon-js.svg";
import java   from "../assets/img/icon-java.svg";
import cstyle   from "../assets/img/icon-cstyle.svg";
import python   from "../assets/img/icon-python.svg";
import colorSharp from "../assets/img/color-sharp.png";
import django from  "../assets/img/icon-django.svg";
import c from  "../assets/img/icon-c.svg";


export const Skills = () =>
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                       <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        
                        <p>These are the tech stacks iam familiar with till now</p>
                        <br />
                        <Carousel responsive={responsive } infinite={true} className="skill-slider">
                            <div className="item">
                               <img src={html5} alt="" />
                               <h5>html 5</h5>
                            </div>
                            <div className="item">
                               <img src={jsv} alt="" />
                               <h5>javascript</h5>
                            </div>
                            <div className="item">
                               <img src={java} alt="" />
                               <h5>java</h5>
                            </div>
                            <div className="item">
                               <img src={cstyle} alt="" />
                               <h5>CSS 3</h5>
                            </div>
                            <div className="item">
                               <img src={python} alt="" />
                               <h5>Python</h5>
                            </div>
                            <div className="item">
                               <img src={django} alt="" />
                               <h5>django</h5>
                            </div>
                            <div className="item">
                               <img src={c} alt="" />
                               <h5>Cpp</h5>
                            </div>
                        </Carousel>
                       </div>
                    </Col>
                </Row>
            </Container>
            <img  className="background-image-left"  src={colorSharp} alt="" />

        </section>
    )

}

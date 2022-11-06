import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html5 from "../assets/img/icon-vscode.svg";
import jsv   from "../assets/img/icon-git.svg";
import java   from "../assets/img/icon-intellig.svg";
import cstyle   from "../assets/img/icon-sublime.svg";
import python   from "../assets/img/icon-python.svg";
import colorSharp from "../assets/img/color-sharp.png";
import django from  "../assets/img/icon-django.svg";
import c from  "../assets/img/icon-c.svg";


export const Tools = () =>
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
        <section className="Tools" id="skills">
            <Container>
                <Row>
                    <Col>
                       <div className="skill-bx">
                        <h2>        Tools
                        </h2>
                        <p>These are some of the tools iam familiar with </p>
                        <Carousel responsive={responsive } infinite={true} className="skill-slider">
                            <div className="item">
                               <img src={html5} alt="" />
                               <h5>VsCode</h5>
                            </div>
                            <div className="item">
                               <img src={jsv} alt="" />
                               <h5>Github</h5>
                            </div>
                            <div className="item">
                               <img src={java} alt="" />
                               <h5>Intellij idea</h5>
                            </div>
                            <div className="item">
                               <img src={cstyle} alt="" />
                               <h5>Sublime text</h5>
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

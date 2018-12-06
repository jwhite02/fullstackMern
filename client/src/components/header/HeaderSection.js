import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Login from "./Login";
//import Sticky from 'react-sticky-el';
//import { connect } from 'react-redux';
//import faStyles from 'font-awesome/css/font-awesome.css'


class HeaderSection extends Component {


  render() {
    const bigHeader = this.props.bigHeader;
    if (bigHeader === true) {
          return <div className="parallax-header parallax">
              {/* <h1>Main Header</h1> */}
              <Login />
              <Zoom delay={parseInt("800", 10)}>
                {" "}
                <div className="divHeaderTitle">
                  <h1 className="text-white text-center" style={{ fontSize: "8rem" }}>
                    I L<FontAwesome className="super-crazy-colors" name="heart" style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)", fontSize: "5rem" }} />
                    ve Cheesecake
                  </h1>
                </div>
              </Zoom>
              <Slide left delay={parseInt("2000", 10)}>
                <div>
                  <div className=" " style={{ width: "50rem", height: "50rem", display: "flex", flexDirection: "row", margin: "auto", marginTop: "5rem", fontFamily: "Exo", textAlign: "center" }}>
                    <div className="">
                      <h2 style={{ fontSize: "3rem" }}>
                        {" "}
                        <i>
                          {" "}
                          Home of Delectable, Scrumptious Cheesecake
                          Recipes{" "}
                        </i>{" "}
                      </h2>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>;
    }
return (
  <div className="parallax-header2 parallax">
      <h1 className="text-white text-center letterpress">The Header</h1>
    <Jumbotron>
      <h1 className="display-3 text-white">ScrumptiousHello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-2" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    </Jumbotron>
  </div>)

  }
}

export default HeaderSection;
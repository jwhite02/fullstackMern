import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col, Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import HtmlToReactParser from "html-to-react/lib/parser";
import ArticleContainer from './ArticleContainer';
import Slider from "react-animated-slider";

//import * as cheeseCats from '../../data/chessecatsWithSpace';

import lav  from '../../images/Lavender-White-Chocolate-Cheesecake.jpg';
import berry  from '../../images/berries-cake-cheesecake.jpg';
import berry2 from '../../images/cheesecake-blueberry02.jpg';
import cho from '../../images/cheesecake-chocolate-swirl.jpg';
import stru from '../../images/cheesecake-struttle.jpg';
import straw from '../../images/strawberry-cheesecake.jpg';
import cappuccino from "../../images/img-04-Cappuccino_cheesecake.jpg";
import nobakechoco from "../../images/img-06-No-Bake_Chocolate-Cheesecake.jpg";
import strawberry from "../../images/img-015-strawberry-cheesecake01.jpg";
import appleCrumb2 from "../../images/img-023-AppleCreamCrumb.jpg";
import whiteChocolate from "../../images/img-026-Fluffy_White_Chocolate_Cheesecake.jpg";
import bloodOrange from "../../images/img-027-bloodorange-cheesecake.jpg";
import lowcarbpumpkin from "../../images/img-031-low-carb-pumpkin.jpg";
import almond4 from "../../images/img-033-Almond-Joy-Cheesecake.jpg";
import raspberry from "../../images/img-036-raspberry-cheesecake.jpg";
import blackberry2 from "../../images/img-042-swirled-blackberry-cheesecake.jpg";
import banana from "../../images/img-043-cheesecake-banana.jpg";
import butterscotch from "../../images/img-043-cheesecake-butterscotch-drips.jpg";
import pinacolada from "../../images/img-045-pina-colada-cheesecake02.jpg";
import blueberrySwirl from "../../images/img-046-Easy-Blueberry-Swirl-Cheesecake.jpg";
import cherrytopped6 from "../../images/img-049-cherryToppedcheesecake.jpg";
import ribboncherry from "../../images/img-050-cheery-cheesecake2.jpg";
import pumpkin4 from "../../images/img-053-pumpkin_swirl_cheesecake3.jpg";
import rumraisin2 from "../../images/img-054-rum-raisin-brownie-cheesecake02.jpg";

//import ImageGallery from 'react-image-gallery';

import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom'

class CardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThumbnails: false,
      showFullscreenButton: false
    }
    
  }
  

  render() {
    
    const cheesecake = this.props.cheesecake;

    const cardRecipes = [
      {
        uritag: "apple-crumb-cheesecake",
        category: "Apple Cheesecake Recipes",
        image: appleCrumb2
      }, 
      {
        uritag: "banana-cheesecake",
        category: "Banana Cheesecake Recipes",
        image: banana
      },
      {
        uritag: "fresh-blackberry-cheesecake",
        category: "Blackberry Cheesecake Recipes",
        image: blackberry2
      },
      {
        uritag: "blueberry-swirl-cheesecake",
        category: "BlueBerry Cheesecake Recipes",
        image: blueberrySwirl
      },
      {
        uritag: "butterscotch-cheesecake",
        category: "Candy Cheesecake Recipes",
        image: butterscotch
      },
      {
        uritag: "cherry-topped-cheesecake",
        category: "Cherry Cheesecake Recipes",
        image: cherrytopped6
      },
      {
        uritag: "white-chocolate-cheesecake",
        category: "Chocolate Cheesecake Recipes",
        image: whiteChocolate
      },
      {
        uritag: "blood-orange-cheesecake",
        category: "Citrus Cheesecake Recipes",
        image: bloodOrange
      },
      {
        uritag: "cappuccino-cheesecake-recipe",
        category: "Coffee Cheesecake Recipes",
        image: cappuccino
      },
      {
        uritag: "cranberry-ribbon-cheesecake",
        category: "Fruit Cheesecake Recipes",
        image: ribboncherry
      },
      {
        uritag: "pina-colada-cheesecake",
        category: "Liqueur Cheesecake Recipes",
        image: pinacolada
      },
      {
        uritag: "low-carb-pumpkin-cheesecake",
        category: "Low-Carb Cheesecake Recipes",
        image: lowcarbpumpkin
      },
      {
        uritag: "german-kasekuchen-cheesecake",
        category: "Misc Cheesecake Recipes",
        image: straw
      },
      {
        uritag: "no-bake-chocolate-cheesecake",
        category: "No-Bake Cheesecake Recipes",
        image: nobakechoco
      },
      {
        uritag: "almond-joy-cheesecake",
        category: "Nut Cheesecake Recipes",
        image: almond4
      },
      {
        uritag: "yummy-pumpkin-cheesecake",
        category: "Pumpkin Cheesecake Recipes",
        image: pumpkin4
      },
      {
        uritag: "raspberry-cheesecake",
        category: "Raspberry Cheesecake Recipes",
        image: raspberry
      },
      {
        uritag: "rum-raisin-cheesecake",
        category: "Rum Cheesecake Recipes",
        image: rumraisin2
      },
      {
        uritag: "strawberry-cheesecake-recipe",
        category: "Strawberry Cheesecake Recipes",
        image: strawberry
      }
    ];

    // const images = [
    //   {
    //     original: 'https://placeimg.com/640/480/nature',
    //     thumbnail: 'https://placeimg.com/80/60/nature',
    //     originalClass: 'featured-slide',
    //     description: "This is just a Description."
    //   },
    //   {
    //     original: 'https://placeimg.com/640/480/nature/sepia',
    //     thumbnail: 'https://placeimg.com/80/60/nature',
    //     originalClass: 'featured-slide'
    //   },
    //   {
    //     original: 'https://loremflickr.com/320/240/paris,girl/all',
    //     thumbnail: 'https://placeimg.com/80/60/nature',
    //     originalClass: 'featured-slide'
    //   },
    //   {
    //     original: 'https://picsum.photos/458/354?random&time=1532287506594',
    //     thumbnail: 'https://placeimg.com/80/60/nature',
    //     originalClass: 'featured-slide'
    //   },
    //   {
    //     original: 'https://picsum.photos/458/354?random&time=1532287526595',
    //     thumbnail: 'https://placeimg.com/80/60/nature',
    //     originalClass: 'featured-slide'
    //   },
    //   {
    //     original: 'https://picsum.photos/458/354?random&time=1532287616912',
    //     thumbnail: 'https://placeimg.com/80/60/nature',
    //     originalClass: 'featured-slide'
    //   }
    // ];

    const content = [
      {
        // title: 'Vulputate Mollis Ultricies Fermentum Parturient',
        // description:
        //   'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        image: lav
      },
      {
        // title: 'Tortor Dapibus Commodo Aenean Quam',
        // description:
        //   'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        // button: 'Discover',
        image: berry
      },
      {
        // title: 'Phasellus volutpat metus',
        // description:
        //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        image: berry2
      },
      {
        // title: 'Vulputate Mollis Ultricies Fermentum Parturient',
        // description:
        //   'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        image: cho
      },
      {
        // title: 'Tortor Dapibus Commodo Aenean Quam',
        // description:
        //   'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        image: stru
      },
      {
        // title: 'Phasellus volutpat metus',
        // description:
        //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        image: straw
      }
    ];
    
    const theArticleContent = cardRecipes.map((item) => {
      const innerCard = cheesecake.map((item2, index) => {
        if (item2.URITag === item.uritag) {
          let subDir = item2.Directions.slice(0, 120);
          let dots = "...";
          let regex1 = /h2/gi;
          let regex2 = /<p/gi;
          let regex3 = /<\/p/gi;
          let subDir1 = subDir.replace(regex1, 'big');
          let subDir2 = subDir1.replace(regex2, '<span');
          let subDir3 = subDir2.replace(regex3, '</span');
          let artsubDir = subDir3 + dots;
          let newSubDir = new HtmlToReactParser();
          let subDirs = newSubDir.parse(artsubDir);
          return <Col key={index} className="pt-5 col-sm-4">
           <Fade bottom delay={parseInt("400", 10)}>
              <Card className="cardDim shadow">
                <CardImg top width="25%" src={item.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle className="pb-2">
                    {item2.Title}
                  </CardTitle>
                  <CardSubtitle className="pb-2">
                    Category: <i>{item.category}</i>{" "}
                  </CardSubtitle>
                  <CardText className="pb-2">{subDirs}</CardText>
                  <Link to={`/recipe/${item2.URITag}`}><Button>To Cheesecake Recipe...</Button></Link>
                  <Route path={`/category/:category/:aCat/:uritag`} render={(...props) => {
                     return <ArticleContainer isHeader={false} />;
                    }} />
                </CardBody>
               </Card>
              </Fade>
            </Col>;
        }
        else return null;
      })
      return innerCard;
    });

    return <div className="pt-3 parallax-cards">
        <Bounce right delay={parseInt("100", 10)}>
          <h1 className="text-center mt-5">Delicious Cheesecakes</h1>
        </Bounce>
        <div className="myNewSlider shadow-lg" style={{marginTop: '3rem', marginBottom:'8rem'}} >
          <Slider autoplay="1200" className="slider-wrapper shadow-lg">
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{
                  background: "url(" + item.image + ") no-repeat center center"
                }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  {/* <button>{item.button}</button> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="divCards">
            <Bounce right delay={parseInt("900", 10)}>
            <div className="text-center ml-5" > <h1> Popular Cheesecake Recipes </h1> </div>
            </Bounce>
          <Container className="mr-5">
            <Row>{theArticleContent}</Row>
          </Container>
        </div>
      </div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cheesecake: state.cheesecake
  }
}

export default withRouter(connect(mapStateToProps, null)(CardSection))
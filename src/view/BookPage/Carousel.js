import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class BookCarousel extends Component {
  createItems = (ctx) => {
    const images = ctx.keys().map(ctx);
    let res = [];
    for (let i = 0; i < ctx.keys().length; ++i) {
      let img = images[i];
      res.push(
        <img className='carousel-pic'
          alt={"carousel picture" + i}
          src={img}
        />
      )
    }
    res.map((obj) => {
      return (<div>{obj}</div>);
    });
    return res;
  }

  render() {
    const requireContext = require.context("../../assets/carousel", true, /^\.\/.*\.jpg$/);
    return (
      <div className="carousel">
        <div className="carousel_container">
          <Carousel autoPlay={true} interval={4000} showThumbs={false}>
            {this.createItems(requireContext)}
          </Carousel>
        </div>
      </div>
    );
  }
};
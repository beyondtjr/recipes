import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="about">
        <h2> ABOUT </h2>
        <div>
          <img className="Coco" src="https://vignette.wikia.nocookie.net/disney/images/f/fe/Characters-abuelita.png/revision/latest?cb=20171202001147"/>
        </div>
        <div className="Paragraphs">
          <p>Our founders, Misun, Rikki, and Chris, have over twelve decades’ experience in the Mexican food business. Our culinary expertise and love for community is vital to all we do. We seek to be visible and active members of the communities in which we do business. Our customers are our guests, and our employees are our team. </p>

          <p>When we started Lolita’s, we sought to support our growing family and serve excellent Mexican food. Our top sellers include carne asada burritos, Magic Burritos, and Adobada Tacos with our world famous guacamole. The key to our success is our saucy personality and even saucier foods. </p>
        </div>
      </div>
    );
  }
}

export default About;

import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Product Design at Infusionsoft</h1>
    <p>A brief overview of my work at Infusionsoft</p>
  </div>
);

import React from 'react';
import Link from 'gatsby-link';
import Stats from '../images/stats.png';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={Stats} />
  </div>
);

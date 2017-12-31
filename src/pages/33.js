import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src="https://i.imgur.com/cbSVzzX.gif" alt="Knucks" />
    <p>Select inventory of the design system <a href="https://invis.io/WACJBF3XG" target="_blank">Invision</a> 📦</p>
  </div>
);

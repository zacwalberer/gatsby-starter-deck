import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src="https://i.imgur.com/9YPEijI.gif" alt="BB8" />
    <p>Small inventory of system <a href="https://invis.io/WACJBF3XG" target="_blank">Invision</a> 🖥</p>
  </div>
);

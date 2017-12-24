import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h2>What does it do?</h2>
    <p>Functionality and experience of the flagship product on a mobile device.</p>
  </div>
);

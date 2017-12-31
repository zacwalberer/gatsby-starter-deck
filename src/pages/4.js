import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h2>What does it do?</h2>
    <p>Includes CRM, Tasks, Orders, and Opportunities from the flagship product.</p>
  </div>
);

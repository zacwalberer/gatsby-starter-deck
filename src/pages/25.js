import React from 'react';
import Link from 'gatsby-link';
import Quote from '../components/Quote';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Quote cite="Product Teams">
      When I am crafting the experience for a product at Infusionsoft, I want to know how to build products effectively and quickly, so I can make confident design and development decisions.
    </Quote>
  </div>
);

import React from 'react';
import Link from 'gatsby-link';
import Quote from '../components/Quote';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Quote cite="Small business owners and entrepreneurs">
      When I am too busy to worry about marketing or sales, I want to access suggested automations that I can easily and quickly use, so I can focus on scaling my business.
    </Quote>
  </div>
);

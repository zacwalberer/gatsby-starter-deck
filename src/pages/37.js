import React from 'react';
import Link from 'gatsby-link';
import Quote from '../components/Quote';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Quote cite="Expert Automation Builders">
      When I want to serve my small business clients through marketing and sales automations, I want to quickly do so without having to require my clients to only use Infusionsoft, so I can scale my business and serve more clients who are using different products.
    </Quote>
  </div>
);

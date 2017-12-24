import React from 'react';
import Link from 'gatsby-link';
import Quote from '../components/Quote';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Quote cite="Infusionsoft users">
      When I’m away from my computer, I want to view and manage my contacts and deals, so I can appropriately serve them.
    </Quote>
  </div>
);

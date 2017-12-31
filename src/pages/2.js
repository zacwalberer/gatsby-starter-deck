import React from 'react';
import Link from 'gatsby-link';
import Quote from '../components/Quote';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Quote cite="Frank Chimero">
      It is easier to recognize failures of technique rather than those of strategy or purpose, and simpler to ask 'How do I paint this tree?' than to answer 'Why does this painting need a tree in it?'
    </Quote>
  </div>
);

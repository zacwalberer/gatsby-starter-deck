import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src="src/static/email-stats-1.png" alt="Monkey" />
  </div>
);

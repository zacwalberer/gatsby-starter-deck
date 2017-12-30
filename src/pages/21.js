import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src="https://i.imgur.com/9YPEijI.gif" alt="BB8" />
    <p>Desktop experience <a href="https://invis.io/QXB81HAKC" target="_blank">Invision</a> 🖥</p>
    <p>Mobile experience <a href="https://invis.io/CYAZ7PVJVs" target="_blank">Invision</a> 📱</p>
  </div>
);

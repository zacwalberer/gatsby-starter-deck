import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src="https://i.imgur.com/96t6I9m.gif" alt="Magic" />
    <p>End user experience <a href="https://invis.io/ZGEHRRHSC" target="_blank">Invision</a> 🖱</p>
    <p>Asset manager <a href="https://invis.io/DZF1ZGTKY" target="_blank">Invision</a> 🗂</p>
    <p>Mobile experience <a href="https://invis.io/5NEIMQDVQ" target="_blank">Invision</a> 📱</p>
    <p>Interaction and state <a href="https://invis.io/WVDMNPD4M" target="_blank">Invision</a> 👋</p>
  </div>
);

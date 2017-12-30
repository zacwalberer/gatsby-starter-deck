import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src="https://i.imgur.com/nzrtJiz.gif" alt="Joker" />
    <p>Business card scanner <a href="https://invis.io/EY8O2KK7R" target="_blank">Invision</a> 📸</p>
    <p>iOS app flow <a href="https://invis.io/9N7Q0R8KV" target="_blank">Invision</a> 🌊</p>
    <p>Opportunities <a href="https://invis.io/UH82GFT82" target="_blank">Invision</a> 🎯</p>
    <p>Product features <a href="https://www.infusionsoft.com/product/features/mobile" target="_blank">Marketing</a> ✅</p>
  </div>
);

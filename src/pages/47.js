import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h2>Thank you!</h2>
    <p>Tweeting <a href="https://twitter.com/ZacWalberer" target="_blank">Twitter</a> 🐦</p>
    <p>Writing <a href="https://medium.com/@zacwalberer" target="_blank">Medium</a> ✍️</p>
    <p>Building <a href="https://github.com/zacwalberer" target="_blank">GitHub</a> ⌨️</p>
    <p>Working <a href="https://www.linkedin.com/in/zacwalberer/" target="_blank">LinkedIn</a> 💼</p>
    <p>See more work <a href="http://zacw.me/" target="_blank">zacw.me</a> 👀</p>
  </div>
);

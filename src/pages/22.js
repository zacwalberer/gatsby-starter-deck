import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h2>Reception</h2>
    <p>Propel announcement at ICON <a href="https://www.youtube.com/watch?v=mxSqBF9imxY" target="_blank">Youtube</a> 🎤</p>
    <p>Propel demo at ICON <a href="https://www.youtube.com/watch?v=-gm2QpuG_k8" target="_blank">Youtube</a> 💪</p>
    <p>Infusionsoft announcement <a href="https://www.infusionsoft.com/about/news/press-releases/infusionsoft-launches-new-products-simplify-growth-any-small-business" target="_blank">Marketing</a> 💣</p>
    <p>Small Business Trends <a href="https://smallbiztrends.com/2017/04/infusionsoft-propel-supplies-mobile-marketing-experience.html" target="_blank">Article</a> 🤔</p>
  </div>
);

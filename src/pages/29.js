import React from 'react';
import Link from 'gatsby-link';
import ImageOne from '../images/ds-1.png';
import Image from '../components/Image';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Image>
      <img style={{ flex: '0 1 auto', height: '100%' }} src={ImageOne} />
    </Image>
  </div>
);

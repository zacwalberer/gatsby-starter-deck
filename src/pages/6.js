import React from 'react';
import Link from 'gatsby-link';
import Content from '../components/Content';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Content>
      When the app was first built, features were not selectively chosen to serve the needs of users who are on their device. Instead of thinking through the problems that would need to be addressed when someone is away from the desktop, the most popular from our desktop app were built. We saw friction from users and low use of certain features because of this. This prompted us to continue doing research around which problems to solve for and which features to add to the mobile app to solve for these problems. Cutting back the features of the app improved use and customer delight.
    </Content>
  </div>
);

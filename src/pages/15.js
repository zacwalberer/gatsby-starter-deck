import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>What is interesting about the problem, process, or solution?</h2>
      We found that small business owners and entrepreneurs don't have a lot of time to streamline their marketing and sales processes. Propel provides a CRM to manage their contacts and use marketing and sales automations from a marketplace created by expert campaign builders. We found that small businesses like these don’t have the time to learn a new tool. By providing them a simple “wizard” to customize the automation, we keep them away from a complex tool that takes a lot of knowledge and expertise to use, such as Campaign Builder. The marketplace also suggests automations based on user needs and patterns for them to use.
    </Container>
  </div>
);

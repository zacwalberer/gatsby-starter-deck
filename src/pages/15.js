import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>What is interesting about the problem, process, or solution?</h2>
      We found that small business owners and entrepreneurs didn't have time to streamline their marketing and sales processes. Propel provides a CRM to manage their contacts and use marketing and sales automations from a marketplace created by expert campaign builders. We found that small businesses like these don’t have the time to learn a new thing or tool. By giving them a simple “wizard” set up to customize the automation, we keep them out of a complex tool that takes a lot of knowledge and expertise to use, Infusionsoft Campaign Builder. We also worked on using ML that suggests automations based on their needs and patterns.
    </Container>
  </div>
);

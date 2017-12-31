import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>What does it do?</h2>
      The product is a tool that visually builds automations through a diverse set of extensions to help scale expert builders like Infusionsoft partners and other businesses that offer automation expertise, and helps scale small businesses that consume these automations. It does not have a CRM so that any app that sends data back and forth can be used as the management tool to trigger off automation.
    </Container>
  </div>
);

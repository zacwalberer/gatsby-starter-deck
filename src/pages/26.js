import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>What is interesting about the problem, process, or solution?</h2>
      When I first got to Infusionsoft, the team was using Google’s Material design system for their products. Instead of building a design system from the problems our products solve for and who they are solving for, we had been using the components and patterns from another company, which was designed for the problems they were solving for and not our own.
    </Container>
  </div>
);

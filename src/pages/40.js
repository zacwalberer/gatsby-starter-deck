import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>Research</h2>
      Before starting work on the new building tool, we did extensive research around the jobs that our current users hire our Campaign Builder to do and why they switch to another builder. This research helped us discover our high level problems and led to the decision to create a new building tool. Throughout the work we have done 2-4 user tests a week - measuring the data with SUS scores and task completion data. This is all ongoing work.
    </Container>
  </div>
);

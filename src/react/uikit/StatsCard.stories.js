import React from 'react'

import { storiesOf } from '@storybook/react'
import StatsCard from './StatsCard'
import Grid from '@material-ui/core/Grid'

storiesOf('StatsCard', module).add('Normal', () => (
  <Grid container spacing={24}>
    <Grid item xs={4}>
      <StatsCard number={60} description="Ticket solved" />
    </Grid>
  </Grid>
))

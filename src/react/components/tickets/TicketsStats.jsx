import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectResolvedTicketsCount } from '../../../tickets/selectors/TicketSelectors'
import Grid from '@material-ui/core/Grid'
import StatsCard from '../../uikit/StatsCard'

class TicketStats extends React.Component {
  static propTyes = {
    solved: PropTypes.number,
    assigend: PropTypes.number,
    pending: PropTypes.number,
    waiting: PropTypes.number,
  }

  static defaultProps = {
    solved: 0,
    assigend: 0,
    pending: 0,
    waiting: 0,
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <StatsCard
            number={this.props.pending}
            description="Tickets pending"
          />
        </Grid>
        <Grid item xs={3}>
          <StatsCard
            number={this.props.assigend}
            description="Tickets assigned"
          />
        </Grid>
        <Grid item xs={3}>
          <StatsCard
            number={this.props.waiting}
            description="Tickets waiting"
          />
        </Grid>
        <Grid item xs={3}>
          <StatsCard number={this.props.solved} description="Tickets solved" />
        </Grid>
      </Grid>
    )
  }
}

export default connect(state => ({
  solved: selectResolvedTicketsCount(state),
}))(TicketStats)

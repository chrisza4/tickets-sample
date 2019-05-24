import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { fetchTickets } from '../../tickets/actions/TicketActions'
import LoadState from '../../loadState/LoadState'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import PersonIcon from '@material-ui/icons/Person'
import CallIcon from '@material-ui/icons/Call'
import CircularProgress from '@material-ui/core/CircularProgress'
import TicketRow from '../components/tickets/TicketRow'
import StatsCard from '../uikit/StatsCard'

import { Divider } from '@material-ui/core'
import withFetchData from '../advance/withFetchData'

const styles = {
  buttonIcon: {
    marginLeft: '5px',
  },
  button: {
    margin: '5px',
  },
}

export class TicketsPage extends React.Component {
  static propTypes = {
    tickets: PropTypes.array,
    loadState: PropTypes.string,
  }

  renderRows = () => {
    return this.props.tickets.map(row => <TicketRow ticket={row} />)
  }

  render() {
    if (this.props.loadState === LoadState.LOADING) {
      return this.renderLoading()
    }
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <StatsCard number={0} description="Tickets solved" />
          </Grid>
          <Grid item xs={3}>
            <StatsCard number={0} description="Tickets assigned" />
          </Grid>
          <Grid item xs={3}>
            <StatsCard number={0} description="Tickets pending" />
          </Grid>
          <Grid item xs={3}>
            <StatsCard number={0} description="Tickets waiting" />
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: '20px', marginTop: '20px' }} />
        <Typography variant="h6" id="tableTitle">
          Tickets
        </Typography>
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <Button variant="contained" color="primary" style={styles.button}>
            Mark resolved
            <DoneIcon style={styles.buttonIcon} />
          </Button>
          <Button variant="contained" color="primary" style={styles.button}>
            Wait for reply
            <CallIcon style={styles.buttonIcon} />
          </Button>
          <Button variant="contained" color="primary" style={styles.button}>
            Assign
            <PersonIcon style={styles.buttonIcon} />
          </Button>
          <Button variant="contained" color="secondary" style={styles.button}>
            Delete
            <DeleteIcon style={styles.buttonIcon} />
          </Button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>No</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Assignees</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.renderRows()}</TableBody>
        </Table>
      </div>
    )
  }
}

export default compose(
  connect(state => ({
    loadState: state.tickets.loadState,
    tickets: state.tickets.tickets,
  })),
  withFetchData(fetchTickets, <CircularProgress />)
)(TicketsPage)

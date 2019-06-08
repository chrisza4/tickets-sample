import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import {
  fetchTickets,
  toggleResolved,
  selectTicket,
  setStatus,
} from '../../tickets/actions/TicketActions'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Switch } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import PersonIcon from '@material-ui/icons/Person'
import CallIcon from '@material-ui/icons/Call'
import { Divider } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import TicketRow from '../components/tickets/TicketRow'
import TicketStats from '../components/tickets/TicketsStats'
import LoadState from '../../loadState/LoadState'
import withFetchData from '../advance/withFetchData'
import {
  selectDisplayedTickets,
  selectSelectedTicketIds,
} from '../../tickets/selectors/TicketSelectors'

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
    selectedIds: PropTypes.array,
    loadState: PropTypes.string,
    toggleResolved: PropTypes.func,
  }

  onSelect = id => {
    this.props.onSelect(id)
  }

  onSetStatus = status => {
    setStatus(this.props.selectedIds, status)
  }

  isTicketSelected = ticketId => {
    return this.props.selectedIds.some(id => id === ticketId)
  }

  renderRows = () => {
    return this.props.tickets.map(row => (
      <TicketRow
        ticket={row}
        selected={this.isTicketSelected(row.id)}
        onSelect={() => this.onSelect(row.id)}
      />
    ))
  }

  render() {
    if (this.props.loadState === LoadState.LOADING) {
      return this.renderLoading()
    }
    return (
      <div>
        <TicketStats />
        <Divider style={{ marginBottom: '20px', marginTop: '20px' }} />
        <Typography variant="h6" id="tableTitle">
          Tickets
        </Typography>
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={() => this.onSetStatus('resolved')}
          >
            Mark resolved
            <DoneIcon style={styles.buttonIcon} />
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={() => this.onSetStatus('wait for reply')}
          >
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
          <Switch
            checked={this.props.showResolved}
            onChange={() => this.props.toggleResolved()}
            color="primary"
          />{' '}
          Show resolved
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
  connect(
    state => ({
      loadState: state.tickets.loadState,
      tickets: selectDisplayedTickets(state),
      selectedIds: selectSelectedTicketIds(state),
      showResolved: state.tickets.showResolved,
    }),
    dispatch => {
      return {
        toggleResolved: () => dispatch(toggleResolved()),
        onSelect: id => dispatch(selectTicket(id)),
      }
    }
  ),

  withFetchData(fetchTickets, <CircularProgress />)
)(TicketsPage)

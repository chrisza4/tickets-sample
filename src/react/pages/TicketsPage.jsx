import React from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import PersonIcon from '@material-ui/icons/Person'
import CallIcon from '@material-ui/icons/Call'
import StatsCard from '../uikit/StatsCard'

import { Divider } from '@material-ui/core'

const styles = {
  buttonIcon: {
    marginLeft: '5px',
  },
  button: {
    margin: '5px',
  },
}

class TicketsPage extends React.Component {
  state = {
    tickets: [],
  }

  componentDidMount = async () => {
    const response = await axios.get('http://localhost:3333/tickets')
    this.setState({
      tickets: response.data.data,
    })
  }

  renderRows = () => {
    return this.state.tickets.map(row => (
      <TableRow key={row.id}>
        <TableCell padding="checkbox">
          <Checkbox checked={false} />
        </TableCell>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.title}</TableCell>
        <TableCell>No assignee</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.date}</TableCell>
      </TableRow>
    ))
  }

  render() {
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

export default TicketsPage

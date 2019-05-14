import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

const tickets = require('../../mocks/Tickets.json')

export default class TicketsPage extends React.Component {
  render() {
    const rows = tickets
    return (
      <div>
        <Typography variant="h6" id="tableTitle">
          Tickets
        </Typography>
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
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox checked={false} />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.assignee}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

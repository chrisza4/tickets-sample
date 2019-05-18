import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

class UsersPage extends React.Component {
  state = {
    users: [],
  }

  componentDidMount = async () => {
    const response = await axios.get('http://localhost:3333/users')
    this.setState({
      users: response.data.data,
    })
  }

  renderRows = () => {
    return this.state.users.map((row, index) => (
      <TableRow key={row.id}>
        <TableCell padding="checkbox">
          <Checkbox checked={false} />
        </TableCell>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.firstName}</TableCell>
        <TableCell>{row.lastName}</TableCell>
        <TableCell>{row.country}</TableCell>
      </TableRow>
    ))
  }
  render() {
    return (
      <div>
        <Typography variant="h6" id="tableTitle">
          Users
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.renderRows()}</TableBody>
        </Table>
      </div>
    )
  }
}

export default UsersPage

import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { fetchUsers } from '../../users/actions/UserActions'
import CircularProgress from '@material-ui/core/CircularProgress'
import withFetchData from '../advance/withFetchData'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

class UsersPage extends React.Component {
  static propTypes = {
    users: PropTypes.array,
    loadState: PropTypes.string,
  }

  renderRows = () => {
    return this.props.users.map((row, index) => (
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

export default compose(
  connect(state => ({
    users: state.users.users,
    loadState: state.users.loadState,
  })),
  withFetchData(fetchUsers, <CircularProgress />)
)(UsersPage)

import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import cx from 'classnames'
import styles from './TicketsRow.module.css'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import TableCell from '@material-ui/core/TableCell'

const TicketRow = props => {
  const { ticket } = props
  const cssClass =
    ticket.status === 'resolved'
      ? cx(styles.TicketSolvedCell, 'ax-resolved-row')
      : ''

  return (
    <TableRow key={ticket.id}>
      <TableCell padding="checkbox">
        <Checkbox checked={false} />
      </TableCell>
      <TableCell>
        <span className={cssClass}>{ticket.id}</span>
      </TableCell>
      <TableCell>
        <span className={cssClass}>{ticket.title}</span>
      </TableCell>
      <TableCell>
        <span className={cssClass}>No assignee</span>
      </TableCell>
      <TableCell>
        <span className={cssClass}>{ticket.status}</span>
      </TableCell>
      <TableCell>
        <span className={cssClass}>{moment(ticket.date).fromNow()}</span>
      </TableCell>
    </TableRow>
  )
}

TicketRow.propTypes = {
  ticket: PropTypes.object,
}

export default TicketRow

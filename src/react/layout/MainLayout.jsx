import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

const style = {
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    padding: '10px 10px 10px 10px',
  },
  name: {
    marginLeft: '20px',
  },
  content: {
    margin: '20px',
    padding: '30px 30px',
  },
}

export default class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    return (
      <div>
        <AppBar position="static" style={{ ...style.appBar }}>
          <Toolbar>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              style={style.grow}
            >
              Tickets.io
            </Typography>
            <IconButton color="inherit">
              <div>
                <AccountCircle style={{ float: 'right' }} />
              </div>
              <div style={style.name}>Chris</div>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper style={style.content}>{this.props.children}</Paper>
      </div>
    )
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { FormLabel } from '@material-ui/core'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
})

class SignIn extends React.Component {
  usernameInput = null
  passwordInput = null

  render() {
    const props = this.props
    const { classes } = props
    const signIn = e => {
      e.preventDefault()
      props.signIn(this.usernameInput.value, this.passwordInput.value)
    }
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={signIn}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                inputRef={input => {
                  this.usernameInput = input
                }}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={input => {
                  this.passwordInput = input
                }}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
            <FormControl margin="normal">
              <FormLabel margin="normal" error>
                {props.errorMessage}
              </FormLabel>
            </FormControl>
          </form>
        </Paper>
      </main>
    )
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  onSigninRequest: PropTypes.func,
}

class SignInContainer extends React.Component {
  state = {
    errorMessage: '',
  }
  onSignIn = async (username, password) => {
    try {
      const res = await axios.post('http://localhost:3333/login', {
        username,
        password,
      })
      if (res.data.ok) {
        localStorage.setItem('access_token', res.data.token)
      }
    } catch (err) {
      this.setState({
        errorMessage: 'Invalid username or password',
      })
    }
  }
  render() {
    return (
      <SignIn
        signIn={this.onSignIn}
        errorMessage={this.state.errorMessage}
        {...this.props}
      />
    )
  }
}

export default withStyles(styles)(SignInContainer)

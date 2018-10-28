import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

import {getUsers} from '../actions/users'

class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.props.getUsers()
  }

  userSelected(e) {
    this.setState({user: e.target.value})
  }
  
  renderUsers () {
    return Object.keys(this.props.users).map((key, index) => {
      var user = this.props.users[key]
      return (
        <MenuItem value={user} >{user.name}</MenuItem>
      )
    })
  }

  render() {
    const styles = theme => ({
      layout: {
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
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
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
    });
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={styles.layout}>
          <Paper className={styles.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <FormControl className={styles.formControl}>
            <Select onChange={(e) => {this.userSelected(e)}}value={this.props.user ? this.props.user : ""}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
                {this.props.users && this.renderUsers()}
            </Select>
          </FormControl>
            <form className={styles.form}>
          
              <Button
                variant="contained"
                color="primary"
                className={styles.submit}
                onClick={() => {this.props.login(this.state.user)}}
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

const mapDispatchToProps = {
    getUsers
}

export default connect (mapStateToProps, mapDispatchToProps)(SignIn);
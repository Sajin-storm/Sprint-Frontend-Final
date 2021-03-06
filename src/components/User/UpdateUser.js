import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/action";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

class UpdateUser extends Component {
  constructor() {
    super();
    this.username = React.createRef();
    this.password = React.createRef();

    this.state = { updateUserMessage: "" };
  }

  updateUser(event) {
    console.log("Username...", this.props.match.params.username);
    console.log("password...", this.password.current.value);

    event.preventDefault();

    this.props.onUpdateUser(
      this.props.match.params.username,
      this.password.current.value
    );
  }

  render() {
    const classes = useStyles;

    return (
      <div>
        <Container component="main" maxWidth="xs">
          <Typography
            component="h1"
            variant="h5"
            style={{ textAlign: "center", textShadow: "2px 2px #E3EEFF" }}
          >
            Update Your Password
          </Typography>
          <br />
          <form className={classes.form} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  defaultValue={this.props.match.params.username}
                  label="Username"
                  variant="outlined"
                  InputProps={{ readOnly: true }}
                  required
                  fullWidth
                  style={{
                    backgroundImage: " linear-gradient(#ECF4FF, white)",
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required={true}
                  inputRef={this.password}
                  type="password"
                  label="Enter new password to be updated"
                  variant="outlined"
                  fullWidth
                  // InputLabelProps={{ shrink: true }}
                  style={{
                    backgroundImage: " linear-gradient(#ECF4FF, white)",
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.updateUser.bind(this)}
                >
                  Update Password
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  disabled
                  label={this.props.updateUserMessage}
                  variant="standard"
                  InputProps={{ readOnly: true }}
                ></TextField>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updateUserMessage: state.updateUserMessage,
    // bookings: state.bookings
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onUpdateUser: (username, password) =>
      dispatch(actions.updateUsers(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(UpdateUser);

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/action";
import { Form, Button, Card } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import { Link } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class BusOpSignIn extends Component {
  constructor() {
    super();
    this.busOperatorUsername = React.createRef();
    this.password = React.createRef();
    this.state = { busOpSigninMessage: "", open: false };
  }

  addBusop(event) {
    console.log(
      "Method to add busOp; username",
      this.busOperatorUsername.current.value
    );
    console.log("Method to add busOp; password", this.password.current.value);
    event.preventDefault();

    this.props.onAddBusop({
      id: 0,
      busOperatorUsername: this.busOperatorUsername.current.value,
      password: this.password.current.value,
    });
    this.handleClick();
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    return (
      // <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}>
      //     <Grid item xs={3}>
      //     <Card style={{height: 500, width:500, display: 'flex', justifyContent:'center', alignItems:'center'}} variant="outlined">
      //     <CardContent>
      //         <Typography variant="h2" color="textSecondary" gutterBottom style={{display: "flex", justifyContent:'center', alignItems:'middle'}}>
      //                     Enter Details</Typography><br />
      //         <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
      //         <form noValidate autoComplete="off">
      //         <TextField inputRef={this.username} required id="standard-required" label="Required" defaultValue="Username" />
      //         </form>
      //         </div>
      //         <br/><br/>
      //         <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
      //         <form noValidate autoComplete="off">
      //         <TextField inputRef={this.password} required id="standard-password-input" type="password" label="Password"/>
      //         </form>
      //         </div><br/><br/>
      //         <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
      //         <Button color="primary" onClick={this.addBusop.bind(this)}>Save User</Button><br /><br/></div>
      //         <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
      //         <Alert severity="success">{this.props.message}</Alert>
      //         </div>
      //         <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
      //         <Link to="/"><Button color="primary">Back to Login</Button></Link><br /><br/>
      //         </div>
      //     </CardContent>
      //     </Card>
      //     </Grid>
      // </Grid>
      <Container component="main" maxWidth="xs">
      <Card bg="white" text="dark">
        <Card.Body>
          <h2 className="text-center mb-4">New BusOp</h2>
          <Form>
            <Form.Group id="username">
              <Form.Label>
                <h5>Username</h5>
              </Form.Label>
              <Form.Control
                type="text"
                ref={this.busOperatorUsername}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>
                <h5>Password</h5>
              </Form.Label>
              <Form.Control type="password" ref={this.password} required />
            </Form.Group>
            <Button
              className="w-100"
              type="submit"
              onClick={this.addBusop.bind(this)}
            >
              Sign Up
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/">Back to homepage</Link>
          </div>
          {this.props.busOpSigninMessage && (
            <Snackbar
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
            >
              <Alert onClose={this.handleClose} severity="success">
                {this.props.busOpSigninMessage}
              </Alert>
            </Snackbar>
          )}
        </Card.Body>
      </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    busOpSigninMessage: state.busOpSigninMessage,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onAddBusop: (payload) => dispatch(actions.addBusop(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(BusOpSignIn);

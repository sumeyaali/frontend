import React, {useState} from "react";
import {connect} from "react-redux";
import {registerAction} from "../actions/onboardingActions";
// import { FormControl,Input,InputLabel,FormHelperText,FormLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '40ch',
      },
    },
  }));

const Register = (props) => {

const classes = useStyles();
// const dispatch = useDispatch()

const [newUser,setNewUser] = useState({
    // name: '',
    username: '',
    password1: '',
    password2: ''
})

    const handleChanges = e => {
        e.preventDefault();
        setNewUser({...newUser,[e.target.name]: e.target.value})
    }


    const signUp = e => {
        e.preventDefault();
        props.registerAction(newUser)
        props.history.push('/api/login/')
    }

    return (
        <div className='registration' >
            <h1 className='regis'>Registration</h1>
            <form className={classes.root} onSubmit={signUp}>
            
            {/* <input
            type='text'
            name='name'
            placeholder='Name'
            onChange={handleChanges}
            /> */}
            
            <TextField
            type='text'
            name='username'
            id="outlined-secondary"
            label="Username"
            variant="outlined"
            color="primary"
            onChange={handleChanges}
            />

            {/* <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChanges}
            /> */}
            <br/>
            <TextField
            type='password'
            name='password1'
            id="outlined-secondary"
            label="Password"
            variant="outlined"
            color="primary"
            onChange={handleChanges}
            />
            <br/>
            <TextField
            type='password'
            name='password2'
            id="outlined-secondary"
            label="Verify Password"
            variant="outlined"
            color="primary"
            onChange={handleChanges}
            />
            <br/>
            <Button size ="large" variant="contained" color="Primary" type="submit">
            Sign Up
            </Button>
          
        </form>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        user: state.user 
    }
}


export default connect(mapStateToProps,{registerAction})(Register);
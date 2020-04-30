import React, {useState} from "react";
import {connect} from "react-redux";
import {loginAction} from "../actions/onboardingActions"
import {initWorld} from "../actions/gameActions"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '60ch',
      },
    },
  }));

const Login = (props) => {

const classes = useStyles();

const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
})

const handleChanges = e => {
    e.preventDefault()
    setUser({...user,[e.target.name]: e.target.value})
}

const login = e => {
    e.preventDefault();
    props.loginAction(user)
    props.initWorld()
    props.history.push('/api/dungeon')
}

return (
    <div className='login'>

        <h1>Log In</h1>
        <form className={classes.root} onSubmit={login}>
            {/* <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={handleChanges}
            /> */}
            <br/>
            <TextField
            type='text'
            name='username'
            id="outlined-secondary"
            label="Username"
            variant="outlined"
            color="primary"
            onChange={handleChanges}
            />
            <br/>
            {/* <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChanges}
            /> */}
            <TextField
            type='email'
            name='email'
            id="outlined-secondary"
            label="Email"
            variant="outlined"
            color="primary"
            onChange={handleChanges}
            />
            <br/>
            {/* <input
             type='password'
             name='password'
             placeholder='Password'
             onChange={handleChanges}
              /> */}
             <TextField
            type='password'
            name='password'
            id="outlined-secondary"
            label="Password"
            variant="outlined"
            color="primary"
            onChange={handleChanges}
            />  
            <br/>
            {/* <button type="submit">
                Log In 
            </button> */}
            <Button size ="large" variant="contained" color="Primary" type="submit">
            Log In
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

export default connect(mapStateToProps,{loginAction,initWorld})(Login);
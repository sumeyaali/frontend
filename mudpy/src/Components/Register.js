import React, {useState} from "react";
import {connect} from "react-redux";
// import {useDispatch, useSelector} from "react-redux";
import {registerAction} from "../actions/onBoardingActions";





const Register = (props) => {

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
    }
    return (
        <div>
            <form onSubmit={signUp}>
            <h1>Registration</h1>
            {/* <input
            type='text'
            name='name'
            placeholder='Name'
            onChange={handleChanges}
            /> */}

            <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={handleChanges}
            />

            {/* <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChanges}
            /> */}

            <input
             type='password'
             name='password1'
             placeholder='Password'
             onChange={handleChanges}
            />

            <input
             type='password'
             name='password2'
             placeholder='Password'
             onChange={handleChanges}
            />

            <button type="submit">
                Sign Up
            </button>
          
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

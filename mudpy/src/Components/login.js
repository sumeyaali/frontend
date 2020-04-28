import React, {useState} from "react";
import {connect} from "react-redux";
// import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../actions/onBoardingActions"


const Login = (props) => {

// const dispatch = useDispatch()

// const user = useSelector(state => state.onBordingReducer.user)
// const isLoading = useSelector(state => state.onBordingReducer.isLoading)
// const error = useSelector(state => state.onBordingReducer.error)


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
    props.history.push('/dungeon')
}




return (
    <div>

        <h1>Log In</h1>
        <form onSubmit={login}>
            <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={handleChanges}
            />

            <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChanges}
            />
            <input
             type='password'
             name='password'
             placeholder='Password'
             onChange={handleChanges}
              />

            <button type="submit">
                Log In 
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

export default connect(mapStateToProps,{loginAction})(Login);
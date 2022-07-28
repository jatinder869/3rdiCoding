import axios from 'axios'
import { useState } from 'react'
import './login.css'
import { motion } from 'framer-motion'

const Login = (props) => {
    const {onLogin} = props    
    const [loginInfo, setLoginInfo] = useState({
        email: undefined,
        password: undefined
    })
    const [successLogin, setSuccesLogin] = useState()


    const sendLoginInfo = () => {
        axios.post("https://www.savemybills.com.au/api/loginCheck", loginInfo)
            .then(res => {
                setSuccesLogin(res.data.flag)
                onLogin(res.data.flag)
            })
    }

    return (
       
        <div className='login'>
            <div className='header'> Login to Access Retailers </div>
            <motion.form 
            animate={{rotate:[0,10,-10,10,-10,0]}}
            transition={{repeat:1,duration:1}}
            className="login-form" onSubmit={e => {
                    e.preventDefault()
                    sendLoginInfo()
                }}>
                <label htmlFor="email-id">Email</label>
                <input id="email-id" name="email-id" placeholder="abc@email.com" onChange={event => setLoginInfo(prevState => ({...prevState, email:event.target.value}))} required/>
                <label htmlFor="password">Password</label>
                <input name="password" id="password" placeholder="password" type="password" onChange={event => setLoginInfo( prevState => ({...prevState, password:event.target.value}))} required />
                {successLogin === false && <p className='login-failed'>Login Failed</p>}
                <button type="submit">Login</button>
            </motion.form>
        </div>
    )
}

export default Login
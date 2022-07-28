const Login = ()=>{
    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="email-id">Email</label>
                <input id="email-id" name="email-id" placeholder="abc@email.com"/>
                <label htmlFor="password">Password</label>
                <input name="password" id="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
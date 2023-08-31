import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [value,setValue] = useState({
        email:"",
        username:"",
        password:""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name,value} = e.target
        setValue(prev => ({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const resp = await axios.post("https://mern-auth-with-jwt-server.vercel.app/register",value)
            if(resp){
                alert("Successfully Registered")
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
        setValue({
            email:"",
            username:"",
            password:""
        })
    }

  return (
    <div className="mycontainer container">
            <div className="row">
                <h2 className="text-center mb-5">Register Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input name="email" type="email" className="form-control" id="floatingInput" placeholder="Email" value={value.email} onChange={handleChange} />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input name="username" type="text" className="form-control" id="floatingInput" placeholder="username" value={value.username} onChange={handleChange} />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" value={value.password} onChange={handleChange} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Register

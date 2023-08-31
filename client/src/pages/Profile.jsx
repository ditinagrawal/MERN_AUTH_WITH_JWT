import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')

    const handleDelete = async () => {
        const inp = confirm("Are u Sure?")
        if (inp) {
            try {
                const resp = await axios.post("https://mern-auth-with-jwt-server.vercel.app/delete",{username})
                if(resp){
                    alert("Profile Deleted")
                    localStorage.removeItem("token",token)
                    localStorage.removeItem("username",username)
                    navigate('/')
                    window.location.reload()
                }
            } catch (error) {
                console.log(error)
            }
        }
        
    }

    return (
        <div className="mycontainer">
            <div className="card">
                <img src="" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">Hello, {username}</h5>
                        <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                        <button href="" className="btn btn-primary mt-3 me-3" >Update Password</button>
                        <button href="" className="btn btn-danger mt-3" onClick={handleDelete}>Delete Account</button>
                    </div>
            </div>
        </div>
    )
}

export default Profile

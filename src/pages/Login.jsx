import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {

    const navigate = useNavigate()
    const [enusername, setEnusername] = useState()
    const [enpassword, setEnpassword] = useState()
    const [ruser, setRuser] = useState(true)

    const users = props.users

    function handleEuInput(event) {
        setEnusername(event.target.value)
    }

    function handleEupassword(event) {
        setEnpassword(event.target.value)
    }

    function CheckUser() {
        var userfound = false

        users.forEach(function (item) {
            if (item.username === enusername && item.password === enpassword) {
                console.log("Login Successfull")
                userfound = true
                navigate("/Landing", { state: { user:enusername } })
            }

        })
        if (userfound === false) {
            console.log("Login Failed")
            setRuser(false)
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">

                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help your activities after you login :)</p> : <p className="text-red-500">Please Sign Up Before Your Login</p>}


                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent  border rounded-md "
                        placeholder="Username" onChange={handleEuInput}></input>


                    <input type="text" className="w-52 border-black p-1 bg-transparent  border rounded-md "
                        placeholder="Password" onChange={handleEupassword}></input>

                    <button className="bg-[#8272DA] w-24 p-1 border rounded-md" onClick={CheckUser}>Login</button>
                    <p> Don't have an account? <Link className="underline" to={"/Signup"}>Login</Link></p>

                </div>
            </div>
        </div>
    )
}
export default Login
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) {
 
    const navigate = useNavigate()
    const [enusername, setEnusername] = useState()
    const [enpassword, setEnpassword] = useState()

    const users = props.users
    const setusers = props.setusers

    function handleEuInput(event) {
        setEnusername(event.target.value)
    }

    function handleEupassword(event) {
        setEnpassword(event.target.value)
    }
    function AddUser()  
    {
       setusers([...users,{username:enusername,password:enpassword}])
       navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p className="">Sign Up here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent  border rounded-md "
                        placeholder="Username" onChange={handleEuInput}></input>


                    <input type="text" className="w-52 border-black p-1 bg-transparent  border rounded-md "
                        placeholder="Password" onChange={handleEupassword} ></input>



                    <input type="text" className="w-52 border-black p-1 bg-transparent  border rounded-md "
                        placeholder="Confirm Password" ></input>

                    <button className="bg-[#FCA201] w-24 p-1 border rounded-md" onClick={AddUser}>Sign Up
                        
                    </button>
                    <p> Already have an account? <Link className="underline" to={"/"}>Sign Up</Link></p>

                </div>
            </div>
        </div>
    )

}
export default Signup
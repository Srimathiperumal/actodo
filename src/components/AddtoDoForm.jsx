import { useState } from "react"

function AddtoDoForm(props) {
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newactivity, setnewactity] = useState("")

    function handleChange(event) 
    {
       setnewactity(event.target.value)
    }

    function addActvity()
    {

        setactivityArr([...activityArr,{id:activityArr.length+1, activity:newactivity}])
        setnewactity("")
    }
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>

            <div>
                <input value={newactivity} onChange={handleChange} type="text" placeholder="Next Activity?" className=" border border-black bg-transparent px-1">
                </input>
                <button className="bg-black text-white px-1  border border-black " onClick={addActvity}>Add</button>
            </div>
        </div>
    )

}
export default AddtoDoForm
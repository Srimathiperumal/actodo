import AddtoDoForm from "./AddtoDoForm"
import TodoList from "./TodoList"
import { useState } from "react"

function ToDoContainer() {
    const [activityArr,setactivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take a shower"
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddtoDoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
                <TodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
        </div>
    )
}
export default ToDoContainer
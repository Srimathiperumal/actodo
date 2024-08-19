function TodoItem(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

   function handleDelete(deleteId )
   {
      var temArr = activityArr.filter(function(item)
{
    if(item.id === deleteId)
    {
        return(false)
    }
    else{
        return(true)
    }
})
setactivityArr(temArr)
   }
    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button className="text-red-500" onClick={()=>handleDelete(props.id)}>delete</button>
        </div>


    )
}
export default TodoItem
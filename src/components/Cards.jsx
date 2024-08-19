function Cards(props)
{
    return(
        <div style={{ backgroundColor:props.bgColor}} className="py-10 px-10 border rounded-md flex-grow text-center">
          <h1 className="text-2xl font-medium"> {props.title}</h1>
          <p> {props.subtitle}</p>
        </div>
    )

}
export default Cards
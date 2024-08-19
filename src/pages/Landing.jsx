import Header from "../components/Header";
import Cards from "../components/Cards";
import TodoContainer from "../components/ToDoContainer";
import { useLocation } from "react-router-dom"


function Landing() {

    const data = useLocation()

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">

                {/* Header */}
                <Header username={data.state.user}/>

                {/* Cards */}
                <div className="flex  justify-between flex-wrap gap-7 my-5">
                    <Cards bgColor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Cards>
                    <Cards bgColor={"#FD6663"} title={"December 20"} subtitle={"20:24:00"}></Cards>
                    <Cards bgColor={"#FCA201"} title={"Built Using"} subtitle={"React"} ></Cards>

                </div>

                {/* TodoList */}
                <TodoContainer />

            </div>
        </div>




    );
}


export default Landing
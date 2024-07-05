import React from "react"
import Cards from "./Cards";
import list  from"../../public/list.json"
import { Link } from "react-router-dom";
function Course() {
  return (
  <>
  <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
    <div className="mt-28 item-center justify-center text-center ">
      <h1 className="text-2xl font-semibold md:text-4xl">
        We're delighted to have you <span className="text-blue-500">here! :)</span>
       </h1>
       <p className="mt-12">
         Welcome to the Bokk store website,you can view the courses in this section 
       </p>
       <Link to="/">
       <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">Back</button>
       </Link>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
      {list.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
    </div>
  </div>
  </>
  );
}

export default Course;
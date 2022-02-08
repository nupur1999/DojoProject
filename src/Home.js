import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useState } from "react";
//npx json-server --watch src/data/db.json --port 8000
const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
 
  return (
    <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogsList={blogs} title="All Blogs" /> }

    </div>
  );
}
 
export default Home;
import BlogList from "./BlogList";
import useFetch from "./useFetch";
//npx json-server --watch src/data/db.json --port 8000
const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
   const deleteItem =(ide)=>{
    const newBlogs = blogs.filter((blog)=> blog.id !== ide);
    setBlogs(newBlogs)
  }
  return (
    <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogsList={blogs} title="All Blogs" handleDelete ={deleteItem}/> }

    </div>
  );
}
 
export default Home;
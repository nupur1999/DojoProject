const BlogList = ({blogsList,title,handleDelete}) => {

  return (
    <div className="block-list">
      <h1>{title}</h1>
      {blogsList.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>Title is {blog.title}</h2>
          <p>Author is {blog.author}</p>
           <button onClick={()=>handleDelete(blog.id)}>Delete</button> 
        </div>
      ))}
    </div>
  );
};
export default BlogList;

import { Link } from "react-router-dom";
const Navebar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
         <div className="Links">
           <Link to="/home">Home</Link>
           <Link to="/create">New Blog</Link>
         </div>
    </nav>
  );
};
export default Navebar;

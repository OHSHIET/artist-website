import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/artist-website/page1">page1</Link>
                  <Link to="/artist-website/page2">page2</Link>
            </div>
      )
}
export default Navbar;
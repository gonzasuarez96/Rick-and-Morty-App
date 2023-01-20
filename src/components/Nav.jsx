import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";

const Nav = ({onSearch}) =>{
    return(
        <nav>
            <Link to='About'>About</Link>
            <Link to='Home'>Home</Link>
            <SearchBar onSearch={onSearch}/>
            <hr/>

        </nav>
    )
}
export default Nav;
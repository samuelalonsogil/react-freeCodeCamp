import {Link} from "react-router-dom";

export default function Navbar(){
    return ( <>

        <div id={'main-container'}>
            <Link to={'/'}>Home</Link>
            <Link to={'/first-component'}>First component</Link>
            <Link to={'/second-component'}>Second component</Link>
            <Link to={'/first-challenge'}>First Challenge</Link>
            <Link to={'/business-card'}>Business Card</Link>
            <Link to={'/contact'}>Contact</Link>

        </div>

    </> )
}
import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="w-full flex flex-row h-15 bg-[#496988] items-center justify-between px-5 text-white">
            <p className="text-white text-[24px] font-semibold">Lost-Found App</p>
            <div className="w-1/3 flex items-center justify-around">

<Link to="/sign-in" className="p-2 bg-[#75cee4] font-semibold text-white rounded-md">Sign In</Link>
<Link to="/sign-up" className="p-2 bg-[#a01b21] font-semibold text-white rounded-md">Sign Up</Link>
            </div>
        </div>
     );
}
 
export default Navbar;
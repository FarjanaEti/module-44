import { useState } from "react";
import Link from "./Link";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {

  const [open, setOpen]=useState(false)                           
    const routes = [
 { id: 1, path: "/", name: "Home" },
 { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" }, 
  { id: 4, path: "/contact", name: "Contact" }, 
  { id: 5, path: "/profile", name: "Profile" }
];
                          
  return (
   <div className="border mx-auto w-2/3">
        <h3 className="text-3xl text-red-300 text-center">Navbar</h3>
        <nav>
          <div className="md:hidden" onClick={()=>setOpen(!open)}>
            {/* { open===true ? "open": "close" } */}
            {
              open === true? <IoMdMenu className="text-2xl"></IoMdMenu> 
              :<IoCloseSharp className="text-2xl"></IoCloseSharp>
            }
            
          </div>
          </nav> 
    <ul className={`md:flex duration-1000 absolute ${open ? "top-24": "-top-60"} gap-4`}>
           {
             routes.map(route=> <Link key={route.id} route={route}></Link>)                 
           }                   
           {/* {
             routes.map(route=><li key={route.id}>
           }                    */}
       </ul>                                                                               
  </div>
  );
};

export default Navbar;
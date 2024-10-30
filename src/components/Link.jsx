import { FaArrowRight } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Link = ({route}) => {                      
      return (
      <div>
          <li>
           <a className="flex items-center text-center gap-2" href={route.path}><FaArrowRight></FaArrowRight> {route.name}</a>                   
       </li>                                                                                
    </div>
 );
};

Link.propTypes={
   route:PropTypes.object                           
}
export default Link;
import { GoIssueClosed } from "react-icons/go";

const Feature = ({feature}) => {
         return (
      <div>
        <p className="flex gap-2"><GoIssueClosed></GoIssueClosed> {feature}</p>                                                                                  
    </div>
);
};

export default Feature;
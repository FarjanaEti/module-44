import Feature from "../Feature";
const Price = ({option}) => {
      const {name,features,Price}=option                        
  return (
      <div className="border p-10 bg-slate-600 text-white">
       <h2>
         <span>{Price}</span>
         <span>/month</span>                     
     </h2> 
     <h4>{name}</h4>
     <div>
        {
         features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)                     
        }                      
     </div>  
     <button className="bg-white p-2 rounded-lg mt-2 hover:bg-orange-400 w-full text-black">Buy now</button>                                                                                
  </div>
 );
};

export default Price;
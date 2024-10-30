import Price from "./Price";

const Gym = () => {
    const Mygym= [
{
"priceId": 101, 
"name": "Basic Membership", 
"features": ["Access to gym equipment", "Locker room access", "One complimentary fitness assessment"], 
"Price": 25, 
},
 {
"priceId": 102, 
"name": "Standard Membership", 
"features": ["Access to gym equipment", "Locker room access", "One complimentary fitness assessment"], 
"Price": 250, 
},
{
"priceId": 103, 
"name": "Primium Membership", 
"features": ["Access to gym equipment", "Locker room access", "One complimentary fitness assessment"], 
"Price": 30, 
},
    ];

  return (
     <div className="grid grid-cols-3 gap-10">
      {
       Mygym.map(option=> <Price key={option.priceId} option={option}></Price>)                       
      }                                                                                    
  </div>
 );
};

export default Gym;
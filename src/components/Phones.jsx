import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
  const [phones, setPhones] =useState([])   
  useEffect(()=>{
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
       const phoneData=data.data.data ;
       const fakeData=phoneData.map(phone=>{
          const obj={
              name:phone.phone_name, 
             Price:parseInt(phone.slug.split('-')[1])               
          }                                                                                                     
          return obj;
       })            
       setPhones(fakeData)          
    })
                                  
  },[])
  console.log(phones) 
 return (
  <div>               
    <h2 className="text-center text-3xl font-bold">Phones:{phones.length}</h2>
   <div className="grid grid-cols-4 my-5">
   {
     phones.map((item,idx) => (
        <div className="border p-4" key={idx}>
          Name:{item.name}
        </div>    
      ))}                         
   </div>
   <BarChart width={600} height={400} data={phones}>
      <Bar dataKey="Price"  fill="pink"></Bar>   
      <XAxis dataKey="name" ></XAxis>    
      <YAxis></YAxis> 
      <Tooltip></Tooltip>                
   </BarChart>
 </div>
 );
};

export default Phones;
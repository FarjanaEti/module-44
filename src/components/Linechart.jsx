import { LineChart, Line, XAxis, YAxis } from 'recharts';
const Linechart = () => {
    const marks= [
  { "studentId": 1, "name": "Alice", "mathScore": 78, "physicsScore": 82, "biologyScore": 79 },
  { "studentId": 2, "name": "Bob", "mathScore": 85, "physicsScore": 76, "biologyScore": 88 },
  { "studentId": 3, "name": "Charlie", "mathScore": 92, "physicsScore": 89, "biologyScore": 94 },
  { "studentId": 4, "name": "David", "mathScore": 67, "physicsScore": 72, "biologyScore": 68 },
  { "studentId": 5, "name": "Eve", "mathScore": 74, "physicsScore": 70, "biologyScore": 73 },
  { "studentId": 6, "name": "Frank", "mathScore": 88, "physicsScore": 85, "biologyScore": 86 },
  { "studentId": 7, "name": "Grace", "mathScore": 91, "physicsScore": 93, "biologyScore": 90 },
  { "studentId": 8, "name": "Hannah", "mathScore": 83, "physicsScore": 81, "biologyScore": 84 },
  { "studentId": 9, "name": "Ian", "mathScore": 76, "physicsScore": 78, "biologyScore": 77 },
  { "studentId": 10, "name": "Jane", "mathScore": 89, "physicsScore": 87, "biologyScore": 92 }
]
                          
 return (
    <div>
        <LineChart width={1000} height={400} data={marks}>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Line dataKey="mathScore" stroke='red'></Line> 
          <Line dataKey={"physicsScore"} stroke='green'></Line>                   
       </LineChart> 

   </div>
 );
};

export default Linechart;
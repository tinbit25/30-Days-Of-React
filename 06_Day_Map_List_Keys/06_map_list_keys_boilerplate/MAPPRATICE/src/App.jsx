// import './App.css'
// import './index.css'

// import React from "react";

// const App = () => {
//   // Function to check if a number is prime
//   const isPrime = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   // Generate an array of numbers from 0 to 31
//   const numbers = Array.from({ length: 32 }, (_, index) => index);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
//       <h1 className="text-4xl font-bold mb-4">30 Days Of React</h1>
//       <h2 className="text-2xl font-medium mb-8">Number Generator</h2>
//       <div className="grid grid-cols-8 gap-2">
//         {numbers.map((num) => {
//           const colorClass = isPrime(num)
//             ? "bg-red-500"
//             : num % 2 === 0
//             ? "bg-green-500"
//             : "bg-yellow-500";
//           return (
//             <div
//               key={num}
//               className={`text-white text-center font-bold w-12 h-12 flex items-center justify-center rounded ${colorClass}`}
//             >
//               {num}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };




// export default App
import './App.css';
import './index.css';
import React from "react";

const App = () => {
  // Array of hexadecimal colors
  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33A1FF", "#A133FF", 
    "#FF8333", "#33FFBD", "#FF33C1", "#33C1FF", "#C133FF", "#FF5733",
    "#FF9933", "#9933FF", "#FF33FF", "#33FF67", "#FF33F7", "#67FF33",
    "#FF7933", "#FF3333", "#33FF95", "#33C1C1", "#9D33FF", "#FF3367",
    "#7D33FF", "#FF9D33", "#3333FF", "#33FF7D", "#7D33FF", "#33B3FF", 
    "#FF5733", "#33C9FF"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-white">30 Days Of React</h1>
      <h2 className="text-2xl font-medium mb-8 text-white">Hexadecimal Colors</h2>
      <div className="grid grid-cols-8 gap-2">
        {colors.map((color, index) => (
          <div className="" style={{backgroundColor:color}}>
<p>{color}</p>

          </div>))
        }
      </div>
    </div>
  );
};

export default App;

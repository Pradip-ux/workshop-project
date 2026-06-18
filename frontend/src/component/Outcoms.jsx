// const Outcomes = () => {
//   const points = [
//     "Understand AI fundamentals",
//     "Learn robotics basics",
//     "Build mini AI projects",
//     "Improve problem-solving",
//     "Enhance logical thinking",
//   ];

//   return (
//     <div className="bg-gray-100 py-12 px-6">
//       <h2 className="text-3xl font-bold text-center mb-6">
//         Learning Outcomes
//       </h2>

//       <ul className="max-w-3xl mx-auto space-y-3 list-disc pl-5">
//         {points.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Outcomes;

const Outcomes = () => {
  const points = [
    "Understand AI fundamentals",
    "Learn robotics basics",
    "Build mini AI projects",
    "Improve problem-solving",
    "Enhance logical thinking",
  ];

  return (
    <div className="relative overflow-hidden bg-[#030712] py-24 px-6">
      
      {/* Premium Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />

      <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent text-center mb-12">
        Learning Outcomes
      </h2>

      {/* Styled as a clean list with no structural changes to your map logic */}
      <ul className="relative z-10 max-w-3xl mx-auto space-y-4 list-none pl-0">
        {points.map((item, index) => (
          <li 
            key={index}
            className="group flex items-center gap-4 bg-white/[0.01] border border-white/5 rounded-2xl p-4 md:p-5 backdrop-blur-md transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.03] hover:translate-x-1"
          >
            {/* Custom high-tech glowing bullet icon replacement */}
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Outcome text */}
            <span className="text-base md:text-lg font-medium text-neutral-200 transition-colors duration-200 group-hover:text-white">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Outcomes;
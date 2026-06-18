// const FAQ = () => {
//   const faqs = [
//     {
//       q: "Do I need prior knowledge?",
//       a: "No, beginners are welcome.",
//     },
//     {
//       q: "Will recordings be available?",
//       a: "Yes, all sessions are recorded.",
//     },
//     {
//       q: "What tools are required?",
//       a: "Laptop and internet connection.",
//     },
//   ];

//   return (
//     <div className="py-12 px-6">
//       <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>

//       <div className="max-w-3xl mx-auto space-y-4">
//         {faqs.map((faq, index) => (
//           <div key={index}>
//             <h3 className="font-semibold">{faq.q}</h3>
//             <p>{faq.a}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

const FAQ = () => {
  const faqs = [
    {
      q: "Do I need prior knowledge?",
      a: "No, beginners are welcome.",
    },
    {
      q: "Will recordings be available?",
      a: "Yes, all sessions are recorded.",
    },
    {
      q: "What tools are required?",
      a: "Laptop and internet connection.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#030712] py-24 px-6">
      
      {/* Background Section Separator Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent pointer-events-none" />

      <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent text-center mb-12">
        FAQs
      </h2>

      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] p-5 md:p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.03]"
          >
            {/* Subtle left border accent highlight visible on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-indigo-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <h3 className="text-base md:text-lg font-semibold text-white tracking-wide flex justify-between items-center gap-4 transition-colors duration-200 group-hover:text-blue-400">
              {faq.q}
              {/* Premium geometric indicator arrow */}
              <svg 
                className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-transform duration-300 transform group-hover:translate-x-0.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            
            <p className="mt-3 text-sm md:text-base text-neutral-400 leading-relaxed font-light pl-0">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
// const Details = () => {
//   return (
//     <div className="py-12 px-6 text-center">
//       <h2 className="text-3xl font-bold mb-6">Workshop Details</h2>

//       <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
//         <div>Age: 8–14</div>
//         <div>Duration: 4 Weeks</div>
//         <div>Mode: Online</div>
//         <div>Fee: ₹2,999</div>
//         <div>Start: 15 July 2026</div>
//       </div>
//     </div>
//   );
// };

// export default Details;

const Details = () => {
  return (
    <div className="relative overflow-hidden bg-[#030712] py-20 px-6 text-center">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent pointer-events-none" />

      <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-12">
        Workshop Details
      </h2>

      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
        
        {/* Card 1: Age */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Target Group</div>
          <div className="text-xl font-bold text-white tracking-wide">Age: 8–14</div>
        </div>

        {/* Card 2: Duration */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.04]">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Timeline</div>
          <div className="text-xl font-bold text-white tracking-wide">Duration: 4 Weeks</div>
        </div>

        {/* Card 3: Mode */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.04]">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Location</div>
          <div className="text-xl font-bold text-white tracking-wide">Mode: Online</div>
        </div>

        {/* Card 4: Fee */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04]">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Investment</div>
          <div className="text-xl font-bold text-emerald-400 tracking-wide">Fee: ₹2,999</div>
        </div>

        {/* Card 5: Start */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Cohort</div>
          <div className="text-xl font-bold text-white tracking-wide">Start: 15 July 2026</div>
        </div>

      </div>
    </div>
  );
};

export default Details;
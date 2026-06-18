

// export default EnquiryForm;
import { useForm } from "react-hook-form";
import { submitEnquiry } from "../services/api";
import { useState } from "react";

const EnquiryForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await submitEnquiry(data);
      alert("Enquiry submitted successfully!");
      reset();
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#030712] py-24 px-6 flex flex-col items-center">
      
      {/* Soft Ambient Radial Blur behind the form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent text-center mb-8">
        Register Now
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 w-full max-w-md mx-auto space-y-5 bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
      >
        <div>
          <input
            placeholder="Name"
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 outline-none transition-all duration-200 focus:border-blue-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-blue-500/30"
            {...register("name", { required: true })}
          />
        </div>

        <div>
          <input
            placeholder="Email"
            type="email"
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 outline-none transition-all duration-200 focus:border-blue-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-blue-500/30"
            {...register("email", { required: true })}
          />
        </div>

        <div>
          <input
            placeholder="Phone"
            type="tel"
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 outline-none transition-all duration-200 focus:border-blue-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-blue-500/30"
            {...register("phone", { required: true })}
          />
        </div>

        <button
          className="w-full mt-2 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white py-3.5 font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.35)] transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
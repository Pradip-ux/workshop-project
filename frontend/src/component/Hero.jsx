const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-[#030712] text-white text-center py-24 px-4 md:py-32">

            <h1 className="text-4xl md:text-6xl font-extrabold">
                AI & Robotics Summer Workshop
            </h1>

            <p className="mt-6 text-lg text-neutral-400">
                Explore the world of Artificial Intelligence and Robotics with hands-on projects.
            </p>

            <button
                onClick={() => {
                    const section = document.getElementById("enquiry");
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }}
                className="mt-10 bg-white text-black px-6 py-3 rounded-lg font-semibold"
            >
                Enroll Now
            </button>

        </div>
    );
};

export default Hero;
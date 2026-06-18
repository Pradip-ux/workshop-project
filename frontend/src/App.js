import Hero from "./component/Hero";
import Details from "./component/Details";
import Outcomes from "./component/Outcoms";
import FAQ from "./component/FAQ";
import EnquiryForm from "./component/EnquiryForm";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Details />
      <Outcomes />
      <FAQ />
      <div id="enquiry">
        <EnquiryForm />
      </div>
    </div>
  );
}

export default App;
import Client from "../../../public/happy-client.png";

const WeDo = () => {
  return (
    <div
      className="w-full  flex justify-end font-montserrat"
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.1)), url('/happy-client.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" w-full ">
        <div className="bg-[#0C51A1] bg-opacity-90 h-full px-10 py-16 float-right md:w-1/2 w-full">
          <h1 className="text-white font-bold  leading-10 text-3xl ">
            Expert Grant Management <br /> Solutions
          </h1>
          <div className="border-b-2 border-[#0018A8] w-28"></div>
          <div className="mt-6">
            <h1 className="font-bold text-white text-2xl">
              “Maximize your grant <br /> opportunities with us.”
            </h1>
          </div>

          <div className="mt-3 leading-8">
            <p>
              The UNDP GEF-SGP announces the 2024 "call for proposals" to award
              small grants of up to $50,000 under its Micro, Small, and Medium
              Enterprises (MSMEs),Students and Business owners,
            </p>

            <p className="mt-1">
              to Support Initiative to qualified organizations and individuals
              to build and enhance the capacities of potential and established
              MSMEs operating in the environment and natural resource ...
            </p>

            <p className="mt-6">
              Choose excellence, choose our grant management services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDo;

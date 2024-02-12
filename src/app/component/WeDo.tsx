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
              Our grant management solutions are designed to streamline the
              entire process, from identifying funding opportunities to
              successful grant implementation.
            </p>

            <p className="mt-6">
              Let us handle the complexities of grant management, so you can
              focus on achieving your project objectives.
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

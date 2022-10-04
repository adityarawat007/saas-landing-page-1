import Image from "next/image";

const SubHero3 = () => {
  return (
    <section className="">
      <div className="py-10 md:py-20">
        <div className="container mx-auto flex flex-col-reverse  items-center lg:gap-x-20  space-y-6 lg:flex-row lg:space-y-0 ">
          {/* Left item */}
          <div className="flex flex-col space-y-4 md:w-4/5 md:space-y-6  ">
            <h6 className="text-md font-medium tracking-widest text-op-yellow">
              DELIGHT YOUR CUSTOMERS
            </h6>
            <h2 className="text-5xl">Upgrade your billing experience</h2>
            <p className="text-2xl">
              Deliver a world-class billing experience that’ll keep your
              customers happy. Metronome helps you increase retention and
              revenue with real-time, transparent, and understandable billing,
              without the pain of building it yourself.
            </p>
            <div className="space-y-2">
              <div className="flex space-x-2 ">
                <Image src="/checkbox.svg" width={30} height={30} />
                <p className="text-md text-op-yellow">
                  REAL-TIME USAGE, CREDITS, AND RUNNING BALANCE APIS
                </p>
              </div>
              <div className="flex space-x-2">
                <Image src="/checkbox.svg" width={30} height={30} />
                <p className="text-md text-op-yellow">
                  WEBHOOKS TO POWER ALERTING USE CASES FOR CUSTOMERS
                </p>
              </div>
              <div className="flex space-x-2 ">
                <Image src="/checkbox.svg" width={30} height={30} />
                <p className="text-md text-op-yellow">
                  COST GROUPING FUNCTIONALITY TO ORGANIZE INVOICES
                </p>
              </div>
            </div>
          </div>
          <div className="items-center md:w-1/2 lg:w-2/3">
            <img src="/illustration-intro.svg" alt=" bg one" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero3;

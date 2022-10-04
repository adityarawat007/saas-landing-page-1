import Image from "next/image";

const SubHero2 = () => {
  return (
    <section className="">
      <div className="pt-10 md:pt-20">
        <div className="container mx-auto flex flex-col-reverse  items-center lg:gap-x-20 space-y-6 lg:flex-row-reverse lg:space-y-0 ">
          {/* Left item */}
          <div className="flex flex-col space-y-4 md:w-4/5 md:space-y-6  ">
            <h6 className="text-md font-medium tracking-widest text-op-yellow">
              PRODUCT-LED GROWTH
            </h6>
            <h2 className="text-5xl">From self-serve to enterprise</h2>
            <p className="text-2xl">
              Power new insights and capabilities for product-led growth with a
              consistent source of truth for usage and billing. Metronome is
              versatile enough to handle everything from frictionless self-serve
              to your most bespoke enterprise plans, so you never have to jump
              between systems.
            </p>
            <div className="space-y-2">
              <div className="flex space-x-2 ">
                <Image src="/checkbox.svg" width={30} height={30} />
                <p className="text-md text-op-yellow">
                  AUTOMATED SELF-SERVE PROVISIONING AT SCALE
                </p>
              </div>
              <div className="flex space-x-2">
                <Image src="/checkbox.svg" width={30} height={30} />
                <p className="text-md text-op-yellow">
                  CRAFT CUSTOM PLANS TO SUPPORT ENTERPRISE CONTRACTS
                </p>
              </div>
              <div className="flex space-x-2 ">
                <Image src="/checkbox.svg" width={30} height={30} />
                <p className="text-md text-op-yellow">
                  TEST PRICING CHANGES FOR IMPACT BEFORE ROLLOUT
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

export default SubHero2;

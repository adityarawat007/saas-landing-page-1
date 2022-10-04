import Image from "next/image";

const SubHero = () => {
  return (
    <section className="">
      <div className="pt-10 md:pt-20">
        <div className="container flex flex-col-reverse lg:flex-row lg:gap-x-20  space-y-6  items-center mx-auto lg:space-y-0 ">
                  {/* Left item */}
          <div className="flex flex-col md:w-4/5 space-y-4 md:space-y-6  ">
            <h6 className="text-md font-medium text-op-yellow tracking-widest">MOVE FASTER</h6>
            <h2 className="text-5xl">Designed for flexibility</h2>
            <p className="text-2xl">
              Not 100% locked in on your pricing model? Want to experiment as
              you launch new features and products? Push your data into
              Metronome and rapidly iterate on your evolving business model
              without rearchitecting billing or rewriting code.
            </p>
            <div className="space-y-2">
              <div className="flex space-x-2 ">
                <Image src="/checkbox.svg" width={30} height={30} />
                <p className="text-md text-op-yellow">COMPLEX PRICING MODELS WITHOUT CUSTOM CODE</p>
              </div>
              <div className="flex space-x-2">
                <Image src="/checkbox.svg" width={30} height={30} />
                <p className="text-md text-op-yellow" >COMPLEX PRICING MODELS WITHOUT CUSTOM CODE</p>
              </div>
              <div className="flex space-x-2 ">
                <Image src="/checkbox.svg" width={30} height={30} />
                <p className="text-md text-op-yellow">COMPLEX PRICING MODELS WITHOUT CUSTOM CODE</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-2/3 ">
            <img src="/illustration-intro.svg" alt=" bg one" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;

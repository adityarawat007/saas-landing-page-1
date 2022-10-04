const GridSection = () => {
  return (
    <section className="conatiner">
      <div className="py-10 md:py-20 ">
        <div className="mx-auto flex flex-col items-center justify-center space-y-14  ">
          <h2 className="text-6xl font-medium">
            Empower your teams with Metronome
          </h2>
          <div className="grid bg-green-600 lg:grid-cols-2 rounded-lg">
            <div className="space-y-6 bg-op-green px-6 py-10 md:px-20 md:py-24 ">
              <img src="/grid-1.svg" alt="grid one image" />
              <div className="space-y-2">
                <h6 className="text-sm font-medium  text-white md:text-lg">
                  ENGINEERING
                </h6>
                <h5 className="text-xl font-medium text-white md:text-2xl">
                  Easy integration, easier maintenance{" "}
                </h5>
              </div>
              <p className="text-md font-medium text-white md:text-xl">
                Metronome frees engineering resources with fast deployment and
                low-effort maintenance. We integrate painlessly with your
                existing tech stack, and enable no-code adjustments to pricing,
                bundles, and packaging. Our platform features integration
                tooling and clear documentation for a best-in-class developer
                experience.
              </p>
            </div>
            <div className="space-y-6 bg-op-light-blue px-6 py-10 md:px-20 md:py-24">
              <img src="/grid-2.svg" alt="grid one image" />
              <div className="space-y-2">
                <h6 className="text-sm font-medium   md:text-lg">
                  ENGINEERING
                </h6>
                <h5 className="text-xl font-medium  md:text-2xl">
                  Easy integration, easier maintenance{" "}
                </h5>
              </div>
              <p className="text-md font-medium  md:text-xl">
                Metronome frees engineering resources with fast deployment and
                low-effort maintenance. We integrate painlessly with your
                existing tech stack, and enable no-code adjustments to pricing,
                bundles, and packaging. Our platform features integration
                tooling and clear documentation for a best-in-class developer
                experience.
              </p>
            </div>
            <div className="space-y-6 bg-op-light-mint px-6 py-10 md:px-20 md:py-24">
              <img src="/grid-3.svg" alt="grid one image" />
              <div className="space-y-2">
                <h6 className="text-sm font-medium  md:text-lg">
                  ENGINEERING
                </h6>
                <h5 className="text-xl font-medium  md:text-2xl">
                  Easy integration, easier maintenance{" "}
                </h5>
              </div>
              <p className="text-md font-medium  md:text-xl">
                Metronome frees engineering resources with fast deployment and
                low-effort maintenance. We integrate painlessly with your
                existing tech stack, and enable no-code adjustments to pricing,
                bundles, and packaging. Our platform features integration
                tooling and clear documentation for a best-in-class developer
                experience.
              </p>
            </div>
            <div className="space-y-6 bg-op-clay px-6 py-10 md:px-20 md:py-24">
              <img src="/grid-4.svg" alt="grid one image" />
              <div className="space-y-2">
                <h6 className="text-sm font-medium   md:text-lg">
                  ENGINEERING
                </h6>
                <h5 className="text-xl font-medium  md:text-2xl">
                  Easy integration, easier maintenance{" "}
                </h5>
              </div>
              <p className="text-md font-medium  md:text-xl">
                Metronome frees engineering resources with fast deployment and
                low-effort maintenance. We integrate painlessly with your
                existing tech stack, and enable no-code adjustments to pricing,
                bundles, and packaging. Our platform features integration
                tooling and clear documentation for a best-in-class developer
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;

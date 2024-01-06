function Hero() {
    return (
        <>
            <div className="bg-grey-100">
              <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
              {/* First Split Panel - Starts*/}
                <div className="px-6 py-12 max-w-lg mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
                  <div className="xl:max-w-xl">
                    <img className="h-10" src="logo.svg" alt="Workcation"/>
                    <img className="mt-6 rounded-lg shadow-xl sm:h-72 sm:w-full sm:object-cover object-center lg:hidden" src="beach-work.jpg" alt="Woman workcation on the beach"/>
                    <h1 className="mt-6 font-headline text-[1.7rem] font-bold text-gray-800 tracking-wide sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                      You can work from anywhere. 
                      <br/>
                      <span className="text-indigo-500">Take advantage of it.</span>
                    </h1>
                    
                    <p className="mt-2 sm:mt-4 sm:text-base text-gray-600">
                      { "Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather when ever you're not on vacation" }
                    </p>

                    <div className="mt-4 space-x-4">
                      <button type="button" className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition">Book your escape</button>
                      <button type="button" className="btn btn-secondary">Learn more</button>
                    </div>
                  </div>
                </div>
              {/* First Split Panel - Ends*/}
              {/* Second Split Panel - Starts*/}
              <div className="hidden relative lg:block 2xl:col-span-3">
                <img className="absolute insert-0 w-full h-full object-fit object-cover" src="beach-work.jpg" alt="Woman workcation on the beach"/>
              </div>
              {/* Second Split Panel - Ends*/}
              </div>
            </div>
        </>
    )
}

export default Hero
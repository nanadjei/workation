function Listing() {
  return (
    <div className="bg-gray-100">
        <div className="max-w-md mx-auto pb-6 sm:max-w-xl lg:max-w-6xl lg:px-6 xl:p-0">
            <h2 className="text-gray-800 text-xl tracking-wide font-semibold pt-4">Popular destinations</h2>
            <p className="text-gray-700 mt-2">A selection of great work-friendly cities with lots to see and explore</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {/* Card Starts Here */}
                <div className="shadow-sm bg-white mt-6 rounded-lg items-center overflow-hidden flex">
                    <img className="h-32 w-32 flex-shrink-0" src="./chicago.jpg" alt="chicago"/>
                    <div className="px-6 py-2">
                        <h3 className="text-lg font-semibold text-gray-700">Toronto</h3>
                        <p className="text-gray-600">$120 / night average</p>
                        <p className="text-indigo-500 pt-6 font-semibold text-sm hover:font-bold">Explore 76 Properties</p>
                    </div>
                </div>
                {/* Card Ends Here */}
                {/* Card Starts Here */}
                <div className="shadow-sm bg-white mt-6 rounded-lg items-center overflow-hidden flex">
                    <img className="h-32 w-32 flex-shrink-0" src="./colorado.jpg" alt="colorado"/>
                    <div className="px-6 py-2">
                        <h3 className="text-lg font-semibold text-gray-700">Colorado</h3>
                        <p className="text-gray-600">$163 / night average</p>
                        <p className="text-indigo-500 pt-6 font-semibold text-sm hover:font-bold">Explore 126 Properties</p>
                    </div>
                </div>
                {/* Card Ends Here */}
                {/* Card Starts Here */}
                <div className="shadow-sm bg-white mt-6 rounded-lg items-center overflow-hidden flex">
                    <img className="h-32 w-32 flex-shrink-0" src="./malibu.jpg" alt="malibu"/>
                    <div className="px-6 py-2">
                        <h3 className="text-lg font-semibold text-gray-700">Malibu</h3>
                        <p className="text-gray-600">$253 / night average</p>
                        <p className="text-indigo-500 pt-6 font-semibold text-sm hover:font-bold">Explore 89 Properties</p>
                    </div>
                </div>
                {/* Card Ends Here */}

                {/* Card Starts Here */}
                <div className="shadow-sm bg-white mt-6 rounded-lg items-center overflow-hidden flex">
                    <img className="h-32 w-32 flex-shrink-0" src="./miami.jpg" alt="Miami"/>
                    <div className="px-6 py-2">
                        <h3 className="text-lg font-semibold text-gray-700">Miami</h3>
                        <p className="text-gray-600">$123 / night average</p>
                        <p className="text-indigo-500 pt-6 font-semibold text-sm hover:font-bold">Explore 90 Properties</p>
                    </div>
                </div>
                {/* Card Ends Here */}
                {/* Card Starts Here */}
                <div className="shadow-sm bg-white mt-6 rounded-lg items-center overflow-hidden flex">
                    <img className="h-32 w-32 flex-shrink-0" src="./seattle.jpg" alt="Seattle"/>
                    <div className="px-6 py-2">
                        <h3 className="text-lg font-semibold text-gray-700">Seattle</h3>
                        <p className="text-gray-600">$620 / night average</p>
                        <p className="text-indigo-500 pt-6 font-semibold text-sm hover:font-bold">Explore 40 Properties</p>
                    </div>
                </div>
                {/* Card Ends Here */}
                {/* Card Starts Here */}
                <div className="shadow-sm bg-white mt-6 rounded-lg items-center overflow-hidden flex">
                    <img className="h-32 w-32 flex-shrink-0" src="./toronto.jpg" alt="Toronto"/>
                    <div className="px-6 py-2">
                        <h3 className="text-lg font-semibold text-gray-700">Toronto</h3>
                        <p className="text-gray-600">$500 / night average</p>
                        <p className="text-indigo-500 pt-6 font-semibold text-sm hover:font-bold">Explore 120 Properties</p>
                    </div>
                </div>
                {/* Card Ends Here */}
            </div>
        </div>
    </div>
  )
}

export default Listing
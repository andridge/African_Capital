import education from "../img/education4.jpg";
import housing from "../img/housing.png";
import farming from "../img/landmachines.jpg";
import medical from "../img/medical1.jpg";

export default function () {
    return (
        <div>
            <div id="carouselDarkVariant" className="relative" data-twe-carousel-init data-twe-ride="carousel">
                <div className="absolute inset-x-0 bottom-0 z-20 mx-[15%] mb-4 flex items-center justify-center p-0" data-twe-carousel-indicators>
                    <button data-twe-target="#carouselDarkVariant" data-twe-slide-to="0" data-twe-carousel-active className="mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none" aria-current="true" aria-label="Slide 1"></button>
                    <button data-twe-target="#carouselDarkVariant" data-twe-slide-to="1" className="mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none" aria-label="Slide 2"></button>
                    <button data-twe-target="#carouselDarkVariant" data-twe-slide-to="2" className="mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none" aria-label="Slide 3"></button>
                    <button data-twe-target="#carouselDarkVariant" data-twe-slide-to="2" className="mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none" aria-label="Slide 3"></button>
                </div>

                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <div className="relative float-left -mr-full w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none" data-twe-carousel-fade data-twe-carousel-item data-twe-carousel-active>
                        <img src={education} alt="Education" />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                            <h5 className="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div className="relative float-left -mr-full hidden w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none" data-twe-carousel-fade data-twe-carousel-item>
                        <img src={housing} alt="Housing" />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                            <h5 className="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    <div className="relative float-left -mr-full hidden w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none" data-twe-carousel-fade data-twe-carousel-item>
                        <img src={farming} alt="Farming" />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                            <h5 className="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>

                    <div className="relative float-left -mr-full hidden w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none" data-twe-carousel-fade data-twe-carousel-item>
                        <img src={medical} alt="Medical" />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                            <h5 className="text-xl">Fourth slide label</h5>
                            <p>Some representative placeholder content for the fourth slide.</p>
                        </div>
                    </div>
                </div>

                <button className="absolute bottom-0 left-0 top-0 z-10 flex w-15% items-center justify-center border-0 bg-transparent p-0 text-black opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90 focus:outline-none focus:opacity-90" type="button" data-twe-target="#carouselDarkVariant" data-twe-slide="prev">
                    <span className="inline-block h-8 w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>

                <button className="absolute bottom-0 right-0 top-0 z-10 flex w-15% items-center justify-center border-0 bg-transparent p-0 text-black opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90 focus:outline-none focus:opacity-90" type="button" data-twe-target="#carouselDarkVariant" data-twe-slide="next">
                    <span className="inline-block h-8 w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>
    );
}

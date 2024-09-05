import Image from "next/image";

import ResrvationSideBar from "../ReservationSideBar";


const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                    <Image
                        fill
                        src='/beach.jpg'
                        className="object-cover w-full h-full "
                        alt="beach and motel"
                    />
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="py-6 pr-6 col-span-3 ">
                        <h1 className="mb-4 text-4xl">Property name</h1>
                        <span className="mb-6 block text-lg text-gray-600">
                            4 guestes - 2 bedrooms - 1 bathroom
                        </span>

                        <hr />

                        <div className="py-6 flex items-center space-x-4">
                            <Image
                                
                                src="/profile_1.png"
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="user pic"

                            />
                            <p className="">Hosted by<strong> Mhend olaarbi</strong></p>
                        </div>

                    <hr />

                    <p className="mt-6 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, neque ab quo asperiores ipsum, eligendi repudiandae rerum inventore odio minus omnis blanditiis harum. Veritatis quibusdam repellat officiis officia fugiat voluptates!</p>
                    </div>
                    
                    
                <ResrvationSideBar/>  
            </div>

        </main>
    )
}



export default PropertyDetailPage;
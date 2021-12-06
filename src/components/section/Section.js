import React from 'react'

const imageThumb = [    
    'Glassdoor_logo',
    'Leadspace_logo',
    'Auction_logo',
    'Curves_logo',
    'CA_Technologies_logo',
    'GE_logo'
]

const Section = () => {
    return (
        <section className="flex flex-col h-auto w-full">
            <div className="container mx-auto h-full w-full">
                <div className="md:px-28 px-4 py-4 h-full w-full space-y-8">
                    <p className="text-center text-2xl text-blue-600">
                        "Marketin has been hugely successful for us. We're getting more
                        qualified leads than ever before and our revenue has gone <b>through the roof</b>.
                        The impact of Marketin is amazing, and we're just getting started."
                    </p>
                    <p className="text-sm font-bold text-center">Marketing/Operations Manager, Cartelligent</p>
                </div>
            </div>
            <div className="bg-gray-800 h-auto w-full">
                <div className="container mx-auto flex-col p-4 h-full w-full space-y-4">
                    <div>
                        <p className="text-purple-600 text-3xl text-center">5,000+ Customers Trust Marketin Including:</p>
                    </div>
                    <div className="flex lg:flex-row flex-col h-auto w-full text-white lg:space-x-4">
                        {
                            imageThumb.map((item, index) => {
                                return (
                                    <div key={index} className="w-full flex justify-center p-4 h-auto items-center">
                                        <img src={`images/${item}.png`} alt="glassdoor" className="object-contain h-10 object-center" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section
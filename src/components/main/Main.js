import React from 'react'

const Main = () => {
    return (
        <main className="bg-gray-200 h-auto w-full">
            <div className="container mx-auto flex md:flex-row flex-col h-full w-full">
                <div className="h-full w-full p-4">
                    <div>
                        <p className="font-bold text-lg">See why Marketin was named a Leader!</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p>Gartner's 2021 Magic Quadrant Report includes:</p>
                        <ul className="list-disc px-8">
                            <li>Overall market evaluation and analysis of 15 CRM lead management vendors</li>
                            <li>Insights for selecting a vendor based on your organization's requirements</li>
                            <li>Opportunities and challenges faced when deploying lead management systems</li>
                        </ul>
                    </div>
                </div>
                <div className="h-full w-full p-4 flex flex-col space-y-8">
                    <div>
                        <p className="font-bold text-lg">Please complete form to view report</p>
                    </div>
                    <div>
                        <p className="text-sm">
                            Gartner Magic Quadrant for CRM Lead Management, Jason Daigler, Ilona Hansen, Aug. 2021<br/> 
                            Gartner does not endorse ane vendor, product or service depicated in its research publications, 
                            and does not advise technology users to select only those vendors with the highest ratings or others designation, Gartner research
                            publications consist of the opinions of Gartner's research organization and should not be construed as statements of fact. 
                            Gartner disclaims all warranties, expressed or implied, with respect to this research, including any warranties of merchantability of fitness for a particular purpose.
                        </p>
                        <p></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
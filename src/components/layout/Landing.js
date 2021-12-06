import React from 'react'
import logoImg from '../../assets/images/crm.jpg'
import glassdoorImg from '../../assets/images/Glassdoor_logo.png'
import leadspaceImg from '../../assets/images/Leadspace_logo.png'
import auctionImg from '../../assets/images/Auction_logo.png'
import curvesImg from '../../assets/images/Curves_logo.png'
import caImg from '../../assets/images/CA_Technologies_logo.png'
import geImg from '../../assets/images/GE_logo.png'

const Landing = () => {
    return (
        <div className="flex flex-col h-full w-full font-roboto-regular">
            <header id="hero" className="flex border-t-8 border-purple-600 bg-gray-800 lg:h-96 h-auto w-full">
                <div className="container mx-auto flex lg:flex-row flex-col h-full w-full">
                    <div className="absolute flex sm:flex-row flex-col sm:w-auto w-full overflow-hidden md:space-x-2">
                        <div id="logo" className="flex flex-col items-center justify-center px-4 rounded-b-lg bg-purple-600 h-20 w-36">
                            <div className="flex w-full h-auto sm:px-0 px-3 justify-end items-end">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-white italic" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <p className="text-white font-bold font-rajdhani text-2xl">Marketin</p>
                        </div>
                        <div className="py-6 h-auto w-full">
                            <div className="flex flex-col sm:justify-start sm:items-start justify-center drop-shadow-2xl items-center w-full h-full space-y-2">
                                <p className="text-white font-readex-pro text-4xl sm:text-left text-center">2021 Gartner<br/>Magic Quadrant</p>
                                <p className="text-gray-100 font-thin">for CRM Lead Management</p>
                            </div>
                        </div>
                    </div>
                    <div id="image" className="flex items-center justify-center lg:h-full sm:h-96 h-auto w-full overflow-hidden ">
                        <img src={logoImg} alt="Marketin" className="object-fill object-center"/>
                    </div>
                    <div id="form" className="flex flex-col space-y-2 lg:px-4 md:px-28 md:py-4 py-2 h-full lg:w-1/2 w-full">
                        <form className="flex flex-col h-full w-full space-y-2">
                            <div className="md:flex md:items-center md:justify-center px-8 md:space-x-2">
                                <div className="md:w-1/3">
                                    <label className="w-auto h-full md:flex md:items-center block text-gray-400 font-bold" htmlFor="inline-full-name">
                                        First Name
                                    </label>
                                </div>
                                <div className="md:w-2/3 flex space-x-1">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane"/>
                                    <p className="text-red-500 font-bold">*</p>
                                </div>
                            </div>
                            <div className="md:flex md:items-center md:justify-center px-8 md:space-x-2">
                                <div className="md:w-1/3">
                                    <label className="w-auto h-full md:flex md:items-center block text-gray-400 font-bold" htmlFor="inline-full-name">
                                        Last Name
                                    </label>
                                </div>
                                <div className="md:w-2/3 flex space-x-1">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Doe"/>
                                    <p className="text-red-500 font-bold">*</p>
                                </div>
                            </div>
                            <div className="md:flex md:items-center md:justify-center px-8 md:space-x-2">
                                <div className="md:w-1/3">
                                    <label className="w-auto h-full md:flex md:items-center block text-gray-400 font-bold" htmlFor="inline-full-name">
                                        Work Email
                                    </label>
                                </div>
                                <div className="md:w-2/3 flex space-x-1">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="jane.doe@gmail.com"/>
                                    <p className="text-red-500 font-bold">*</p>
                                </div>
                            </div>
                            <div className="md:flex md:items-center md:justify-center px-8 md:space-x-2">
                                <div className="md:w-1/3">
                                    <label className="w-auto h-full md:flex md:items-center block text-gray-400 font-bold" htmlFor="inline-full-name">
                                        Job Title
                                    </label>
                                </div>
                                <div className="md:w-2/3 flex space-x-1">
                                    <div className="relative w-full">
                                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                            <option>Choose One</option>
                                            <option>Sample 1</option>
                                            <option>Sample 2</option>
                                            <option>Sample 3</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                    <p className="text-red-500 font-bold">*</p>
                                </div>
                            </div>
                            <div className="md:flex md:items-center md:justify-center px-8 md:space-x-2">
                                <div className="md:w-1/3">
                                    <label className="w-auto h-full md:flex md:items-center break-all block text-gray-400 font-bold" htmlFor="inline-full-name">
                                        Company
                                    </label>
                                </div>
                                <div className="md:w-2/3 flex space-x-1">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Meta, Inc"/>
                                    <p className="text-red-500 font-bold">*</p>
                                </div>
                            </div>
                            <div className="flex justify-end px-4">
                                <button className="h-10 bg-blue-600 px-4 rounded-xl text-white">Download Now</button>
                            </div>
                        </form>
                        <div className="w-full h-full flex flex-col px-4 font-thin text-xs space-y-2 text-white items-center justify-end">
                            <p><span className="text-red-500 font-bold">*</span> Required. Document access will be emailed to you.</p>
                            <p>Your privacy is important to us</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="bg-gray-200 h-auto w-full">
                <div className="container mx-auto flex md:flex-row flex-col h-full w-full">
                    <div className="h-full w-full p-4">
                        <div>
                            <p className="font-bold text-lg">See why Marketin was named a Leader!</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p>Gartner's 2021 Magic Quadrant Report includes:</p>
                            <ul className="list-disc px-8">
                                <li>Overall market evalution and analysis of 15 CRM lead management vendors</li>
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
                            <div className="w-full flex justify-center p-4 h-auto items-center">
                                <img src={glassdoorImg} alt="glassdoor" className="object-contain h-10 object-center" />
                            </div>
                            <div className="w-full flex justify-center p-4 h-auto items-center">
                                <img src={leadspaceImg} alt="leadspace" className="object-contain h-10 object-center" />
                            </div>
                            <div className="w-full flex justify-center p-4 h-auto items-center">
                                <img src={auctionImg} alt="leadspace" className="object-contain h-10 object-center" />
                            </div>
                            <div className="w-full flex justify-center p-4 h-auto items-center">
                                <img src={curvesImg} alt="leadspace" className="object-contain h-10 object-center" />
                            </div>
                            <div className="w-full flex justify-center p-4 h-auto items-center">
                                <img src={caImg} alt="leadspace" className="object-contain h-10 object-center" />
                            </div>
                            <div className="w-full flex justify-center p-4 h-auto items-center">
                                <img src={geImg} alt="leadspace" className="object-contain h-10 object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-purple-600 h-auto w-full">
                <div className="container mx-auto px-4 py-2 h-full w-full text-white text-center space-y-3">
                    <p className="text-4xl font-extralight">Marketing First</p>
                    <p className="text-sm">© Copyright 2021. Marketin, Inc. All Rights Reserved. Legal Privacy</p>
                </div>
            </footer>
        </div>
    )
}

export default Landing;
import React from 'react'

const Hero = ({children}) => {
    return (
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
                            <p className="text-white font-readex-pro text-4xl sm:text-left filter drop-shadow-3xl text-center">2021 Gartner<br/>Magic Quadrant</p>
                            <p className="text-gray-100 filter drop-shadow-sm">for CRM Lead Management</p>
                        </div>
                    </div>
                </div>
                <div id="image" className="flex items-center justify-center lg:h-full sm:h-96 h-auto w-full overflow-hidden ">
                    <img src='images/crm.jpg' alt="Marketin" className="object-fill object-center"/>
                </div>
                
                {children}
            </div>
        </header>
    )
}

export default Hero
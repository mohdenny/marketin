import React from 'react'

const Form = () => {
    return (
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
                <div className="flex justify-end py-2 px-4">
                    <button className="h-10 bg-blue-600 px-4 rounded-xl text-white hover:bg-blue-700 hover:text-gray-200">Download Now</button>
                </div>
            </form>
            <div className="w-full h-full flex flex-col px-4 font-thin text-xs space-y-2 text-white items-center justify-end">
                <p><span className="text-red-500 font-bold">*</span> Required. Document access will be emailed to you.</p>
                <p>Your privacy is important to us.</p>
            </div>
        </div>
    )
}

export default Form
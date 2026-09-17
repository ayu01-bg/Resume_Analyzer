import { FileCheck, UploadCloud, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const AnalyzeResume = () => {

    const navigate =  useNavigate()
    
    const fileInputRef = useRef(null)

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleClick = (e) => {

        const selectedFile = e.target.files[0]

        if (!selectedFile) return

        const isPdf = selectedFile.type === "application/pdf" && selectedFile.name.toLowerCase().endsWith(".pdf")

        if (!isPdf) {
            setError("Please upload a PDF file.")
            setFile(null)
            return
        }
        setFile(selectedFile)
        setError('')
    }

    const handleAnalyze = async () => {

        if (!file) return

        try {

            setLoading(true)
            setError('')

            const formData = new FormData()

            formData.append('resume', file)

            const response = await axios.post("http://localhost:3000/postResume", formData)
            console.log(response);

        }
        catch (err) {
            console.log(err);
            setError('Failed in Catching File')
        }
        finally {
            setLoading(false)
        }


    }

    return (
        <section className='p-3 mt-10 rounded-lg bg-gray-300/50 inset-shadow-sm inset-shadow-gray-400/50' id='analyzeResume'>

            <div className=' flex justify-center items-center'>
                <strong className=' text-4xl py-5'>Upload Documents</strong>
            </div>

            <div className=' py-4 px-3 flex flex-col lg:flex-row gap-3'
            >

                <input
                    type="file"
                    hidden
                    accept='.pdf'
                    ref={fileInputRef}
                    onChange={handleClick}
                />


                {!file ? (
                    <div className="group w-full lg:w-1/3 min-h-70 p-6 flex flex-col justify-center items-center gap-4 rounded-2xl border-2 border-dashed border-gray-400/60 bg-white/40 backdrop-blur-md hover:bg-white/60 hover:border-gray-500 transition-all duration-300 cursor-pointer"
                    // onClick={() => fileInputRef.current?.click()}
                    >

                        {/* Upload Icon */}
                        <div className="p-5 rounded-full bg-gray-200/70 text-gray-500  group-hover:scale-110 group-hover:bg-gray-300/70 transition-all duration-300">

                            <UploadCloud
                                size={55}
                                strokeWidth={1.5}
                            />

                        </div>

                        {/* Text */}
                        <div className="text-center space-y-1">

                            <h3 className="text-base font-semibold text-gray-700">
                                Upload your resume
                            </h3>

                            <p className="text-sm text-gray-400">
                                Drop your PDF here or browse
                            </p>

                            <p className="text-xs text-gray-400">
                                PDF files only · Max 5MB
                            </p>

                            {error && (
                                <p className="text-red-500 text-sm text-center mt-2">
                                    {error}
                                </p>
                            )}

                        </div>

                        {/* Button */}
                        <button
                            type="button"
                            className="px-5 py-2.5 rounded-lg bg-gray-700 text-white  text-sm font-medium hover:bg-gray-800 active:scale-95 transition-all duration-200"
                            onClick={() => fileInputRef.current.click()}
                        >
                            Upload Resume
                        </button>

                    </div>
                ) : (
                    <div className='group w-full lg:w-1/3 min-h-70 p-6 flex flex-col justify-center items-center gap-4 rounded-2xl border-2 border-dashed border-white bg-green-400/40 backdrop-blur-md  cursor-pointer relative'>

                        <button
                            className=' absolute top-2 right-2 p-1 bg-gray-400/60 text-white rounded-md hover:bg-red-400/60 hover:text-gray-200'
                            type='button'
                            onClick={() => {
                                setFile(null)
                                setError('')
                            }}
                            aria-label='remove uploaded file'
                        >
                            <X size='18px' />
                        </button>

                        <div className='p-5 rounded-full bg-gray-200/70 text-gray-500  group-hover:scale-110  group-hover:bg-gray-300/70 transition-all duration-300'>

                            <FileCheck
                                size={80}
                                strokeWidth={1.5}
                            />

                        </div>

                        <div className="text-center space-y-1">

                            <h3 className="text-base font-semibold text-white">
                                {file.name}
                            </h3>


                            <p className="text-md text-white">
                                {/* {(file.size)} */}
                                {(file.size / 1024 / 1024).toFixed(2)}MB
                            </p>


                            <p className="text-xs text-white">
                                File Uploaded Sucessfully
                            </p>

                        </div>




                    </div>
                )}

                <div className="p-6 bg-gray-400/30 w-full lg:w-2/3 flex flex-col justify-evenly items-center rounded-lg">

                    <div className="text-center">
                        <h1 className=" whitespace-nowrap text-2xl sm:text-3xl lg:text-5xl font-bold">
                            Upload Your Resume
                        </h1>

                        <p className="text-sm py-3 text-gray-500 font-semibold">
                            Upload your resume in PDF to analyze and understand your resume.
                        </p>
                    </div>

                    {!file ? (

                        // File nahi hai
                        <div className="text-center">

                            <p className="text-gray-500/80 mb-3">
                                Upload your resume first
                            </p>

                            <button
                                type="button"
                                disabled
                                className=" py-3 px-5 w-40 rounded-sm text-xl bg-gray-400 text-gray-300 cursor-not-allowed ">
                                Analyze
                            </button>

                        </div>

                    ) : (

                        // File uploaded
                        <div className="text-center">

                            <p className="text-gray-600 mb-3">
                                {file.name}
                            </p>

                            <button
                                type="button"
                                className="py-3 px-5 w-40 border rounded-sm text-xl bg-blue-300 text-white cursor-pointer hover:bg-blue-400 transition "
                                onClick={handleAnalyze} >
                                Analyze
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </section>
    )
}

export default AnalyzeResume
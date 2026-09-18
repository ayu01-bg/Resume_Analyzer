import axios from 'axios'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

export const AnalyzeContent = createContext()

const AnalyzeContext = ({ children }) => {

    const navigate = useNavigate()

    const fileInputRef = useRef(null)

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [analyzeData, setAnalyzeData] = useState(null)

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
        setError(null)
    }

    const handleAnalyze = async () => {

        if (!file) return

        try {

            setLoading(true)
            setError(null)

            const formData = new FormData()

            formData.append('resume', file)

            const response = await axios.post("http://localhost:3000/postResume", formData)
            console.log(response);


            setAnalyzeData(response.data)
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
        <AnalyzeContent.Provider value={{
            handleClick,
            handleAnalyze,
            setFile,
            file,
            fileInputRef,
            analyzeData,
            error,
            loading,

        }}
        >
            {children}
        </AnalyzeContent.Provider>
    )
}


export default AnalyzeContext
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContentData from './Contents/contentData.jsx'
import AnalyzeContext from './Contents/AnalyzeContext.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ContentData>
      <AnalyzeContext>
        <App />
      </AnalyzeContext>
    </ContentData>
  </BrowserRouter>
)

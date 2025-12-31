import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './contextAPI/ShareContext.jsx'
import AuthContext from './contextAPI/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='306461478250-nv0ijq7vio8dl3s49735jdrje0mhgvl1.apps.googleusercontent.com'>
        <ShareContext>
          <AuthContext>
            <App />
          </AuthContext>
        </ShareContext>
      </GoogleOAuthProvider>

    </BrowserRouter>

  </StrictMode>,
)

import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from './authForm'
import { loginWithEmail, loginWithGoogle, sendPasswordReset } from '../../services/firebase'
import { showLocalNotification } from '../../utils/notifications'
import { useToast } from '../../components/toast/toastContext'

const Login = ({ toggleMode }: { toggleMode: () => void }) => {
  const navigate = useNavigate()
  const { showToast } = useToast()

  const handleEmailSubmit = async (email: string, password: string) => {
    try {
      await loginWithEmail(email, password)
      showToast("Welcome Back! You have successfully logged in.")
      await showLocalNotification("Welcome Back!", "You have successfully logged in to MedCare.")
      navigate('/dashboard')
    } catch (error) {
      showToast("Login failed. Please check your credentials.", "error")
      throw error 
    }
  }

  const handleGoogleSubmit = async () => {
    try {
      await loginWithGoogle()
      showToast("Signed in with Google successfully.")
      await showLocalNotification("Welcome Back!", "You have successfully logged in to MedCare via Google.")
      navigate('/dashboard')
    } catch (error) {
      showToast("Google sign-in failed.", "error")
      throw error
    }
  }

  const handleForgotPassword = async (email: string) => {
    try {
      await sendPasswordReset(email)
      showToast("Password reset email sent. Please check your inbox.", "info")
    } catch (error) {
      showToast("Failed to send password reset email.", "error")
    }
  }

  return (
    <>
      <AuthForm
        title={"Welcome Back! 👋"}
        description={"Sign in to access your healthcare dashboard"}
        buttonTitle={"Login"}
        formHeader={"Login to Your Account"}
        onEmailSubmit={handleEmailSubmit}
        onGoogleSubmit={handleGoogleSubmit}
        onForgotPassword={handleForgotPassword}
        toggleMode={toggleMode}
        toggleText={"Don't have an account? Sign Up"}
      />
    </>
  )
}

export default Login
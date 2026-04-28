import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from './authForm'
import { signUpWithEmail, loginWithGoogle } from '../../services/firebase'
import { showLocalNotification } from '../../utils/notifications'
import { useToast } from '../../components/toast/toastContext'

const SignUp = ({ toggleMode }: { toggleMode: () => void }) => {
  const navigate = useNavigate()
  const { showToast } = useToast()

  const handleEmailSubmit = async (email: string, password: string) => {
    try {
      await signUpWithEmail(email, password)
      showToast("Account created successfully! Welcome to MedCare.")
      await showLocalNotification("Account Created!", "Welcome to MedCare. Your account has been successfully created.")
      navigate('/dashboard')
    } catch (error) {
      showToast("Signup failed. Please try again.", "error")
      throw error
    }
  }

  const handleGoogleSubmit = async () => {
    try {
      await loginWithGoogle()
      showToast("Signed up with Google successfully.")
      await showLocalNotification("Welcome!", "You have successfully signed up for MedCare via Google.")
      navigate('/dashboard')
    } catch (error) {
      showToast("Google signup failed.", "error")
      throw error
    }
  }

  return (
    <>
      <AuthForm
        title={"Create Your Account 🏥"}
        description={"Join us to manage your healthcare journey"}
        buttonTitle={"Sign Up"}
        formHeader={"Create an Account"}
        isSignUp={true}
        onEmailSubmit={handleEmailSubmit}
        onGoogleSubmit={handleGoogleSubmit}
        toggleMode={toggleMode}
        toggleText={"Already have an account? Login"}
      />
    </>
  )
}

export default SignUp
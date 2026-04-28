import { useState } from "react";
import AuthSvg from "../../assets/illustrations/auth.svg";
import AppLogo from "../../components/appLogo";
import GoogleIcon from "../../assets/images/google.png";

interface AuthFormProps {
  title?: string;
  description?: string;
  buttonTitle?: string;
  formHeader?: string;
  isSignUp?: boolean;
  onEmailSubmit: (email: string, password: string) => Promise<void>;
  onGoogleSubmit: () => Promise<void>;
  onForgotPassword?: (email: string) => Promise<void>;
  toggleMode?: () => void;
  toggleText?: string;
}

const passwordRules = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One lowercase letter", test: (p: string) => /[a-z]/.test(p) },
  { label: "One number", test: (p: string) => /[0-9]/.test(p) },
  { label: "One special character", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

const getPasswordStrength = (p: string) => {
  const passed = passwordRules.filter((r) => r.test(p)).length;
  if (passed <= 1) return { score: passed, label: "Weak", color: "#ef4444" };
  if (passed <= 3) return { score: passed, label: "Fair", color: "#f59e0b" };
  if (passed === 4) return { score: passed, label: "Good", color: "#3b82f6" };
  return { score: passed, label: "Strong", color: "#22c55e" };
};

const AuthForm = ({
  title = "",
  description = "",
  buttonTitle = "",
  formHeader = "",
  isSignUp = false,
  onEmailSubmit,
  onGoogleSubmit,
  onForgotPassword,
  toggleMode,
  toggleText,
}: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const strength = getPasswordStrength(password);
  const isPasswordValid = strength.score === passwordRules.length;

  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (isSignUp && !isPasswordValid) {
      setError("Please fix the password issues before continuing.");
      return;
    }

    setLoading(true);
    try {
      await onEmailSubmit(email, password);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      await onGoogleSubmit();
    } catch (err: any) {
      setError(err.message || "Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address to reset your password.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      if (onForgotPassword) {
        await onForgotPassword(email);
        alert("Password reset email sent! Check your inbox.");
      }
    } catch (err: any) {
      setError(err.message || "Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <div className="auth-img">
        <div>
          <div>
            <AppLogo />
            <p className="medcare-title">{title}</p>
            <p className="medcare-desc">{description}</p>
          </div>
          <img src={AuthSvg} className="auth-svg" alt="Authentication" />
        </div>
      </div>
      <div className="form">
        <h2>{formHeader}</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="form-inputs" onSubmit={handleEmailSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          {isSignUp && password.length > 0 && (
            <div className="password-strength">
              <div className="strength-bar-track">
                {passwordRules.map((_, i) => (
                  <div
                    key={i}
                    className="strength-bar-segment"
                    style={{
                      backgroundColor: i < strength.score ? strength.color : "#e5e7eb",
                      transition: "background-color 0.3s ease",
                    }}
                  />
                ))}
              </div>
              <span className="strength-label" style={{ color: strength.color }}>
                {strength.label}
              </span>
              <ul className="password-rules">
                {passwordRules.map((rule) => (
                  <li
                    key={rule.label}
                    className={`password-rule ${rule.test(password) ? "rule-pass" : "rule-fail"}`}
                  >
                    <span className="rule-icon">{rule.test(password) ? "✓" : "✗"}</span>
                    {rule.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!isSignUp && (
            <a href="#" className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</a>
          )}
          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : buttonTitle}
          </button>
        </form>
        <p className="divider">or continue with</p>
        <button
          type="button"
          className="google-signin"
          onClick={handleGoogleSubmit}
          disabled={loading}
        >
          <img src={GoogleIcon} alt="Google" className="google-icon" />
          {isSignUp ? "Sign up with Google" : "Sign in with Google"}
        </button>
        {toggleMode && toggleText && (
          <div className="signup-link">
            <button type="button" className="toggle-mode-btn" onClick={toggleMode}>
              {toggleText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;

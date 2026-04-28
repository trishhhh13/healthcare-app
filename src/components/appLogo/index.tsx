import logo from "../../assets/images/logo.png";
const AppLogo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      <div>
        <p className='logo-header'>Medicare</p>
        <p>Health Connected</p>
      </div>
    </div>
  )
}

export default AppLogo
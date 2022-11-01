import logo from "../logo.svg";

function Header() {
  const headerStyles = {
    backgroundColor: "#21222A",
    minHeight: "91px",
  };

  return (
    <header style={headerStyles}>
      <img src={logo}></img>
    </header>
  );
}

export default Header;

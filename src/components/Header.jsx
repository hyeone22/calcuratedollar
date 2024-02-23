import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Showing money bag" />
      <h1>거래 계산기</h1>
    </header>
  );
}

import React from "react";

const Header: React.FC = () => {
  return (
    <header id="Header" className="container">
      <h1 className="text-center f-milonga text-md text-gold-mid">
        IT'S TIME... #DuneMovie3 coming December 18, 2026
      </h1>
      <img
        src="/assets/images/dunemessage.png"
        alt="Dune Movie Message"
        className="dune-message"
      />
    </header>
  );
};

export default Header;

import React, { useState } from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h2>Restruant</h2>

      <form action="">
        <input
          type="text"
          name="city"
          id="city"
          placeholder=" City Name"
        />
      </form>
    </nav>
  );
};

export default Navbar;

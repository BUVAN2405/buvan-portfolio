import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black bg-opacity-50 z-50">
      <h1 className="text-2xl font-bold">Buvan</h1>
      <ul className="flex gap-6">
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </ul>
    </nav>
  );
};

export default Navbar;

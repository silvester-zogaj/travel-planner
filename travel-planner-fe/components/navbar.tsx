
import { useState } from 'react';
import "./menu.css"
import Link from 'next/link';

const HamburgerMenu = () => {
  const [ open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className={`hamburger-menu ${open ? 'open' : ''}`}>
        
      <section className="hamburger" onClick={handleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </section>

      <ul className="menu-list">
        <Link href="/" className="menu-item">Home</Link>
        <Link href="/profile-settings" className="menu-item">My Profile</Link>
        <Link href="/itineraries" className="menu-item">My Itineraries</Link>
      </ul>

    </nav>
  );
};

export default HamburgerMenu;



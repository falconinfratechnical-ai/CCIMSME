
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import "./AboutDropdown.css";

const AboutDropdown = ({ triggerText = "About Us" }) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const [menuStyle, setMenuStyle] = useState({});

  // Close dropdown 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (btnRef.current && btnRef.current.contains(e.target)) return;
      if (menuRef.current && menuRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useLayoutEffect(() => {
    const update = () => {
      if (!btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      setMenuStyle({
        position: "fixed",
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
        minWidth: "180px",
        zIndex: 10000,
      });
    };
    if (open) {
      update();
      window.addEventListener("resize", update);
      window.addEventListener("scroll", update, true);
    }
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open]);

  return (
    <>
      <div className="about-dropdown">
        <button
          ref={btnRef}
          className="about-btn"
          onClick={() => setOpen((s) => !s)}
        >
          {triggerText}
        </button>
      </div>

      {open &&
        createPortal(
          <div className="about-menu right" ref={menuRef} style={menuStyle}>
            <a href="#auditoriums">Auditoriums</a>
            <a href="#forums">Forums</a>
            <a href="#former-presidents">Former Presidents</a>
          </div>,
          document.body
        )}
    </>
  );
};

export default AboutDropdown;

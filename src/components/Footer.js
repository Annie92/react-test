import React from 'react';
import '../styles.css';

export default function Footer() {
    const currentYear = new Date().getUTCFullYear();
    return (
      <footer className="footer">
        <p className="footer-text">&#169; {currentYear} Moviedux all rights reserved by annie</p>
      </footer>
    );
}
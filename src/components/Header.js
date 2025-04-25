import React from "react";
import '../styles.css';

export default function Header() {
    return (
      <div className="header">
        <img src="logo.png" className="logo" alt="moviedux logo" />
        <h2 className="app-subtitle">Find your movie</h2>
      </div>
    );
}
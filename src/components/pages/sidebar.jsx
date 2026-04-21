import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'
import Logo from '../../../scribo_logo.png'

function Sidebar({ pages, setPages, setCurrentPageId, currentPageId }) {
  const [workspaceName, setWorkspaceName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const addPage = () => {
    const newPage = {
      id: Date.now(),
      title: "Untitled",
      content: [""] 
    };

    setPages(prev => [...prev, newPage]);
    setCurrentPageId(newPage.id); 
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <img src={Logo} alt="Scribo" className="sidebar-logo" />
          <h2 className="workspace-title">My Workspace</h2>
        </div>
      </div>

      <div className="sidebar-navigation">
        <Link to="/" className="sidebar-item">
          🏠 Home
        </Link>
        <Link to="/scriboai" className="sidebar-item">
          ✨ ScriboAI
        </Link>
      </div>

      <div className="workspace-notes-section">
        <div className="section-header">
          <span>Private Notes</span>
          <button className="add-note-inline" onClick={addPage}>+</button>
        </div>
        
        <div className="pages-list">
          {pages.map((page) => (
            <div 
              key={page.id}
              className={`page-item ${
                currentPageId === page.id ? "active" : ""
              }`}
              onClick={() => setCurrentPageId(page.id)}
            >
              <span className="page-icon">📄</span>
              <span className="page-title-text">{page.title || "Untitled"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
import React, { useState, useEffect } from 'react'
import Sidebar from './pages/sidebar'
import Editor from './pages/editor'
import './Dashboard.css'

function Dashboard() {
  const [pages, setPages] = useState(() => {
    const saved = localStorage.getItem('scribo_pages');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved pages", e);
      }
    }
    return [{ id: 1, title: 'Untitled', content: [''] }];
  });

  const [currentPageId, setCurrentPageId] = useState(() => {
    const savedLastPageId = localStorage.getItem('scribo_last_page_id');
    return savedLastPageId ? parseInt(savedLastPageId) : pages[0].id;
  });

  const currentPage = pages.find(p => p.id === currentPageId) || pages[0];
  useEffect(() => {
    localStorage.setItem('scribo_pages', JSON.stringify(pages));
  }, [pages]);

  useEffect(() => {
    localStorage.setItem('scribo_last_page_id', currentPageId.toString());
  }, [currentPageId]);

  return (
    <div className="dashboard">
      <Sidebar
        pages={pages}
        setPages={setPages}
        setCurrentPageId={setCurrentPageId}
        currentPageId={currentPageId}
      />

      <Editor
        page={currentPage}
        setPages={setPages}
      />
    </div>
  )
}

export default Dashboard
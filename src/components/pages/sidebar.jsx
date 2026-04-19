import { Link } from 'react-router-dom';

function Sidebar({ pages, setPages, setCurrentPage, currentPage }) {

  const addPage = () => {
    const newPage = {
      id: Date.now(),
      title: "Untitled",
      content: [""] // ✅ FIX: must be array
    };

    const updatedPages = [...pages, newPage];
    setPages(updatedPages);
    setCurrentPage(newPage); // ✅ auto open new page
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="home-link">← Home</Link>
        <h2 className="workspace-title">Workspace</h2>
      </div>

      <button className="new-page-btn" onClick={addPage}>
        + New Page
      </button>

      <div className="pages-list">
        {pages.map((page) => (
          <div 
            key={page.id}
            className={`page-item ${
              currentPage?.id === page.id ? "active" : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page.title || "Untitled"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
import { useEffect, useRef } from "react";

function Editor({ page, pages, setPages, setCurrentPage }) {

  const titleRef = useRef();
  const blockRefs = useRef([]);

  useEffect(() => {
    titleRef.current?.focus();
  }, [page.id]);

  if (!page) return <div className="editor">Select a page</div>;

  if (!page.content || page.content.length === 0) {
    page.content = [""];
  }

  const updateTitle = (value) => {
    setPages(prev => prev.map((p) =>
      p.id === page.id ? { ...p, title: value } : p
    ));
  };

  const updateBlocks = (newBlocks) => {
    setPages(prev => prev.map((p) =>
      p.id === page.id ? { ...p, content: newBlocks } : p
    ));
  };

  return (
    <div className="editor">
      <div className="editor-toolbar">
        <div className="toolbar-group">
          <button className="toolbar-btn" title="Text Style">Aa</button>
          <div className="toolbar-divider"></div>
          <button className="toolbar-btn"><b>B</b></button>
          <button className="toolbar-btn"><i>I</i></button>
          <button className="toolbar-btn"><u>U</u></button>
          <button className="toolbar-btn strike">S</button>
        </div>
        <div className="toolbar-group">
          <button className="toolbar-btn">🔗 Link</button>
          <button className="toolbar-btn">💬 Comment</button>
        </div>
        <div className="toolbar-group right">
          <button className="toolbar-btn">Full Width</button>
          <button className="toolbar-btn">...</button>
        </div>
      </div>

      <div className="editor-content-area">

        <input
          ref={titleRef}
          className="title"
          value={page.title}
          onChange={(e) => updateTitle(e.target.value)}
          placeholder="Untitled"
        />
        {page.content.map((block, index) => (
          <input
            key={index}
            ref={(el) => (blockRefs.current[index] = el)}
            className="block"
            value={block}
            placeholder="Start writing..."

            onChange={(e) => {
              const newBlocks = [...page.content];
              newBlocks[index] = e.target.value;
              updateBlocks(newBlocks);
            }}

          />
        ))}
      </div>
    </div>
  );
}

export default Editor;
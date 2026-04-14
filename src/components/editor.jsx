function Editor({ currentPage }) {
    return (
        <div className="editor">
            <h2>{currentPage.title}</h2>
            <textarea value={currentPage.content} readOnly />
        </div>
    )
}

export default Editor
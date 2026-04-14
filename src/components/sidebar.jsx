function Sidebar({ pages, setPages, setcurrentPage }) {

    const addPage = () => {
        const newPage = {
            id: Date.now(),
            title: "New Page",
            content: ""
        }
        setPages([...pages, newPage])
    }

    return (
        <div className="sidebar">
            <h2>Pages</h2>

            {pages.map((page) => (
                <div 
                key={page.id}
                onClick={() => setcurrentPage(page)}
                >
                    {page.title}
                </div>
            ))}

            <button onClick={addPage}>Add Page</button>
        </div>
    )
}

export default Sidebar
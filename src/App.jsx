import {useState} from "react"
import Sidebar from "./components/sidebar"
import Editor from "./components/editor"
import "./App.css"

function App() {
  const [pages, setPages] = useState([
    {id: 1, title: "page 1", content: ""}
  ])

  const [currentPage, setcurrentPage] = useState(pages[0])

  return (
    <div>
      <h1>Notion</h1>
      
      <Sidebar
      pages = {pages}
      setPages={setPages}
      currentPage = {currentPage}
      setcurrentPage={setcurrentPage} 
      />

      <Editor 
      currentPage = {currentPage}
      />
    </div>
  )
}

export default App
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout.jsx'
// import GitHubProjects from './conponents/projects/GitHubProjects.jsx';
// import Projects from './conponents/projects/ProjectList.jsx';
import ProjectList from './conponents/projects/ProjectList.jsx';




createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="projects" element={ <ProjectList/>} />
          <Route index element={<App/>} />
        </Route>
      </Routes>
    </Router>
)

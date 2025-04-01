import React, { useEffect, useState } from "react";
import "./Projects.scss"; // SCSS Styling

const GITHUB_USERNAME = "Praveenkr398"; // 🔥 तुम्हारा GitHub Username

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchAllRepos = async () => {
      let page = 1;
      let allRepos = [];

      try {
        while (true) {
          const repoResponse = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}`
          );
          const repos = await repoResponse.json();

          if (repos.length === 0) break; // No more repos

          allRepos = [...allRepos, ...repos];
          page++;
        }

        const projectsWithCategories = await Promise.all(
          allRepos
            .filter((repo) => repo.description) // **Only repos with description**
            .map(async (repo) => {
              let categories = []; // Default Category
              let netlifyLiveURL = "";
              let githubLiveURL = `https://${GITHUB_USERNAME}.github.io/${repo.name}/`;

              try {
                const readmeResponse = await fetch(
                  `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/README.md`
                );

                if (readmeResponse.ok) {
                  const readmeText = await readmeResponse.text();

                  // ✅ **Category Extractor (Supports Multiple Categories)**
                  const categoryMatch = readmeText.match(/Category:-\s*"([^"]+)"/);
                  if (categoryMatch) {
                    categories = categoryMatch[1]
                      .split(",") // Split by Comma
                      .map((c) => c.trim()); // Remove Spaces
                  }

                  // ✅ **Netlify LIVE URL Extractor**
                  const netlifyLiveMatch = readmeText.match(
                    /https:\/\/[a-zA-Z0-9-]+\.netlify\.app[^\s)]+/g
                  );
                  if (netlifyLiveMatch) netlifyLiveURL = netlifyLiveMatch[0];
                }
              } catch (error) {
                console.error(`Error fetching README for ${repo.name}:`, error);
              }

              return {
                id: repo.id,
                name: repo.name,
                description:
                  repo.description.length > 100
                    ? repo.description.substring(0, 100) + "..."
                    : repo.description,
                categories, // ✅ Multiple Categories Added
                codeUrl: repo.html_url,
                netlifyLive: netlifyLiveURL || null,
                githubLive: netlifyLiveURL ? null : githubLiveURL,
              };
            })
        );

        // ✅ Extract Unique Categories
        const uniqueCategories = [
          "All",
          ...new Set(projectsWithCategories.flatMap((p) => p.categories)),
        ];

        setCategories(uniqueCategories);
        setProjects(projectsWithCategories);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchAllRepos();
  }, []);

  // ✅ Filtered Projects Based on Selected Category & Search
  const filteredProjects = projects.filter(
    (project) =>
      (selectedCategory === "All" ||
        project.categories.includes(selectedCategory)) &&
      (project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="projects-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search projects by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* ✅ Total Repos Count */}
      <h2>My Projects <span>{projects.length}</span></h2>

      {/* ✅ Categories Filter */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={`/images/${project.name}.png`} alt={project.name} />
            <h3>{project.name}</h3>
            <p><b>Categories:</b> {project.categories.join(", ")}</p>
            <p>{project.description}</p>
            <div className="overlay">
              <div className="buttons">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn code"
                >
                  Source Code
                </a>
                {project.netlifyLive && (
                  <a
                    href={project.netlifyLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn live netlify"
                  >
                    Netlify Live
                  </a>
                )}
                {!project.netlifyLive && project.githubLive && (
                  <a
                    href={project.githubLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn live github"
                  >
                    GitHub Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

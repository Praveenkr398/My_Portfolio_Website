import React, { useEffect, useState } from "react";
import "./Projects.scss"; // SCSS Styling

const GITHUB_USERNAME = "Praveenkr398"; // 🔥 तुम्हारा GitHub Username

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchReadme = async (repoName) => {
      const branches = ["main", "master"];
      for (const branch of branches) {
        try {
          const response = await fetch(
            `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/${branch}/README.md`
          );
          if (response.ok) return response.text();
        } catch (error) {
          console.error(`Error fetching README from ${branch} branch for ${repoName}:`, error);
        }
      }
      return null;
    };

    const fetchAllRepos = async () => {
      let page = 1;
      let allRepos = [];

      try {
        while (true) {
          const repoResponse = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}&sort=updated`
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
              let categories = [];
              let netlifyLiveURL = "";
              let githubLiveURL = `https://${GITHUB_USERNAME}.github.io/${repo.name}/`;

              const readmeText = await fetchReadme(repo.name);
              if (readmeText) {
                const categoryMatch = readmeText.match(/Category:-\s*"([^"]+)"/);
                if (categoryMatch) {
                  categories = categoryMatch[1]
                    .split(",")
                    .map((c) => c.trim());
                }

                const netlifyLiveMatch = readmeText.match(
                  /https:\/\/[a-zA-Z0-9-]+\.netlify\.app[^\s)]+/g
                );
                if (netlifyLiveMatch) netlifyLiveURL = netlifyLiveMatch[0];
              }

              return {
                id: repo.id,
                name: repo.name,
                description:
                  repo.description.length > 100
                    ? repo.description.substring(0, 100) + "..."
                    : repo.description,
                categories,
                codeUrl: repo.html_url,
                netlifyLive: netlifyLiveURL || null,
                githubLive: netlifyLiveURL ? null : githubLiveURL,
                updated_at: repo.updated_at,
              };
            })
        );

        projectsWithCategories.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

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

      <h2>My Projects <span>{projects.length}</span></h2>

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

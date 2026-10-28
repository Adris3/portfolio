
const projects = [
    {
        title: "Hacker News Post Analysis",
        desc: "Analyzed 20,000 Hacker News posts to determine the specific types of posts that get the most engagement, and the best time of day to post.",
        repolink: "https://github.com/Adris3/hacker_news_post_analysis"
    }
];

const container = document.getElementById("project_list")

projects.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <a href=${p.repolink}>View Repository</a>
            `;
    div.classList.add("project-card");

    container.appendChild(div);
})
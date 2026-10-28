
const projects = [
    {
        title: "Hacker News Post Analysis",
        desc: "Analyzed 20,000 Hacker News posts to determine the specific types of posts that get the most engagement, and the best time of day to post.",
        tools_used: "Python - CSV and datetime modules",
        repolink: "https://github.com/Adris3/hacker_news_post_analysis"
    },
    {
        title: "Job Market Analysis",
        desc: "Conducted an analysis on job posting data to determine the top skills required for data engineering positions in Toronto.",
        tools_used: "SQL, Postgresql",
        repolink: "https://github.com/Adris3/SQL_Project_Data_Job_Analysis"
    },
    {
        title: "Social Media & Mental Health Analysis",
        desc: "Analyzed 1M+ records to identify correlations between social media usage and mental health.",
        tools_used: "Python - numpy, pandas, matplotlib",
        repolink: "https://github.com/Adris3/mental_health_analysis"
    },
];

const container = document.getElementById("project_list")

projects.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <p>${p.tools_used}</p>
                <a href=${p.repolink}>View Repository</a>
            `;
    div.classList.add("project-card");

    container.appendChild(div);
})
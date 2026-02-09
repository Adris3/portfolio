
const projects = [
    { title: "One", desc: "Project One" },
    { title: "Two", desc: "Project Two" }
];

const container = document.getElementById("project_list")

projects.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    container.appendChild(div);
})
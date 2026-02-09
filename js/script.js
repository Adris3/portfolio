
const projects = [
    { title: "Pomodoro Activity Reminder Website", desc: "The P.A.R is a program that will remind you to do something physical every work cycle. It will pick a random exercise out of four that you give it, then produce a random number between 10 and 20 inclusive. You must do the randomly chosen exercise for the randomly chosen number of reps." },
    { title: "Two", desc: "Project Two" }
];

const container = document.getElementById("project_list")

projects.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    container.appendChild(div);
})

const projects = [
    { title: "Pomodoro Activity Reminder Website", desc: "The P.A.R is a program that will remind you to do something physical every work cycle. You will give it four exercises that you could easily do 10-20 repititions of. You must do the randomly chosen exercise for the randomly chosen number of reps during the pomodoro break.", link:"https://adris3.github.io/ActivityReminder/" }
];

const container = document.getElementById("project_list")

projects.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><a href=${p.link}>View ${p.title}</a>`;
    container.appendChild(div);
})
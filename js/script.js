
const projects = [
    { 
        title: "Pomodoro Activity Reminder Website", 
        desc: "The P.A.R is a program that will remind you to do something physical every work cycle. You will give it four exercises that you could easily do 10-20 repititions of. You must do the randomly chosen exercise for the randomly chosen number of reps during the pomodoro break.", 
        repolink:"https://github.com/Adris3/ActivityReminder?tab=readme-ov-file" 
    },
    {
        title: "Word Count Tracker for Authors",
        desc: "Developed an application in Python using PyQt and SQL to help authors track their word counts on various projects. ",
        repolink:"https://github.com/Adris3/word_count/tree/main"
    },
    {
        title: "Habit tracker made in React",
        desc: "Followed a tutorial on how to use React to make a functioning habit tracker. Users can add a habit to the list and count how many days in the week they do that habit.",
        repolink: "https://github.com/Adris3/habit_tracker"
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
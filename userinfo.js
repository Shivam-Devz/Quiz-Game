let user_name = sessionStorage.getItem("name") || "Player";
let user_points = sessionStorage.getItem("points") || 0;

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;

 function addProject() {
  let name = document.getElementById("projectName").value;
  let status = document.getElementById("projectStatus").value;

  if (name.trim() === "") {
    alert("Please enter a valid project name");
    return;
  }

  let list =
    status === "Running"
      ? document.getElementById("runningProjects")
      : document.getElementById("completedProjects");
  let li = document.createElement("li");
  li.textContent = name;
  list.appendChild(li);

  document.getElementById("projectName").value = "";
}

function releaseFDR() {
  document.getElementById("fdrStatus").textContent =
    "FDR Released Successfully!";
  document.getElementById("fdrStatus").style.color = "green";
}

function updateNews() {
  let news = document.getElementById("newsInput").value;
  if (news.trim() === "") {
    alert("Please enter a news update");
    return;
  }
  document.getElementById("newsFlash").textContent = news;
  document.getElementById("newsInput").value = "";
}

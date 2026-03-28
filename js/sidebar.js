document.getElementById("homeButton").onclick = function () {
  window.location.href = "/index.html";
};

document.getElementById("searchButton").onclick = function () {
  window.location.href = "/html/search.html";
};

document.getElementById("libraryButton").onclick = function () {
  window.location.href = "/html/library.html";
};

document.getElementById("groupsButton").onclick = function () {
  window.location.href = "/html/groups.html";
};

document.getElementById("settingsButton").onclick = function () {
  window.location.href = "/html/settings.html";
};

document.querySelector(".userContainer").onclick = async function () {
  try {
    await DELETE("/auth");
    localStorage.removeItem("userId");
    window.location.href = "/html/login.html";
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
  }
};

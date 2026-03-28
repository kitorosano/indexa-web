async function loadUserData() {
  showLoading();
  const userId = localStorage.getItem("userId");

  try {
    const response = await GET(`/users/${userId}`);

    document.getElementById("userDataName").textContent = response.user.name;
    document.getElementById("userDataEmail").textContent = response.user.email;
    
    hideLoading();
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
loadUserData();

document.getElementById("homeButton").onclick = function () {
  window.location.href = "/";
};

document.getElementById("searchButton").onclick = function () {
  window.location.href = "search.html";
};

document.getElementById("libraryButton").onclick = function () {
  window.location.href = "library.html";
};

document.getElementById("groupsButton").onclick = function () {
  window.location.href = "groups.html";
};

document.getElementById("settingsButton").onclick = function () {
  window.location.href = "settings.html";
};

document.querySelector(".userContainer").onclick = async function () {
  try {
    await DELETE("/auth");
    localStorage.removeItem("userId");
    window.location.href = "login.html";
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
  }
};

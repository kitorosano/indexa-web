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

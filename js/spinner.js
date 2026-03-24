function showLoading() {
  const spinner = document.createElement("div");
  spinner.classList.add("mainLoader");
  spinner.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner-svg">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  `;
  document.body.appendChild(spinner);
}

function hideLoading() {
  const spinner = document.querySelector(".mainLoader");
  if (spinner) document.body.removeChild(spinner);
}

const backBtn = document.getElementById("back-btn");
const logoBtn = document.getElementsByClassName("logo")[0];

backBtn.onclick = () => {
  history.back();
};

logoBtn.onclick = () => {
  window.location.href = "../../index.html";
};

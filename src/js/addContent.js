const addModal = document.getElementsByClassName("modal")[1];

document.querySelectorAll(".add-detail-btn").forEach((item) => {
  item.onclick = () => {
    addModal.style.display = "block";
  };
});

window.onclick = (event) => {
  if (event.target == addModal) {
    addModal.style.display = "none";
  }
};

const modal = document.getElementsByClassName("modal")[0];

const closeBtn = document.querySelector(".close-btn");

const modalTitle = document.getElementById("modal-title");
const modalThumbnail = document.getElementById("modal-thumbnail");
const modalDetail = document.getElementById("modal-detail");

const modal2Title = document.getElementById("modal2-title");
const modal2Detail = document.getElementById("modal2-detail");

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.querySelectorAll(".goal-card").forEach((item) => {
  item.onclick = () => {
    const backgroundImage = getComputedStyle(
      item.querySelector(".card-thumbnail")
    ).backgroundImage;

    const imageUrl = backgroundImage.slice(5, -2);

    modal.style.display = "block";
    modalTitle.textContent = item.querySelector(".card-header").textContent;
    modalDetail.textContent = item.querySelector(".card-text").textContent;
    modalThumbnail.src = imageUrl;
  };
});

/*
document.querySelectorAll(".profile-detail").forEach((item) => {
  item.onclick = () => {
    modal2.style.display = "block";
    modal2Title.textContent = item.querySelector(".profile-text").textContent;
    modal2Detail.textContent = item.querySelector(".detail-text").textContent;
  };
}); */

const addBtn = document.getElementById("add-goal-btn");
const deleteBtn = document.getElementById("delete-goal-btn");
const goalCard = document.querySelector(".goal-card");
const goalContainer = document.querySelector(".goal-container");
const goalCardList = document.getElementsByClassName("goal-card");

addBtn.onclick = () => {
  const clonedGoalCard = goalCard.cloneNode(true);
  goalContainer.appendChild(clonedGoalCard);
};

deleteBtn.onclick = () => {
  const deleteCard = goalCardList[goalCardList.length - 1];
  deleteCard.remove();
};

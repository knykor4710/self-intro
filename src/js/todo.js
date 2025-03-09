const todoAddBtn = document.getElementById("todo-add-btn");
const todoList = document.getElementsByClassName("to-do-list")[0];
const todoModal = document.getElementById("todo-modal");
const todoClose = document.getElementsByClassName("todo-close")[0];
const todoForm = document.getElementById("todo-form");

// 현재 To-Do 개수 가져오기 (기본 값 설정)
let todoCount = document.getElementsByClassName("todo-contents").length;

// "추가하기" 버튼 클릭 시 모달 열기
todoAddBtn.onclick = () => {
  todoModal.style.display = "flex";
};

// 모달 닫기 버튼 클릭 시 모달 닫기
todoClose.onclick = () => {
  todoModal.style.display = "none";
};

// 폼 제출 시 새로고침 방지 및 To-Do 추가
todoForm.onsubmit = (event) => {
  event.preventDefault(); // 기본 제출 동작 막기 (새로고침 방지)

  // 입력값 가져오기
  const title = document.querySelector("input[name='todo-title']").value;
  const startDate = document.querySelector(
    "input[name='todo-start-date']"
  ).value;
  const dueDate = document.querySelector("input[name='todo-due-date']").value;
  const status = document.querySelector("select[name='todo-status']").value;

  // 새 행(tr) 생성
  const newRow = document.createElement("tr");
  newRow.classList.add("todo-contents");

  // Num (자동 증가)
  todoCount++;
  // todoCount = todoCount + 1;
  newRow.innerHTML = `
      <td>${todoCount}</td>
      <td>${title}</td>
      <td>${startDate}</td>
      <td>${dueDate}</td>
      <td>
          <select name="status-dropdown">
              <option value="active" ${
                status === "active" ? "selected" : ""
              }>Active</option>
              <option value="inactive" ${
                status === "inactive" ? "selected" : ""
              }>Inactive</option>
              <option value="done" ${
                status === "done" ? "selected" : ""
              }>Done</option>
              <option value="pending" ${
                status === "pending" ? "selected" : ""
              }>Pending</option>
          </select>
      </td>
  `;

  // 테이블에 추가
  todoList.appendChild(newRow);

  // 폼 초기화
  todoForm.reset();

  // 모달 닫기
  todoModal.style.display = "none";
};

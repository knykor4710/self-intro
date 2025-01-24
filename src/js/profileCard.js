const container = document.querySelector(".profile-card");
const overlay = document.querySelector(".card-overlay");

container.addEventListener("mousemove", function (e) {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left; // 마우스의 X 위치 (카드 기준)
  const y = e.clientY - rect.top; // 마우스의 Y 위치 (카드 기준)

  // 카드 회전
  const rotateX = (y / rect.height - 0.5) * -20; // 세로 축 기준 회전
  const rotateY = (x / rect.width - 0.5) * 20; // 가로 축 기준 회전

  // 오버레이 배경 위치 조정
  const overlayX = (x / rect.width) * 100;
  const overlayY = (y / rect.height) * 100;

  overlay.style.backgroundPosition = `${overlayX}% ${overlayY}%`;

  container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener("mouseout", function () {
  // 초기 상태로 복구
  container.style.transform = "perspective(350px) rotateX(0deg) rotateY(0deg)";
  overlay.style.backgroundPosition = "50% 50%"; // 기본값
});

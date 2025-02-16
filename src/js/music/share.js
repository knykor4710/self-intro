const shareBtn = document.querySelector("#share-btn");

shareBtn.onclick = () => {
  /* 현재 페이지의 url을 currentUrl 이라는 변수에 저장 */
  const currentUrl = window.location.href;
  navigator.clipboard
    .writeText(currentUrl)
    .then(() => {
      alert("현재 페이지 URL이 복사되었습니다!");
    })
    .catch((err) => {
      alert("복사 실패:", err);
    });
};

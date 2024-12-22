const about_btn = document.getElementById("header-about");
about_btn.onclick = () => {
  const aboutSection = document.querySelector(".about");
  const headerOffset = 80;
  const elementPosition = aboutSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const goal_btn = document.getElementById("header-goal");
goal_btn.onclick = () => {
  const goalSection = document.querySelector(".goal");
  const headerOffset = 80;
  const elementPosition = goalSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const contact_btn = document.getElementById("header-contact");
contact_btn.onclick = () => {
  const contactSection = document.querySelector(".contact");
  const headerOffset = 80;
  const elementPosition = contactSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

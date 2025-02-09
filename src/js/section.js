// Move to About Section
const logo_btn = document.getElementsByClassName("logo")[0];
logo_btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Move to About Section
const about_btn = document.getElementById("header-about");
about_btn.onclick = () => {
  const aboutSection = document.querySelector(".about");
  const headerOffset = 58;
  const elementPosition = aboutSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

// Move to About Section
const music_btn = document.getElementById("header-music");
music_btn.onclick = () => {
  const musicSection = document.querySelector(".music");
  const headerOffset = 58;
  const elementPosition = musicSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

// Move to Goal Section
const goal_btn = document.getElementById("header-goal");
goal_btn.onclick = () => {
  const goalSection = document.querySelector(".goal");
  const headerOffset = 58;
  const elementPosition = goalSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

// Move to Contact Section
const contact_btn = document.getElementById("header-contact");
contact_btn.onclick = () => {
  const contactSection = document.querySelector(".contact");
  const headerOffset = 58;
  const elementPosition = contactSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

// Move to About Section
const more_btn = document.getElementById("more-btn");
more_btn.onclick = () => {
  const aboutSection = document.querySelector(".about");
  const headerOffset = 58;
  const elementPosition = aboutSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

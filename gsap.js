window.onload = () => {
  // Animate main box on load
  gsap.from(".main-box", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power3.out"
  });

  // Animate heading
  gsap.from("h2", {
    delay: 0.5,
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: "back.out(1.7)"
  });

  // Animate input, dropdowns, and button
  gsap.from(".amount, .dropdown, .exchange-msg, .convert-btn", {
    delay: 0.6,
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Button hover animation using GSAP
  const convertBtn = document.querySelector(".convert-btnn");

  convertBtn?.addEventListener("mouseenter", () => {
    gsap.to(convertBtn, { scale: 1.05, duration: 0.3 });
  });

  convertBtn?.addEventListener("mouseleave", () => {
    gsap.to(convertBtn, { scale: 1, duration: 0.3 });
  });

  // Rotate exchange icon on click
  const exchangeIcon = document.querySelector(".exchange-icon");

  exchangeIcon?.addEventListener("click", () => {
    gsap.fromTo(
      exchangeIcon,
      { rotate: 0 },
      { rotate: 360, duration: 0.6, ease: "power2.inOut" }
    );
  });
};

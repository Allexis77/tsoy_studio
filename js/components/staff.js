function staff() {
  let MouseCursore = document.querySelector("#cursor");

  window.addEventListener("mousemove", cursor);

  function cursor(e) {
    MouseCursore.style.top = e.pageY + "px";
    MouseCursore.style.left = e.pageX + "px";
  }
  const btn = document.querySelector(".header-btn__item");

  btn.addEventListener("mouseenter", (e) => {
    btn.classList.toggle("animate__headShake");
  });
}

export default staff;
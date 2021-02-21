import staff from './components/staff';
import modal from './components/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    staff();
    modal('[data-modal]', '.form', modalTimerId);
});


lazyload();

let work = document.querySelector(".works-box"),
items = Array.from(work.querySelectorAll(".works-box__item")),
loadMore = document.getElementById("loadMore"),
maxItems = 6,
loadItems = 6,
hiddenClass = "hiddenStyle",
hiddenItems = Array.from(document.querySelectorAll(".hiddenStyle"));

items.forEach(function (item, index) {
  if (index > maxItems - 1) {
    item.classList.add(hiddenClass);
  }
});


loadMore.addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
    item,
    index
  ) {
    if (index < loadItems) {
      item.classList.remove(hiddenClass);
    }

    if (document.querySelectorAll("." + hiddenClass).length === 0) {
      loadMore.style.display = "none";
    }
  });
});

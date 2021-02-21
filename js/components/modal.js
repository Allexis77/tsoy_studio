function openModal() {
  const modalSelector = document.querySelector(".form");

  modalSelector.classList.add("show");
}

function modal() {
  const BtnGold = document.querySelector(".modal-form__gold"),
    BtnCancel = document.querySelector(".form-cancel__btn"),
    BtnSilver = document.querySelector(".modal-form__silver"),
    BtnBronse = document.querySelector(".modal-form__bronse"),
    Tarif = document.querySelector("#tarif"),
    modalSelector = document.querySelector(".form");

  BtnGold.addEventListener("click", (e) => {
    e.preventDefault;

    Tarif.value = "Нихера ж себе";
    openModal();
  });

  BtnSilver.addEventListener("click", (e) => {
    e.preventDefault;

    Tarif.value = "Бюджет";
    openModal();
  });

  BtnBronse.addEventListener("click", (e) => {
    e.preventDefault;

    Tarif.value = "Эконом";
    openModal();
  });

  document.addEventListener("click", (e) => {
    const target = e.target;

    if (target.className === "price" || target.className === "price-card" || target.className === "ModalOpen") {
      modalSelector.classList.remove("show");

      document.body.classList.remove("ModalOpen");
    }
  });

  BtnCancel.addEventListener("click", (e) => {
    e.preventDefault;
    modalSelector.classList.remove("show");
    document.body.classList.remove("ModalOpen");
  });

  document.addEventListener("click", () => {
    if (modalSelector.classList.contains("show")) {
      document.body.classList.add("ModalOpen");
    }
  });
}

export default modal;

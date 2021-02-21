import { getResource } from "../sevices/services";
function cards() {
  class WorksCards {
    constructor(src, alt, link, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.link = link;
      this.parent = document.querySelector(parentSelector);
    }

    
    render() {
      const ChildDiv = document.createElement("div");
      ChildDiv.classList.add("works-box__item");

      ChildDiv.innerHTML = `
            <img src=${this.src} alt=${this.alt}>

            <div class="works-box__item-active animate__delay-1s animate__slow animate__animated">
            <a href=${this.link}>Смотреть работу!</a>
            </div>                
            `;
      this.parent.append(ChildDiv);
    }

  }
  getResource("http://localhost:3000/cards").then((data) => {
    data.forEach(({ src, alt, link }) => {
      new WorksCards(src, alt, link, ".works .works-box").render();
    });
  });


}

export default cards;

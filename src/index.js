import "./styles.css";

function initPage() {
  const root = document.querySelector("#app");
  const containerElement = document.createElement("app-container");
  root.appendChild(containerElement);
}

class AppContainer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>`;
  }
}

window.addEventListener("DOMContentLoaded", function() {
  initPage();
});

customElements.define("app-container", AppContainer);

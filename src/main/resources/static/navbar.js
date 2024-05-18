// navbar.js
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            });
    }
}

customElements.define('custom-navbar', CustomNavbar);
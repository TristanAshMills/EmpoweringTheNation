class Navbar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

        this.innerHTML = `
            <div class="navbar">
                <img src="../_images/Foundation-photoaidcom-cropped.png" width="150" height="150" class="Logo">
                <ul class="navList">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="course_details.html">Courses</a></li>
                    <li><a href="apply.html">Apply Now</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>

        `;
    }
}
customElements.define('nav-component', Navbar);
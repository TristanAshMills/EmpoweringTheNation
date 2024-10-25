class Navbar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

        this.innerHTML = `
            <div class="navbar">
                <img src="../_images/Foundation.png" width="100" height="100" class="Logo">
                <div class="navList">
                    <a class="navLink" href="index.html">Home</a>
                    <div class="dropdownCon">
                        <a class="navLink" href="course_details.html">Courses</a>
                        <div class="dropdownOpt">
                            <a class="navLink" href="six_month_courses.html">Six Month</a>
                            <a class="navLink" href="six_week_courses.html">Six Week</a>
                        </div>
                    </div>
                    <a class="navLink" href="apply.html">Apply Now</a>
                    <a class="navLink" href="contact.html">Contact Us</a>
                </div>
            </div>

        `;
    }
}
customElements.define('nav-component', Navbar);
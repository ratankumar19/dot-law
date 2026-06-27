/*!
* Start Bootstrap - Agency v7.0.12
*/

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');

        if (!navbarCollapsible) {
            return;
        }

        if (window.scrollY === 0) {
            navbarCollapsible.classList.add('navbar-scrolled')
           // navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.remove('navbar-scrolled');
           // navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    // Bootstrap ScrollSpy
    const mainNav = document.body.querySelector('#mainNav');

    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar only for normal links
    const navbarToggler = document.body.querySelector('.navbar-toggler');

    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {

        responsiveNavItem.addEventListener('click', function (e) {

            // IMPORTANT:
            // Do not collapse navbar when clicking dropdown parent
            if (this.classList.contains('dropdown-toggle')) {
                e.preventDefault();
                return;
            }

            // Collapse navbar only for normal menu links
            if (
                navbarToggler &&
                window.getComputedStyle(navbarToggler).display !== 'none'
            ) {
                navbarToggler.click();
            }

        });

    });

});
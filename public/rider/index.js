// materialize initialization
 document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdown);
    var sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);
    var collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
});

const navAccountDetails = document.querySelector('.nav-acc-details');
const profile = document.querySelector('.profile');
const favorites = document.querySelector('.favourites');
// materialize initialization
 document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdown);
    var sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);
    var collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
});

// DOM MANIPULATION
const setUpUi = (user) => {
// display user info
    const html = `
    <a href="#user"> <img src="${user.photoURL == null ? 'https://s3.amazonaws.com/FringeBucket/default-user.png' : user.photoURL}" class="circle" alt="User's profile picture"></a>
    <a href="#name"><span class="black-text name">${user.displayName}</span></a>
    <a href="#email"><span class="black-text email">${user.email}</span></a>
    `;
    navAccountDetails.innerHTML = html;
}


const userProfile = (user) => {
    const myProfile = `
            <div class="row z-depth-3 white content-wrapper">
                            
            <div class="col s6 center profile-wrapper">
                <img class="profile-img circle" src="${user.photoURL == null ? '../../assets/images/profile-placeholder.png' : user.photoURL}" alt="User profile image">


                <input type="file" id="selectPhoto" class="visually-hidden">
                <label for="selectPhoto" class="select-btn"><div class="btn-floating white"><i class="fa fa-pencil edit-icon" style="color: black;" aria-hidden="true"></i></div></label>
            </div>


            <div class="col s6 valign-wrapper profile-name-wrapper">
                <div class="user-name flow-text center profile-name">${user.displayName}</div>
            </div>
        </div>
    `
    profile.innerHTML = myProfile
}
var firebaseConfig = {
    apiKey: "AIzaSyDn17srBVoSRl3_4R0koOaNtlBP8vSG3Uk",
    authDomain: "ty9-92d7f.firebaseapp.com",
    projectId: "ty9-92d7f",
    storageBucket: "ty9-92d7f.appspot.com",
    messagingSenderId: "336679389327",
    appId: "1:336679389327:web:a7e9f23dff4570360ec8fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// MATERIALIZ CODE 
document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);
});





// contact us elements
const contactUs = document.querySelector('#contactUs');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');

// add event listener to form
contactUs.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = userName.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const messageValue = message.value;

    // add messages to collection
    db.collection('contactUsMessages').add({
        name: nameValue,
        email: emailValue,
        phoneNumber: phoneValue,
        message: messageValue
    }).then(() => {
        let toastHTML = '<span>Your message has been sent</span>';
        M.toast({html: toastHTML});
        contactUs.reset();
    }).catch(err => console.log(err));
});


// refrence messages collection

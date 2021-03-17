// LISTEN FOR AUTH STATE CHANGE
initApp = () => {
    auth.onAuthStateChanged(user => {
        if (user) {
             // User is signed in.
            //  var displayName = user.displayName;
            //  var email = user.email;
            //  var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            //  var phoneNumber = user.phoneNumber;
            //  var providerData = user.providerData;

            // call the function from index.js 
            // to create user profile on nav
            setUpUi(user);
            userProfile(user);
            

            
            // ********** UPLOAD USER PROFILE PICTURE **********
            // GET DOM ELEMENTS
            let selectphoto = document.querySelector('#selectPhoto');
            let profilePhoto = document.querySelector('#profilePhoto');

            // LISTEN FOR EVENT CHANGE
            selectphoto.addEventListener('change', (e) => {
                // GET FILE
                let file = e.target.files[0];

                // CREATE STORAGE REF
                let storageRef = storage.ref('users/' + uid + '/profile.jpg');

                // UPLOAD FILE
                let task = storageRef.put(file);

                // UPDATE PROGRESS BAR
                task.on('state_changed', 
                    function progress(snapshot) {
                        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                        console.log('you image is ' + percentage + '% complete');
                    }, 

                    function error (err) {
                        console.log(err.message);
                    }, 

                    () => {
                        task.snapshot.ref.getDownloadURL().then(url => {
                            user.updateProfile({
                                photoURL: url
                            }).catch(err => {
                                console.log(err.message);
                            });
                            window.location.reload();
                        });
                    }
                )
            });

            // ********** USER PROFILE **********
            

            

            
        }
        
        else {
            // User is signed out
        }
    })
}



window.addEventListener('load', () => {
    initApp();
})

// SIGN USER OUT
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location.assign('../../index.html');
    });
});




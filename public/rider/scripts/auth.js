// LISTEN FOR AUTH STATE CHANGE
initApp = () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            var photoURL = user.photoURL;
            var uid = user.uid;
            setUpUi(user);
            userProfile(user);
            setUpFavs(user);
            favFormSet(user);

            
            

            
            // ********** UPLOAD USER PROFILE PICTURE **********
            // GET DOM ELEMENTS
            let selectphoto = document.querySelector('#selectPhoto');
            

            // LISTEN FOR EVENT CHANGE
            selectphoto.addEventListener('change', (e) => {
                // GET FILE
                let file = e.target.files[0];

                // CREATE STORAGE REF
                let storageRef = storage.ref('users/' + uid + '/profile.jpeg');

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
                        // get resized user image
                        let storageRefw = storage.ref('users/' + uid + '/profile.jpeg');

                        storageRefw.getDownloadURL().then(url => {
                            window.location.reload();
                            user.updateProfile({
                                photoURL: url
                            }).catch(err => {
                                console.log(err.message);
                            });
                        });
                        
                                                
                        let toastHTML = "<span>Your profile image has been updated!</span>";
                        M.toast({html: toastHTML});
                        
                    }
                );
            });
        }
        
    })
}



window.addEventListener('load', () => {
    initApp();
});

// SIGN USER OUT
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location.assign('../../index.html');
    });
});




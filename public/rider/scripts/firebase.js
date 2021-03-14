// const uploadUserProfilePhoto = (user) => {


//     // GET DOM ELEMENTS
//      let selectphoto = document.querySelector('#selectPhoto');


//      // LISTEN FOR EVENT CHANGE
//     selectphoto.addEventListener('change', (e) => {
//     // GET FILE
//     let file = e.target.files[0];

//     // CREATE STORAGE REF
//     let storageRef = storage.ref('profile_photo/' + file.name);

//     // UPLOAD FILE
//     let task = storageRef.put(file);

//     // UPDATE PROGRESS BAR
//     task.on('state_changed', 
//         function progress(snapshot) {
//             let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

//                 console.log('your file is ' + percentage +'% done!');
//             },

//             function error(err) {

//             }, 

//             () => {
//                 task.snapshot.ref.getDownloadURL().then((url) => {
//                     // console.log('Photo can be downloaded at ' + url);
//                     if (user.photoURL == null) {
//                         user.updateProfile({

//                         })
//                     }
//                 });
//             }
//         );
//     });

    
// }








// upload user info to db

// get input elements
// modals
const homeModal = document.querySelector('#modal1');
const workModal = document.querySelector('#modal2');
const shoppingModal = document.querySelector('#modal3');
// form elements
const homeModalForm = document.querySelector('#homeModalForm');
const workModalForm = document.querySelector('#workModalForm');
const shoppingModalForm = document.querySelector('#shoppingModalForm');
// form input elements
const homeAddress = document.querySelector('#homeAddress');
const workAddress = document.querySelector('#workAddress');
const shoppingAddress = document.querySelector('#shoppingAddress');


const favFormSet = (user) => {
    // form submit event (home)
    homeModalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // get form values
        let homeAddressValue = homeAddress.value;
        db.collection('users').doc(user.uid).set({
            home: homeAddressValue
        }, { merge: true }).then(() => {
            let toastHTML = "<span>Your home address has been updated!</span>";
            M.toast({html: toastHTML});
            homeModalForm.reset();
            var modal = M.Modal.getInstance(homeModal);
            modal.close();
        }).catch(err => console.log(err));
        

        // form submit event (work)
        workModalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // get form values
            let workAddressValue = workAddress.value;
            db.collection('users').doc(user.uid).set({
                work: workAddressValue
            }, { merge: true }).then(() => {
                let toastHTML = "<span>Your office address has been updated!</span>";
                M.toast({html: toastHTML});
                workModalForm.reset();
                var modal = M.Modal.getInstance(workModal);
                modal.close();
            }).catch(err => console.log(err));
            
            

            // form submit event (shopping center)
            shoppingModalForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // get form values
                let shoppingAddressValue = shoppingAddress.value;
                db.collection('users').doc(user.uid).set({
                    shoppingCenter: shoppingAddressValue
                }, { merge: true }).then(() => {
                    let toastHTML = "<span>Your shopping address has been updated!</span>";
                    M.toast({html: toastHTML});
                    shoppingModalForm.reset();
                    var modal = M.Modal.getInstance(shoppingModal);
                    modal.close();
                }).catch(err => console.log(err));
                
            });
        });
    });

}






// Request for campus or estate to be added

// DOM elements 
const requestContact = document.querySelector('#requestContact');
const contactName = document.querySelector('#name');
const contactEmail = document.querySelector('#email');
const searchLocation = document.querySelector('#location');
const radioSelectUni = document.querySelector('#uni');
const radioSelectEst = document.querySelector('#estate');




// form submit event
requestContact.addEventListener('submit', (e) => {
    e.preventDefault();
    let opt;
    if (radioSelectEst.checked) {
        opt = radioSelectEst.value;
    }else if (radioSelectUni.checked) {
        opt = radioSelectUni.value;
    }
    
    
    // get form input values
    const contactNameValue = contactName.value;
    const contactEmailValue = contactEmail.value;
    const locationValue = searchLocation.value;
    

    
    db.collection('requestEstateOrUni').add({
        name: contactNameValue,
        email: contactEmailValue,
        location: locationValue,
        radioBtnSelected: opt
    }).then(() => {
        let toastHTML = "<span>Your request has been sent!</span>";
        M.toast({html: toastHTML});
        requestContact.reset();
    }).catch(err => console.log(err));
});

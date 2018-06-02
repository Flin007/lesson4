const contactListArray = JSON.parse(loadContacts());
const contactListContainer = document.getElementsByClassName('contacts-list')[0];
for(let a of contactListArray){
    contactListContainer.innerHTML += '<li data-email="'+a.email+'" data-phone="'+a.phone+'"> <strong>'+a.name+'</strong> </li>';
}

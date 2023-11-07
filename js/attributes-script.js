(() => {
    const newPicSrc = "https://img.freepik.com/premium-photo/bright-vivid-instagram-profile-pic-cute-little-bunny-with-wideeyed-innocence-sporting-fru_983420-22471.jpg?w=1380";
    const oldPicSrc = "https://via.placeholder.com/150";
    const imgProfile = document.querySelector("#profile-card img");

    const profileName = document.querySelector('#profile-name');


    const desTXT = document.querySelector('#profile-card p');

    const profileCard = document.querySelector('#profile-card');

    setTimeout(() => {
        imgProfile.setAttribute('src', newPicSrc);

    }, 2000);
    setTimeout(() => {
        profileName.innerText = "profile-name"

    }, 4000);

    setTimeout(() => {
        desTXT.classList.add('profile-desc')

    }, 6000);

    setInterval(() => {
        profileCard.classList.toggle('profile-bg')
    }, 2000);


})();
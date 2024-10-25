function openPopup(popupId) {
    closeAllPopups(); 
    courseId = document.getElementById(popupId)
    bgId = document.getElementById('bgChange')
    courseId.classList.add("open-popup");
    changeBg(courseId, bgId)
}
function closeAllPopups() {

    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        popup.classList.remove('open-popup');
    });
}
function closePopup(popupId) {
    document.getElementById(popupId).classList.remove("open-popup");
    bgId = document.getElementById('bgChange')
    changeBg('', bgId)
}

function changeBg(courseId, bgId) {
    
    let bgImage = ''

    switch(courseId.id){
        case '':
            bgImage = "linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url(../_images/pexels-oleksandr-tiupa-53788-192136.jpg)"
            break;
        
        case 'popup-first-aid':
            bgImage = "linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url(../_images/photo-1566889035559-b14ef9d4c365.jpg)"
            break;
        
        case 'popup-sewing':
            bgImage = "linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url(../_images/victor-volkov-jIyzx1YSH5g-unsplash.jpg)"
            break;

        case 'popup-Landscaping':
            bgImage = "linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url(../_images/photo-1532302780319-95689ab9d79a.jpg)"
            break;

        case 'popup-child-minding':
            bgImage = "linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url(../_images/photo-1516627145497-ae6968895b74.jpg)"
            break;
        
        case 'popup-cooking':
            bgImage = "linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url(../_images/photo-1424593463432-4104fa2c015a.jpg)"
            break;

        case 'popup-garden':
            bgImage = "linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url(../_images/photo-1515150144380-bca9f1650ed9.jpg)"
            break;
    }
    bgId.style.backgroundImage = bgImage;
}
function togglelistAlbum_name2(){
    var listAlbum_name2 = document.querySelector('#listAlbum_name2')
    listAlbum_name2.style.display = listAlbum_name2.style.display == 'block' ? 'none' : 'block'
}

function toggleAlbum(albumId){
    var listImages_Videos = document.querySelectorAll('.listImages-Videos')
    listImages_Videos.forEach(listImage_Video => {
        listImage_Video.style.display = 'none'
    })
    var displayAlbumId = document.querySelector(`#${albumId}`)
    displayAlbumId.style.display = "block"
}

var currentIndex = 0
function displayImage(){
    var listImages_items = document.querySelector('.listImages_item')
    var selected_image = document.querySelector('#selected-image')
    var modalImage = document.querySelector('#modalImage')
    modalImage.style.display = "flex"
    listImages_items.forEach(function(listImages_item, index) {
        listImages_item.onclick = function(){
            selected_image.src = this.src
        }
    })
    
}

function hideModalImage(){
    var modalImage = document.querySelector('#modalImage')
    modalImage.style.display = "none"
}
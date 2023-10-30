
    
    // Hiển thị danh sách tên album 2
    function togglelistAlbum_name2() {
        var listAlbum_name2 = document.getElementById("listAlbum_name2");
        listAlbum_name2.style.display = (listAlbum_name2.style.display == "block") ? "none" : "block";          
    }

    //upload image
    var uploadId = "n2014_2019";
    function toggleAlbum(albumId) {
        uploadId = albumId;
        var album = document.getElementsByClassName("listImages-Videos");
        for (var i = 0; i < album.length; i++) {
            album[i].style.display = "none";
        }
        var selectedAlbum = document.getElementById(albumId);
        selectedAlbum.style.display = "block";
        }
    
    //Hiển thị danh sách videos
    function toggleVideos(albumId) {
      while (true) {
        var promptValue = prompt('Ngày kỷ niệm là: **** ? ')
        if (promptValue === null) {
          // Người dùng bấm nút "Huỷ" 
          break; 
        } else if (promptValue === '9514') {
          var Album = document.getElementsByClassName("listImages-Videos");
          for (var i = 0; i < Album.length; i++) {
              Album[i].style.display = "none";
          }
          var selectedAlbum = document.getElementById(albumId);
          selectedAlbum.style.display = "block";
          var hideImage = document.getElementById("showImg");
          hideImage.style.display = "none";
            break; // Thoát khỏi vòng lặp nếu mã đúng
        } else {
              alert("Oh, no...! Who are you?");
          }
      }
    }

    //Kéo view image đã xem vào tầm nhìn
    function scrollToActiveSong(){
        setTimeout(function(){
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        },200)
    }


    //Show / Next / Prev Imagelist
    var images;
    var currentIndex = 0;
    function displayImage(image) {
        var showImg = document.getElementById("modalImage")
        showImg.style.display = "flex"
        var selectedImage = document.getElementById("selected-image");
        selectedImage.src = image.src;

        var nameClassALbum = image.className; //lấy danh sách all class trong thẻ img
        var nameClassALbumArray = nameClassALbum.split(" "); //tách thành mảng các class
        var firstNameClassAlbum = nameClassALbumArray[0] //lấy ra tên class đầu tiên
        // console.log(nameClassALbum);
        // console.log(firstNameClassAlbum);
        images = document.querySelectorAll('.' + firstNameClassAlbum)
        currentIndex = Array.from(images).indexOf(image);//gắn lại index của image đang click
        images.forEach(function(img){
            img.style.border = "1px solid #988f8f";
        })
    }
    //Ẩn modalImage
    function hideModalImage(img) {
        var modalImage = document.getElementById("modalImage");
        modalImage.style.display = "none";
        var listAlbum_name2 = document.getElementById("listAlbum_name2");
        listAlbum_name2.style.display = "none";
        images[currentIndex].style.border = "2px solid dodgerblue"
        setTimeout(function(){
            images[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        },200)
    }
        
    function showPreviousImage() {
        if (images.length === 0) return;
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        var selectedImage = document.getElementById("selected-image");
        if (images[currentIndex]) {
            selectedImage.src = images[currentIndex].src;
        }
    }
    
    function showNextImage() {
        if (images.length === 0) return;
        currentIndex = (currentIndex + 1) % images.length;
        var selectedImage = document.getElementById("selected-image");
        if (images[currentIndex]) {
            selectedImage.src = images[currentIndex].src;
        }
    }

    //Tải ảnh lên
    function previewImage(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function() {
            var imgElement = document.createElement('img');
            imgElement.src = reader.result;
            document.getElementById('damcuoi').appendChild(imgElement);
        }
        reader.readAsDataURL(file);
    }

    


    // // Đường dẫn đến thư mục chứa ảnh
    // const linkOrigin = window.location.origin;
    // const linkFolder = '/love_you/LaDoNB/'
    // link = linkOrigin + linkFolder
    // console.log(link)

    // // Lấy thẻ chứa album
    // const album = document.getElementById('damcuoi');

    // // Sử dụng fetch để đọc danh sách ảnh từ thư mục
    // fetch(link)

    //     .then(response => response.text())
    //     .then(text => {

    //         // Tách danh sách tên tệp ảnh
    //         const listNameImg = text.split('\n');
    //         console.log(listNameImg)

    //         // Duyệt qua từng tên tệp và hiển thị ảnh
    //         listNameImg.forEach(nameImg => {
    //             // Tạo phần tử hình ảnh và đặt thuộc tính src
    //             const img = document.createElement('img');
    //             img.src = `${linkOrigin}${linkFolder}${nameImg}`; //Đường dẫn đến ảnh
    //             // console.log(nameImg)

    //             // Thêm lớp CSS và đưa vào album
    //             img.classList.add('listImages_item');
    //             album.appendChild(img);
    //         });
    //     })
    //     .catch(error => console.error(error));
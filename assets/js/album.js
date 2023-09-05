
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






    var images = '';
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

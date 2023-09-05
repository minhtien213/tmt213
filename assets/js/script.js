
        //Hiển thị danh sách menu 2(more)
        function togglelistMenu2() {
          var listMenu2 = document.getElementById("listmenu2");
          listMenu2.style.display = (listMenu2.style.display == "block") ? "none" : "block";          
        }

        //Display backgroundColor
        var checkChangeColor = document.querySelector('#checkChangeColor')
        var savedCheckbox = localStorage.getItem("checkbox");
        var savedBackgroundColor = localStorage.getItem("backgroundColor");
        if (savedBackgroundColor) {
          document.querySelector(".container").style.backgroundColor = savedBackgroundColor;
        }
        if (savedCheckbox === 'checked') {
          checkChangeColor.checked = "true";
          }
        checkChangeColor.addEventListener('change', function(){
            if(this.checked){
              var container = document.querySelector(".container");
              container.style.backgroundColor = "#c38595";
              localStorage.setItem("backgroundColor", "#c38595")
              localStorage.setItem('checkbox', 'checked')
            }else{
              var container = document.querySelector(".container");
              container.style.backgroundColor = "transparent";
              // container.style.backgroundImage = "url('link img')";
              localStorage.removeItem("checkbox"); 
              localStorage.removeItem("backgroundColor"); 
            }
        })

        // Hiển thị danh sách tên album 2
        function togglelistAlbum_name2() {
          var listAlbum_name2 = document.getElementById("listAlbum_name2");
          listAlbum_name2.style.display = (listAlbum_name2.style.display == "block") ? "none" : "block";          
        }

        //  //Hiển thị danh sách menu responsive
        function openMenu() {
          var listMenu = document.getElementById("listmenu");
          var listMenu2 = document.getElementById("listmenu2");
          listMenu.style.display = (listMenu.style.display == "block") ? "none" : "block";
          listMenu2.style.display = "none"        
        }

        
    
        //Hiển thị danh sách ảnh
        function toggleAlbum(albumId) {
        var Album = document.getElementsByClassName("listImages-Videos");
        for (var i = 0; i < Album.length; i++) {
            Album[i].style.display = "none";
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


        //Show/Hide Password
        function togglePasswordVisibility() {
            var passwordInput = document.getElementById("password");
            var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
            passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
        }

          // Đóng mở modal login
          function openModalLogin() {
            var modalLogin = document.getElementById("modal");
            modalLogin.style.display = "flex";
          }
            
          function closeModalLogin() {
            var modalLogin = document.getElementById("modal");
            modalLogin.style.display = "none";
          }


        // Đóng mở modal Create Timeline / Aniversary
        function openModal() {
            var modal = document.getElementById("modalCreate");
            modal.style.display = "flex";
          }
          
        function closeModal() {
          var modal = document.getElementById("modalCreate");
          modal.style.display = "none";
        }

    
        //Đóng / Mở moda Album ảnh
        function openModalImage(image) {
          var showImg = document.getElementById("modalImage")
          showImg.style.display = "flex"
          var selectedImage = document.getElementById("selected-image");
          selectedImage.src = image.src;
          var link_section = document.querySelector('.link_section')
          if(link_section){
            link_section.style.display = "none";
          }
        }

        function hideModalImage() {
          var hideImage = document.getElementById("modalImage");
          hideImage.style.display = "none";
        }


        //Xác nhận vào Notes/Videos
        function noteMenu_videos() {
          while (true) {
          var promptValue = prompt('Ngày kỷ niệm là: **** ? ')
          if (promptValue === null) {
            // Người dùng bấm nút "Huỷ" 
            break; 
          } else if (promptValue === '9514') {
              window.location.href = "notes.html";
              break; // Thoát khỏi vòng lặp nếu mã đúng
          } else {
                alert("Oh, no...! Who are you?");
            }
        }
        }

        function music(){
          var audio = document.querySelector('#myAudio');
          var volumeIcon = document.querySelector('#volumeIcon');
          if(!audio.paused){
              audio.pause();
              volumeIcon.classList.remove('ti-music-alt')
              volumeIcon.classList.add('ti-control-play') 
            }else{
              audio.play();
              volumeIcon.classList.remove('ti-control-play')
              volumeIcon.classList.add('ti-music-alt')
            }
        }
        


        

        


        
        


        
        
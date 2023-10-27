

//Hiển thị danh sách menu 2(more)
function togglelistMenu2() {
  var listMenu2 = document.getElementById("listmenu2");
  listMenu2.style.display = (listMenu2.style.display == "flex") ? "none" : "flex";          
}

//  //Hiển thị danh sách menu responsive
function openMenuMobile() {
  var menubtn = document.querySelector('.menubtn')
  menubtn.classList.toggle('closeBtn')
  var listmenu_mobile = document.getElementById("listmenu_mobile");
  listmenu_mobile.style.display = (listmenu_mobile.style.display == "flex") ? "none" : "flex";
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

//Click vào windows để ẩn listmenu 2
window.addEventListener('click', function(e){
  const morebtn = e.target.closest('.moreBtn');
  const ul2Node = e.target.closest('.listmenu2');
  if( !ul2Node && !morebtn ){
      let listmenu2 = document.querySelector('.listmenu2')
      if(listmenu2){
        listmenu2.style.display = 'none'
      }
    }
});


// document.onkeyup = function(e){ 
//   // console.log(e.which)
//   switch(e.which){ 
//       case 27: //27 là phím ESC
//           hideModalImage()
//           break;
//       case 37: //37 là phím <
//           showPreviousImage()
//           break;
//       case 39: //39 là phím >
//           showNextImage()
//           break;
//   }
// }


//Change background
  var checkChangeColor = document.getElementById('checkChangeColor')
  var checkChangeColor_mobile = document.getElementById('checkChangeColor_mobile')
  var container = document.querySelector('.container')
  var changeColorState = localStorage.getItem('backroundColor')
  var checkboxState = localStorage.getItem('checkboxState')
  if(changeColorState){
    container.classList.add('backroundColor')
    }
  if(checkboxState === 'checked'){
    checkChangeColor.checked = true
    checkChangeColor_mobile.checked = true
  }

  if(checkChangeColor){
    checkChangeColor.addEventListener('change', function(){
      if(this.checked){
        container.classList.add('backroundColor')
        localStorage.setItem('backroundColor', 'backroundColor')
        localStorage.setItem('checkboxState', 'checked')
      }else{
        container.classList.remove('backroundColor')
        localStorage.removeItem('backroundColor')
        localStorage.removeItem('checkboxState')
      }
  })
}
  
if(checkChangeColor_mobile){
  checkChangeColor_mobile.addEventListener('change', function(){
    if(this.checked){
      container.classList.add('backroundColor')
      localStorage.setItem('backroundColor', 'backroundColor')
      localStorage.setItem('checkboxState', 'checked')
    }else{
      container.classList.remove('backroundColor')
      localStorage.removeItem('backroundColor')
      localStorage.removeItem('checkboxState')
    }
  })
}

window.addEventListener('resize', function(){
  if(window.innerWidth > 480){
    var listmenu_mobile = document.getElementById("listmenu_mobile");
    listmenu_mobile.style.display = 'none';
  }
})
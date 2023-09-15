
//Hiển thị danh sách menu 2(more)
function togglelistMenu2() {
  var listMenu2 = document.getElementById("listmenu2");
  listMenu2.style.display = (listMenu2.style.display == "block") ? "none" : "block";          
}

//Display backgroundColor
var savedCheckbox = localStorage.getItem("checkbox");
if (savedCheckbox === 'checked'){
  if(checkChangeColor){
    checkChangeColor.checked = "true";
  }}
var savedBackgroundColor = localStorage.getItem("backgroundColor");
if (savedBackgroundColor) {
  document.querySelector(".container").style.backgroundColor = savedBackgroundColor;
}

var checkChangeColor = document.querySelector('#checkChangeColor')
if (checkChangeColor){
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
}




//  //Hiển thị danh sách menu responsive
function openMenu() {
  var listMenu = document.getElementById("listmenu");
  var listMenu2 = document.getElementById("listmenu2");
  listMenu.style.display = (listMenu.style.display == "block") ? "none" : "block";
  listMenu2.style.display = "none"        
}

//Đóng / Mở modal ảnh Timeline / Anniversary
  var elementsDivs = document.querySelectorAll('.elementsDiv')
  elementsDivs.forEach(function(elementDiv) {
    elementDiv.onclick = function(e){
      // console.log(e.target)
      const option = e.target.closest('.option');
      const like = e.target.closest('.like');
      if( !option && !like ){
        var showImg = document.getElementById("modalImage")
        showImg.style.display = "flex"

        var srcImg = elementDiv.querySelector('img').src;
        var selectedImage = document.getElementById("selected-image");
        selectedImage.src = srcImg;

        var textContentLabel = elementDiv.querySelector('p').textContent;
        var pElement = document.querySelector('#labelContent');
        pElement.textContent = textContentLabel;

        var link_section = document.querySelector('.link_section')
        if(link_section){
          link_section.style.display = "none";
        } 
      }
    }
  })

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

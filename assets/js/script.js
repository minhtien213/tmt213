
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
    var currentListImgIndex = 0;
    var currentListContentIndex = 0;
    var currentparentElement = 0;

  var elementsDivs = document.querySelectorAll('.elementsDiv')
  var content_forms = document.querySelectorAll('.content_form')
  var listImgs = document.querySelectorAll('.elementsDiv img');
  var listContents = document.querySelectorAll('.elementsDiv .label_content');
  elementsDivs.forEach(function(elementDiv, index) {
    
    var listImg = listImgs[index];
    var listContent = listContents[index];
    var elementsDiv = elementsDivs[index];

    elementDiv.onclick = function(e){
      const option = e.target.closest('.option');
      const like = e.target.closest('.like');

      if( !option && !like ){
        var showImg = document.getElementById("modalImage")
        showImg.style.display = "flex"

        var srcImg = elementDiv.querySelector('img').src;
        var selectedImage = document.getElementById("selected-image");
        selectedImage.src = srcImg;
        currentListImgIndex = Array.from(listImgs).indexOf(listImg);

        var textContentLabel = elementDiv.querySelector('p').textContent;
        var pElement = document.querySelector('#labelContent');
        pElement.textContent = textContentLabel;
        currentListContentIndex = Array.from(listContents).indexOf(listContent);

        currentparentElement = Array.from(elementsDivs).indexOf(elementsDiv);
        content_forms.forEach(function(content_form){    
          content_form.style.border = 'none';
        })
        
      }
    }
  })


  //Ẩn modalImage
function hideModalImage(image) {
  var modalImage = document.getElementById("modalImage");
  modalImage.style.display = "none";
  elementsDivs[currentparentElement].querySelector('.content_form').style.border = "2px solid dodgerblue"
        setTimeout(function(){
          elementsDivs[currentparentElement].querySelector('.content_form').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        },200)
}


  function showNext() {
    if (listImgs.length === 0) return;
    currentListImgIndex = (currentListImgIndex + 1) % listImgs.length;
    currentListContentIndex = (currentListContentIndex + 1) % listContents.length;
    var selectedImage = document.getElementById("selected-image");
    if (listImgs[currentListImgIndex]) {
        selectedImage.src = listImgs[currentListImgIndex].src;
    }
    var pElement = document.querySelector('#labelContent');
    if (listContents[currentListContentIndex]) {
      pElement.textContent = listContents[currentListContentIndex].textContent;
    }
    
    currentparentElement = (currentparentElement + 1) % elementsDivs.length;


  }

  function showPrevious() {
    if (listImgs.length === 0) return;
    currentListImgIndex = (currentListImgIndex - 1 + listImgs.length) % listImgs.length;
    currentListContentIndex = (currentListContentIndex - 1 + listContents.length) % listContents.length;
    var selectedImage = document.getElementById("selected-image");
    if (listImgs[currentListImgIndex]) {
      selectedImage.src = listImgs[currentListImgIndex].src;
    }
    var pElement = document.querySelector('#labelContent');
    if (listContents[currentListContentIndex]) {
      pElement.textContent = listContents[currentListContentIndex].textContent;
    }

    currentparentElement = (currentparentElement - 1 + elementsDivs.length) % elementsDivs.length;

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


var gitBtn = document.querySelector('.ti-github');
if(gitBtn){
  gitBtn.onclick = function(){
  var imgMale = document.querySelector('.imgMale');
  var imgFemale = document.querySelector('.imgFemale');
  var heartCenter = document.querySelector('.heartCenter');
  var labelCountDateLove = document.querySelector('.labelCountDateLove');
  imgMale.style.transform = 'translate(160px) scale(1.2)';
  imgFemale.style.transform = 'translate(-160px) scale(1.2)';
  heartCenter.style.transform = 'translateY(-110px) scale(1.2)';
  labelCountDateLove.style.transform = 'scale(1.3)';
  setTimeout (function () {
    imgMale.style.transform = 'translate(0) scale(1)';
    imgFemale.style.transform = 'translate(0) scale(1)';
    heartCenter.style.transform = 'translate(0) scale(1)';
    labelCountDateLove.style.transform = 'scale(1)';
  }, 3000 );
}}


document.onkeyup = function(e){ 
  switch(e.which){ 
      case 27: //27 là phím ESC
        hideModalImage()
        break;
  }
}
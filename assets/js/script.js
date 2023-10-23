

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

// //Đóng / Mở modal ảnh Timeline / Anniversary
//     var currentListImgIndex = 0;
//     var currentListContentIndex = 0;
//     var currentparentElement = 0;

//   var elementsDivs = document.querySelectorAll('.elementsDiv')
//   var content_forms = document.querySelectorAll('.content_form')
//   var listImgs = document.querySelectorAll('.elementsDiv img');
//   var listContents = document.querySelectorAll('.elementsDiv .label_content');
//   var timeline_container = document.querySelector('.timeline_container');

//   elementsDivs.forEach(function(elementDiv, index) {
    
//     var listImg = listImgs[index];
//     var listContent = listContents[index];
//     var elementsDiv = elementsDivs[index];

//     elementDiv.onclick = function(e){
//       const option = e.target.closest('.option');
//       const like = e.target.closest('.like');

//       if( !option && !like ){
//         var showImg = document.getElementById("modalImage")
//         showImg.style.display = "flex"

//         var srcImg = elementDiv.querySelector('img').src;
//         var selectedImage = document.getElementById("selected-image");
//         selectedImage.src = srcImg;
//         currentListImgIndex = Array.from(listImgs).indexOf(listImg);

//         var textContentLabel = elementDiv.querySelector('p').textContent;
//         var pElement = document.querySelector('#labelContent');
//         pElement.textContent = textContentLabel;
//         currentListContentIndex = Array.from(listContents).indexOf(listContent);

//         currentparentElement = Array.from(elementsDivs).indexOf(elementsDiv);
//         content_forms.forEach(function(content_form){    
//           content_form.style.border = 'none';
//         })
        
//       }
//     }
//   })


  //Ẩn modalImage
// function hideModalImage(image) {
//   var modalImage = document.getElementById("modalImage");
//   modalImage.style.display = "none";
//   elementsDivs[currentparentElement].querySelector('.content_form').style.border = "1px solid dodgerblue"
//         setTimeout(function(){
//           elementsDivs[currentparentElement].querySelector('.content_form').scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'center'
//             });
//         },200)
// }


//   function showNext() {
//     if (listImgs.length === 0) return;
//     currentListImgIndex = (currentListImgIndex + 1) % listImgs.length;
//     currentListContentIndex = (currentListContentIndex + 1) % listContents.length;
//     var selectedImage = document.getElementById("selected-image");
//     if (listImgs[currentListImgIndex]) {
//         selectedImage.src = listImgs[currentListImgIndex].src;
//     }
//     var pElement = document.querySelector('#labelContent');
//     if (listContents[currentListContentIndex]) {
//       pElement.textContent = listContents[currentListContentIndex].textContent;
//     }
    
//     currentparentElement = (currentparentElement + 1) % elementsDivs.length;


//   }

//   function showPrevious() {
//     if (listImgs.length === 0) return;
//     currentListImgIndex = (currentListImgIndex - 1 + listImgs.length) % listImgs.length;
//     currentListContentIndex = (currentListContentIndex - 1 + listContents.length) % listContents.length;
//     var selectedImage = document.getElementById("selected-image");
//     if (listImgs[currentListImgIndex]) {
//       selectedImage.src = listImgs[currentListImgIndex].src;
//     }
//     var pElement = document.querySelector('#labelContent');
//     if (listContents[currentListContentIndex]) {
//       pElement.textContent = listContents[currentListContentIndex].textContent;
//     }

//     currentparentElement = (currentparentElement - 1 + elementsDivs.length) % elementsDivs.length;

// }




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
  var changeColorState = localStorage.getItem('changeColorState')
  var checkboxState = localStorage.getItem('checkboxState')
  if(changeColorState){
    container.style.backgroundImage = 'none'
    container.style.backgroundColor = changeColorState
    }
  if(checkboxState === 'checked'){
    checkChangeColor.checked = true
  }
  checkChangeColor.addEventListener('change', function(){
    if(this.checked){
      container.style.backgroundColor = '#927aa8'
      container.style.backgroundImage = 'none'
      localStorage.setItem('changeColorState', '#927aa8')
      localStorage.setItem('checkboxState', 'checked')
    }else{
      container.style.backgroundImage = ''
      container.style.backgroundColor = 'transparent'
      localStorage.removeItem('changeColorState')
      localStorage.removeItem('checkboxState')
    }
})

checkChangeColor_mobile.addEventListener('change', function(){
  if(this.checked){
    container.style.backgroundColor = '#927aa8'
    container.style.backgroundImage = 'none'
    localStorage.setItem('changeColorState', '#927aa8')
    localStorage.setItem('checkboxState', 'checked')
  }else{
    container.style.backgroundImage = ''
    container.style.backgroundColor = 'transparent'
    localStorage.removeItem('changeColorState')
    localStorage.removeItem('checkboxState')
  }
})
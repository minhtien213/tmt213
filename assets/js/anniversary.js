const app = {
    anniversarys: [
        {
            id: 22,
            image: './assets/img/timelineimg/didao.jpg',
            content: 'Cùng nhau đi dạo khi Hêuiuuu lên anh.'
        },
        {
            id: 21,
            image: './assets/img/timelineimg/shoping.jpg',
            content: 'Cùng nhau đi shopping tại Nhật bản.'
        },
        {
            id: 20,
            image: './assets/img/timelineimg/monantq.jpg',
            content: 'Cùng nhau ăn món ăn Trung quốc tại Nhật bản.'
        },
        {
            id: 19,
            image: './assets/img/timelineimg/monanvn.jpg',
            content: 'Cùng nhau ăn món ăn Việt nam tại Nhật bản.'
        },
        {
            id: 18,
            image: './assets/img/timelineimg/picnic.jpg',
            content: 'Cùng nhau đi picnic cùng mọi người tại Nhật bản.'
        },
        {
            id: 17,
            image: './assets/img/timelineimg/antet.jpg',
            content: 'Cùng nhau đón tết tại Nhật bản.'
        },
        {
            id: 16,
            image: './assets/img/timelineimg/kimono.jpg',
            content: 'Chụp ảnh Kimono tại Nhật bản.'
        },
        {
            id: 15,
            image: './assets/img/timelineimg/lado.jpg',
            content: 'Ngắm mùa lá đỏ cùng nhau tại Nhật bản.'
        },
        {
            id: 14,
            image: './assets/img/timelineimg/thanhosaka.jpg',
            content: 'Cùng nhau đi ngắm hoa anh đào tại Thành cổ Osaka.'
        },
        {
            id: 13,
            image: './assets/img/timelineimg/phaohoa.jpg',
            content: 'Ngắm pháo hoa cùng nhau tại Nhật bản.'
        },
        {
            id: 12,
            image: './assets/img/timelineimg/dichoinhatban.jpg',
            content: 'Cùng nhau đi chơi, đi ăn tại Nhật bản..'
        },
        {
            id: 11,
            image: './assets/img/timelineimg/qua1.jpg',
            content: 'Quà Hêuiuuu tặng anh.'
        },
        {
            id: 10,
            image: './assets/img/timelineimg/banhkem.jpg',
            content: 'Bánh kem Hêuiuuu tặng sinh nhật anh.'
        },
        {
            id: 9,
            image: './assets/img/timelineimg/hoian.jpg',
            content: 'Hêuiuuu vào Hội an thăm anh.'
        },
        {
            id: 8,
            image: './assets/img/timelineimg/qua2.jpg',
            content: 'Thêm 1 món quà cho Hêuiuuu, nhưng mà...không hợp lắm :))'
        },
        {
            id: 7,
            image: './assets/img/timelineimg/noel.jpg',
            content: 'Cùng nhau đi đi chơi noel tại Vincom Đà Nẵng.'
        },
        {
            id: 6,
            image: './assets/img/timelineimg/sinhnhat.jpg',
            content: 'Cùng nhau đón sinh nhật anh thời sinh viên.'
        },
        {
            id: 5,
            image: './assets/img/timelineimg/dinhau.jpg',
            content: 'Cùng nhau đi nhậu.'
        },
        {
            id: 4,
            image: './assets/img/timelineimg/dian.jpg',
            content: 'Cùng nhau đi ăn.'
        },
        {
            id: 3,
            image: './assets/img/timelineimg/xemphim.jpg',
            content: 'Cùng nhau đi xem phim.'
        },
        {
            id: 2,
            image: './assets/img/timelineimg/anh.jpg',
            content: 'Đây là 4 tấm hình đầu tiên Hêuiuuu tặng anh, bây giờ anh vẫn còn giữ.'
        },
        {
            id: 1,
            image: './assets/img/timelineimg/qua.jpg',
            content: 'Đây là món quà đầu tiên tặng cho Hêuiuuu.'
        },
    ],
        render: function(){
            const htmls = this.anniversarys.map(function(anniversary){
                return `<div class="elementsDiv">
                            <div class="anniversaryday_form">
                                <div class="anniversaryday_img">
                                    <img src="${anniversary.image}">
                                </div>
                                <p class="anniversaryday_content">
                                ${anniversary.content}
                                </p>
                                <i data-id = "${anniversary.id}" class="ti-heart like"></i>
                            </div>
                        </div>`
            });
            const anniversaryday_container = document.querySelector('.anniversaryday_container')
            anniversaryday_container.innerHTML = htmls.join('');
        },

        handleEvents: function(){
            _this = this;
            var $ = document.querySelector.bind(document);
            var $$ = document.querySelectorAll.bind(document);
            var modal = document.getElementById("modalCreate");
            var btnCreate = document.getElementById('btnCreate');

            //Open the modal
            var addAnniversary = document.getElementById('addAnniversary');
            addAnniversary.addEventListener('click', function(){
                modal.style.display = "flex";
                btnCreate.style.display = 'block';
                btnUpdate.style.display = 'none';
            });

            //Close the modal
            var controlCreate = $('.controlCreate');
            controlCreate.addEventListener('click', function(){
                modal.style.display = "none";
                var textArea = $('#inputContent');
                textArea.value = '';
            });
            
            //Thả tim icon heart
            const likeIcons = $$('.like');
            likeIcons.forEach(icon => {
            const iconId = icon.getAttribute('data-id');
            const isLiked = localStorage.getItem(`like-${iconId}`);
            if (isLiked === 'true') { // Kiểm tra xem đã có trạng thái lưu trữ trong localStorage chưa
                icon.classList.add('clicked');
                }
            icon.addEventListener('click', () => {
                icon.classList.toggle('clicked');
                localStorage.setItem(`like-${iconId}`, icon.classList.contains('clicked'));// Lưu trạng thái khi icon được click
                });
            });

            //LAYOUT ANIVERSARYS
            var layoutIcon = document.querySelector('#layoutIcon');
            layoutIcon.onclick = function(){
                layoutIcon.classList.toggle('active')
                var elementsDiv = $$('.elementsDiv')
                var anniversaryday_img = $$('.anniversaryday_img')
                
                elementsDiv.forEach(function(anni){
                    anni.classList.toggle('clicked')
                })
                anniversaryday_img.forEach(function(img){
                    img.classList.toggle('clicked')
                })
            };
        },


        start: function(){
            this.render();
            this.handleEvents();
        }
    }

   app.start();
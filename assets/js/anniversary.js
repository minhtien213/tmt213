const app = {
    anniversarys: [
        {
            id: 22,
            image: './assets/img/timelineimg/didao.jpg',
            date: '03/08/2023',
            content: 'Cùng nhau đi dạo khi Hêuiuuu lên anh.'
        },
        {
            id: 21,
            image: './assets/img/timelineimg/shoping.jpg',
            date: '03/08/2023',
            content: 'Cùng nhau đi shopping tại Nhật bản.'
        },
        {
            id: 20,
            image: './assets/img/timelineimg/monantq.jpg',
            date: '02/08/2023',
            content: 'Cùng nhau ăn món ăn Trung quốc tại Nhật bản.'
        },
        {
            id: 19,
            image: './assets/img/timelineimg/monanvn.jpg',
            date: '02/08/2023',
            content: 'Cùng nhau ăn món ăn Việt nam tại Nhật bản.'
        },
        {
            id: 18,
            image: './assets/img/timelineimg/picnic.jpg',
            date: '08/07/2023',
            content: 'Cùng nhau đi picnic cùng mọi người tại Nhật bản.'
        },
        {
            id: 17,
            image: './assets/img/timelineimg/antet.jpg',
            date: '01/01/2023',
            content: 'Cùng nhau đón tết tại Nhật bản.'
        },
        {
            id: 16,
            image: './assets/img/timelineimg/kimono.jpg',
            date: '26/02/2023',
            content: 'Chụp ảnh Kimono tại Nhật bản.'
        },
        {
            id: 15,
            image: './assets/img/timelineimg/lado.jpg',
            date: '19/11/2022',
            content: 'Ngắm mùa lá đỏ cùng nhau tại Nhật bản.'
        },
        {
            id: 14,
            image: './assets/img/timelineimg/thanhosaka.jpg',
            date: '01/04/2023',
            content: 'Cùng nhau đi ngắm hoa anh đào tại Thành cổ Osaka.'
        },
        {
            id: 13,
            image: './assets/img/timelineimg/phaohoa.jpg',
            date: '11/08/2022',
            content: 'Ngắm pháo hoa cùng nhau tại Nhật bản.'
        },
        {
            id: 12,
            image: './assets/img/timelineimg/dichoinhatban.jpg',
            date: '11/06/2022',
            content: 'Cùng nhau đi chơi, đi ăn tại Nhật bản..'
        },
        {
            id: 11,
            image: './assets/img/timelineimg/qua1.jpg',
            date: '12/12/2021',
            content: 'Quà Hêuiuuu tặng anh.'
        },
        {
            id: 10,
            image: './assets/img/timelineimg/banhkem.jpg',
            date: '21/03/2019',
            content: 'Bánh kem Hêuiuuu tặng sinh nhật anh.'
        },
        {
            id: 9,
            image: './assets/img/timelineimg/hoian.jpg',
            date: '30/04/2021',
            content: 'Hêuiuuu vào Hội an thăm anh.'
        },
        {
            id: 8,
            image: './assets/img/timelineimg/qua2.jpg',
            date: '06/12/2017',
            content: 'Thêm 1 món quà sinh nhật cho Hêuiuuu, nhưng mà...không hợp lắm :))'
        },
        {
            id: 7,
            image: './assets/img/timelineimg/noel.jpg',
            date: '05/12/2016',
            content: 'Cùng nhau đi đi chơi noel tại Vincom Đà Nẵng.'
        },
        {
            id: 6,
            image: './assets/img/timelineimg/sinhnhat.jpg',
            date: '21/03/2015',
            content: 'Cùng nhau đón sinh nhật anh thời sinh viên.'
        },
        {
            id: 5,
            image: './assets/img/timelineimg/dinhau.jpg',
            date: '31/12/2015',
            content: 'Cùng nhau đi nhậu.'
        },
        {
            id: 4,
            image: './assets/img/timelineimg/dian.jpg',
            date: '14/09/2016',
            content: 'Cùng nhau đi ăn mỳ cay 7 cấp độ ở Đà Nẵng.'
        },
        {
            id: 3,
            image: './assets/img/timelineimg/xemphim.jpg',
            date: '14/09/2016',
            content: 'Cùng nhau đi xem phim.'
        },
        {
            id: 2,
            image: './assets/img/timelineimg/anh.jpg',
            date: '01/10/2014',
            content: 'Đây là 4 tấm hình đầu tiên Hêuiuuu tặng anh, bây giờ anh vẫn còn giữ.'
        },
        {
            id: 1,
            image: './assets/img/timelineimg/qua.jpg',
            date: '28/09/2014',
            content: 'Đây là món quà đầu tiên tặng cho Hêuiuuu nhân dịp nhận lương.'
        },
    ],
        render: function(){
            const htmls = this.anniversarys.map(function(anniversary){
                return `<div class="elementsDiv">
                            <div class="content_form aniversary_form">
                                <div class="anniversaryday_img">
                                <img src="${anniversary.image}">
                                </div>
                                <i class="ti-calendar calendar"> ${anniversary.date}</i>
                                <p class="label_content">${anniversary.content}</p>
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
                var content_forms = $$('.content_form')
                var anniversaryday_img = $$('.anniversaryday_img')
                
                elementsDiv.forEach(function(anni){
                    anni.classList.toggle('clicked')
                })
                anniversaryday_img.forEach(function(img){
                    img.classList.toggle('clicked')
                })
                content_forms.forEach(function(content_form){
                    content_form.classList.toggle('clicked')
                })
            };
        },


        start: function(){
            this.render();
            this.handleEvents();
        }
    }

   app.start();
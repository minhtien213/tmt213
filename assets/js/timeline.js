const app = {
    timelines: [
        {
            id: 17,
            image: './assets/img/timelineimg/embe.jpg',
            content: '20/08/2023 - Tèng teng...Cái gì đây Hêuiuuu.'
        },
        {
            id: 16,
            image: './assets/img/timelineimg/dkkh.jpg' ,
            content: '02/08/2023 - Đăng kí kết hôn tại Nhật bản và chính thức trở thành Vợ Chồng.'
        },
        {
            id: 15,
            image: './assets/img/timelineimg/cauhon.jpg' ,
            content: '01/08/2023 - Cầu hôn Hêuiuuu.'
        },
        {
            id: 14,
            image: './assets/img/timelineimg/damhoi.jpg' ,
            content: '10.03.2023 - Hai gia đình gặp mặt và tổ chức đám hỏi cho 2 đứa.'
        },
        {
            id: 13,
            image: './assets/img/timelineimg/nhatban4.jpg' ,
            content: 'Cùng nhau trải qua cuộc sống tại Nhật bản dù không được ở cùng nhau.'
        },
        {
            id: 12,
            image: './assets/img/timelineimg/dixe.jpg' ,
            content: 'Mỗi tháng vượt gần 100km để gặp Hêuiuuu.'
        },
        {
            id: 11,
            image: './assets/img/timelineimg/gaplai.jpg' ,
            content: '11.06.2022 - Lần đầu gặp lại nhau tại Nhật Bản sau bao năm yêu xaaaa.'
        },
        {
            id: 10,
            image: './assets/img/timelineimg/nhatban3.jpg' ,
            content: ' 01.05.2022 - Anh đã sang Nhật cùng Hêuiuu.'
        },
        {
            id: 9,
            image: './assets/img/timelineimg/nhatban2.jpg' ,
            content: 'Quyết tâm sang nhật cùng Hêuiuuu.'
        },
        {
            id: 8,
            image: './assets/img/timelineimg/nhatban1.jpg' ,
            content: 'Hêuiuuu ở Nhật bản và chúng ta lại yêu xaa.'
        },
        {
            id: 7,
            image: './assets/img/timelineimg/nhatban.jpg' ,
            content: '26/08/2018 - Ngày Hêuiuuu sang nhật làm việc.'
        },
        {
            id: 6,
            image: './assets/img/timelineimg/totnghiep.jpg' ,
            content: 'Cùng nhau tốt nghiệp ra trường và cũng đến lúc yêu xa'
        },
        {
            id: 5,
            image: './assets/img/timelineimg/henho.jpg' ,
            content: 'Những lần hẹn hò đầu tiên của 2 đứa.'
        },
        {
            id: 4,
            image: './assets/img/timelineimg/dongy.jpg' ,
            content: '09.05 2014 - Ngày đồng ý yêu nhau sau 3 tháng "LÀM GIÁ" của Hêuiuuu.'
        },
        {
            id: 3,
            image: './assets/img/timelineimg/timhieu.jpg' ,
            content: 'Sau 3 tháng tìm hiểu nhau và...'
        },
        {
            id: 2,
            image: './assets/img/timelineimg/gapmat.jpg' ,
            content: 'Lần đầu tiên gặp mặt Hêuiuuu.'
        },
        {
            id: 1,
            image: './assets/img/timelineimg/nhantin.jpg' ,
            content: 'Ngày đầu tiên nhắn tin làm quen Hêuiuuu.'
        },
    ],
        render: function(){
            const htmls = this.timelines.map(function(timeline){
                return `<div class="timeline">
                            <div class="timeline_form">
                                <img class="timeline_img" src="${timeline.image}" onclick="openModalImage(this)">
                                <p class="timeline_content" >
                                    ${timeline.content}
                                </p>
                                <div class="option">
                                    <i class="ti-angle-down optionIcon"></i>
                                    <ul class="optionList" >
                                        <li id="edit">Edit</li>
                                        <li id="delete">Delete</li>
                                    </ul>
                                </div>
                                <i data-id = "${timeline.id}" class="ti-heart like"></i>
                            </div>
                        </div>`
            });
            const timeline_container = document.querySelector('.timeline_container')
            timeline_container.innerHTML = htmls.join('');
        },

        handleEvents: function(){
            //Thả tim icon heart
            const likeIcons = document.querySelectorAll('.like');
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

            //Click option icon
            var optionIcons = document.querySelectorAll('.optionIcon');
            optionIcons.forEach(function(optionIcon, index) {
                
                optionIcon.addEventListener('click', function() {
                var optionLists = document.querySelectorAll('.optionList');
                // optionLists.forEach(function(optionList) {
                //     optionList.style.display = 'none';
                // });
                var option = optionLists[index]
                // console.log(option);
                option.style.display = (option.style.display == 'block')? 'none' : 'block';
                });
            })
            
        },

        start: function(){
            this.render();
            this.handleEvents();
        }
    }

   app.start();
   
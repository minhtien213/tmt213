
var app = {
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

    render: function () {
        var htmls = this.timelines.map(function (timeline, index) {
            return `
                <div class="elementsDiv">
                    <div class="content_form">
                        <img class="timeline_img" src="${timeline.image}">
                        <p class="label_content">${timeline.content}</p>
                        <div class="option">
                            <i data-id = "${timeline.id}" data-index = "${index}" class="ti-angle-down optionIcon"></i>
                            <ul class="optionList">
                                <li data-id = "${timeline.id}" data-index = "${index}" class="editBtn">Edit</li>
                                <li data-id = "${timeline.id}" data-index = "${index}" class="deleteBtn">Delete</li>
                            </ul>
                        </div>
                        <i data-id="${timeline.id}" class="ti-heart like"></i>
                    </div>
                </div>
            `;
        });

        var timeline_container = document.querySelector('.timeline_container');
        timeline_container.innerHTML = htmls.join('');
    },

    handleEvents: function () {
        _this = this;
            var $ = document.querySelector.bind(document);
            var $$ = document.querySelectorAll.bind(document);
            var modal = document.getElementById("modalCreate");
            var btnCreate = document.getElementById('btnCreate');
            var btnUpdate = document.getElementById('btnUpdate');
            var deleteBtns = $$('.deleteBtn');
            var optionIcons = $$('.optionIcon');
            var editBtns = $$('.editBtn');
            var optionLists = $$('.optionList');
            var likeIcons = $$('.like');


        var timeline_container = document.querySelector('.timeline_container');
        timeline_container.addEventListener('click', function (event) {
            var target = event.target;
            
            if (target.classList.contains('deleteBtn')) {
                var index = target.getAttribute('data-index');
                app.timelines.splice(index, 1);
                app.render();
            }

            if (target.classList.contains('optionIcon')) {
                var optionList = target.nextElementSibling; // Lấy phần tử ul.optionList
                var currentDisplay = optionList.style.display; //lấy trạng thái hiển thị của optionList trước
                optionLists.forEach(function(optionList) {
                    optionList.style.display = 'none'; // tắt hết optionList khác
                });
                if(currentDisplay !== 'block') { //kiểm tra trạng thái đã lấy ở dòng 134
                    optionList.style.display = 'block';
                }
            }

            if (target.classList.contains('editBtn')) {
                var index = target.getAttribute('data-id');
                var parentDiv = target.closest('.elementsDiv'); // Lấy phần tử cha .elementsDiv
                var labelContent = parentDiv.querySelector('.label_content'); // Lấy phần tử p.label_content
                var textArea = document.getElementById('inputContent'); // Lấy textarea trong modal
                textArea.value = ''; // Xóa giá trị của textarea
                textArea.value = labelContent.textContent; // Đặt giá trị của textarea là nội dung hiện tại
                modal.style.display = "flex"; // Mở modal
                btnCreate.style.display = 'none'; // Ẩn nút Create
                btnUpdate.style.display = 'block'; // Hiện nút Update

                // Xử lý nút Update
                btnUpdate.addEventListener('click', function () {
                    // logic
                    modal.style.display = "none"; // Đóng modal
                });
            }

            if (target.classList.contains('like')) {
                var iconId = target.getAttribute('data-id');
                var isLiked = localStorage.getItem(`like-${iconId}`);
                if (isLiked === 'true') {
                    target.classList.remove('clicked');
                    localStorage.setItem(`like-${iconId}`, 'false');
                } else {
                    target.classList.add('clicked');
                    localStorage.setItem(`like-${iconId}`, 'true');
                }
            }

            // Close the modalCreate / Update
            var controlCreate = $('.controlCreate');
            controlCreate.addEventListener('click', function(){
                modal.style.display = "none";
                var textArea = $('#inputContent');
                textArea.value = '';
            });
        });
    },

    start: function () {
        this.render();
        this.handleEvents();
    },
};

app.start();
   
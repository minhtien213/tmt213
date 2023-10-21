
var app = {
    timelines: [
                {
                    id: 0,
                    image: './assets/img/timelineimg/embe.jpg',
                    date: '20/08/2023',
                    content: 'Tèng teng...Cái gì đây Hêuiuuu.'
                },
                {
                    id: 1,
                    image: './assets/img/timelineimg/dkkh.jpg' ,
                    date: '02/08/2023',
                    content: 'Đăng kí kết hôn tại Nhật bản và chính thức trở thành Vợ Chồng.'
                },
                {
                    id: 2,
                    image: './assets/img/timelineimg/cauhon.jpg' ,
                    date: '01/08/2023',
                    content: 'Cầu hôn Hêuiuuu.'
                },
                {
                    id: 3,
                    image: './assets/img/timelineimg/damhoi.jpg' ,
                    date: '10/03/2023',
                    content: 'Hai gia đình gặp mặt và tổ chức đám hỏi cho 2 đứa.'
                },
                {
                    id: 4,
                    image: './assets/img/timelineimg/nhatban4.jpg' ,
                    date: '03/02/2023',
                    content: 'Cùng nhau trải qua cuộc sống tại Nhật bản dù không được ở cùng nhau.'
                },
                {
                    id: 5,
                    image: './assets/img/timelineimg/dixe.jpg' ,
                    date: '01/01/2023',
                    content: 'Mỗi tháng vượt gần 100km để gặp Hêuiuuu.'
                },
                {
                    id: 6,
                    image: './assets/img/timelineimg/gaplai.jpg' ,
                    date: '11/06/2022',
                    content: 'Lần đầu gặp lại nhau tại Nhật Bản sau bao năm yêu xa.'
                },
                {
                    id: 7,
                    image: './assets/img/timelineimg/nhatban3.jpg' ,
                    date: '01/05/2022',
                    content: 'Anh đã sang Nhật cùng Hêuiuu.'
                },
                {
                    id: 8,
                    image: './assets/img/timelineimg/nhatban2.jpg' ,
                    date: '01/01/2021',
                    content: 'Quyết tâm sang nhật cùng Hêuiuuu.'
                },
                {
                    id: 9,
                    image: './assets/img/timelineimg/nhatban1.jpg' ,
                    date: '01/01/2020',
                    content: 'Hêuiuuu ở Nhật bản và chúng ta lại yêu xa.'
                },
                {
                    id: 10,
                    image: './assets/img/timelineimg/nhatban.jpg' ,
                    date: '26/08/2018',
                    content: 'Ngày Hêuiuuu sang nhật làm việc.'
                },
                {
                    id: 11,
                    image: './assets/img/timelineimg/totnghiep.jpg' ,
                    date: '01/01/2017',
                    content: 'Cùng nhau tốt nghiệp ra trường và cũng đến lúc yêu xa.'
                },
                {
                    id: 12,
                    image: './assets/img/timelineimg/henho.jpg' ,
                    date: '10/05/2014',
                    content: 'Những lần hẹn hò đầu tiên của 2 đứa.'
                },
                {
                    id: 13,
                    image: './assets/img/timelineimg/dongy.jpg' ,
                    date: '09/05/2023',
                    content: 'Ngày đồng ý yêu nhau sau 3 tháng "LÀM GIÁ" của Hêuiuuu.'
                },
                {
                    id: 14,
                    image: './assets/img/timelineimg/timhieu.jpg' ,
                    date: '01/05/2014',
                    content: 'Sau 3 tháng tìm hiểu nhau và Hêuiuu đã rụng nụ.'
                },
                {
                    id: 15,
                    image: './assets/img/timelineimg/gapmat.jpg' ,
                    date: '01/04/2014',
                    content: 'Lần đầu tiên nói chuyện trực tiếp với Hêuiuuu.'
                },
                {
                    id: 16,
                    image: './assets/img/timelineimg/nhantin.jpg' ,
                    date: '20/02/2014',
                    content: 'Ngày đầu tiên nhắn tin làm quen Hêuiuuu.'
                },
            ],

    render: function () {
        var htmls = this.timelines.map(function (timeline, index) {
            return `
                <div class="elementsDiv">
                    <div data-id = "${timeline.id}" class="content_form">
                        <img class="timeline_img" src="${timeline.image}">
                        <div class="content_block">
                            <i class="ti-calendar calendar"><span>${timeline.date}</span></i>
                            <p class="label_content">${timeline.content}</p>
                        </div>
                        <div class="option">
                            <i data-id = "${timeline.id}" class="ti-angle-down optionIcon"></i>
                            <ul class="optionList">
                                <li data-id = "${timeline.id}" class="editBtn">Edit</li>
                                <li data-id = "${timeline.id}" class="deleteBtn">Delete</li>
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

    toastDisplay: function(toastname){
        var toast_form = document.querySelector('.toast_form')
        var template = `<label>This is toast</label>`
            switch(toastname){
                case 'remove':
                    template = `<label>Đã xóa thành công!</label>`
                    break
                case 'edit':
                    template = `<label>Đã sửa thành công!</label>`
                    break
                case 'create':
                    template = `<label>Đã thêm thành công!</label>`
                break
            }
            
        var toastDiv = document.createElement('div')
        toastDiv.setAttribute('class', toastname)
        toastDiv.innerHTML = `<i class = "ti-check"></i>
                            ${template}
                            <span class="process"></span>`
        
        toast_form.appendChild(toastDiv)
    
        setTimeout(function() {
            toastDiv.style.animation = 'toast_hide 1s ease-in-out forwards'
        }, 3000)
    
        setTimeout(function() {
            toastDiv.remove()
        }, 5000)
    },

    // Load DL khi tải lại trang
    loadLocalStorageValue: function(){
            const likeIcons = document.querySelectorAll('.like');
            likeIcons.forEach(icon => {
            const iconId = icon.getAttribute('data-id');
            const isLiked = localStorage.getItem(`like-${iconId}`);
            if (isLiked === 'true') { // Kiểm tra xem đã có trạng thái lưu trữ trong localStorage chưa
                icon.classList.add('clicked');
                }
            })
            
    },

    handleEvents: function () {
        _this = this;
        var $ = document.querySelector.bind(document);
        var $$ = document.querySelectorAll.bind(document);
        var modal = document.getElementById("modalCreate");
        var btnCreate = document.getElementById('btnCreate');
        var btnUpdate = document.getElementById('btnUpdate');
        var optionLists = $$('.optionList');
        var addTimeline = $('#addTimeline');
        var controlCreate = $('.controlCreate');


        var timeline_container = document.querySelector('.timeline_container');
        timeline_container.addEventListener('click', function (event) {
            var target = event.target;

            //Click Delete button
            if (target.classList.contains('deleteBtn')) {
                console.log(target)
                var index = target.getAttribute('data-id');
                console.log(index);
                app.timelines.splice(index, 1);
                app.render();
                app.loadLocalStorageValue()
                app.toastDisplay('remove')
            }

            //OptionList Display
            if (target.classList.contains('optionIcon')) {
                var optionList = target.nextElementSibling; // Lấy phần tử ul.optionList
                var currentDisplay = optionList.style.display; //lấy trạng thái hiển thị của optionList trước
                optionLists.forEach(function(option) {
                    option.style.display = 'none'; // tắt hết option khác
                });
                if(currentDisplay !== 'block') { //kiểm tra trạng thái đã lấy ở dòng 134
                    optionList.style.display = 'block';
                }
            }

            //Click Edit button
            if (target.classList.contains('editBtn')) {
                var index = target.getAttribute('data-id');
                localStorage.setItem('index', index);
                var parentDiv = target.closest('.elementsDiv'); // Lấy phần tử cha .elementsDiv
                var labelContent = parentDiv.querySelector('.label_content'); // Lấy phần tử p.label_content
                var calendar = parentDiv.querySelector('.calendar'); // Lấy phần tử p.label_content
                var textArea = document.getElementById('inputContent'); // Lấy textarea trong modal
                var inputDate = document.querySelector('#inputDate');
                var parts = calendar.textContent.split('/')
                var newCalendar = parts[2] + '-' + parts[1] + '-' + parts[0]

                inputDate.value = ''; // Xóa giá trị của inputDate Value
                inputDate.value = newCalendar;
                textArea.value = ''; // Đặt giá trị của textarea là nội dung hiện tại
                textArea.value = labelContent.textContent; // Đặt giá trị của textarea là nội dung hiện tại
                modal.style.display = "flex"; // Mở modal
                btnCreate.style.display = 'none'; // Ẩn nút Create
                btnUpdate.style.display = 'block'; // Hiện nút Update                
            }

            //Click Update button
            btnUpdate.addEventListener('click', function () {
                console.log(target)
                var index = localStorage.getItem('index');
                var textArea = document.getElementById('inputContent');
                var inputDate = document.querySelector('#inputDate');

                var parts = inputDate.value.split('-')
                var newCalendar = parts[2] + '/' + parts[1] + '/' + parts[0]

                app.timelines[index].content = textArea.value
                app.timelines[index].date = newCalendar
                app.render()
                optionLists.forEach(function(option) {
                    option.style.display = 'none'; // tắt hết option khác
                });
                app.loadLocalStorageValue()
                modal.style.display = "none"; // Đóng modal
                app.toastDisplay('edit')
            });
             
            // Click Like Button
            if (target.classList.contains('like')) {
                    const iconId = target.getAttribute('data-id');
                    const isLiked = localStorage.getItem(`like-${iconId}`);

                    if (isLiked === 'true') {
                        target.classList.remove('clicked');
                        localStorage.setItem(`like-${iconId}`, 'false');
                    } else {
                        target.classList.add('clicked');
                        localStorage.setItem(`like-${iconId}`, 'true');
                    }
                } 

            // Click vào elementsDiv
            const content_form = target.closest('.content_form')
            const option = target.closest('.option');
            const like = target.closest('.like');
            var timeline_img = content_form.querySelector('.timeline_img')
            var selectedImage = document.getElementById("selected-image");
            var modalImage = document.getElementById("modalImage")
            
            var currentIndex = 0;
            if (content_form) {
                var index = content_form.getAttribute('data-id');
                if( !option && !like ){
                    modalImage.style.display = "flex"
                    
                    selectedImage.src = timeline_img.src;
                    
                    var label_content = content_form.querySelector('.label_content')
                    var modalImage_labelContent = document.querySelector('.modalImage_labelContent')
                    modalImage_labelContent.textContent = label_content.textContent
                    
                    currentIndex = index
                }
            }

            //Click selectedImage close the modal
            selectedImage.addEventListener('click', function(){
                modalImage.style.display = "none";
                
                var content_forms = document.querySelectorAll('.content_form')
                content_forms.forEach(function(content_form_item){   
                    content_form_item.style.border = 'none';
                })
                var content_form_intoview = content_forms[currentIndex]
                content_form_intoview.style.border = "1px solid dodgerblue"
                setTimeout(function(){
                    content_form_intoview.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 200)
            })

            // Click prevImg
            const prevImg = document.querySelector('.prevImg');
            const nextImg = document.querySelector('.nextImg');
            const listImages = document.querySelectorAll('.timeline_img')
            const listContents = document.querySelectorAll('.label_content')

            prevImg.addEventListener('click', function (){
                currentIndex = (currentIndex - 1 + listImages.length) % listImages.length;
                if (listImages[currentIndex]) {
                    selectedImage.src = listImages[currentIndex].src;
                }
               
                if (listContents[currentIndex]) {
                    var modalImage_labelContent = document.querySelector('.modalImage_labelContent');
                    modalImage_labelContent.textContent = listContents[currentIndex].textContent;
                  }
            })

            // Click nextImg
            nextImg.addEventListener('click', function (){
                currentIndex = (currentIndex + 1) % listImages.length;
                if (listImages[currentIndex]) {
                    selectedImage.src = listImages[currentIndex].src;
                }
               
                if (listContents[currentIndex]) {
                    var modalImage_labelContent = document.querySelector('.modalImage_labelContent');
                    modalImage_labelContent.textContent = listContents[currentIndex].textContent;
                  }
            })
        });

        // Open the modalCreate / Update
        addTimeline.addEventListener('click', function(){
            modal.style.display = "flex";
            var textArea = $('#inputContent');
            textArea.value = '';
            btnCreate.style.display = 'block'; // Ẩn nút Create
            btnUpdate.style.display = 'none'; // Hiện nút Update
        });

        // Close the modalCreate / Update
        controlCreate.addEventListener('click', function(e){
            modal.style.display = "none";
            var textArea = $('#inputContent');
            textArea.value = '';
            localStorage.removeItem('index')
            optionLists.forEach(function(option) {
                option.style.display = 'none'; // tắt hết option khác
            });
            modal.style.display = "none"; // Đóng modal
        });

        
    },

    start: function () {
        this.render();
        this.handleEvents();
        this.loadLocalStorageValue()
    },
};

app.start();
   
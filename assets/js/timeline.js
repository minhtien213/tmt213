
var app = {
    timelines: [
                {
                    id: 0,
                    image: './assets/img/timelineimg/embe.jpg',
                    date: '20/08/2023',
                    content: 'Tèng teng...Cái gì đây Hêuiuuu.',
                    state: 'liked'
                },
                {
                    id: 1,
                    image: './assets/img/timelineimg/dkkh.jpg' ,
                    date: '02/08/2023',
                    content: 'Đăng kí kết hôn tại Nhật bản và chính thức trở thành Vợ Chồng.',
                    state: 'liked'
                },
                {
                    id: 2,
                    image: './assets/img/timelineimg/cauhon.jpg' ,
                    date: '01/08/2023',
                    content: 'Cầu hôn Hêuiuuu.',
                    state: ''
                },
                {
                    id: 3,
                    image: './assets/img/timelineimg/damhoi.jpg' ,
                    date: '10/03/2023',
                    content: 'Hai gia đình gặp mặt và tổ chức đám hỏi cho 2 đứa.',
                    state: 'liked'
                },
                {
                    id: 4,
                    image: './assets/img/timelineimg/nhatban4.jpg' ,
                    date: '03/02/2023',
                    content: 'Cùng nhau trải qua cuộc sống tại Nhật bản dù không được ở cùng nhau.',
                    state: ''
                },
                {
                    id: 5,
                    image: './assets/img/timelineimg/dixe.jpg' ,
                    date: '01/01/2023',
                    content: 'Mỗi tháng vượt gần 100km để gặp Hêuiuuu.',
                    state: ''
                },
                {
                    id: 6,
                    image: './assets/img/timelineimg/gaplai.jpg' ,
                    date: '11/06/2022',
                    content: 'Lần đầu gặp lại nhau tại Nhật Bản sau bao năm yêu xa.',
                    state: ''
                },
                {
                    id: 7,
                    image: './assets/img/timelineimg/nhatban3.jpg' ,
                    date: '01/05/2022',
                    content: 'Anh đã sang Nhật cùng Hêuiuu.',
                    state: ''
                },
                {
                    id: 8,
                    image: './assets/img/timelineimg/nhatban2.jpg' ,
                    date: '01/01/2021',
                    content: 'Quyết tâm sang nhật cùng Hêuiuuu.',
                    state: ''
                },
                {
                    id: 9,
                    image: './assets/img/timelineimg/nhatban1.jpg' ,
                    date: '01/01/2020',
                    content: 'Hêuiuuu ở Nhật bản và chúng ta lại yêu xa.',
                    state: ''
                },
                {
                    id: 10,
                    image: './assets/img/timelineimg/nhatban.jpg' ,
                    date: '26/08/2018',
                    content: 'Ngày Hêuiuuu sang nhật làm việc.',
                    state: ''
                },
                {
                    id: 11,
                    image: './assets/img/timelineimg/totnghiep.jpg' ,
                    date: '01/01/2017',
                    content: 'Cùng nhau tốt nghiệp ra trường và cũng đến lúc yêu xa.',
                    state: ''
                },
                {
                    id: 12,
                    image: './assets/img/timelineimg/henho.jpg' ,
                    date: '10/05/2014',
                    content: 'Những lần hẹn hò đầu tiên của 2 đứa.',
                    state: ''
                },
                {
                    id: 13,
                    image: './assets/img/timelineimg/dongy.jpg' ,
                    date: '09/05/2023',
                    content: 'Ngày đồng ý yêu nhau sau 3 tháng "LÀM GIÁ" của Hêuiuuu.',
                    state: ''
                },
                {
                    id: 14,
                    image: './assets/img/timelineimg/timhieu.jpg' ,
                    date: '01/05/2014',
                    content: 'Sau 3 tháng tìm hiểu nhau và Hêuiuu đã rụng nụ.',
                    state: ''
                },
                {
                    id: 15,
                    image: './assets/img/timelineimg/gapmat.jpg' ,
                    date: '01/04/2014',
                    content: 'Lần đầu tiên nói chuyện trực tiếp với Hêuiuuu.',
                    state: ''
                },
                {
                    id: 16,
                    image: './assets/img/timelineimg/nhantin.jpg' ,
                    date: '20/02/2014',
                    content: 'Ngày đầu tiên nhắn tin làm quen Hêuiuuu.',
                    state: ''
                },
            ],

    render: function () {
        var htmls = this.timelines.map(function (timeline, index) {
            return `
                <div class="elementsDiv">
                    <div data-index = "${index}" class="content_form">
                        <img class="timeline_img" src="${timeline.image}">
                        <div class="content_block">
                            <i class="ti-calendar calendar"><span>${timeline.date}</span></i>
                            <p class="label_content">${timeline.content}</p>
                        </div>
                        <div class="option">
                            <i data-index = "${index}" class="ti-more-alt optionIcon"></i>
                            <ul class="optionList">
                                <li data-index = "${index}" class="editBtn">Edit</li>
                                <li data-index = "${index}" class="deleteBtn">Delete</li>
                            </ul>
                        </div>
                        <i data-index="${index}" class="ti-heart like"></i>
                    </div>
                </div>
            `
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
        }, 3500)
    },

    // Load DL khi tải lại trang
    loadLocalStorageValue: function(){
        const likeIcons = document.querySelectorAll('.like')
        app.timelines.forEach((timeline, index) => {
            if(timeline.state === 'liked'){
                likeIcons[index].classList.add('liked');
            }
        })
    },

    handleEvents: function () {
        _this = this;
        var isLiked = false
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

            // Click Like Button
            if (target.classList.contains('like')) {
                const iconIndex = target.getAttribute('data-index')
                target.classList.toggle('liked')
                var classNameIcon = target.classList[2]
                if(classNameIcon){
                    app.timelines[iconIndex].state = classNameIcon
                }else{
                    app.timelines[iconIndex].state = ''
                }
                // console.log(app.timelines)
            } 


            //Click Delete button
            if (target.classList.contains('deleteBtn')) {
                var index = target.getAttribute('data-index');
                app.timelines.splice(index, 1);
                app.render();
                app.loadLocalStorageValue()
                app.toastDisplay('remove')
            }

            //OptionList Display
            if (target.classList.contains('optionIcon')) {
                var optionList = target.nextElementSibling; // Lấy phần tử ul.optionList
                // var currentDisplay = optionList.style.display; //lấy trạng thái hiển thị của optionList trước
                // optionLists.forEach(function(option) {
                //     option.style.display = 'none'; // tắt hết option khác
                // });
                // if(currentDisplay !== 'block') { //kiểm tra trạng thái đã lấy ở dòng 134
                //     optionList.style.display = 'block';
                // }
                optionList.style.display = optionList.style.display == 'block' ? 'none' : 'block'
            }

            //Click Edit button
            if (target.classList.contains('editBtn')) {
                var index = target.getAttribute('data-index');
                localStorage.setItem('index', index);
                var parentDiv = target.closest('.elementsDiv'); // Lấy phần tử cha .elementsDiv
                var labelContent = parentDiv.querySelector('.label_content');
                var calendar = parentDiv.querySelector('.calendar'); 
                var textArea = document.getElementById('inputContent');
                var inputDate = document.querySelector('#inputDate');
                var parts = calendar.textContent.split('/')
                var newCalendar = parts[2] + '-' + parts[1] + '-' + parts[0]

                inputDate.value = '';
                inputDate.value = newCalendar;
                textArea.value = ''; 
                textArea.value = labelContent.textContent; 
                modal.style.display = "flex"; 
                btnCreate.style.display = 'none';
                btnUpdate.style.display = 'block';
                
                
                //Click Update button
                btnUpdate.addEventListener('click', function () {
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
                });
                app.toastDisplay('edit')
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
                var index = content_form.getAttribute('data-index');
                if( !option && !like ){
                    modalImage.style.display = "flex"
                    
                    selectedImage.src = timeline_img.src;
                    
                    var label_content = content_form.querySelector('.label_content')
                    var calendarSpan = content_form.querySelector('.calendar span')
                    var modalImage_labelContent = document.querySelector('.modalImage_labelContent')
                    var modalImage_labelCalendar = document.querySelector('.modalImage_labelCalendar')
                    modalImage_labelContent.textContent = label_content.textContent
                    modalImage_labelCalendar.textContent = calendarSpan.textContent
                    
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
                if(content_form_intoview){
                    content_form_intoview.style.border = "1px solid dodgerblue"
                    setTimeout(function(){
                        content_form_intoview.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }, 200)
                }
            })

            // Click prevImg
            const prevImg = document.querySelector('.prevImg');
            const nextImg = document.querySelector('.nextImg');
            const listImages = document.querySelectorAll('.timeline_img')
            const listContents = document.querySelectorAll('.label_content')
            const listCalendars = document.querySelectorAll('.calendar span')

            prevImg.addEventListener('click', function (){
                currentIndex--
                currentIndex = currentIndex < 0 ? listImages.length - 1 : currentIndex

                if (listImages[currentIndex]) {
                    selectedImage.src = listImages[currentIndex].src;
                }
               
                if (listContents[currentIndex]) {
                    var modalImage_labelContent = document.querySelector('.modalImage_labelContent');
                    modalImage_labelContent.textContent = listContents[currentIndex].textContent;
                }

                if (listCalendars[currentIndex]) {
                    var modalImage_labelCalendar = document.querySelector('.modalImage_labelCalendar')
                    modalImage_labelCalendar.textContent = listCalendars[currentIndex].textContent;
                }
            })

            // Click nextImg
            nextImg.addEventListener('click', function (){
                currentIndex++
                currentIndex = currentIndex > listImages.length - 1 ? 0 : currentIndex
                if (listImages[currentIndex]) {
                    selectedImage.src = listImages[currentIndex].src;
                }
               
                if (listContents[currentIndex]) {
                    var modalImage_labelContent = document.querySelector('.modalImage_labelContent');
                    modalImage_labelContent.textContent = listContents[currentIndex].textContent;
                }

                if (listCalendars[currentIndex]) {
                    var modalImage_labelCalendar = document.querySelector('.modalImage_labelCalendar')
                    modalImage_labelCalendar.textContent = listCalendars[currentIndex].textContent;
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
   
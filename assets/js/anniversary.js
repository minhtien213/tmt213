const app = {
    anniversarys: [
        {
            id: 22,
            image: './assets/img/timelineimg/didao.jpg',
            date: '03/08/2023',
            content: 'Cùng nhau đi dạo khi Hêuiuuu lên anh.',
            state: 'liked'
        },
        {
            id: 21,
            image: './assets/img/timelineimg/shoping.jpg',
            date: '03/08/2023',
            content: 'Cùng nhau đi shopping tại Nhật bản.',
            state: ''
        },
        {
            id: 20,
            image: './assets/img/timelineimg/monantq.jpg',
            date: '02/08/2023',
            content: 'Cùng nhau ăn món ăn Trung quốc tại Nhật bản.',
            state: ''
        },
        {
            id: 19,
            image: './assets/img/timelineimg/monanvn.jpg',
            date: '02/08/2023',
            content: 'Cùng nhau ăn món ăn Việt nam tại Nhật bản.',
            state: 'liked'
        },
        {
            id: 18,
            image: './assets/img/timelineimg/picnic.jpg',
            date: '08/07/2023',
            content: 'Cùng nhau đi picnic cùng mọi người tại Nhật bản.',
            state: ''
        },
        {
            id: 17,
            image: './assets/img/timelineimg/antet.jpg',
            date: '01/01/2023',
            content: 'Cùng nhau đón tết tại Nhật bản.',
            state: 'liked'
        },
        {
            id: 16,
            image: './assets/img/timelineimg/kimono.jpg',
            date: '26/02/2023',
            content: 'Chụp ảnh Kimono tại Nhật bản.',
            state: ''
        },
        {
            id: 15,
            image: './assets/img/timelineimg/lado.jpg',
            date: '19/11/2022',
            content: 'Ngắm mùa lá đỏ cùng nhau tại Nhật bản.',
            state: ''
        },
        {
            id: 14,
            image: './assets/img/timelineimg/thanhosaka.jpg',
            date: '01/04/2023',
            content: 'Cùng nhau đi ngắm hoa anh đào tại Thành cổ Osaka.',
            state: ''
        },
        {
            id: 13,
            image: './assets/img/timelineimg/phaohoa.jpg',
            date: '11/08/2022',
            content: 'Ngắm pháo hoa cùng nhau tại Nhật bản.',
            state: ''
        },
        {
            id: 12,
            image: './assets/img/timelineimg/dichoinhatban.jpg',
            date: '11/06/2022',
            content: 'Cùng nhau đi chơi, đi ăn tại Nhật bản..',
            state: ''
        },
        {
            id: 11,
            image: './assets/img/timelineimg/qua1.jpg',
            date: '12/12/2021',
            content: 'Quà Hêuiuuu tặng anh.',
            state: ''
        },
        {
            id: 10,
            image: './assets/img/timelineimg/banhkem.jpg',
            date: '21/03/2019',
            content: 'Bánh kem Hêuiuuu tặng sinh nhật anh.',
            state: ''
        },
        {
            id: 9,
            image: './assets/img/timelineimg/hoian.jpg',
            date: '30/04/2021',
            content: 'Hêuiuuu vào Hội an thăm anh.',
            state: ''
        },
        {
            id: 8,
            image: './assets/img/timelineimg/qua2.jpg',
            date: '06/12/2017',
            content: 'Thêm 1 món quà sinh nhật cho Hêuiuuu, nhưng mà...không hợp lắm :))',
            state: ''
        },
        {
            id: 7,
            image: './assets/img/timelineimg/noel.jpg',
            date: '05/12/2016',
            content: 'Cùng nhau đi đi chơi noel tại Vincom Đà Nẵng.',
            state: ''
        },
        {
            id: 6,
            image: './assets/img/timelineimg/sinhnhat.jpg',
            date: '21/03/2015',
            content: 'Cùng nhau đón sinh nhật anh thời sinh viên.',
            state: ''
        },
        {
            id: 5,
            image: './assets/img/timelineimg/dinhau.jpg',
            date: '31/12/2015',
            content: 'Cùng nhau đi nhậu.',
            state: ''
        },
        {
            id: 4,
            image: './assets/img/timelineimg/dian.jpg',
            date: '14/09/2016',
            content: 'Cùng nhau đi ăn mỳ cay 7 cấp độ ở Đà Nẵng.',
            state: ''
        },
        {
            id: 3,
            image: './assets/img/timelineimg/xemphim.jpg',
            date: '14/09/2016',
            content: 'Cùng nhau đi xem phim.',
            state: ''
        },
        {
            id: 2,
            image: './assets/img/timelineimg/anh.jpg',
            date: '01/10/2014',
            content: 'Đây là 4 tấm hình đầu tiên Hêuiuuu tặng anh, bây giờ anh vẫn còn giữ.',
            state: ''
        },
        {
            id: 1,
            image: './assets/img/timelineimg/qua.jpg',
            date: '28/09/2014',
            content: 'Đây là món quà đầu tiên tặng cho Hêuiuuu nhân dịp nhận lương.',
            state: ''
        },
    ],
        render: function(){
            const htmls = this.anniversarys.map(function(anniversary, index){
                return `<div class="elementsDiv">
                            <div data-index = "${index}" class="content_form" id = "aniversary_form">
                                <div class="anniversaryday_img">
                                    <img src="${anniversary.image}">
                                </div>
                                <div class="content_block">
                                    <i class="ti-calendar calendar"><span>${anniversary.date}</span></i>
                                    <p class="label_content">${anniversary.content}</p>
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
                        </div>`
            });
            const anniversaryday_container = document.querySelector('.anniversaryday_container')
            anniversaryday_container.innerHTML = htmls.join('');
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
            app.anniversarys.forEach((anniversary, index) => {
                if(anniversary.state === 'liked'){
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
            var addanniversary = document.querySelector('#addAnniversary');
            var controlCreate = $('.controlCreate');
    
    
            var anniversaryday_container = document.querySelector('.anniversaryday_container');
            anniversaryday_container.addEventListener('click', function (event) {
                var target = event.target;
    
                // Click Like Button
                if (target.classList.contains('like')) {
                    const iconIndex = target.getAttribute('data-index')
                    target.classList.toggle('liked')
                    var classNameIcon = target.classList[2]
                    if(classNameIcon){
                        app.anniversarys[iconIndex].state = classNameIcon
                    }else{
                        app.anniversarys[iconIndex].state = ''
                    }
                } 
    
    
                //Click Delete button
                if (target.classList.contains('deleteBtn')) {
                    var index = target.getAttribute('data-index');
                    app.anniversarys.splice(index, 1);
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
        
                        app.anniversarys[index].content = textArea.value
                        app.anniversarys[index].date = newCalendar
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
                var anniversaryday_img = content_form.querySelector('.anniversaryday_img img')
                var selectedImage = document.getElementById("selected-image");
                var modalImage = document.getElementById("modalImage")
                
                var currentIndex = 0;
                if (content_form) {
                    var index = content_form.getAttribute('data-index');
                    if( !option && !like ){
                        modalImage.style.display = "flex"
                        
                        selectedImage.src = anniversaryday_img.src;
                        
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
                const listImages = document.querySelectorAll('.anniversaryday_img img')
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
            addanniversary.addEventListener('click', function(){
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
    
        start: function () {
            this.render();
            this.handleEvents();
            this.loadLocalStorageValue()
        },
    };
    
    app.start();


        // Ngày bắt đầu
        var startDate = new Date('2014-05-09');
        var startDay = 9;
        var startMonth = 5;
        var startYear = 2014;
        // Ngày hiện tại
        var currentDate = new Date();
        
        // Tính số ngày đã trôi qua
        var timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
        var dateCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        // Hiển thị kết quả trong label
        var labelCountDateLove = document.getElementById('labelCountDateLove');
        labelCountDateLove.innerText = dateCount;
        
       

        var yearCount = currentDate.getFullYear() - startYear;
        var monthCount = currentDate.getMonth() + 1 - startMonth;
        var dayCount = currentDate.getDate() - startDay;

         var labelCountDateLoveDetail = document.getElementById('labelCountDateLoveDetail');
         labelCountDateLoveDetail.innerText = ` ${yearCount} năm ${monthCount} tháng ${dayCount} ngày `;
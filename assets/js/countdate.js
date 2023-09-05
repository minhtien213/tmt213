

        // Ngày bắt đầu
        var startDate = new Date('2014-05-09');
        // Ngày hiện tại
        var currentDate = new Date();
        
        // Tính số ngày đã trôi qua
        var timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
        var dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        // Hiển thị kết quả trong label
        var labelCountDateLove = document.getElementById('labelCountDateLove');
        labelCountDateLove.innerText = dayCount;
        
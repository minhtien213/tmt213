//Count the days
var startDate = new Date('2014-05-09');// Ngày bắt đầu
var currentDate = new Date();// Ngày hiện tại

// Tính số ngày đã trôi qua
var timeDiff = Math.abs(currentDate.getTime() - startDate.getTime()); // tổng số mili giây
var totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // /1000: 1 giây, 3600: 1 giờ, 24: 1 ngày

// Hiển thị kết quả trong label
var labelCountDateLove = document.getElementById('labelCountDateLove');
labelCountDateLove.innerText = totalDays;

var totalYears = Math.floor(totalDays / 365);
var totalMonths = Math.floor((totalDays % 365) / 30);
var totalWeeks = Math.floor(((totalDays % 365) % 30) / 7);
var totalDay = Math.floor(((totalDays % 365) % 30) % 7);

  var labelCountDateLoveDetail = document.getElementById('labelCountDateLoveDetail');
  labelCountDateLoveDetail.innerText = ` ${totalYears} năm ${totalMonths} tháng ${totalWeeks} tuần ${totalDay} ngày `;
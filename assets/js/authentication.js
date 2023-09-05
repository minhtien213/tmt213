  function isLoggedIn() {
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    return isLoggedIn === "true";
    
  }
  
  function checkAccess() {
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    var rememberMe = localStorage.getItem("rememberMe");
  
    if (!isLoggedIn && rememberMe !== "true") {
      // Chưa đăng nhập và không có phiên đăng nhập được lưu, chuyển hướng đến trang đăng nhập
      window.location.href = "login.html";
    }
    // Các trang con khác có thể thực hiện các kiểm tra quyền truy cập khác ở đây
  }
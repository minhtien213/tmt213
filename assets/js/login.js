
// Đóng mở modal login
function openModalLogin() {
  var modalLogin = document.getElementById("modal");
  modalLogin.style.display = "flex";
}
  
function closeModalLogin() {
  var modalLogin = document.getElementById("modal");
  modalLogin.style.display = "none";
}    
  
//Login
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var rememberMe = document.getElementById("rememberMe").checked;
  if(username === "" || password === ""){
    var btnLogin = document.getElementById("btnLogin");
    btnLogin.style.cursor = "not-allowed";
    alert("Please enter data!")
  }else if (username === "minhtien213" && password === "minhtien213" || username === "haiuyen612" && password === "haiuyen612"
  || username === "user" && password === "user") {
    if (username === "haiuyen612" && password === "haiuyen612") {
      alert("Chào Hêuiuuu của anh!");
    }
    if (username === "user" && password === "user") {
      alert("Chào bạn đến xem tình yêu của chúng tôi!");
    }

    // Lưu trạng thái đăng nhập vào Session Storage
    sessionStorage.setItem("isLoggedIn", "true");
    if (rememberMe) {
      // Lưu trạng thái đăng nhập vào Local Storage nếu được chọn "Lưu phiên đăng nhập"
      localStorage.setItem("rememberMe", "true");
    } else {
      // Xoá trạng thái đăng nhập từ Local Storage nếu không được chọn "Lưu phiên đăng nhập"
      localStorage.removeItem("rememberMe");
    }

    window.location.href = "index.html";

    // Kiểm tra quyền truy cập vào trang con
    checkAccess();
  } else {
    alert("Oh, no...! Who are you?");
  }
}

//Logout
function logout() {
  // Xoá trạng thái đăng nhập từ Session Storage
  localStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("isLoggedIn");

  // Chuyển hướng đến trang đăng nhập
  window.location.href = "login.html";
  checkAccess();
}

//Kiểm tra trạng thái Login all các trang
function checkAccess() {
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");
  var rememberMe = localStorage.getItem("rememberMe");

  if (!isLoggedIn && rememberMe !== "true") {
    // Chưa đăng nhập và không có phiên đăng nhập được lưu, chuyển hướng đến trang đăng nhập
    window.location.href = "login.html";
  }
  // Các trang con khác có thể thực hiện các kiểm tra quyền truy cập khác ở đây
}

//Show/Hide Password
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
  passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
}

//Click vào windows để ẩn modalLogin
window.addEventListener('click', function(e){
  const modal_body = e.target.closest('.modal_body');
  const loginBtn = e.target.closest('.loginbtn');
  if( !modal_body && !loginBtn){
      var modalLogin = document.getElementById("modal");
      modalLogin.style.display = "none";
      }
});
    

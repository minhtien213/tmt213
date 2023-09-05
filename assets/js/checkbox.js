//SAVE STATE CHECKBOX
    // Lấy danh sách các checkbox
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Khôi phục trạng thái checkbox từ Local Storage (nếu có)
    checkboxes.forEach(checkbox => {
        const savedValue = localStorage.getItem(checkbox.id);
        if (savedValue) {
            checkbox.checked = savedValue === "true";
        }

        // Lắng nghe sự kiện thay đổi của checkbox và lưu vào Local Storage
        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });
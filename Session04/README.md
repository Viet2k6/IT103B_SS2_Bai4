Phân tích lỗi:

- Ban đầu dùng break nên khi gặp chữ X vòng lặp bị thoát luôn, làm không tính tiền được mấy ly đằng sau.
- Cách sửa: Đổi break thành continue để nó chỉ bỏ qua ly X bị hủy rồi vẫn quét tiếp các ly còn lại.

Test Cases đối chứng:

- Trường hợp kiểm thử 1:
  - Dữ liệu đầu vào: Chuỗi order "MLXSM", Topping 2, Khách VIP
  - Kết quả sai thực tế (khi dùng break): Dừng lại ở chữ X, mất các ly đằng sau, tiền ra 91800 VNĐ.
  - Kết quả đúng mong đợi (khi dùng continue): Bỏ qua X và tính đầy đủ các ly còn lại, tiền ra 160200 VNĐ.

- Trường hợp kiểm thử 2:
  - Dữ liệu đầu vào: Chuỗi order "XSL", Topping 0, Khách thường
  - Kết quả sai thực tế (khi dùng break): Vòng lặp dừng ngay ở ly đầu tiên, tiền ra 0 VNĐ.
  - Kết quả đúng mong đợi (khi dùng continue): Bỏ qua ly X đầu, tính được S và L, tiền ra 80000 VNĐ.

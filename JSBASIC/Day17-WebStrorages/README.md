### HTML5 WEB STRORAGES
-   SessionStrorage : Lưu trữ dữ liệu cho 1 phiên làm việc, mất khi cửa sổ đóng ,dữ liệu sẽ bị xóa
-   localStrorage : lưu trữ ko có thời gian hết hạn ,ngay cả khi trình duyệt bị đóng
-   value và key của giá trị luôi đổi thành chuỗi

### method web strorages
-   setItem() :lưu dữ liệu , cần 1 key và 1 value
-   getItem() :hiển thị dữ liệu (key)
-   removeItem() : loại bỏ dữ liệu (key)
-   clear() : loại bỏ mọi thứ
-   key() : hiển thị dữ liệu lưu Strorage (index)
### Các trường hợp có thể dùng 
-   lưu dữ liệu tạm thời
-   lưu sản phẩm trong giỏ hàng
-   sử dụng ngoại tuyến băng localStrorage
-   cải thiienej hiệu suất vì lưu trữ trên client
-   ..
-   SessionStrorage : sd khi muốn loại bỏ dữ liệu ngay lập tức đóng cửa sổ, hoặc cùng truy cập 1 ứng dụng bằng 2 tabs
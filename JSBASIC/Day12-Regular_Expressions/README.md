### Regular Expressions
-   RegExp dùng kiểm tra một số mẫu có tồn tại kiểu dữ liệu khác hay h không
-    có 2 parameters là : Pattern and Flags
-   Pattern : có thể là 1 văn bản, ví dụ như spam trong email
-   Flags : là các tham số trong RegExp xác định kiểu tìm kiếm:
+   g :là global flag (Tìm kiếm một mẫu trong toàn bộ văn bản)
+   i :không phân biệt chữ hoa chữ thường(kiếm hết)
+   m : đa tuyến
### RegEx Method
-   test(): check kết quả trong một string trả về true or false
-   match() : trả về mảng chứa các kết quả
-   search() : check xem đúng với string ko nếu có trả vè index, không có trả về -1
-   replace() :Tìm kiếm kết quả phù hợp và thay thế kết quả đó

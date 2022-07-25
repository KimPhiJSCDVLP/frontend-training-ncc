### Data types
-   Có 2  kiểu dữ liệu : Primative and Non-primative
-   Primative : String , nummber, boolean
-   Non-Primative : Object , Arrray, Function
-   Math Object : Cung cấp các method làm việc với number : Math.ramdom, Math.sqrt ..
-   String : Khai báo trong nháy đơn hoặc kép
    let string = 'Thuan Anh ';
-   \n: new line
    \t: Tab, means 8 spaces
    \\: Back slash
    \': Single quote (')
    \": Double quote (")
-   Template String : Chèn giá trị vào chuỗi String
    console.log(`The sum of 2 and 3 is 5`)
    let a = 2
    let b = 3
    console.log(`The sum of ${a} and ${b} is ${a + b}`)
### String method :
    length : Tìm độ dài của chuỗi
    string[2] : Truy cập phần tử thứ 2 trong chuỗi
    toUpperCase(): Viết hoa STRING;
    toLowerCase (): Viết thường string;
    substr() : cắt chuỗi, cần 2 tham số (index cắt,số kí tự cần cắt) // từ vị trí index cắt theo về sau theo tham số
    substring() : nhu trên nhưng ko tính vị trí kết thúc
    split() : Tách chuỗi theo từng phần tử string.split('')
    trim() : remove các khoảng cách trước và sau trong string
    include () :check kí tự có trong string thì return true
    replace ():Thay thế một kí tự trong chuỗi string
    chartAt() : get index và trả về values tại index
    indexof : Lấy một chuỗi con và nếu chuỗi con tồn tại trong một chuỗi, nó trả về vị trí đầu tiên của chuỗi con nếu không tồn tại, nó trả về -1
    concat(): Nối các chuỗi vơi nhau;
    startsWith: nó lấy một chuỗi con làm đối số và nó kiểm tra xem chuỗi có bắt đầu bằng chuỗi con đã chỉ định đó hay không. Nó trả về một boolean (đúng hoặc sai).
    endsWith : cuối
    search() : Lấy chuỗi con làm đối số , trả về index của giá trị tìm tháy đầu tiên
    repeat(10) : lặp lại string với chỉ số 
### CHECK TYPEOF DATA
-   Kiểm tra kiểu dữ liệu data : number , boolean , string, null , undified..
### Change typeOf data
-   Covert typeOf data to different : string parseInt(num)
-   ParseFloat : String to Float
-   paserInt : FLoat to Int





### useState
-   Dùng useState lưu trữ mảng data, update và thêm mới task
### Read Data
-   Check điều kiện state todo nếu có thì render list to do
        +   dùng method map (task,index) để duyệt qua data
        +   dùng method sort để sắp xếp các phần tử theo id 
        +   Dùng React.Fragment cho phép return ra nhiều element mà không cần thêm các ele ko cần thiết khác
### Create Task
-   state nhận vào value của input
-   khi thay đổi thì setNewState sẽ được gọi và state sẽ được cập nhật giá trị
-   khi click addStask , chúng ta khởi tạo 1 object chứa thông tin của newStask (id, title, status) , sau đó gọi setTodo để re-render lại bao gồm [...todo,Object mới];
-   Gọi setNewStack để clear giá trị đã thêm

### Update Task
-   Khi click button edit sẽ gọi setUpdateData để lấy state updateData hiện tại
    +   sau đó onChange input gọi tới changeTask để tạo object mới 
    +   tiếp theo gọi lại setUpdateData để lưu state hiện tại
-   Khi click buuton update thì updateTask được gọi :
    +   Dùng filter lọc qua list todo hiện tại và bỏ qua todo có id === update.id, thu được list task 
    +   Gộp list task này với state updateData hiện tại
    +   Gọi setTodo để cập nhật state todo
    +   setUpDateData xóa dữ liệu đã nhập
### Cancel Update
-   Gọi setUpdateData('') rỗng để nó không render giá trị mới
### Delete Task
-   filter todo hiện tại lấy ra các task khác id với task bị xóa
-   setTodo ( cập nhật lại state)

### Task done
-   truyền id của task vào hàm markDone
-   dùng map duyệt todoList theo id cần markDone , sau đó toggle status từ true thành false hoặc nguocwj lại , và return lại task này 
-   sau đó gọi setTodo update state

### useSate 
-   khi muốn thay đổi thì render giao diện theo dữ liệu
-   const [state, setState] = useState(initialState);
-   state :trạng thái trả về init
-   setState : dùng thay đổi state và re-render component
### useEffet : xử lý side-effect
- useEffect (callback,[])
- useEffect (callback,[depent])

### useCallBack : tránh khởi tạo lại các biến onchange , onadd , chỉ render ra các input mới hoặc add mới , không render lại hết các thành phần

### 
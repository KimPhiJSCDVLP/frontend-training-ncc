# frontend-training-ncc
### ReactJS
### Các khái niệm
### Jsx 
-    Là cú pháp mở rộng của JS
-   syntax :
```jsx
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;
```
-   Tên cấc thuộc tính theo chuẩn camelCase : className
### Redering Element
-   Element là các thành phần nhỏ nhất trong ứng dụng.
```jsx
    const element = <h1>Hello, world</h1>;
```
-   Để render một React element vào bên trong một  (node) DOM gốc, truyền tất cả vào ReactDOM.render():
```jsx
    ReactDOM.render(element, document.getElementById('root'));
```
### Component and Props
-   có 2 loại : Fucntion Components và Class Component
```jsx
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
        }
    //class cpn
    class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
    }
```
### Rendering-component
```jsx
    function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }
    const element = <Welcome name="Sara" />;
    ReactDOM.render(
    element,
    document.getElementById('root')
    );
```
### Props :thuộc tính của component
-   cho phép truyền vào input
-   chỉ dùng để đọc và không thay đổi
-   children Property : truyền giữa opening và closing tags
```jsx
    // components/person/Person.js
    const Person = (props) => {
    return (
        <div>
        <p>I am {props.name}!</p>
        <p>{props.children}</p>
        </div>
    );
    };
    // App.js
    <Person name="Iron man">Love you 3000!</Person>
```
### State and lifiCycle
### State : 
-   khi cần 1 biến nội bộ trong component và biến đó đucợ quản lý hoàn toàn bởi component đó (Không thể sử dụng props)
-   Stateless và Statefull
-   Staless : các component không có internal state (nên sử dụng)
```jsx
    // stateless
    const Person = (props) => {
    return (
        <div>
        <p>I am {props.name}!</p>
        <p>{props.children}</p>
        </div>
    );
    };
```
-   Statefull các component có chứa state bên trong
### handleEvents
-   JSX sử dụng hàm để bắt sự kiện
```jsx
    <button onClick={activateLasers}>
    Activate Lasers
    </button>
```
-   Ngăn chặn hành vi mặc định : preventDefault();
### Conditional Rendering
-   Ví dụ như đăng nhập thì rendering trang chủ , còn chưa thì rendering trang login
```jsx
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
        }

        ReactDOM.render(
        // Thử thay đổi prop isLoggedIn={true}:
        <Greeting isLoggedIn={false} />,
        document.getElementById('root')
        );
```
-   Gán giá trị của element vào 1 biến : render có điều kiện 1 phần tròn khi các phần khác sẽ không thay đổi
-    Thay thế toán tử if bằng &&
```jsx
    function Mailbox(props) {
        const unreadMessages = props.unreadMessages;
        return (
            <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                You have {unreadMessages.length} unread messages.
                </h2>
            }
            </div>
        );
        }
        const messages = ['React', 'Re: React', 'Re:Re: React'];
        ReactDOM.render(
        <Mailbox unreadMessages={messages} />,
        document.getElementById('root')
        );
```
-   Nếu điều kiện trước && thỏa thì block code sau && sẽ được thực hiện ,nếu fasle sẽ bỏ qua
-   Thay if else bằng toán tử ba ngôi
```jsx
    render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
        {isLoggedIn
            ? <LogoutButton onClick={this.handleLogoutClick} />
            : <LoginButton onClick={this.handleLoginClick} />
        }
        </div>
    );
    }
```
-   nếu isLoggedIn trả về true thì render logout
-   return Null nếu muốn ngăn chặn coponent thực hiện render bởi 1 component khác
### Lists and Keys
-   Render nhiều component
```jsx
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
    <li>{number}</li>
    );
    ReactDOM.render(
        <ul>{listItems}</ul>,
        document.getElementById('root')
        );
```
-   Dùng map duyệt hết mảng component sau đó get được listItems và dùng render
-   Key : xác định được phần tử nào sẽ tahy đổi, thêm hoặc xóa, thông thường nên sử dụng ID , bởi ID là duy nhất 
### Forms
-   Controlled Components :sử dụng funct JS xử lý quá trình submit dữ liệu của form
-------------------------
### Hook : là các method , các funct đucợ viết bởi ReactJS
 -  useState
 -  useEffect
 -  useLayoutEffect
 -  useRef
 -  useCallBack
 -  useMemo
 -  useReducer
 -  useContext
 -  useImpreativeHandle
 -  useDebugValue
*** Chỉ dùng cho fucnt component
 ### useState : Trạng thái của dữ liệu
-   Dữ liệu thay đổi gì , giao diện re-render ở đó
    ```jsx
    import {useState} from 'react';
    const [state, setState] = useState (initState);
    ```
    + initSate : giá trị khởi tạo
    +   state : lưu giá trị của state(đơn,mảng,object...)
    +   setState : thay đổi giá trị state khi thay đổi
    ```jsx
        function Counter({initialCount}) {
            const [count, setCount] = useState(initialCount);
            return (
                <>
                Bộ đếm: {count}
                <button onClick={() => setCount(initialCount)}>Chạy lại</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                </>
            );
            }
            ```
-   Các nút + ,- sẽ thay đổi với giá trị trước đó đã chạy
-   nút init sẽ chạy lại với giá trị ban đầu
###   LAZY INITIAL STATE
-   Khi có phép toán phức tạp nên dùng hàm callback để làm tham số khởi tạo cho useState 
-   Bỏ qua việc cập nhật state nhiều lần , nó chỉ chạy lần đầu tiên và lấy luôn giá trị
```jsx
    const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState;
    });
```
### two-way binding : ràng buộc 2 chiều
-   Thay đổi bên giao diện thì setState cũng thay đổi và ngược lại
-   ứng dụng khi dùng form , sẽ lấy được giá trị input mà ko cần get value

---------------------------------------------------------------
### useEffect :Xác định fucnt có side effect hay không
-   side-effect : khi tác động  làm cho dữ liệu bị thay đổi
-   ex : Submit thông tin lên server và nhận thông tin trả về
        Hiển thị trạng thái thành công (chuyển từ redirect sang Dashboard) hoặc thất bại (Error và giải thích lỗi)  //side-effect
-   Chạy sau khi render giao diện
-   Có ba loại :
    1. useEffect(callback)
        -   Gọi callback mỗi khi component re-render 
    2. useEffect (callback,[])
        -   Chỉ gọi callback 1 lần sau khi component mounted
        -   Ví dụ như fetch API
    3. useEffect (callback,[deps])
    -   callback sẽ đucợ gọi mỗi khi depend thay đổi
    ------------------------
    -   callback luôn đc gọi sau khi component mounted
```jsx
    useEffect (callBack,[deps]);
    -   deps : biến, props truyền vào,hoặc state
```

 

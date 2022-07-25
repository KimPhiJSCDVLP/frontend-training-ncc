### Booleans , Operator , Date
-   Boolean : True or False
-   Undefined : Khai báo biến nhưng ko có values let name;
-   Null : biến có kiểu null, rỗng
- ### OPERATOR : Toán tử gán
-   Addition(+): a + b
    Subtraction(-): a - b
    Multiplication(*): a * b
    Division(/): a / b
    Modulus(%): a % b
    Exponential(**): a ** b
-  ### Comparison Operators
   So sánh ===,==,!=,<,>,<=,>=
- ### Logic Operator : && , ||
    const check = 4 > 3 && 10> 3 // true and true -> true
    const check = 4 > 3 || 10 < 5  // true  || false -> true
- ### Increment and Decrement : Tăng và giảm
    Pre-increment 
        let count = 0
        console.log(++count)        // 1
        console.log(count)          // 1
    Post - increment
        let count = 0
        console.log(count++)        // 0
        console.log(count)          // 1
- ### Ternary Operator : Toản tử ba ngôi
    let isRaining = true
    isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')
    isRaining = false

    isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')
- ### Date
- get Ngày , tháng , năm hiện tại , giòe ,phút , giây
    const now = new Date();
    console.log(now);
    console.log(now.getFullYear);
    console.log(now.getMonth);
-   Getting time : get thời gian từ 1/1/1970
    const now = new Date() //
    console.log(now.getTime())

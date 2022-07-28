//Create a pattern with Regex
let pattern1 = 'Thuan';
let regEx = new RegExp(pattern1);
console.log(regEx);

//test()
const string = 'I learning JavaScript'
const pattern = /learning/;
const result = pattern.test(string)
console.log(result); //true
//match()
console.log(string.match(pattern));
//search()
console.log(string.search(pattern)); // index 2
//replace()
console.log(string.replace(/learning/,'like'));
 //i like javascript
// Square Bracket : sử dụng dấu ngoặc vuông bao gồm chữ hoa và chữ thượng
const patternA = /[Aa]pple/g // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(patternA)
console.log(matches)  //["Apple", "apple"]

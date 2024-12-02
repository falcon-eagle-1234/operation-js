const number=1
const stringNumber="1"
// console.log(number===stringNumber)
// console.log(number==stringNumber)
console.log(number!==stringNumber)


// 10. m = y2-y1/x2-x1 хариуг олох
// 11. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
// 12. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.
// 13. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.
// 14. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
// 15. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул:
// Өгөгдсөн 2 тооны нийлбэр нь 25
// Өгөгдсөн 2 тооны ялгавар нь 5
// 16. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх
// 17. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.
// 18. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич //


const traingleA= 30;
const traingleB= 30;
const traingleC= 30;
console.log(traingleA + traingleB + traingleC);

const radius = 20;
const pi = 3.14;
console.log(pi * (radius * radius));

// m = y2-y1/x2-x1
const y = 8;
const x = 1;

const y1 = y*1;
const y2 = y*2;
const x1 = x*1;
const x2 = x*2;
const huvaah1 = y2-y1;
const huvaah2 = x2-x1; 
const hariu = huvaah1/huvaah2;

const result = (y*2 - y*1)/ (x*2-x*1);
console.log(result)
console.log(hariu);

const mb = 15;
const huvaah = 3;
console.log(mb/huvaah);

const peremiter = traingleA + traingleB + traingleC;
const talbai = Math.sqrt(peremiter*(peremiter-traingleA)*(peremiter-traingleB)*(peremiter-traingleC))
console.log(talbai);

const celsius = 20;
const frangeit= ((celsius*9)/5)+32
console.log(frangeit);

// 14. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
// 15. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул:
// Өгөгдсөн 2 тооны нийлбэр нь 25
// Өгөгдсөн 2 тооны ялгавар нь 5
// 16. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх
// 17. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.
// 18. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич //

const Ateam = (96 + 108+89)/3;
const Bteam = (96 + 108+89)/3;
console.log(Ateam, Bteam)

const huvisagch1=10;
const huvisagch2=20;
const niilber= huvisagch1 + huvisagch2
const ylgavar= huvisagch1 - huvisagch2
console.log("Ogogdson hoyr toonii niilber " + niilber);
console.log("Ogogdson hoyr toonii ylgavar " + ylgavar);

const cm=20;
const inch=30;
const toInch=cm/2.54;
const toCm=cm*2.54;
console.log("cm"+toCm);
console.log("inch"+toInch);

const Radius=prompt("too oruulna uu");
const volume=3.14*(Radius*Radius)
const hureeniiUrt=2*pi*Radius
console.log("volume "+volume)
console.log("hureenii urt "+hureeniiUrt)

const too=123;
const first=parseInt(too/100);
console.log(first+"ehnii  too");

const tsipr=5234;
const EhniiToo=tsipr/1000;
console.log(Math.floor(EhniiToo))














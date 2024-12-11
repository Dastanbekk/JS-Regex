//RegEx -> Regular Expression pattern hisoblanib, stringlar kombinatsiyalar mosligini tekshirishda yordam beradi. /YourCustomRegex/ ko'rinishida yoziladi.
// Misol uchun adressni tekshirsh, telefon nomer to'g'ri kiritlgan yoki yo'qligini tekshirish va h.k

// let reg = /[absde]/;
// let str = "c";
// console.log(reg.test(str));

/*
Masalan [absde] => bunda faqat berilayotgan belgi shu qavslar ichida bor yoki yoqligini topib beradi

[A-Z] yoki [a-z] => bunda Kotta Bosh va kichkina harflarni hammasini qabul qiladi

[0-9]=> bunda hamma sonlarni oladi.

(^) => bu  belgidan keyin kelgan barcha belgilarni olmaydi boshqa belgilarni mathc qiladi. Misol uchun /[^xyz]/ => regeximiz xyz dan tashqari barcha belgilarni qabul qiladi.

(.)nuqta => bunda biron bir regexdan oldin nuqata qoyadigan bo'lsak osha regexdan oldin albatta bitta istalgan harf bolishi shart.
Masalan: /.[a-z]/ barcha harflardan oldin bitta belgi bo'lishi shart degani.

 \d => bu regex faqatgina raqamlani match qiladi

 \D => bu regex faqatgina raqam bo'lmagan belgilarni match qiladi

 \w => bu regex Alifbodagi barcha harflarni , barcha raqamlarni va pastki chiziqcha(_) ni match qiladi.

 \W => bu regex Alifbodagi barcha harflarni , barcha raqamlarni va pastki chiziqcha(_)lardan tashqari barch belgilarni oladi.

 \s => bu regex Bosh bo'lgan joy probel va enterlarni match qiladi
 
 \S => bu regex Bosh bo'lgan joy probel va enterlardan tashqari har qanday belgini match qiladi
 
 \n => enter qatorni tekshiradi
 
 / => beckslaw bu belgi belgilarni ajratish uchun ishlatiladi
 
 \b => bondry be regex yordamida belgilar nechta belgi qabul qilishi belgilanadi.
 Masalam : \b\w{3}\g bu regex so'zi boshidagi 3 ta harfni oladi.
 
 \n => bu enter vazifasini bajaradi matnlarda enter tashidi.

 \t => matn orasida 2 3 ta tab tashidi
*/

// Metodlar bo'yicha misollar

// split

// let str = "Assolomu Alaykum \nHurmatli do'stlar \nva yaqinlar";
// console.log(str.split(/\n/)); // [ 'Assolomu Alaykum ', "Hurmatli do'stlar ", 'va yaqinlar' ]

//replace

//let str = "Raimjonov Davron";
//console.log(str.replace(/\a/gi, "o")); //Roimjonov Dovron global holatda o'zgartiradi

//new regex

// let regex = new RegExp(/[a-z]/g); regex yaratsih yana bir usuli
// console.log(regex);/[a-z]/g

//test
//tekshirilayotgan qiymatnda regex bor yoki yoqligini qaytaradi.
// const regex = new RegExp(/[+]\d\d\d/);
// const tel = "+998 77 022 44 46";
// console.log(regex.test(tel)); // boshidagi 3 ta soni tekshirdi unda togri keladigan qiymatlar bo'lgani uchun true qaytardi

//match
//match bizga tekshirilayotkan bor qiymatni array qilinb qaytaradi.
//const regex = new RegExp(/[+]\d\d\d/);
//const tel = "+998 77 022 44 46";
//console.log(tel.match(regex)); //[ '+998', index: 0, input: '+998 77 022 44 46', groups: undefined ]

//Beligi boshida va oxirida borligini tekshirish
// ^ boshida belgi bor borlsa match qiladi
// $ oxirida belgi bor bolsa match qiladi

// const telRegEx = /^[+]998\s\d\d\s\d\d\d\s\d\d\s\d\d/;
// const tel = "+998 77 022 44 46";
// console.log(telRegEx.test(tel));

//\b =>  petterni birinchi belgilangan beligni oladi. \bmoon (moon)s
//\B =>  petterni belgini oxiridan boshlab oladi. moon\B s(moon)

/*
x(?=y) Lookedead assertion: Bu patternda "x" faqat mos boladi "y"dan oldin kelsa yani birichi belgi ikkinchi belgidan keyin kelishi lozim (x)y(x)yxl
x(?!y) Negative lookadead assertion: x mos boladi aga y dan keyin kelsa yani birinchi beligan keyin osha belgi kelishi shart degani y(x)
(? <=y)x Loogbehind assertion: bunda oxiridan boshlab korib chiqadi (y)x
(?<!y)x NegativeLoogbehind assertion: bunda oxiridan boshlab korib chiqadi (x)y
*/

/*
Types

* => yulduzcha belgisi bir yoki bir necha marta takrorlaishi haqida belgilab beradi. a* (aaaa)x ""=> bundaham * true qaytadi chunki bosh satrda a harfi 
yozlishi mumkin

+=> + belgisi bir yoki bir nechta beliglangan belgi bolishini talab qiladi faqat * dan farqi "" bolsa false qaytaradi chunki bitta bolsaham osha belgi bo'lishi shart

?=>? belgisi regulyar ifodalarda belgilangan belgidan oldin kelgan belgini bir marta yoki hech bo'lmaganda qo'llaniladi. Boshqa so'z bilan aytganda, ? belgisi belgilangan
 belgini optional qiladi, ya'ni bo'lmasa ham bo'ladi.
let regex = /colou?r/; // 'colour' yoki 'color' so'zlariga mos keladi
console.log(regex.test("colour")); // true, chunki 'colour' so'zi mavjud
console.log(regex.test("color")); // true, chunki 'color' so'zi mavjud
console.log(regex.test("colouur")); // false, chunki mos so'z yo'q

{14} => bu pattern ozidan oldingi belgi shuncha marta takrorlanishini bildiradi. \d{14} yani 14 son bolishi shart degani

{6,} => bu patternda birontda belgi 6tadan kop bolishi kerak

{6,18} => bu pattern 6tadan 18tagacha belgi bo'lishi kerak

 


*/

let text =
  "Hurmatli mijozlar iste'molchi huquqlarini himoya qilish markazi +998-91-922-21-21 shuningdek, savdo markazi kall markazi (998)91 921 21 21 , menejer bilan bo'glanish uchun esa 998.91.921.96.95 nomeriga telefon gilishingiz mumkin.";

let reg = new RegExp(
  /[(+]?(998)[\.\s\-)]?(91|99|77)[\-\.\s]?(\d{3})[\s\.\-]?(\d{2})[\s\-\.]?(\d{2})/,
  "g"
);

// console.log(text.match(reg));
const newText = text.replaceAll(reg, "+$1 ($2) $3-$4$5");
console.log(newText);

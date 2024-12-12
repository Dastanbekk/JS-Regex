// 1)
// let phoneNum = "(999)-999-9999";
// let numRegex = /\(\d{3}\)[ -]\d{3}[ -]\d{4}/gm;
// console.log(numRegex.test(phoneNum))

// 2)
// let web2 = "htt -fdksdjfksjfkjs";
// let web = "https-fsdgdgdfgfd";
// let webreg = /^(https?)[ -_].{1,}/gm;
// console.log(webreg.test(web)); true
// console.log(webreg.test(web2)) false

// 3)
// let num = "sdadsasd";
// let numreg = /[0-9]/g;
// console.log(numreg.test(num))

// 4)
// let divReg = /<\/?[a-zA-Z][\w\-]*(\s+[a-zA-Z\-]+(\s*=\s*(["']).*?\3|\w+))?\s*\/?>/gm;
// let div = "<div/>"
// console.log(divReg.test(div));

// 5)
// let passport = "AB123456";
// let passReg = /[A-Z][A-Z]\d{6}/gm;
// console.log(passReg.test(passport));


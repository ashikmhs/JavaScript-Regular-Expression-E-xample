//example.....

let re;
let str;

//postal code
//postal code example -> 4000,3400 ...

re = /^[0-9]{4}$/;
str = "4000";

//phone number

re = /^01[0-9]{9}$/;  //01785320866
str = "01785320866";

re = /^(\+88)?01[0-9]{9}$/;  //+8801785320866 or 8801785320866
str = "+8801785320866";

re = /^(\+)?(88)?01[0-9]{9}$/; //01785320866 or +8801785320866 or 8801785320866
str = "+8801785320866";
str = "8801785320866";
str = "01785320866";

//Email address
//ashik.mahmud113@gmail.com

re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
str = "ashik.mahmud113@gmail.com";
console.log(re.test(str));
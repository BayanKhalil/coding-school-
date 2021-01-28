// console.log('hello this is my first JS coding practice');
// console.log('hello ' + 'every' + 'one')
// console.log(7 !== 8);
// var x=10;
// console.log(x +=10); // the result will be 20

// var statement ='coding is very good for you';
// alert('stay in touch with us')


// next component will ask you about your email and age.

// var yourName = prompt('what is your name');
// alert('hello' + yourName);
// var email = prompt('what is your email');
// alert('accepted' + email);



// var age = prompt('how old are you?')
// console.log(age); // this is for "to see the value in colone tap in"

// if (age > 18 ) { message = 'welcome to our coding website';}

//    else if (age <18 ) { message = 'go to school';}

//    else { message = 'always welcome';}

// document.write('<h1>' + message + '<h1>');


var order = prompt('what type of language you want learn about');

while (order !== "html" && order !== "css")
       order = prompt('please write only html or css')

var lang = '';
if (order === 'html') {
   lang = '<img src="images/html.jpg"/>';
}
else if (order === 'css') {
    lang = '<img src="images/css.jpg" width="250" />';  
   }


var result = '';
var numOfPicLink = prompt('how many picture links do you want ');
for (var i = 0; i < numOfPicLink; i++) {
   console.log(i);
   result = result + '<br>' + lang;
}

document.write(result);












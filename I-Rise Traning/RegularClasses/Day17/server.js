
// ---Redeclare and Reassign is possible //
var name="sanket";
name="bhoyar";
var name="fullstack";
console.log(name);

// ---- Redeclare not possible but Reassign posible //
let Fruit='Apple';
// let Fruit='mango';       
Fruit='Cherry';               
console.log(Fruit);

//-- Redeclare and reassign not possible
const data='book';
// const data='notebook';
// data='Notebook';
console.log(data);

var array=[1,2,3,4,"Sanket",[5,6,7,8],'Bhoyar'];
var array=[1,2,3,4,"Fullstack",[5,6,7,8],'FrontEnd'];
console.log(array);
console.log(typeof(array));

//   -------------------Backticks using OR Template literals ----------------
var Template="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png";
var Template="www-curefit-com/image/upload/c_fill,h_50,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png";
var Template=`https://cdn-images.cure.fit/${Template}`;
console.log(Template);


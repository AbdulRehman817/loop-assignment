// var arr [
//     []
// ]


// Question2:
// var arr=[0,1,2 ,3+"<br>" +1,0,1,2+"<br>" +2,1,0,1]
// document.write(arr)

// // Question3:
// var i;
// for(i=0; i<11; ++i)
// console.log(i)

//Question4:    
// var user=+prompt('Enter a number to show its multiplication table')
// var range=+prompt('Enter the length also')
// var i;
// for(i=1;i<=range;i++){
//  var result=i*2
//     document.write("<br>"+result)
// }

// //Question5:
// var fruits=['apple','banana','mango','orange','strawberry']    
// document.write(fruits+"<br>")
// for(i=0;i<fruits.length;i++){
//     document.write("Element of index\n"+i+"\nis\n"+fruits[i]+'<br>')
// }


 /*Question6:
 document.write('Counting:')
 var i;
 for(i=1;i<16;i++ ){
    document.write(i+" ")
 }

 document.write('Reverse Counting')
 var i;
 for(i=10;i>0;i--){
    document.write(i+" ")
 }

 document.write('Even:')
 var i;
 for(i=0;i<21;i=i+2){
    document.write(i+" " )
 }

 document.write('Odd:')
 var i;
 for(i=1;i<20;i=i+3){
    document.write(i+" " )
 }

  document.write('Series:')
  var i;
  for(i=2;i<20;i=i+2){
     document.write(i+"k"+" " )
  }
  */

 /*Question7:
//   var sweets=[
//      "Cake",
//      "apple pie",
//      "cookies",
//      "chips",
//      "patties", ]
//   var user=prompt('Welcome to ABC Bakery.What do you want to order sir/mam')
//   var flags=false
//    var i;
//   for(i=0;i<sweets.length;i++){
// if(sweets[i].includes(user)){                                   
//     alert("yes "+sweets[i]+" is available at index "+i+"  in our bakery")
//     flags=true;
//     break;
// }
//   }
// if(!flags){
//     alert('We are sorry'+user+"is not available")
// }  
*/


 //Question7:
// var numbers=[24, 53, 78, 91, 12]
// document.write(numbers)
// document.write('The largest number is:',Math.max(...numbers))


//  Question7:
// var numbers=[24, 53, 78, 91, 12]
// document.write(numbers)
// document.write('The largest number is:',Math.min(...numbers))

var numbers=[]
var i;
for(i=5;i<=100;i=i+5){
    numbers.push(i)
    // document.write(i)
}
document.write(numbers)
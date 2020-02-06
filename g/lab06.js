// var name , age;
var name = prompt ("what is your name ? ");
var age = prompt("what is your age ?");
var numOfItem ;
 function information (){
    while (name !== "ahmad" && age !== 25 ) {
      name = prompt ("please your name must ahmad ");
      age = prompt ("your age must be 25");
    }
      alert ("you can choose 25 item only !! " );

     var  numOfitem = prompt("how many item you are listed ?");
      for( var i=0 ; i <= numOfitem; i++ ){
        document.write ('<h3>' + 'items =' + i +'</h3>');


 
      }

 
 //while (name === "ahmad" && age <= 25 ) {
       // prompt("hello" + name +" ");
        // document.write('<h3>' + "name =" + name  +'</h3>');
        // document.write('<h3>' + "age =" + age +'</h3>');
        // name = prompt ("what is your name ? ");
        // age = prompt("what is your age ?");    
    } 

information()
 
document.write ('<h3>' + 'name =' + name +'</h3>');
document.write ('<h3>'+'age ='+ age  + '</h3>');






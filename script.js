function fun(name, age) {
    alert("Привет " + name + "! " + "Это моя первая программа!"); 
    
     function showSkills(){
         let skills  = [
         "HTML",
         "CSS",
         "BOOTSTRAP",
         "С++",
         "jQuery"
         ];
      for(let i=0;i<skills.length;i++){
            document.write(" " + skills[i] + "<br>");
        }
      }
      
      function checkAge() {
          if(age < 18){
               alert("Упс! Для того, чтобы продолжить, нужно достигнуть 18 лет.")
           }
          else{
              alert ("Вход доступен!") 
          }
      }
      
      function calc(num) {
         var x;
         x=num*num;  
         document.write(num + " в квадрате = " + x);
      }
      
      showSkills();
      checkAge();
      calc(4);
    }

fun("Alyona", 18);

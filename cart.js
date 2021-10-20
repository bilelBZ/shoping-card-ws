 var btn_plus = document.getElementsByClassName("increment");
var btn_minus = document.getElementsByClassName("decrement");
var btn_remove = document.getElementsByClassName('delete');
var product = document.querySelector('.product');
var sum = document.getElementById('sum');
var price = document.getElementById('price');
var quantity = document.getElementsByClassName('quantity')

 //button increment 

for (let i = 0; i<btn_plus.length; i++) {

  btn_plus[i].addEventListener("click", function () {
    btn_plus[i].nextElementSibling.innerHTML++;
Total()

  });


  
}
   //button decrement 

for (let i = 0; i<btn_minus.length; i++) {

    btn_minus[i].addEventListener("click", function () {
        if (btn_minus[i].previousElementSibling.innerHTML>0) {
            btn_minus[i].previousElementSibling.innerHTML--;
Total()

        } 
  })
}

//remove product

for (let i = 0; i < btn_remove.length; i++) {
    btn_remove[i].addEventListener('click',function(){
        btn_remove[i].parentElement.remove();
Total()

     })
    
}

//total price 

 function Total (){
    
    let unitprice=document.getElementsByClassName('unit-price')
    let quaty=document.getElementsByClassName('qute')
    let tot=document.querySelector('.total-price')
        let sum=0;
    for (let i=0; i<quaty.length; i++){
    sum+=quaty[i].innerHTML*unitprice[i].innerHTML
    }
    
    tot.innerHTML=sum
    }  
 
// like button

var heart = document.getElementsByClassName('fas');

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click',function(){
        heart[i].classList.toggle('red');
    })   
}


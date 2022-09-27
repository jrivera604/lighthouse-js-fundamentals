// For loop for a count from 100 till 200

for (let i = 100; i <= 200; i++) {
//Divisible by 3 and 4  
 if((i % 3) == 0 && ((i % 4)) == 0){
  console.log('LoopyLighthouse')

 }
 // Divisible by 3
  else if ((i % 3) == 0) {
    console.log('Loopy')
  }
  // Divisible by 4
  else if((i % 4)== 0){
    console.log('Lighthouse')
  }
 
  else { console.log(i) }
}

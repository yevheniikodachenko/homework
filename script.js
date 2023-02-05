// Задание 1

function myFunction (a,b){
     let sum = 0;
     let counetr = 0;
    for (let i = a;i < b ;i++ ){
        if(i%2==0){
        sum += i;
        counetr++;  
      }
   } 
   console.log("сумма четных чисел",sum);
   console.log("количество четных чисел",counetr);
}

// Задание 2

const isPrime = num => {
    const square = Math.floor(Math.sqrt(num));
    for (i = 2;i <= square;i++)if(num % i === 0)return false;return num >= 2;
};


// Задание 3

function getSqrtBySequentialSelection (number){
    for(let i = 0 ; i < number;i++){
        let square = i * i;
        if (number == square)return i;
        if (number < square) return i - 1;
    }
}


function getSqrtByBinarySearch (number){
    let l = 0;
    let r = number;
    let m = (l + r)/2;
    let t = number;
    for (; ;){
        m = (l + r)/2;
        if(m == t || m*m == number)
        break;
        if(m * m < number){
            l = m;
        }else{
            r = m;
        }
        t = m
    }
    return Math.round (m);
}

// Задание 4

const getFactorial = n =>
n <=1 ?
1:
n*getFactorial(n - 1);

// Задание 5

function digitSum (y){
   let sum = 0;
   while (y > 0){
    sum += y % 10
    y = Math.floor(y/10)
   }
   return sum;
}

    
// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
function checknum(n) {
  if (n % 3 === 0 && n % 7 === 0) {
    return "Həm 3-ə, həm 7-yə bölünür";
  } 
  else if (n % 3 === 0) {
    return "Yalnız 3-ə bölünür";
  } 
  else if (n % 7 === 0) {
    return "Yalnız 7-yə bölünür";
  } 
  else {
    return "Heç birinə bölünmür";
  }
}

console.log(checknum(21));
console.log(checknum(9));
console.log(checknum(14));
console.log(checknum(10));

// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));

// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
function sumEvenSquares(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i] * arr[i];
    }
  }

  return sum;
}

console.log(sumEvenSquares([1, 2, 3, 4, 5, 6])); // 56

// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse emil@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 
function login(mail, password) {
  if (mail === "emil@code.edu.az" && password === "12345") {
    return "Giriş olundu";
  } else {
    return "Mail və yaxud password səhvdir";
  }
}

console.log(login("emil@code.edu.az", "12345"));
console.log(login("someone@mail.com", "11111"));

// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
function sumOdd(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum = sum + arr[i];
    }
  }

  return sum;
}

console.log(sumOdd([1, 2, 3, 4, 5])); 

// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.
function countEven(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count = count + 1;
    }
  }

  return count;
}

console.log(countEven([1, 2, 3, 4, 6])); 

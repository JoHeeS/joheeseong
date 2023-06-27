/*
  ES6 (2015)
  자바스크립트 최신문법이 많이 등장한 버전

  1 let, const
  2 화살표 함수
  3 메서드
  4 구조분해할당
  5 스프레드 연산자
  6 Promise
*/


/*
  let, const

  1 let
  2 const
  3 블록 범위
*/


// 1 let: 변수 선언에 사용되는 예약어

// let foo = "bar";
// console.log(foo);

// let foo = "bar"
// let foo = "baz" // 재선언 불가


// 2 const (constant): 상수

// const foo = "bar"; // 다음의 형태로만 사용 가능하다

// console.log(foo)


// 3 블록범위

// {
//   var varInBlock = true;
//   let letInBlock = true; // 블록 범위
//   const constInBlock = true; // 블록 범위
// }

// console.log(varInBlock); // true
// console.log(letInBlock); // not defined
// console.log(constInBlock); // not defined



/*
  화살표 함수
  익명함수를 더 간단하게 표현할 수 있다
*/

// let f = () => {
//   console.log("foo")
// }

// f();


// let f = () => "foo" // 한개의 값을 리턴하는 경우 중괄호와 return 생략 가능

// console.log(f()); // foo

// let f = x => "foo" + x; // 매개변수가 하나인 경우 () 생략 가능

// console.log(f("bar"))



/*
  메서드

  1 Array.map()
  2 Object.keys()

*/

// Array.map()
// 배열에 특정한 작업을 수행한다. 업데이트 된 배열을 리턴한다

// let beers = ["Guinness", "Heineken", "Budwiser"];

// let updatedBeers = beers.map((beer) => { // beer: 배열의 각 아이템
//   return beer.toUpperCase();
// })

// console.log(updatedBeers);


// Object.keys()
// 객체의 키를 문자열 배열로 리턴한다

// let cat = {
//   name: "Kitty",
//   home: null,
//   sound: function () {
//     return "야옹";
//   }
// }

// const keys = Object.keys(cat);

// console.log(keys) // name, home, sound


/*
  구조분해할당 (destructing)

  1 배열 구조분해할당
  간단한 방법으로 배열의 아이템을 변수에 할당할 수 있다

  2 객체 구조분해할당
  간단한 방법으로 객체의 속성을 변수에 할당할 수 있다
*/


// 배열 
// var beers = ["Guinness", "Heineken", "Budwiser"];

// // 기존의 방법
// var irishBeer = beers[0];
// var dutchBeer = beers[1];
// var americanBeer = beers[2];

// console.log(irishBeer) // Guinness
// console.log(dutchBeer) // Heineken
// console.log(americanBeer) // Budwiser

// var beers = ["Guinness", "Heineken", "Budwiser"];

// var [irishBeer, dutchBeer, americanBeer] = beers;

// console.log(irishBeer) // Guinness
// console.log(dutchBeer) // Heineken
// console.log(americanBeer) // Budwiser


// 객체
// var irishBeer = { name: "Guinness", origin: "Ireland", available: false };

// 기존의 방법
// var name = irishBeer.name;
// var origin = irishBeer.origin;
// var available = irishBeer.available;

// console.log(name, origin, available)

// var { name, origin, available } = irishBeer;

// console.log(name, origin, available)


// 매개 변수

// var irishBeer = { name: 'Guinness', origin: 'Ireland', available: false };

// // 기존의 방법
// function f(irishBeer) {
//   var name = irishBeer.name;
//   var origin = irishBeer.origin;
//   var available = irishBeer.available;
// }

// // 구조분해할당
// function f({ name, origin, available }) {
//   // ..
// }

// f(irishBeer);


// Q. 구조분해할당을 이용하여 배열의 각 아이템을 변수에 할당해보세요
// var asianBeers = ["클라우드", "아사히"];

// var [koreanBeer, japaneseBeer] = asianBeers;

// console.log(koreanBeer)
// console.log(japaneseBeer)


/*
  스프레드 연산자 (Spread Operator)

  1 배열
  배열의 아이템을 간편하게 복사할 수 있다
  ...복사할 배열

  2 객체
  객체의 속성을 간편하게 복사할 수 있다
  ...복사할 객체
*/


// 배열
// var beers = ['Guinness', 'Heineken'];
// var newBeer = "Budwiser"

// var updatedBeers = [...beers, newBeer];

// console.log(updatedBeers) // Guinness, Heineken, Budwiser


// 객체
// var irishBeer = { 
//   name: 'Guinness', 
//   origin: 'Ireland', 
//   available: false 
// };

// // 속성을 수정 또는 추가한다
// var updatedIrishBeer = { ...irishBeer, available: true };

// console.log(updatedIrishBeer);


// Q. 스프레드 연산자를 사용하여 치즈의 home 속성을
// 삼산동으로 갱신해보세요

// var cat = {
//   name: '치즈',
//   age: 1,
//   home: null,
//   sound: function () {
//     return '야옹'
//   }
// }

// var updatedCat = { ...cat, home: "삼산동" };

// console.log(updatedCat)


/*
  Promise 객체
  비동기 작업의 성공 또는 실패 여부를 나타낸다
  비동기 작업의 가독성을 향상시키기 위해 사용된다

  1 프로미스의 구조
  2 사용 예시
  3 async/await
*/


/*
  1 프로미스의 구조

  - 프로미스의 인스턴스 생성
  생성자 함수에 두개의 콜백을 전달한다

  첫번째 콜백: resolve, 성공시에 호출된다
  두번째 콜백: rejected, 실패시에 호출된다

  - 프로미스의 상태
  fullfilled: 비동기 작업의 성공
  rejected: 비동기 작업의 실패
  pending: 비동기 작업의 대기상태

  - 프로미스의 메서드
  Promise.then(): 비동기 작업 성공시 데이터를 다룬다
  Promise.catch(): 비동기 작업 실패시 에러를 처리한다
  Promise.finally(): 성공 실패 여부와 상관없이 실행되는 메서드
*/

// const promise = new Promise((res, rej) => {
//   res({ foo: "bar"}); // 비동기 작업의 성공 (fullfilled)
// })

// promise
//   .then((value) => { // 데이터를 다루는 부분
//     console.log(value)
//   })
//   .catch((error) => { // 에러 처리
//     console.error(error);
//   })


/*
  실제 예시
  서버에 데이터 요청 예시
*/


// 서버에 데이터를 요청하는 함수
// 결과로 프로미스 객체를 리턴한다
// function fetchData() {
//   const promise = new Promise((res, rej) => {
//     res({ foo: 'bar' });
//   })

//   return promise;
// }

// fetchData()
//   .then(data => { 
//     console.log('응답 데이터:', data);
//   })
//   .catch(error => {
//     console.error(error)
//   })

// console.log("다음 작업");


/*
  async/await 

  프로미스 객체가 결과를 리턴할 때까지 기다린다
  프로미스의 가독성을 향상시키기 위해 사용한다
  try/catch 문법으로 에러를 처리한다
*/

// 서버에 데이터를 요청하는 함수
function fetchData() {
  const promise = new Promise((res, rej) => {
    res({ foo: 'bar' })
  })

  return promise;
}

async function f() {
  try {
    // ...
    const data = await fetchData(); // 프로미스가 결과를 리턴할 때까지 기다린다

    console.log(data);
  } catch (err) {
    console.error(err)
  }
}

f();
console.log('다음 작업');
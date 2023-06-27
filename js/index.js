// console.log("Hello JavaScript!");


/*
  JavaScript 튜토리얼

  1 데이터타입과 기본 메서드
  2 연산자
  3 조건문
  4 반복문
  5 변수
  6 함수
  7 배열
  8 객체
  9 클래스
  10 에러와 에러처리
  11 비동기 작업
  12 JSON
*/


/*
  1 데이터 타입

  1 String (문자열)
  2 Number
  3 Boolean
  4 null
  5 undefined
  6 BigInt
*/



/*
  String (문자열)
  연속된 문자
  '', "" 안에 문자를 작성한다
*/


// var foo = "bar";

// console.log(foo); // bar
// console.log(typeof foo); // string

// 각각의 문자에 접근한다
// console.log(foo[0]) // b
// console.log(foo[1]) // a
// console.log(foo[2]) // r


// 문자의 갯수 구하기
// console.log(foo.length); // 3


/*
  Number

  값의 종류: 정수, 소수, NaN(Not a Number), +Infinity, -Infinity
*/


// 정수
// var year = 2023;
// console.log(year); // 2023
// console.log(typeof year); // number


// 소수
// var pi = 3.14;

// console.log(pi); // 3.14


// NaN
// var nan = 2 - "foo";
// console.log(nan); // NaN (Not a Number)


// Number타입이 표현할 수 있는 최대값 
// var max_value = Number.MAX_VALUE;
// console.log(max_value);

// Number타입이 표현할 수 있는 최소값
// var min_value = -Number.MAX_VALUE;
// console.log(min_value);


// +Infinity
// var infinity = Number.MAX_VALUE * 1.1;
// console.log(infinity) // Infinity (양의 무한대)

// -Infinity
// var negative_infinity = -Number.MAX_VALUE * 1.1;
// console.log(negative_infinity); // -Infinity (음의 무한대)


/*
  boolean
  참 또는 거짓 (true or false) 값을 갖는다
*/

// var bool = true;

// console.log(bool); // true
// console.log(typeof bool); // boolean

// 비교연산은 boolean을 리턴한다
// console.log(1 > 0) // true


/*
  null
  없음을 나타낸다
*/

// var foo = null;

// console.log(null); // null
// console.log(typeof foo); // object


/*
  undefined
  정의되지 않은 변수
*/

// var foo;

// console.log(foo); // undefined
// console.log(typeof foo); // undefined


/*
  BigInt
  안전한 정수(safe integer)밖의 정수를 나타낸다
*/


// 안전한 정수의 최대값
// var max_safe_integer = Number.MAX_SAFE_INTEGER;
// console.log(max_safe_integer);

// 안전한 정수의 최소값
// var min_safe_integer = Number.MIN_SAFE_INTEGER;
// console.log(min_safe_integer);


// Number 타입으로 안전하지 않은 정수를 표현할 경우
// var not_safe_integer = 9999999999999999; // 9가 16개
// console.log(not_safe_integer)


// 정수값 뒤에 n을 붙여서 BigInt를 선언한다
// var bigint = 9999999999999999n;

// console.log(bigint); // 9999999999999999n
// console.log(typeof bigint) // bigint


/*
  기본 데이터타입의 메서드
  데이터에 특정한 작업을 수행한다

  1 String 메서드
  2 Number 메서드
*/


/*
  String 메서드

  1 toUpperCase()
  2 trim()
  3 concat()
  4 split()
*/


// toUpperCase()
// var foo = "bar";

// 모든 문자를 대문자로 변환한다
// console.log(foo.toUpperCase()) // BAR


// trim()
// var foo = "  bar  ";

// console.log(foo)
// // 문자열 앞 뒤의 공백을 제거한다
// console.log(foo.trim())


// concat()
// var foo = "Hello";
// var bar = "JavaScript";

// // A.concat(arg, B): A문자열 뒤에 B문자열을 연결한다 (arg 기준)
// var result = foo.concat(" ", bar); // concatenate (연결)

// console.log(result); // Hello JavaScript


// split()

// var foo = "Hello JavaScript";

// split(arg): arg를 기준으로 문자열을 나눈다
// console.log(foo.split(" ")); // Hello, JavaScript


/*
  Number 메서드

  1 toPrecision()
  2 toString()
*/


// toPrecision()

// var pi = Math.PI;

// console.log(pi); // 16자리까지 표현할 수있다


// // toPrecision(arg): arg(자릿수)
// console.log(pi.toPrecision(50)); // 정밀도


// toString()

// var year = 2023;
// // Number타입을 문자열로 변환한다
// console.log(year.toString());


/*
  연산자

  1 수리연산자
  2 대입연산자
  3 비교연산자
  4 논리 연산자
  5 타입 연산자
*/


/*
  수리연산자

  1 사칙연산자
  + - * /
  2 증가연산자
  ++
  3 감소연산자
  --
  4 거듭제곱연산자
  **
  5 계수연산자
  %
*/


// 사칙연산
// var add = 1 + 2;
// var subtract = 2 - 1;
// var divide = 1 / 2
// var multiply = 1 * 2;

// console.log(add)
// console.log(subtract)
// console.log(divide)
// console.log(multiply)


// 증가연산자

// var i = 1;
// i++ // 1을 증가시킨다

// console.log(i) // 2

// var i = 1;
// i--; // 1을 감소시킨다

// console.log(i); // 0


// 제곱연산자

// var exp = 2 ** 7

// console.log(exp) // 128


// 계수연산자

// var mod = 5 % 2; // 5를 2로 나눈 나머지

// console.log(mod) // 1



/*
  대입연산자

  1 변수대입 연산자
  =
  2 덧셈 대입 연산자
  +=
  3 빼기 대입 연산자
  -=
  4 곱하기 대입 연산자
  *=
  5 나누기 대입 연산자
  /=
  6 거듭제곱 대입 연산자
  **=
  7 계수 대입 연산자
  %=
*/


// 변수대입연산자

// var foo = "bar"


// 더하기 대입 연산자

// var longVariablesName = 1;

// // longVariablesName = longVariablesName + 1
// longVariablesName += 1;

// console.log(longVariablesName); // 2


/*
  비교 연산자

  1 동등연산자
  ==
  2 비동등 연산자
  !=

  3 엄격 동등 연산자
  ===
  4 엄격 비동등 연산자
  !==

  5 크다
  >
  6 크거나 같다
  >=
  7 작다
  <
  7 작거나 같다
  <=
*/


// 동등 연산
// console.log(1 == 2) // false
// console.log("foo" == "bar") // false
// console.log(2023 == "2023") // true
// console.log(null == undefined) // true


// 엄격 동등연산
// console.log(1 === 2) // false
// console.log("foo" === "bar") // false
// console.log(2023 === "2023") // false
// console.log(null === undefined) // false


// 비동등 연산
// console.log(1 != 2) // true
// console.log("foo" != "bar"); // true
// console.log(2023 != "2023") // false
// console.log(null != undefined) // false


// 엄격 비동등 연산
// console.log(1 !== 2) // true
// console.log("foo" !== "bar") // true
// console.log(2023 !== "2023") // true
// console.log(null !== undefined) // true


/*
  논리 연산자

  1 && (AND)
  expr1 && expr2

  2 || (OR)
  expr1 || expr2

  3 ! (NOT)
  !expr

  * expr(expression): 표현식
*/


// AND
// 두 표현식이 모두 참이면 true를 리턴한다
// console.log(1 > 0 && 1 < 2) // true


// OR
// 두 표현식 중 하나가 참이면 true를 리턴한다
// console.log(1 > 0 || 1 > 2) // true


// NOT
// console.log(!(1 > 0)) // false


// Boolean타입이 아닌 데이터를 부정할 경우

// console.log(!null) // true
// console.log(!undefined) // true

// console.log(!0); // true
// console.log(!2); // false (0아닌 숫자를 부정할 경우)

// console.log(!""); // true
// console.log(!"foo") // false (빈 문자열이 아닌 문자를 부정할 경우)


/*
  타입연산자

  1 typeof
  2 instanceof
*/

// var foo = "bar"
// console.log(typeof foo) // string


/*
  조건문

  1 if 조건문
  2 switch 조건문
  3 ? (삼항연산자) 조건문
*/


// if 조건문

// var year = 2023;

// if (year === 2023) {
//   console.log("이번 년도")
// }


// if/else

// var year = 2023;

// if (year === 2023) { // 조건이 참인 경우
//   console.log("이번 년도")
// } else { // 조건이 참이 아닌 경우
//   console.log("이번 년도가 아닙니다")
// }


// if / elseif / else

// var year = 2023;

// if (year === 2022) {
//   console.log("작년")
// } else if (year === 2023) {
//   console.log("이번 년도")
// } else if (year === 2024) {
//   console.log("내년")
// } else {
//   console.log("가까운 년도가 아닙니다")
// }


/*
  switch 조건문
  엄격 동등 연산을 수행한다
*/

// var year = 2023;

// switch (year) {
//   case 2022:
//     console.log("작년")
//     break;

//   case 2023:
//     console.log("이번 년도")
//     break;

//   case 2024:
//     console.log("내년")
//     break;

//   default:
//     console.log("가까운 년도가 아닙니다")
// }


/*
  ? (삼항연산자) 조건문

  조건 ? 값1 : 값2

  조건이 참이면 값1을 리턴한다
  조건이 거짓이면 값2를 리턴한다
*/


// var year = 2023;

// var r = year === 2023 ? "이번 년도" : "이번 년도가 아닙니다"

// console.log(r) // 이번 년도



// Q. 성인이면 "성인입니다" 성인이 아니면 "성인이 아닙니다"를 출력하는
// 조건문을 만들어보세요

// var age = 20;

// // 1 if/else 조건문

// if (age >= 18) {
//   console.log("성인입니다")
// } else {
//   console.log("성인이 아닙니다")
// }

// // 2 삼항연산자 조건문

// var r = age >= 18 ? "성인입니다" : "성인이 아닙니다";

// console.log(r)



/*
  반복문

  1 for반복문
  2 while 반복문
*/


// for (변수초기값; 수행조건; 변수값증가)
// for (var i=1; i<=10; i++) {
//   console.log(i + "번 실행되었습니다")
// }


// var sum = 0;

// for (var i=1; i<=10; i++) {
//   sum += i;
// }

// console.log(sum) // 1부터 10까지의 합


// while 반복문


// var i = 1; // 변수초기화

// while (i <= 10) { // while (수행조건)
//   console.log(i + "번 실행되었습니다");

//   i++; // 변수값증가
// }


// Q. 1, 1/2, 1/3 ... 1/10 까지의 합을 반복문을 사용해서 구해보세요

// var sum = 0;

// for (var i=1; i<=10; i++) {
//   sum += (1 / i);
// }

// console.log(sum);



/*
  변수
  값을 저장하는 컨테이너

  1 기본 사용
  2 변수의 범위
*/


// 기본 사용

// var foo = "bar"; // 변수초기화

// console.log(foo); // bar


// var foo = "bar"; // 변수초기화

// foo = "baz" // 재정의 가능

// console.log(foo) // baz


// var foo; // 선언

// // foo는 undefined이다

// foo = "bar" // 정의

// console.log(foo)



/*
  변수의 범위

  1 전역 변수 (global variables)
  2 지역 변수 (local variables)
*/



// 전역 변수
// 함수밖에서 선언된 변수. 소스코드 어디에서든지 접근 가능하다

// var varInGlobal = true;

// console.log(varInGlobal); // true


// 지역 변수
// 함수 내에서 선언된 변수. 해당 함수 내에서만 접근 가능하다

// function f() {
//   var varInFunction = true;
// }

// console.log(varInFunction); // 에러


/*
  함수
  호출될때에만 실행되는 코드

  1 함수 선언
  2 Hoisting
  3 매개변수와 인자
  4 return
  5 callback
*/


/*
  함수 선언 

  1 함수 선언식
  2 함수 표현식
*/

// 함수 선언식

// function f() {
//   console.log("foo");
// }

// f(); // 함수 호출


// 함수 표현식
// 변수에 익명함수를 할당한다
// var f = function () {
//   console.log("foo")
// }

// f() // 함수 호출


// Hoisting (게양)
// 함수 선언이 호출시점보다 위로 올라간다

// f();

// function f() {
//   console.log("foo")
// }


// f() // f is not a function

// var f = function () {
//   console.log("foo")
// }


/*
  매개변수와 인자 (parameter and argument)
*/


// function add(x, y) { // x,y: 매개변수 (인자를 치환한 변수)
//   console.log(x + y);
// }

// add(1, 2); // 1,2: 인자 (함수에 실제로 전달되는 값)


/*
  return
*/

// function add(x, y) {
//   return x + y; // 함수가 결과를 반환한다
// }

// var r = add(1, 2);

// console.log(r) // 3


/*
  callback
  함수 인자
*/


// function f(callback) {
//   var r = callback();
//   console.log(r)
// }

// function cb() {
//   return "foo"
// }

// f(cb); // foo


// 콜백 예시

// function getTime() {
//   // 현재시간을 리턴한다
//   var time = new Date().toLocaleTimeString();

//   console.log(time);
// }

// // setInterval(callback, ms)
// // ms마다 callback을 실행한다
// // 1000ms = 1s
// setInterval(getTime, 1000)


// Q. 나이를 전달받아서 성인이면 "성인입니다" 성인이 아니면 "성인이 아닙니다"
// 를 출력하는 함수를 만들어보세요


// function isAdult(age) {

//   if (typeof age !== "number") {
//     console.log("인자는 숫자만 가능합니다");
//     return; // 함수의 실행을 중단시킨다
//   }

//   if (age >= 18) {
//     console.log("성인입니다")
//   } else {
//     console.log("성인이 아닙니다")
//   }
// }

// // isAdult(20)

// isAdult(null)


/*
  배열 (Array)
  한개 이상의 값을 가지는 데이터 타입

  1 배열의 아이템에 접근하기
  2 배열의 메서드
  3 배열 순회하기
*/


// var arr = ["foo", "bar", "baz"]
// 문자열 배열

// console.log(arr[0]) // foo
// console.log(arr[1]) // bar
// console.log(arr[2]) // baz

// // 아이템의 갯수
// console.log(arr.length) // 3


// 배열의 값 변경하기

// arr[2] = "BAZ"

// console.log(arr[2]) // BAZ


// 배열에 값 추가하기

// arr[3] = "lol";

// console.log(arr[3]); // lol

// console.log(arr.length) // 4


/*
  배열의 메서드
  배열에 특정한 작업을 수행한다

    Array.push()
    Array.pop()
    Array.concat()
    Array.sort()
*/


// push()

// var arr = ["foo", "bar"];

// // push(newItem1, newItem2, ...)
// // 배열에 새로운 아이템을 가장 마지막에 추가한다
// arr.push("baz");

// console.log(arr); // foo, bar, baz


// pop()

// var arr = ["foo", "bar", "baz"];

// // 가장 마지막의 아이템을 제거한다
// arr.pop();

// console.log(arr) // foo, bar


// concat()

// var arr1 = ["foo", "bar"];
// var arr2 = ["baz", "lol"];

// // Array1.concat(Array2, Array3, ...)
// // Array1에 뒤에 배열을 연결(concatenate)한다
// var r = arr1.concat(arr2);

// console.log(r) // foo, bar, baz, lol


/*
  배열 순회하기

  배열에 특정한 작업을 수행한다
*/


// var arr = ["foo", "bar", "baz"];

// // 배열의 아이템에 특정한 작업을 수행한다
// for (var i=0; i<arr.length; i++) {
//   // i변수가 index로 사용되었다
//   console.log(arr[i].toUpperCase());
// }

// FOO
// BAR
// BAZ


// 필터링 작업
// var arr = ["foo", "bar", "baz"];

// for (var i=0; i<arr.length; i++) {
//   if (arr[i][0] === "b") {
//     console.log(arr[i])
//   }
// }

// bar
// baz


// Q. 배열에 새로운 아이템을 추가해보세요 (배열의 메서드 사용)

// var beers = ["Guinness", "Heineken"];
// var americanBeer = "Budwiser";

// // 맥주리스트에 미국 맥주 추가

// beers.push(americanBeer);

// console.log(beers) // Guinness, Heineken, Budwiser


// // Q. 배열을 순회해서 성인의 나이만 출력해보세요
// var ages = [12, 19, 23, 30]


// for (var i=0; i<ages.length; i++) {
//   var age = ages[i];

//   if (age >= 18) {
//     console.log(age);
//   }
// }


/*
  객체 (Object)
  데이터와 함수의 집합
*/


// var cat = {
//   // 속성 (property): 객체가 가진 데이터
//   name: "치즈",
//   home: null,
//   // 메서드 (method): 속성의 값이 함수인 것
//   sound: function () {
//     return "야옹"
//   }
// }

// // 객체의 속성에 접근하기
// // console.log(cat.name); // 치즈
// // console.log(cat["name"]) // 치즈
// // console.log(cat.color) // undefined (정의되지 않은 속성에 접근)
// // console.log(cat.sound()) // 야옹


// // 속성 추가하기
// cat.age = 2;
// // console.log(cat.age) // 2

// // 속성 수정하기
// cat.home = "삼산동"
// // console.log(cat.home); // 삼산동에 주인이 치즈를 입양했다

// // 속성 삭제
// delete cat.age;

// console.log(cat.age); // undefined


// Q. 하이네켄의 원산지를 출력해보세요

// var beers = [
//   { name: 'Guinness', origin: 'Ireland'},
//   { name: 'Heineken', origin: 'Netherlands'},
//   { name: 'Budwiser', origin: 'USA'},
// ]

// // 단 한줄로
// console.log(beers[1].origin) // 네덜란드

// // Q. 배열 순회를 통해 맥주의 이름만 대문자로 출력해보세요

// for (var i=0; i<beers.length; i++) {
//   console.log(beers[i].name.toUpperCase())
// }


/*
  클래스 
  객체 생성을 위한 템플릿 (틀)

  1 클래스와 인스턴스
  2 static 속성과 static 메서드
  3 내장된 클래스
  4 리터럴 표기법
*/


// 1 클래스와 인스턴스

// class Cat {
//   // 생성자 함수
//   // 인스턴스의 속성을 설정하기 위해 사용된다
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // 클래스 멤버 (속성)
//   home = null;

//   // 클래스 멤버 (메서드)
//   sound() {
//     return "야옹"
//   }
// }

// // Cat의 인스턴스
// // Cat클래스로부터 생성된 객체
// var cat = new Cat("치즈", 2);

// // console.log(cat);
// // console.log(cat instanceof Cat) // true


// // cat의 속성에 접근
// console.log(cat.name) // 치즈
// console.log(cat.age) // 2
// console.log(cat.home) // null (상속)
// console.log(cat.sound()) // 야옹 (상속)

// // 상속: 코드의 재사용


/*
  2 static 속성과 static 메서드

  인스턴스와 관련된 유용한 기능을 제공한다
*/

// class Cat {
  
//   // ... (생성자 함수, 클래스 멤버 등)

//   // static 속성
//   static family = "고양이과";

//   // static 메서드
//   static isAdult(age) {
//     if (age < 1) {
//       return "아기고양이"
//     } else {
//       return "성체고양이"
//     }
//   }
// }

// // 클래스 자체가 호출한다
// console.log(Cat.family) // 고양이과
// console.log(Cat.isAdult(2)) // 성체고양이


// // 자바스크립트에 내장된 클래스의 static 속성
// var pi = Math.PI;

// console.log(pi); // 3.14...


/*
  자바스크립트에 내장된 클래스

  1 문자처리: String
  2 숫자 및 날짜: Number, Math, Date
  3 인덱스 컬렉션: Array
  4 에러: SyntaxError, ReferenceError 등
  5 기타: Promise, JSON, Object
*/


/*
  4 리터럴 표기법
*/

// var foo = new String("bar"); // String의 인스턴스 생성
// console.log(foo); // String: 'bar'

// var foo = "bar"; // String의 인스턴스 생성
// console.log(foo) // bar


// var year = new Number(2023); // Number의 인스턴스 생성
// console.log(year) // Number: 2023

// var year = 2023; // 리터럴 표기법
// console.log(year)


// 객체 ? 문자열 ?
// var foo = "bar"

// 객체의 일반적인 모습 { key: value }

// 자바스크립트에서는 모든 것이 객체

// console.log(foo.toUpperCase()) // 메서드 호출


/*
  Q. 다음의 조건에 맞는 클래스를 정의하고 인스턴스를 만들어보세요

  클래스 이름: Beer

  인스턴스의 속성: name, origin

  클래스 멤버 (속성)
  history: 기원전 3000년

  클래스 멤버 (메서드)
  recipe(제조법): 밀, 홉, 효모, 물을 섞어 만듭니다

  static 속성
  caution(경고): 지나친 음주는 돈이 많이 듭니다
*/


// class Beer {
//   constructor(name, origin) {
//     this.name = name;
//     this.origin = origin;
//   }

//   history = "기원전 3000년"

//   recipe() {
//     return "밀, 홉, 효모, 물을 섞어 만듭니다"
//   }

//   static caution = "지나친 음주는 돈이 많이 듭니다"
// }


// // Beer의 인스턴스
// var irishBeer = new Beer("Guinness", "Ireland");
// var dutchBeer = new Beer("Heineken", "Netherlands");

// console.log(irishBeer)
// console.log(dutchBeer)

// console.log(Beer.caution) // static 속성


/*
  에러와 에러처리

  1 에러 개념
  2 에러 처리
  3 에러 종류
  4 커스텀 에러
*/


// 1 에러 개념
// 프로그램의 실행을 중단시킨다
// 에러는 반드시 처리되어야 한다

// console.log(foo) // ReferenceError: foo is not defined


// 2 에러처리


// try { // 여기서 코드를 작성한다

//   // ...

//   console.log(foo)

// } catch (error) { // 에러 처리
//   console.error(error);
// }



/*
  에러의 종류

  1 SyntaxError
  2 ReferenceError
  3 TypeError
  4 RangeError
  5 URIError
*/


// SyntaxError
// 문법 에러

// try {

//   console.log(2023)) // SyntaxError: Unexpected token ')'

//   // try/catch 구문은 SyntaxError를 처리할 수 없다
//   // SyntaxError는 컴파일 에러를 발생시킨다

// } catch (error) {
//   console.error(error)
// }


// ReferenceError
// 존재하지 않는 변수를 참조했을 때 발생한다

// try {

//   console.log(foo) // foo is not defined

// } catch (error) {
//   console.error(error);
// }


// TypeError
// 변수나 인자가 유효한 타입이 아닐 때 발생한다

// try {

//   // setInterval(callback, ms): ms마다 callback을 실행하는 함수
//   setInterval(null, 1000); // The "callback" argument must be of type functon.
//   // Received null

// } catch (error) {
//   console.error(error);
// }



// RangeError
// 값이 허용된 범위를 벗어났을 때 발생한다

// try {
//   var pi = Math.PI;

//   console.log(pi.toPrecision(200)) // toPrecision() argument must be between 1 and 100

// } catch (error) {
//   console.error(error);
// }


// URIError
// encodeURI 또는 decodeURI 함수가 유효하지 않은 인자를 전달받을 때 발생한다


// try {

//   // URI에 포함될 수 있는 문자: ASCII 포맷 (128개)

//   decodeURI("%") // URI malformed

// } catch (error) {
//   console.error(error);
// }


// 4 커스텀 에러
// 필요할 경우 에러를 발생시킨다
// 로그인 등

// try {
//   var age = 15;

//   console.log("학생:", "아저씨 기네스 한병 주세요");

//   if (age < 18) {
//     // 커스텀 에러를 던진다
//     throw "미성년자는 술을 살 수 없습니다"
//   }

//   // 아래 코드는 실행되지 않는다
//   console.log("직원:", "네 여기있습니다");

// } catch (error) {
//   console.error(error)
// }



/*
  비동기 작업
  블로킹(blocking)을 방지하기 위해 사용된다
  예) 서버에 데이터를 요청하는 작업

  1 동기 작업
  2 비동기 작업
*/


// 1 동기 작업

// function f() {
//   console.log("foo")
// }

// // 코드가 순서대로 실행된다

// f() // foo
// console.log("bar") // bar


// 2 비동기 작업
// 서버에 데이터를 요청하는 예시

// 빠른 작업부터 먼저 실행된다

// 서버에 데이터를 요청하는 함수
// function fetchData(callback) {
//   var data = { foo: "bar" };

//   setTimeout(function () {
//     callback(data)
//   }, 1000)
// }


// // 서버가 응답하는데 1초가 걸린다고 가정
// fetchData(function (data) {
//   console.log("서버로부터 받은 데이터:", data);
// })

// console.log("다음 작업");


/*
  JSON (JavaScript Object Notation)
  자바스크립트 객체를 저장하거나 전송하기 위한 포맷

  1 객체와 JSON
  2 JSON.stringify()
  3 JSON.parse()
*/


// 객체와 JSON

// var o = { foo: "bar" }; // 객체 
// var json = '{ "foo": "bar" }'; // JSON

// console.log(o)
// console.log(typeof o); // object

// console.log(json)
// console.log(typeof json) // string


// JSON.stringify()
// 객체를 JSON으로 변환한다

// var o = { foo: "bar" };
// var json = JSON.stringify(o);

// console.log(json) // JSON
// console.log(typeof json) // string


// JSON.parse()
// JSON을 객체로 변환한다

// var json = '{ "foo": "bar" }';
// var o = JSON.parse(json);

// console.log(o) 
// console.log(typeof o) // object




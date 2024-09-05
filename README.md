## typescript 2주차 강의 내용
npx 명령어로 프로젝트를 생성했다. styled-components를 설치하고 react-router-dom을 설치해서 사용했다. react-router-dom을 사용하면 페이지를 사용자의 요청 마다 다른 컴포넌트를 보여줄 수 있었다. 백 관점에서 보면 서버에서 엔드 포인트를 지정 해서 화면을 보여주는 것처럼 작동된다. 하지만, 서버 없이 react-router-dom을 사용하면 바로 처리가 된다는게 신기했다.


## 2024 typescript 1주차 강의 내용

### typescript을 왜 사용하는가?
자바스크립트는 쓰기 쉬운 언어이지만, 변수에 원하지 않는 값들이 들어가기도 하고 어떤 타입이 들어가는지 유추하기가 힘들다. 다른 타입이 들어갔을 때 에러가 나는지, 안나는지 확인이 어렵다.
그렇기 때문에 타입스크립트는 자바스크립트에 타입을 추가해서 데이터들의 타입을 지정해서 사용하는 것이다.

### javascript let vs const
```js
let letData = "";
letData = "overwrite"; // let은 덮어쓰기가 가능하다.

const constData = "";
constData = "overwrite"; // Error: const는 덮어쓰기가 불가능하다. (덮어쓰기 제한)
```

### typescript 맛보기
```ts
const num1 = 3
const num2:number = 3

const firstName:string = "kim"
const isDone:boolean = true

function addFunc1(a:number, b:number):number {
    return a+b
}

const addFunc2 = (a:number,b:number):number => a+b

// 타입 생성(custom type)
type Student = {
    id: string,
    name: string,
    department: string,
}

const student: Student = {
    id : "202020",
    name : "kim",
    department: "컴퓨터정보학부",
}

const kim : Student = {
    id : "202020",
    name : "kim",
    department : "컴퓨터정보학부"
}

// 타입 별칭 추가 (type alias)
type ProductId = string
type ProductNumber = number
type CreatedProduct = boolean
type ProductCategory = "IaaS" | "SaaS"

const id:ProductId = "2okasd02"
const num:ProductNumber = 203123
const created:CreatedProduct = true
const category:ProductCategory = "SaaS"

type Product = {
    id:ProductId,
    num:ProductNumber,
    category: ProductCategory
    created:CreatedProduct
}

// type union 
// limit: type, shape, category (=java enum class와 유사한거같다.)
type Fruit = "apple" | "banana" | "watermelon" | "cherry"
const myFruit:Fruit = "apple"
```
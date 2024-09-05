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
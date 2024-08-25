// add 
function add(a,b){
    console.log(a+b)
    return a+b
}

// subtract
function minus(a,b){
    console.log(a-b)
    return a-b
}

// divide
function divide(a,b){
    console.log(a/b)
    return a/b
}

// multiply
function mult(a,b){
    console.log(a*b)
    return a*b
}

// num1 var
// num2 var
// operator var

let num1 = ""
let num2 = ""
let op = undefined
let sol = undefined

function operate(num1,op,num2){
    num1 = Number(num1)
    num2 = Number(num2)
    if (op=='+'){
        let sol = add(num1,num2)
        disp.textContent = sol
        return sol
       
    }
    if (op=='-'){
        let sol = minus(num1,num2)
        disp.textContent = sol
        return sol 
    }
    if (op=='/'){
        let sol = divide(num1,num2)
        // round 
        sol = sol.toFixed(2)
        disp.textContent = sol 
        return sol 
    }
    if (op=='x'){
        let sol = mult(num1,num2)
        disp.textContent = sol
        return sol 
    }
}


const container = document.querySelector('#container')
// display
const disp = document.createElement('div')
container.append(disp)

// operator buttons
const plus = document.createElement('button')
plus.textContent = '+'
const subtract = document.createElement('button')
subtract.textContent = '-'
const divi = document.createElement('button')
divi.textContent = '/'
const multi = document.createElement('button')
multi.textContent = 'x'
// clear/quals button
const c = document.createElement('button')
c.textContent = 'Clear'
const eq = document.createElement('button')
eq.textContent = 'Equals'

// array of operators for loop
let opArr = [plus,subtract,divi,multi,c,eq]
// adds operator buttons
opArr.map(item=>{
    item.addEventListener('click',()=>{
        disp.textContent=item.textContent
        if (item.textContent == '+'|| item.textContent == '-'|| item.textContent == '/' || item.textContent=='x'){
            op = item.textContent
        }
    
        // logic to amend operator for clear button
        if (item.textContent =='Clear'){
            disp.textContent = ''
            // reset num1 and num2 and operator
            num1 = ''
            num2 =''
            op = undefined
            sol = undefined
        }
        // amend operator for equals  and execute operatefunction
        if (item.textContent =='Equals'){
            if (sol){
                // if operator button is pressed again and is truthy
                if (op){
                    sol = operate(sol,op,num2)
                    sol = undefined
                }
            } else {
                    // execute operate function
                    sol = operate(num1,op,num2)
                    // if sol is truthy (operate function has run) and NOT undefined
                    num1 = ''
                    num2 =''
                    op = undefined
            }   
            
        }
    })
    container.append(item)
})
// adds number buttons and even listeners fo each one
for (let x =0;x<10;x++){
    // ccreates buttons
    let elem = document.createElement('button')
    elem.textContent = x
    // add click 
    elem.addEventListener('click',()=>{
        // if op has has a value, then assign num2 (truthy)
        // and displays number within display DIV
        // concatnates for display
        if (op){
            disp.textContent=""
            num2 = num2.concat(x)
            disp.textContent = num2
        } else{
            num1 = num1.concat(x)
            disp.textContent = num1
        }
        
        
    })
    container.append(elem)
}




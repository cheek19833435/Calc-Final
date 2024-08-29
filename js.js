// add 
function add(arr){
    return arr
        .reduce((first,last)=>first+=last)
}

// subtract
function minus(arr){
    return arr
     .reduce((first,last)=>(first-=last))
}  

// divide
function divide(arr){
    return arr
     .reduce((first,last)=>(last/first))
}

// multiply
function mult(a,b){
    console.log(a*b)
    return a*b
}

// variables
num1 = undefined
num2 = undefined
let op = undefined
let op2 = undefined
let sol = undefined
let prevSol = undefined
let display = ''
let solArr = []


function operate(arr,op,prevSol){
    // loops through each item and converts to Number
    arr.forEach((item,i)=>{
        arr[i] = Number(item)
    })
    
    console.table(arr)
    // console.log(prevSol)
    console.log(op)
    
    // if prevSol has a truthy value or == 0
    if (prevSol||prevSol==0){
        // add prevSol to solArray
        arr.push(prevSol)
        // remove first value in array before going to operations functions
        // starting at index 0 delete 1 element 
        // splice will do this in place and affect the original array
        arr.splice(0,1)
        // swap array so subtract works
        let temp = arr[0]
        arr[0] = arr[1]
        arr[1] = temp
        console.table(arr)
    }

    if (op=='+'){
        let sol = add(arr)
        disp.textContent = sol
        return sol
       
    }
    if (op=='-'){
        let sol = minus(arr)
        // sol = Math.abs(sol)
        disp.textContent = sol
        return sol 
    }
    if (op=='/'){
        let sol = divide(arr)
        // round 
        sol = sol.toFixed(2)
        disp.textContent = sol 
        return sol 
    }
    if (op=='x'){
        let sol = mult(arr)
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
        // || item.textContent =='Equals'
        if (item.textContent == '+'|| item.textContent == '-'|| item.textContent == '/' || item.textContent=='x' ){
            // storing operators so it doesn't get overwritten
            if (op==undefined){
                op = item.textContent
                disp.textContent = op
            } else {
                op2 =item.textContent
            }
                
            // if num1 is undefined, store display in num1 else num2
            if (num1==undefined){
                num1 = display
                solArr.push(num1)
            } else {
                num2 = display
                solArr.push(num2)
            }
            // amend operator for equals  and execute operatefunction
            if (sol||sol ==0){
                // retain solution under variable prev sol
                prevSol = sol
                
                // if operator button is pressed again and is truthy
                if (op){
                    solArr.push(display)
                    sol = operate(solArr,op,prevSol)
                    // resets solarr
                    solArr = []
                    op = undefined
                }
            } else {
                    // start operate function only when both num1 
                    // and num2 are filled
                    if (num1 && num2){
                        console.log(num1)
                        console.log(num2)
                        sol = operate(solArr,op,prevSol)
                        // resets solarray and operator
                        solArr=[]
                        op = undefined
                        prevSol=undefined
                    }     
            }
            // clears display
            display =''
        
        }    
        // logic to amend operator for clear button
        if (item.textContent =='Clear'){
            disp.textContent = ''
            display=''
            // reset solArray
            solArr = []
            op = undefined
            sol = undefined
            prevSol = undefined
            num1 = undefined
            num2 = undefined
        }  
        
    })
    container.append(item)
})
// adds number buttons and even listeners fo each one
for (let x =0;x<10;x++){
    // ccreates buttons
    let elem = document.createElement('button')
    // add digits class to buttons
    elem.classList.add('digits')
    // assign number to buttons
    elem.textContent = x
    // add click 
    elem.addEventListener('click',()=>{
            // clears display variable for next input
            // shows number clicked in display variable
            display = display.concat(x)
            disp.textContent = display            
        })
    
    container.append(elem)
}

           





        // if op has has a value, then assign num2 (truthy)
        // and displays number within display DIV
        // concatnates for display
        // if (op){
        //     disp.textContent=""
        //     num2 = num2.concat(x)
        //     disp.textContent = num2
        // } else{
        //     num1 = num1.concat(x)
        //     disp.textContent = num1
        // }
        
    
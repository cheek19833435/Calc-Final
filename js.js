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
     .reduce((first,last)=>(first/last))
}

// multiply
function mult(arr){
    return arr
    .reduce((first,last)=>(first * last))
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
        // console.log(item)
    })

    // if prevSol has a truthy value or == 0
    if (prevSol||prevSol==0){
        // add prevSol to solArray as a number
        arr.push(Number(prevSol))
            // only splices if more than 2 items in array
        if (arr.length>2){
            // remove first value in array before going to operations functions
            // starting at index 0 delete 1 element 
            // splice will do this in place and affect the original array
            arr.splice(0,1)
            // swap array so subtract works
            let temp = arr[0]
            arr[0] = arr[1]
            arr[1] = temp
            // console.table(arr)
        }
    }

    if (op=='+'){
        let sol = add(arr)
        sol = parseFloat(sol)
        // console.log(typeof(sol))
        // console.table(sol)
        disp.textContent = sol
        return sol
       
    }
    if (op=='-'){
        let sol = minus(arr)
        sol = parseFloat(sol)
        disp.textContent = sol
        return sol 
    }
    if (op=='/'){
        let sol = divide(arr)
        sol = parseFloat(sol)
        // round 
        sol = sol.toFixed(2)
        disp.textContent = parseFloat(sol)
        return sol 
    }
    if (op=='x'){
        let sol = mult(arr)
        sol = parseFloat(sol)
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
        if (item.textContent == '+'|| item.textContent == '-'|| item.textContent == '/' 
            || item.textContent=='x' || item.textContent == 'Equals' ){
            // storing operators so it doesn't get overwritten
            if (op==undefined){
                op = item.textContent
                disp.textContent = op
            } else {
                op2 =item.textContent     
            }
            if (disp.textContent=='Infinity'){
                disp.textContent = 'ERR'
            }
            
                
            // if num1 is undefined, store display in num1 else num2
            if (num1==undefined && display !=''){
                num1 = display
                solArr.push(num1)
            } else if (num1 && display !='') {
                num2 = display
                solArr.push(num2)
            }
            // amend operator for equals  and execute operatefunction
            if (sol||sol ==0){
                // retain solution under variable prev sol
                prevSol = sol
                
                // if operator button is pressed again and is truthy
                if (op && display !=""){
                    // if display = '' push 0 
                    solArr.push(display)
                    // console.table(solArr)
                    sol = operate(solArr,op,prevSol)
                    if (sol=='Infinity'){
                        disp.textContent = 'ERR'
                        sol = undefined
                        sol = undefined
                        solArr = []
                        op = undefined
                        prevSol = undefined
                        num1 = undefined
                        num2 = undefined
                    }
                    // resets solarr
                    solArr = []
                    op = undefined
                } 
                
            } else {
                    // start operate function only when both num1 
                    // and num2 are filled
                    if (num1 && num2){
                        sol = operate(solArr,op,prevSol)
                        if (sol=='Infinity'){
                            disp.textContent = 'ERR'
                            sol = undefined
                            solArr = []
                            op = undefined
                            prevSol = undefined
                            num1 = undefined
                            num2 = undefined
                        }
                        
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
        // If equals is pressed after solution is shown - show current solution
        // and resets
        if (disp.textContent =='Equals'){
            disp.textContent = sol
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




           



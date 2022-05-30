console.log('yooooo')
console.log('brother')
const newLocal = "Hi from vscode"
console.log(newLocal)
var z = 300


x = 50
console.log(x)
console.log(z)

var z = 1000
console.log(typeof(z))
var z = 49.59
console.log(typeof(z))

add()
sqrt()
subtract()

function add(){
    if(typeof document!=='undefined'){
        let x=6
        let y=10
        console.log(x+y)
        console.log(6+10)
        document.write(x+y)
    }
}

function sqrt(){
    if(typeof document!=='undefined'){
        let a = 9
        document.write(Math.sqrt(a))
    }
}

function subtract(){
    if(typeof document!=='undefined'){
        let m=10
        let n=8
        document.write(m-n)
    }
}
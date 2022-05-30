function zoom(){
    document.getElementById('tdydate').style.fontSize='30px';
}

function Highlight(){
    document.getElementById('tdydate').style.backgroundColor='yellow';
}

function foc(){
    document.write('Why are you here?');
}

function palert(){
    document.write('Paragraph is clicked');
}

function showSection(){
    window.alert(document.getElementById('secid').innerHTML);
}

function addUserData(){
    let x = parseInt(document.getElementById('xvalue').value);
    let y = parseInt(document.getElementById('yvalue').value);
    window.getElementById('sumval').value = (x+y);
}

function FindUserPL(){
    let c = parseInt(document.getElementById('cp').value);
    let s = parseInt(document.getElementById('sp').value);
    if(c>s){
        document.getElementById('pr').value = 0;
        document.getElementById('lo').value = (c-s);
        document.getElementById('per').value = (c-s)/c;
    }else{
        document.getElementById('pr').value = (s-c);
        document.getElementById('lo').value = 0;
        document.getElementById('per').value = (s-c)/c;
    }
}

function FindUserDiscount(){
    for(let i=0; i<3; i++){
        console.log("hi")
        let grnd = prompt("Enter the ground value","Enter any number")
        if(grnd>0){
            document.getElementById('square_feet').value = grnd*2400
        }else{
            window.alert("Invalid Data")
        }
    }
}
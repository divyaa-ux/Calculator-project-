let s = document.getElementById("screen");
let h = document.getElementById("history");

function add(v){
  s.value += v;
}

function clr(){
  s.value = "";
}

function del(){
  s.value = s.value.slice(0,-1);
}

function ans(){
  try{
    let exp = s.value;
    let result = eval(exp);

    h.innerHTML += `<p>${exp} = ${result}</p>`;

    s.value = result;
  }
  catch{
    s.value = "Error";
  }
}

function log(){
  try{
    let num = eval(s.value);
    let result = Math.log10(num);

    h.innerHTML += `<p>log(${num}) = ${result}</p>`;

    s.value = result;
  }
  catch{
    s.value = "Error";
  }
}

function checarInputs(inputs){

  let preenchido = true

  inputs.forEach((item) =>{
    if(item.value === ''){
      preenchido = false
    }
  })

  return preenchido
}

let inputs = document.querySelectorAll('input')
let btn = document.querySelector('#btn')

inputs.forEach((item) =>{
  item.addEventListener("keyup",()=>{
    if(checarInputs(inputs)){
      btn.disabled = false
      btn.classList.add('enabled')
    }else{
      btn.disabled = true
      btn.classList.remove('enabled')
    }
  })
})
const btnBurg = document.querySelectorAll('.btn-burger span')
const contBurg = document.querySelector('.container-burger')
console.dir(btnBurg)
btnBurg.forEach(el=>{
    el.addEventListener('click', ()=>{

        contBurg.classList.toggle('open') 
    
    console.dir(contBurg)
})
})
const btnBurg = document.querySelectorAll('.btn-burger span')
const contBurg = document.querySelector('.container-burger')
const mainTitle = document.querySelector('.favorite-animals')
const guests= document.querySelectorAll('.guest')
const sec_5 = document.querySelector('.section5')
const body = document.querySelector('body')
const arrGuest = ['/../../assets/images/Testimonials/frederika.jpg', '/../../assets/images/Testimonials/mila.jpg', '/../../assets/images/Testimonials/mixail.jpg','/../../assets/images/Testimonials/oscar.jpg']
const conteinerTestimonials = document.querySelector('.cont-testimonials')
const btnRange = document.querySelector('#range1')
const leftBtn = document.querySelector('.pointer-left')
const rightBtn = document.querySelector('.pointer-right')
const foto1 = document.querySelector('.fotos-slider1')
const foto2 = document.querySelector('.fotos-slider2')
const slider = document.querySelector('.slider')
const fotoArr = ['../../assets/images/animals/eagles.jpg', '../../assets/images/animals/gorillas.jpg','../../assets/images/animals/lazybones.jpg','../../assets/images/animals/leo.jpg', '../../assets/images/animals/slider-panda.jpg']
let foto, pos =0;

console.log(foto1, foto2, slider)


guests.forEach((el,i) =>{
    el.addEventListener('click', ()=>{
        modalView(i)
    })
})
function modalView(i){
    console.log('!')
    const mod = document.createElement('div')
    sec_5.prepend(mod)
    mod.scrollIntoView()
    mod.classList.add('openMod')
    btnCross(mod)
    const guestCard = document.createElement('div')
    mod.prepend(guestCard)
    guestCard.classList.add('guestCard')
    guestCard.style.backgroundImage = `url(${arrGuest[i]})`
    body.classList.add('scrollStop')
    body.addEventListener('touchmove', (e)=>{
        e.preventDefault()
    }, false)


    // mod.scrollIntoView()
}
function btnCross(mod){
    const btnCross = document.createElement('div')
    mod.append(btnCross)
    btnCross.classList.add('cross')
    console.dir(btnCross)
    btnCross.addEventListener('click', (e)=>{
        mod.classList.add('invis')
        // body.classList.remove('scrollStop')
        setTimeout(()=>{
            mod.remove()
        },500)

    })
    

}
btnBurg.forEach(el=>{
    el.addEventListener('click', ()=>{
        contBurg.classList.toggle('open')
        mainTitle.classList.toggle('invisible')
    console.dir(contBurg)
    })
})

// btnRange.addEventListener('change',()=>{
//     console.log(btnRange.value)
// })
btnRange.addEventListener('input',()=>{
    conteinerTestimonials.style.position = 'relative'
    if(conteinerTestimonials.clientWidth !== 1000){
        conteinerTestimonials.style.left = `-${btnRange.value*3}%`
    } else{
        let a = btnRange.value
        if(btnRange.value > 64){
             a = 65
        }
        conteinerTestimonials.style.left = `-${a*3}%`
    }    
    
})
// Slider section 3 main page
leftBtn.addEventListener('click', ()=>{
    let a = 'left'
    console.log('!')
        sliderCarousel(a)
})
rightBtn.addEventListener('click', ()=>{
    let a = 'right'
    console.log('!')
        sliderCarousel(a)
})

function sliderCarousel(a){   
   
    // if(!slider.classList.contains('.sliderRel')){
    //     slider.classList.add('.sliderRel')
    // }
    
        if(a == 'left'){
            console.log('@')
        for(let i = 0; i <=2; i++){
            console.log('#')
            foto = document.createElement('img')
            foto.src = fotoArr[i]
            foto1.append(foto) 
            
        } 
        for(let k = 0; k <=2; k++){
            console.log('#')
            foto = document.createElement('img')
            foto.src = fotoArr[k+2]
            foto2.append(foto) 
            
        }     
        pos -= 1143
        foto1.style.transform =`translateX(${pos}px)`
        foto1.style.transition = 'ease 0.4s'
        foto2.style.transform =`translateX(${pos}px)`
        foto2.style.transition = 'ease 0.4s'
    }
    if(a == 'right'){
        console.log('@')
    for(let i = 0; i <=2; i++){
        console.log('#')
        foto = document.createElement('img')
        foto.src = fotoArr[i]
        foto1.prepend(foto) 
        
    } 
    for(let k = 0; k <=2; k++){
        console.log('#')
        foto = document.createElement('img')
        foto.src = fotoArr[k+2]
        foto2.prepend(foto) 
        
    }     
    
    pos += 1143
    foto1.style.transform =`translateX(${pos}px)`
    foto1.style.transition = 'ease 0.4s'
    foto2.style.transform =`translateX(${pos}px)`
    foto2.style.transition = 'ease 0.4s'
    
}
console.log(pos)
}
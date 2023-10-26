const name=document.getElementById("name")
const surname=document.getElementById("surname")
const telefono=document.getElementById("telefono")
const email=document.getElementById("email")
const formulario= document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let entrar = false 
    let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML =""
    if(name.value.length <3){
        warnings += `El Nombre no es válido <br>`
        entrar = true
    }
    if(surname.value.length <3){
        warnings += `El Apellido no es válido <br>`
        entrar = true
    }
    if(telefono.value.length <10){
        warnings += `El Número de Teléfono no es válido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El Email no es válido <br>`
        entrar = true
    }
    if (entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Formulario Enviado"
    }
})

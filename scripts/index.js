const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  const inputs = document.getElementsByTagName('input');
  let obj ={}
  for (const input of inputs) {
    if(['password', 'email'].includes(input.type)){
      obj[input.name] = input.value;
    }else if(input.type == 'radio'){
      // ?. null collation, || evalúa por la condición anterior, si da error, retorna false. 
      obj[input.name] = document.querySelector('[name=legalAge]:checked')?.value === 'true' || false;
    }else{
      obj[input.name] = input.checked;
    }
  }
  console.log(obj);
  /*
  for(const key in obj){
    console.log(key)
  }
  */
  // 2. Obtenemos los datos ingresados en el input de password
  // 3. Obtenemos el valor del input radio
  // 4. Obtenemos el valor del input checkbox
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
});

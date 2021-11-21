// let nome = document.querySelector('#nome')

const botaoEnviar = document.querySelector('.btn')

// function cadastroLogin() {
//   if (nome == false || nome === '') {
//     alert('nome invalido')
//   }
//   return cadastroLogin
// }

// botaoEnviar.addEventListener('click', function () {
//   if (nome == false) {
//     alert('Digite o seu nome')
//   }
// })

botaoEnviar.addEventListener('click', function (event) {
  let form = document.querySelector('#formulario-login')

  const result = document.querySelector('#alert')
  let nome = form.nome.value
  let nomeTrue = nome

  if (nomeTrue == false) {
    result.style.display = 'block'
  } else {
    console.log('Campo nome preenchido com sucesso')
  }

  let sobrenome = form.sobrenome.value
  sobrenome = true

  if (sobrenome == false) {
    result.style.display = 'block'
  } else {
    alert('campo sobrenome preenchido')
  }
})

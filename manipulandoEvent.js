// let nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')

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
  let formNome = document.querySelector('#formulario-login')

  const result = document.querySelector('#alert')
  const nome = formNome.nome.value

  if (nome.value == ' ' || nome.value == null) {
    alert('preencha o campo nome')
  } else {
    console.log(nome.value)
  }
})

$('#formulario-login').submit(function () {
  const nome = $('#nome').val()
  const erro = $('#alert')
  const campoErro = $('#campo-erro')
  const sobrenome = $('#sobrenome').val()
  const emailErro = $('#emailErro')
  // removendo o elemento da tela sempre que tentar submeter o formulário
  erro.addClass('d-none')

  if (nome == '') {
    erro.removeClass('d-none') //removendo a class do css do html
    campoErro.html(' name')
    $('input#nome').trigger('focus')

    return false
  }
  if (sobrenome == '') {
    erro.removeClass('d-none')
    campoErro.html(' sobrenome')
    $('input#sobrenome').trigger('focus')
  }
  // Validação de e-mail

  if (nome.val() && sobrenome.val()) {
    const userinput = $('#email').val()
    const pattern =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (!pattern.test(userinput)) {
      alert('E-mail inválido!! Digite um e-mail correto')
    }
  }

  return false
})

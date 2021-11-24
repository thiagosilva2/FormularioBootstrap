$('#formulario-login').submit(function () {
  const nome = $('#nome').val()
  const erro = $('#alert')
  const campoErro = $('#campo-erro')
  const sobrenome = $('#sobrenome').val()

  // removendo o elemento da tela sempre que tentar submeter o formulário
  erro.addClass('d-none')

  if (nome == '') {
    erro.removeClass('d-none') //removendo a class do css do html
    campoErro.html(' nome')
    $('input#nome').trigger('focus')

    return false
  }
  if (sobrenome == '') {
    erro.removeClass('d-none')
    campoErro.html(' sobrenome')
    $('input#sobrenome').trigger('focus')

    return false
  }

  const senha = $('#senha').val()
  const confirmSenha = $('#confirme_senha').val()

  if (senha == '' && confirmSenha == '') {
    erro.removeClass('d-none')
    campoErro.html(' senha')
  } else if (senha != confirmSenha) {
    erro.removeClass('d-none')
    campoErro.html(' senhas não coincidem')
  } else {
    $('#loader').removeClass('d-none')
  }

  // Validação de e-mail

  const userinput = $('#email').val()
  const pattern =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
  if (!pattern.test(userinput)) {
    erro.removeClass('d-none')
    campoErro.html(' e-mail')
    $('input#email').trigger('focus')

    return false
  }

  return false
})

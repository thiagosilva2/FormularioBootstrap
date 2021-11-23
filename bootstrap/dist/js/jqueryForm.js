$('#formulario-login').submit(function () {
  const nome = $('#nome').val()
  const erro = $('#alert')
  const campoErro = $('#campo-erro')
  const sobrenome = $('#sobrenome').val()
  let testForm = false
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

  const senha = $('#senha').val()
  const senhaNov = $('#senhaNov').val()

  if (senha && senhaNov == '') {
    erro.removeClass('d-none')
    campoErro.html(' senha')
    $('input#senha').trigger('focus')

    return false
  }

  $('#loader').removeClass('d-none')

  return false
})

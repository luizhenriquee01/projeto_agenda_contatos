const form = document.getElementById('form-contatos');

let linhas = '';

form.addEventListener('submit', function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  contaLinhasTabela();
  /* atualizaLinhaFinal();
  calculaLinhasFinal();*/
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById('nome-contato');
  const inputNumeroContato = document.getElementById('numero-contato');

  let linha = `<tr>`;
  linha += `<td>${inputNomeContato.value}<td>`;
  linha += `<td>${inputNumeroContato.value}<td>`;
  linha += `</tr>`;

  linhas += linha;

  inputNomeContato.value = '';
  inputNumeroContato.value = '';
}
function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}
/*
function contaLinhasTabela(id) {
  var tabela = document.getElementById(id);
  var linhas = tabela.getElementsByTagName('tr');


  let somaDasLinhas = 0;

  for (let i = 0; i < linhas.length; i++) {
    somaDasLinhas += linhas[i];
  }

  const soma = somaDasLinhas + linhas.length;

  console.log(soma);

  /*document.getElementById('linhaFinal').innerHTML = soma;
}
*/

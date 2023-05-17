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
function contaLinhasTabela() {
  var tabela = document.getElementById('tabela');
  var linha = tabela.getElementsByTagName('tr').length;
  document.getElementById('numero-linhas').innerHTML = +linha;
}

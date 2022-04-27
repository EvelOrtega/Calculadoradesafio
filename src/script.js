//SEU CODIGO AQUI :D

const iof = 6.38;
const taxaDeJuros = 2.34;
const prazoInput = document.getElementById("parcelas");
const valorDaGarantiaInput = document.getElementById("valor-garantia");
const garantiaInput = document.getElementById("garantia");
const valorDoEmprestimoInput = document.getElementById("valor-emprestimo");

function exibirValorParcela(valorDaParcela) {
  document.getElementById("valor-parcela-exibir").innerHTML = valorDaParcela;
}
function exibirTotalPagar(valorTotalAPagar) {
  document.getElementById("valor-total-pagar-exibir").innerHTML =
    valorTotalAPagar;
}
function exibirTaxaDeJuros() {
  document.getElementById("valor-juros-exibir").innerHTML = taxaDeJuros;
}
/*
Valor mínimo para empréstimo: R$ 3.000,00;
Valor máximo para empréstimo: R$ 100.000,00;
Prazos para veículo : 24 / 36 / 48 meses;
Valor mínimo da garantia: R$ 5.000,00;
Valor máximo da garantia: R$ 3.000.000,00;
Imóvel
*/

function isFieldsValidWhenGaratiaIsVeiculo() {
  const valueValorImprestimo = valorDoEmprestimoInput.value;
  const valueGarantia = valorDaGarantiaInput.value;
  const valorMinimoEmprestimo = 3000;
  const valorMaximoEmprestimo = 100000;
  const valorMinimoGarantia = 5000;
  const valorMaximoGarantia = 3000000;

  if (
    valueValorImprestimo < valorMinimoEmprestimo ||
    valueValorImprestimo > valorMaximoEmprestimo
  ) {
    return "Valor de emprestimo deve ser entre R$ 3.000,00 e R$ 100.000,00 para garantia veiculo";
  }

  if (
    valueGarantia < valorMinimoGarantia ||
    valueGarantia > valorMaximoGarantia
  ) {
    return "Valor de garantia deve ser entre R$ 5.000,00 e R$ 3.000.000,00 para garantia veiculo";
  }

  return "";
}

function isFieldsValidWhenGaratiaIsImovel() {
  const valueValorImprestimo = valorDoEmprestimoInput.value;
  const valueGarantia = valorDaGarantiaInput.value;
  const valorMinimoEmprestimo = 30000;
  const valorMaximoEmprestimo = 4500000;
  const valorMinimoGarantia = 50000;
  const valorMaximoGarantia = 100000000;

  if (
    valueValorImprestimo < valorMinimoEmprestimo ||
    valueValorImprestimo > valorMaximoEmprestimo
  ) {
    return "Valor de emprestimo deve ser entre  R$ 30.000,00 e R$ 4.500.000,00 para garantia imovel";
  }
  if (
    valueGarantia < valorMinimoGarantia ||
    valueGarantia > valorMaximoGarantia
  ) {
    return "Valor de garantia deve ser entre R$ 50.000,00 e R$ 100.000.000,00 para garantia veiculo";
  }

  return "";
}

function validateFields() {
  const garantiaValue = garantiaInput.value;
  if (garantiaValue === "veiculo") return isFieldsValidWhenGaratiaIsVeiculo();
  return isFieldsValidWhenGaratiaIsImovel();
}

document.getElementById("simular").addEventListener("click", function (event) {
  event.preventDefault();
  const errorMessageFields = validateFields();
  if (errorMessageFields) {
    alert(errorMessageFields);
    return;
  }

  const valorTotalAPagar =
    (iof / 100 + taxaDeJuros / 100 + prazoInput.value / 1000 + 1) *
    valorDoEmprestimoInput.value;
  const valorDaParcela = valorTotalAPagar / prazoInput.value;
  exibirValorParcela(valorDaParcela);
  exibirTotalPagar(valorTotalAPagar);
  exibirTaxaDeJuros();

  console.log(valorDoEmprestimoInput.value, prazoInput.value);
});

function swapGarantiasImovel() {
  let prazo1 = prazoInput.children[0];
  let prazo2 = prazoInput.children[1];
  let prazo3 = prazoInput.children[2];
  if (garantiaInput.value == "veiculo") {
    console.log("veiculo");
    prazo1.value = 24;
    prazo1.innerHTML = 24;
    prazo2.value = 36;
    prazo2.innerHTML = 36;
    prazo3.value = 48;
    prazo3.innerHTML = 48;
  } else {
    console.log("imovel");
    prazo1.value = 120;
    prazo1.innerHTML = 120;
    prazo2.value = 180;
    prazo2.innerHTML = 180;
    prazo3.value = 240;
    prazo3.innerHTML = 240;
  }
}

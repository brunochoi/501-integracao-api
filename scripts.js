const cep = document.querySelector('input[name=cep]');

const converterJson = (resposta) => {   
    return resposta.json();
}

const colocarDadosCep = (dados) => {
    document.querySelector('input[name=endereco]').value = dados.logradouro;
    document.querySelector('input[name=cidade]').value = dados.localidade;
    document.querySelector('input[name=estado]').value = dados.uf;
}

const tratarErro = (erro) => {
    console.log(erro);
    alert('Escreve o CEP certo, lazarento');
}

cep.onblur = () => {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(converterJson)
        .then(colocarDadosCep)
        .catch(tratarErro);
}

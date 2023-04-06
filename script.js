const codProcedimento1 = document.getElementById("codProcedimento1");
codProcedimento1.focus();

const PressEnter = (nextinputId) =>{
    if(event.keyCode === 13){
        document.getElementById(nextinputId).focus();     
        return false;           
    }
};
//406040044
const contador = []

let soma = []

function atualizarProcedimento(inputProcedimento, inputP, inputQuantidade, spanQuantidade){
	const codProcedimento = document.getElementById(inputProcedimento)
	const paragrafo = document.getElementById(inputP)

	let qtdDigitada = document.getElementById(inputQuantidade)
	let span = document.getElementById(spanQuantidade);

	let procedimentosEspeciais = [210010096, 406020094, 210010070, 210010045, 211020010, 210010053, 210010134, 210010142, 210010150]

		codProcedimento.addEventListener("keydown", function(event){
			if (event.key === "Enter"){
				const codigo = Number(codProcedimento.value);
		    	const procedimento = procedimentos.find(p => p.cod === codigo);
		    	
		    	if (procedimento === undefined) {
		    		alert("Procedimento não localizado!")
		    	}

	    		if (!procedimentosEspeciais.includes(procedimento.cod)) {
		    		paragrafo.innerText = `${procedimento.procedimento} - ${procedimento.valor}`
		    		contador.push(procedimento.cod)
		    	} else{
		    		paragrafo.innerHTML = `<span>${procedimento.procedimento} - ${procedimento.valor} - </span><span class="pisca">Especial</span>`	
		    	}		    	
			}
		})

		qtdDigitada.addEventListener("keydown", function(eve){
			if (eve.key === "Enter") {
				const codigo = Number(codProcedimento.value);
		    	const procedimento = procedimentos.find(p => p.cod === codigo);
				let valorDigitado = Number(qtdDigitada.value);

				if (procedimentosEspeciais.includes(procedimento.cod)) {
					let calculo = valorDigitado * procedimento.valor
					soma.push(calculo)
					console.log(soma)
					span.innerText = `(100%) => ${calculo.toFixed(2)} - `
				} else if (contador.length == 1){
					let calculo = valorDigitado * procedimento.valor
					soma.push(calculo)
					console.log(soma)
					span.innerText = `(100%) => ${calculo.toFixed(2)} - `
				} else if (contador.length == 2){
					let calculo = valorDigitado * procedimento.valor * 0.75
					soma.push(calculo)
					console.log(soma)
					span.innerText = `(75%) => ${calculo.toFixed(2)} - `
				} else {
					let calculo = valorDigitado * procedimento.valor * 0.5
					soma.push(calculo)
					console.log(soma)
					span.innerText = `(50%) => ${calculo.toFixed(2)} - `
				}
			}
		})
}

atualizarProcedimento("codProcedimento1", "valor01", "qtd01", "valorqtd1")
atualizarProcedimento("codProcedimento2", "valor02", "qtd02", "valorqtd2")
atualizarProcedimento("codProcedimento3", "valor03", "qtd03", "valorqtd3")
atualizarProcedimento("codProcedimento4", "valor04", "qtd04", "valorqtd4")
atualizarProcedimento("codProcedimento5", "valor05", "qtd05", "valorqtd5")

function calcularOrtese(inputOrtese, spanOrtese){
	const codOrtese = document.getElementById(inputOrtese)
	const texto = document.getElementById(spanOrtese)


	codOrtese.addEventListener("keydown", function(eve){
		if (event.key === "Enter"){
			const codigo = Number(codOrtese.value);
	    	const procedimento = procedimentos.find(p => p.cod === codigo);
	    	
	    	texto.innerText = `${procedimento.procedimento} - R$${procedimento.valor}    || `
		}
	})
}
calcularOrtese("ortese01", "nomeOrtese01")
calcularOrtese("ortese02", "nomeOrtese02")
calcularOrtese("ortese03", "nomeOrtese03")
calcularOrtese("ortese04", "nomeOrtese04")
calcularOrtese("ortese05", "nomeOrtese05")
calcularOrtese("ortese06", "nomeOrtese06")
calcularOrtese("ortese07", "nomeOrtese07")
calcularOrtese("ortese08", "nomeOrtese08")
calcularOrtese("ortese09", "nomeOrtese09")
calcularOrtese("ortese10", "nomeOrtese10")

function calcular() {
	let resultadoProcedimento = soma.reduce(function(resultadoProcedimento, valor){
		return resultadoProcedimento + valor;

	}, 0);
	
	let resultadoOpmTabela = Number(document.getElementById("vlortese01").value) +
	Number(document.getElementById("vlortese02").value)+
	Number(document.getElementById("vlortese03").value) +
	Number(document.getElementById("vlortese04").value) +
	Number(document.getElementById("vlortese05").value) +
	Number(document.getElementById("vlortese06").value) +
	Number(document.getElementById("vlortese07").value) +
	Number(document.getElementById("vlortese08").value) +
	Number(document.getElementById("vlortese09").value) +
	Number(document.getElementById("vlortese10").value)

	let resultadoSanta = (resultadoProcedimento + resultadoOpmTabela)*.1
	console.log((resultadoSanta))

	let resultadoOpmNf = Number(document.getElementById("vlortese011").value) +
	Number(document.getElementById("vlortese012").value)+
	Number(document.getElementById("vlortese013").value) +
	Number(document.getElementById("vlortese014").value) +
	Number(document.getElementById("vlortese015").value) +
	Number(document.getElementById("vlortese016").value) +
	Number(document.getElementById("vlortese017").value) +
	Number(document.getElementById("vlortese018").value) +
	Number(document.getElementById("vlortese019").value) +
	Number(document.getElementById("vlortese020").value)

	let sala = Number(document.getElementById("sala").value)

	let resultadoCvd = ((resultadoProcedimento + resultadoOpmTabela)*.9) - resultadoOpmNf - sala
	console.log(resultadoCvd.toFixed(2))

	let endCvd = document.getElementById("finalCvd");
	endCvd.innerText = `CONTRATADA: ${resultadoCvd.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

	let endSc = document.getElementById("finalSc");
	endSc.innerText = `CONTRATANTE: ${resultadoSanta.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
}


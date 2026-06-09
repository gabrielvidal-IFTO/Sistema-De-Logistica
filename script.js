 let criterioAtual = 'tempo';

    function popularSelects() {
        const origem = document.getElementById('selectOrigem');
        const destino = document.getElementById('selectDestino');
        cidades.forEach(cidade => {
            origem.innerHTML += `<option value="${cidade}">${cidade}</option>`;
            destino.innerHTML += `<option value="${cidade}">${cidade}</option>`;
        });
        if (cidades.length > 1) {
            destino.selectedIndex = 1;
        }
    }

    function inverterRota() {
        const origem = document.getElementById('selectOrigem');
        const destino = document.getElementById('selectDestino');
        const temp = origem.value;
        origem.value = destino.value;
        destino.value = temp;
        atualizarRotas();
    }

    function formatarTempo(minutosTotais) {
        const horas = Math.floor(minutosTotais / 60);
        const minutos = minutosTotais % 60;
        if (horas > 0) {
            return `${horas}h ${minutos}min`;
        }
        return `${minutos}min`;
    }

    function calcularCustoCaminho(caminho) {
        let totalDistancia = 0;
        let totalTempo = 0;
        let totalDegradacao = 0;
        
        for (let i = 0; i < caminho.length - 1; i++) {
            const u = cidades.indexOf(caminho[i]);
            const v = cidades.indexOf(caminho[i+1]);
            totalDistancia += matrizDistancia[u][v];
            totalTempo += matrizTempo[u][v];
            totalDegradacao += matrizDegradacao[u][v];
        }
        
        let via = "Excelente";
        if (caminho.length > 1) {
            const mediaDegradacao = totalDegradacao / (caminho.length - 1);
            if (mediaDegradacao >= 7) via = "Ruim / Esburacada";
            else if (mediaDegradacao >= 4) via = "Regular";
            else if (mediaDegradacao > 0) via = "Boa";
        }

        return {
            distancia: totalDistancia.toFixed(1) + " km",
            tempo: formatarTempo(totalTempo),
            via: via,
            caminhoStr: caminho.join(" <i class='bi bi-chevron-right text-muted mx-1'></i> ")
        };
    }

    function atualizarRotas() {
        const origem = document.getElementById('selectOrigem').value;
        const destino = document.getElementById('selectDestino').value;
        
        const corpo = document.getElementById('tabelaCorpo');
        const cabecalho = document.getElementById('tabelaCabecalho');
        corpo.innerHTML = "";
        
        let cabecalhoHtml = `<th>Rota</th><th>Itinerário</th>`;
        if (criterioAtual === 'distancia') cabecalhoHtml += `<th>Distância</th>`;
        else if (criterioAtual === 'tempo') cabecalhoHtml += `<th>Tempo Estimado</th>`;
        else if (criterioAtual === 'degradacao') cabecalhoHtml += `<th>Condição da Via</th>`;
        cabecalho.innerHTML = cabecalhoHtml;

        if (origem === destino) {
            corpo.innerHTML = "<tr><td colspan='3' class='text-center text-muted py-4'>Origem e destino são iguais. Selecione cidades diferentes.</td></tr>";
            return;
        }

        const resDijkstra = algoritmoDijkstra(origem, destino, criterioAtual);
        
        if (resDijkstra.custoTotal === Infinity) {
            corpo.innerHTML = "<tr><td colspan='3' class='text-center text-muted py-4'>Nenhuma rota encontrada.</td></tr>";
            return;
        }

        const detalhes = calcularCustoCaminho(resDijkstra.rota);
        
        let colunasHtmlDijkstra = ``;
        if (criterioAtual === 'distancia') colunasHtmlDijkstra = `<td class="fw-semibold">${detalhes.distancia}</td>`;
        else if (criterioAtual === 'tempo') colunasHtmlDijkstra = `<td class="text-primary fw-bold">${detalhes.tempo}</td>`;
        else if (criterioAtual === 'degradacao') colunasHtmlDijkstra = `<td><span class="small fw-semibold text-secondary">${detalhes.via}</span></td>`;

        const linha = `
    <tr>
        <td class="align-middle"><span class="badge bg-dark">${resDijkstra.algoritmo}</span></td>
        <td class="align-middle">
            <div class="route-path text-wrap" style="font-size: 0.9rem; white-space: normal; word-break: break-word; max-width: 450px;">
                ${detalhes.caminhoStr}
            </div>
        </td>
        ${colunasHtmlDijkstra}
    </tr>
`;
corpo.innerHTML += linha;
        
        const resBellmanFord = algoritmoBellmanFord(origem, destino, criterioAtual);
        const detalhesBF = calcularCustoCaminho(resBellmanFord.rota);
        
        let colunasHtmlBF = ``;
        if (criterioAtual === 'distancia') colunasHtmlBF = `<td class="fw-semibold">${detalhesBF.distancia}</td>`;
        else if (criterioAtual === 'tempo') colunasHtmlBF = `<td class="text-primary fw-bold">${detalhesBF.tempo}</td>`;
        else if (criterioAtual === 'degradacao') colunasHtmlBF = `<td><span class="small fw-semibold text-secondary">${detalhesBF.via}</span></td>`;

        const linhaBF = `
    <tr>
        <td class="align-middle"><span class="badge bg-primary">${resBellmanFord.algoritmo}</span></td>
        <td class="align-middle">
            <div class="route-path text-wrap" style="font-size: 0.9rem; white-space: normal; word-break: break-word; max-width: 450px;">
                ${detalhesBF.caminhoStr}
            </div>
        </td>
        ${colunasHtmlBF}
    </tr>
`;
corpo.innerHTML += linhaBF;

    }

    function alterarCriterio(criterio) {
        criterioAtual = criterio;
        
        let nomeCriterio = "Tempo";
        if (criterio === 'distancia') nomeCriterio = "Distância";
        if (criterio === 'degradacao') nomeCriterio = "Degradação";
        
        const label = document.getElementById('labelCriterio');
        label.innerText = `Critério: ${nomeCriterio}`;
        
        atualizarRotas();
    }

    // Inicializa
    window.onload = function() {
        const pronto = inicializarGrafo();
        if (pronto) {
            popularSelects();
            alterarCriterio('tempo');
        } else {
            document.getElementById('tabelaCorpo').innerHTML = "<tr><td colspan='5' class='text-center text-danger py-4'>Erro ao inicializar o grafo.</td></tr>";
        }
    };
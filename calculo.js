const cidades = ["Gurupi, TO", "Dueré, TO", "Cariri do Tocantins, TO", "Formoso do Araguaia, TO", "Alvorada, TO", "Figueirópolis, TO"];
const numVertices = cidades.length;


//Inicialização da Matriz de Distancia
const matrizDistancia = Array(numVertices).fill(null).map(() => Array(numVertices).fill(Infinity));
//Inicialização da Matriz de Tempo
const matrizTempo = Array(numVertices).fill(null).map(() => Array(numVertices).fill(Infinity));
//Inicialização da Matriz de Degradação
const matrizDegradacao = Array(numVertices).fill(null).map(() => Array(numVertices).fill(Infinity));

for (let i = 0; i < numVertices; i++) {
    matrizDistancia[i][i] = 0;
    matrizTempo[i][i] = 0;
    matrizDegradacao[i][i] = 0;
}


function extrairDistancia(texto) {
    return parseFloat(texto.replace(" km", ""));
}

function extrairTempo(texto) {
    if (texto.includes("hora")) {
        const partes = texto.split(" ");
        const horas = parseInt(partes[0]);
        const minutos = texto.includes("minutos") ? parseInt(partes[2]) : 0;
        return (horas * 60) + minutos;
    }
    return parseInt(texto.replace(" minutos", ""));
}

dadosRodoviarios.forEach(item => {
    const u = cidades.indexOf(item.origem);
    const v = cidades.indexOf(item.destino);

    if (u !== -1 && v !== -1) {
        matrizDistancia[u][v] = extrairDistancia(item.distancia);
        matrizTempo[u][v] = extrairTempo(item.tempo);
        matrizDegradacao[u][v] = item.degradacao;
    }
});

function obterMatrizPorCriterio(criterio) {
    if (criterio === 'distancia') return matrizDistancia;
    if (criterio === 'tempo') return matrizTempo;
    if (criterio === 'degradacao') return matrizDegradacao;
    return matrizDistancia;
}

//DIJKSTRA
function algoritmoDijkstra(origemNome, destinoNome, criterio) {
    const origem = cidades.indexOf(origemNome);
    const destino = cidades.indexOf(destinoNome);
    const matriz = obterMatrizPorCriterio(criterio);

    const custo = Array(numVertices).fill(Infinity);
    const visitados = Array(numVertices).fill(false);
    const pais = Array(numVertices).fill(-1);

    custo[origem] = 0;

    for (let i = 0; i < numVertices - 1; i++) {
        let minCusto = Infinity;
        let u = -1;

        for (let v = 0; v < numVertices; v++) {
            if (!visitados[v] && custo[v] < minCusto) {
                minCusto = custo[v];
                u = v;
            }
        }

        if (u === -1) break;
        visitados[u] = true;

        for (let v = 0; v < numVertices; v++) {
            if (!visitados[v] && matriz[u][v] !== Infinity) {
                let novoCusto = custo[u] + matriz[u][v];
                if (novoCusto < custo[v]) {
                    custo[v] = novoCusto;
                    pais[v] = u;
                }
            }
        }
    }

    return {
        custoTotal: custo[destino],
        rota: reconstruirCaminho(pais, destino),
        algoritmo: "Dijkstra"
    };
}

// BELLMAN-FORD
function algoritmoBellmanFord(origemNome, destinoNome, criterio) {
    const origem = cidades.indexOf(origemNome);
    const destino = cidades.indexOf(destinoNome);
    const matriz = obterMatrizPorCriterio(criterio);

    const custo = Array(numVertices).fill(Infinity);
    const pais = Array(numVertices).fill(-1);

    custo[origem] = 0;

    for (let i = 1; i < numVertices; i++) {
        for (let u = 0; u < numVertices; u++) {
            for (let v = 0; v < numVertices; v++) {
                if (matriz[u][v] !== Infinity && custo[u] !== Infinity) {
                    if (custo[u] + matriz[u][v] < custo[v]) {
                        custo[v] = custo[u] + matriz[u][v];
                        pais[v] = u;
                    }
                }
            }
        }
    }

    return {
        custoTotal: custo[destino],
        rota: reconstruirCaminho(pais, destino),
        algoritmo: "Bellman-Ford"
    };
}

function reconstruirCaminho(pais, destino) {
    let caminho = [];
    let atual = destino;
    while (atual !== -1) {
        caminho.unshift(cidades[atual]);
        atual = pais[atual];
    }
    return caminho;
}

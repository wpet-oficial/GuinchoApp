// Função criar chamado
function solicitarGuincho() {

    const tipo = document.getElementById("servico").value;

    const chamado = {
        tipo: tipo,
        status: "Aguardando parceiro",
        data: new Date().toLocaleString()
    };

    localStorage.setItem("chamadoAtivo", JSON.stringify(chamado));

    alert("Chamado enviado com sucesso!");
    atualizarStatus();
}

// Atualiza status no cliente
function atualizarStatus() {
    const chamado = JSON.parse(localStorage.getItem("chamadoAtivo"));

    if (chamado) {
        document.getElementById("status").innerText =
            "Status: " + chamado.status;
    }
}

// Parceiro aceitar
function aceitarChamado() {
    let chamado = JSON.parse(localStorage.getItem("chamadoAtivo"));

    if (!chamado) {
        alert("Nenhum chamado disponível.");
        return;
    }

    chamado.status = "Parceiro a caminho";
    localStorage.setItem("chamadoAtivo", JSON.stringify(chamado));

    alert("Chamado aceito!");
}

// Finalizar
function finalizarChamado() {
    localStorage.removeItem("chamadoAtivo");
    alert("Atendimento finalizado.");
}

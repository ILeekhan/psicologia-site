// Abre e fecha a caixa do chat
function alternarChat() {
    const caixa = document.getElementById('chatbot-caixa');
    if (!caixa) {
        alert("Não encontrei a caixa!");
        return;
    }

    if (caixa.style.display === 'block') {
        caixa.style.display = 'none';
    } else {
        caixa.style.display = 'block';
    }
}

// Responde conforme o botão clicado
function responder(opcao) {
    const caixa = document.getElementById('chatbot-mensagens');
    if (!caixa) return;

    let texto = '';

    switch (opcao) {
        case 'atendimento':
            texto = 'O atendimento é personalizado, com escuta acolhedora e sigilo total. As sessões duram cerca de 50 minutos, com atendimento online.';
            break;
        case 'agendar':
            texto = 'Você pode escolher o melhor horário diretamente pela nossa agenda online. Quando sua conta no Cal.com estiver pronta, o link será colocado aqui.';
            break;
        case 'valores':
            texto = 'Os valores serão combinados no primeiro contato. Por favor, entre em contato pelo WhatsApp para mais informações.';
            break;
        case 'local':
            texto = 'Atendimento online de qualquer lugar do Brasil por videoconferência. Você escolhe o que melhor se adapta à sua rotina.';
            break;
        case 'falar':
            texto = 'Você pode falar diretamente comigo pelo WhatsApp: 💬 <a href="" target="_blank" style="color:#25D366; font-weight:600;">Abrir WhatsApp</a>';
            break;
    }

    caixa.innerHTML += '<p class="mensagem bot">' + texto + '</p>';
    caixa.scrollTop = caixa.scrollHeight;
}
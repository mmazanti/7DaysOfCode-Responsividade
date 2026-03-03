const consultas = [
    {
        dia: "Hoje",
        consultas: [
            {
                nome: "Luciana Dias",
                tipo: "Consulta remota",
                foto: "./assets/perfil-2.svg",
                horario: "14:00 - 15:00 (1 hora)",
                botoes: [
                    { texto: "Ligar por vídeo", classe: "card_consultas__contato-botão--vídeo" },
                    { texto: "Ligar por áudio", classe: "card_consultas__contato-botão--áudio" }
                ]
            },
            {
                nome: "Larissa Santana",
                tipo: "Consulta no local",
                foto: "./assets/perfil-3.svg",
                horario: "16:00 - 17:00 (1 hora)",
                botoes: [
                    { texto: "Ver endereço", classe: "card_consultas__contato-botão--endereço" }
                ]
            },
            {
                nome: "Marcos Correia",
                tipo: "Consulta remota",
                foto: "./assets/perfil-4.svg",
                horario: "17:20 - 18:00 (40 minutos)",
                botoes: [
                    { texto: "Ligar por vídeo", classe: "card_consultas__contato-botão--vídeo" },
                    { texto: "Ligar por áudio", classe: "card_consultas__contato-botão--áudio" }
                ]
            }
        ]
    },
    {
        dia: "Amanhã",
        consultas: [
            {
                nome: "Clara Lemos",
                tipo: "Consulta no local",
                foto: "./assets/perfil-3.svg", /* Using perfil-3 since original html had it */
                horario: "18:00 - 19:00 (1 hora)",
                botoes: [
                    { texto: "Ver endereço", classe: "card_consultas__contato-botão--endereço" }
                ]
            },
            {
                nome: "Luciana Dias",
                tipo: "Consulta remota",
                foto: "./assets/perfil-2.svg",
                horario: "14:00 - 15:00 (1 hora)",
                botoes: [
                    { texto: "Ligar por vídeo", classe: "card_consultas__contato-botão--vídeo" },
                    { texto: "Ligar por áudio", classe: "card_consultas__contato-botão--áudio" }
                ]
            },
            {
                nome: "Marcos Correia",
                tipo: "Consulta remota",
                foto: "./assets/perfil-4.svg",
                horario: "17:20 - 18:00 (40 minutos)",
                botoes: [
                    { texto: "Ligar por vídeo", classe: "card_consultas__contato-botão--vídeo" },
                    { texto: "Ligar por áudio", classe: "card_consultas__contato-botão--áudio" }
                ]
            },
            {
                nome: "Larissa Santana",
                tipo: "Consulta no local",
                foto: "./assets/perfil-3.svg",
                horario: "16:00 - 17:00 (1 hora)",
                botoes: [
                    { texto: "Ver endereço", classe: "card_consultas__contato-botão--endereço" }
                ]
            }
        ]
    },
    {
        dia: "Quarta-feira",
        consultas: [
            {
                nome: "Clara Lemos",
                tipo: "Consulta no local",
                foto: "./assets/perfil-3.svg",
                horario: "18:00 - 19:00 (1 hora)",
                botoes: [
                    { texto: "Ver endereço", classe: "card_consultas__contato-botão--endereço" }
                ]
            },
            {
                nome: "Luciana Dias",
                tipo: "Consulta remota",
                foto: "./assets/perfil-2.svg",
                horario: "14:00 - 15:00 (1 hora)",
                botoes: [
                    { texto: "Ligar por vídeo", classe: "card_consultas__contato-botão--vídeo" },
                    { texto: "Ligar por áudio", classe: "card_consultas__contato-botão--áudio" }
                ]
            },
            {
                nome: "Marcos Correia",
                tipo: "Consulta remota",
                foto: "./assets/perfil-4.svg",
                horario: "17:20 - 18:00 (40 minutos)",
                botoes: [
                    { texto: "Ligar por vídeo", classe: "card_consultas__contato-botão--vídeo" },
                    { texto: "Ligar por áudio", classe: "card_consultas__contato-botão--áudio" }
                ]
            },
            {
                nome: "Larissa Santana",
                tipo: "Consulta no local",
                foto: "./assets/perfil-3.svg",
                horario: "16:00 - 17:00 (1 hora)",
                botoes: [
                    { texto: "Ver endereço", classe: "card_consultas__contato-botão--endereço" }
                ]
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do botão flutuante (FAB)
    const fabContainer = document.querySelector('.fab-container');
    const fabMainButton = document.getElementById('fab-main-button');

    if (fabMainButton && fabContainer) {
        fabMainButton.addEventListener('click', () => {
            fabContainer.classList.toggle('open');
        });
    }

    // 2. Renderização Dinâmica das Consultas
    const mainContainer = document.querySelector('main');
    // Inserir antes do formulário (que deve ser o último elemento principal que não é agenda)
    const formRef = document.querySelector('.formulario_consulta');

    // Vamos criar o HTML para cada bloco de dia e seus cartões
    consultas.forEach(diaAgenda => {
        const sectionAgenda = document.createElement('section');
        sectionAgenda.classList.add('agenda');
        
        const h2 = document.createElement('h2');
        h2.textContent = diaAgenda.dia;
        sectionAgenda.appendChild(h2);

        diaAgenda.consultas.forEach(consulta => {
            const card = document.createElement('section');
            card.className = 'card_consultas';

            // Construir os botões (Atenção para A11y, usando <button> e aria-label onde necessário)
            const botoesHtml = consulta.botoes.map(btn => 
                `<button type="button" class="${btn.classe}" aria-label="${btn.texto}">${btn.texto}</button>`
            ).join('\n');

            card.innerHTML = `
                <div class="card_consultas__perfil">
                    <div class="card_consultas__perfil-foto">
                        <img src="${consulta.foto}" alt="Foto de perfil da(o) paciente ${consulta.nome}">
                    </div>
                    <div class="card_consultas__perfil-informações">
                        <h2 class="card_consultas__perfil-informações--nome">${consulta.nome}</h2>
                        <p class="card_consultas__perfil-informações--local">
                            <img src="./assets/Camera.svg" alt="" aria-hidden="true">${consulta.tipo}
                        </p>
                    </div>
                    <button type="button" class="card_consultas__perfil-chat" aria-label="Iniciar chat com ${consulta.nome}">
                        <img src="./assets/chat.svg" alt="" aria-hidden="true">
                    </button>
                </div>
            
                <div class="card_consultas__contato">
                    <p class="card_consultas__contato-horário">${consulta.horario}</p>
                    <div class="card_consultas__contato-botão">
                        ${botoesHtml}
                    </div>
                </div>
            `;
            sectionAgenda.appendChild(card);
        });

        if (formRef) {
            mainContainer.insertBefore(sectionAgenda, formRef);
        } else {
            // Fallback caso formRef não exista
            mainContainer.insertBefore(sectionAgenda, fabContainer);
        }
    });
});

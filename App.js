const services = [
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
        name: "Correção de TCC",
        description: "Revisão minuciosa para garantir que o trabalho esteja em conformidade com as exigências acadêmicas."
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
        name: "Assistência em Pesquisas Teóricas",
        description: "Orientação na busca por fontes e na realização de consultas acadêmicas rigorosas."
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
        name: "Revisão de Pesquisas Acadêmicas",
        description: "Análise detalhada para assegurar a clareza, coesão e consistência dos trabalhos."
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>',
        name: "Revisão de Redações",
        description: "Aperfeiçoamento de textos para garantir uma escrita fluida e correta."
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>',
        name: "Formatação ABNT",
        description: "Adequação dos trabalhos acadêmicos às normas da ABNT, garantindo a padronização necessária."
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
        name: "Projetos de Integração",
        description: "Suporte na criação de projetos que demandam a integração de múltiplas disciplinas ou áreas de conhecimento."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const servicesList = document.getElementById('services-list');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Populate services
    services.forEach(service => {
        const li = document.createElement('li');
        li.innerHTML = `
            <button class="service-btn">
                ${service.icon}
                ${service.name}
            </button>
        `;
        li.querySelector('button').addEventListener('click', () => showServiceDetails(service));
        servicesList.appendChild(li);
    });

    // Show service details in modal
    function showServiceDetails(service) {
        modalTitle.innerHTML = `${service.icon} ${service.name}`;
        modalDescription.textContent = service.description;
        modal.style.display = 'block';
    }

    // Close modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // WhatsApp button functionality
    document.getElementById('whatsapp-btn').addEventListener('click', function() {
        window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
    });

    // More info button functionality
    document.getElementById('more-info-btn').addEventListener('click', function() {
        // Add your functionality here
        alert('Mais informações sobre os serviços');
    });
});
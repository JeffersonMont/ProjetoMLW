let botoes = document.querySelectorAll('.btn');
console.log(botoes);

botoes.forEach(element => {
    element.addEventListener('click', () => {
        let title = document.querySelector('#inforcamaoesdosbotoes h1')
        let info = document.querySelector('#inforcamaoesdosbotoes p')
      
        if(element.textContent == 'Home')
{  info.innerHTML = 
           ` <p>Pré- requisito: Ensino Médio Completo ou equivalente&nbsp;
        Carga Horária: 2.100 horas&nbsp;
           Duração: 3 anos (6 Semestres)&nbsp;
           N⁰ de vagas: 40 Anuais&nbsp;
           Turno de funcionamento: o curso acontece de segunda a sexta-feira no período noturno e aos sábados, no período diurno.&nbsp;
           Acesso ao curso: Por meio do Sistema de Seleção Unificada (Sisu), gerenciado pelo Ministério da Educação (MEC), no qual instituições públicas de ensino superior oferecem vagas para candidatos participantes do Exame Nacional do Ensino Médio (Enem).&nbsp;
           Coordenador do Curso: Prof. Dr. Valtemir de Alencar e Silva</p>"
    title = 'oiii'`

        }
        
    });
});

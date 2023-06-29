const data = [
    {
        category: "Conhecimentos gerais",
        questions: [
            {
                question: "Qual é o metal mais abundante na crosta terrestre?",
                options: ["Ferro", "Alumínio", "Cobre", "Zinco"],
                answer: "Alumínio"
            },
            {
                question: "Qual foi a primeira civilização conhecida da história?",
                options: ["Egito Antigo", "Grécia Antiga", "Mesopotâmia", "Maias"],
                answer: "Mesopotâmia"
            },
            {
                question: "Qual é o maior oceano do mundo?",
                options: ["Atlântico", "Indíco", "Pacífico", "Ártico"],
                answer: "Pacífico"
            },
            {
                question: "Quem foi o primeiro presidente do Brasil?",
                options: ["Getúlio Vargas", "Juscelino Kubitschek", "Fernando Henrique Cardoso", "Marechal Deodoro da Fonseca"],
                answer: "Marechal Deodoro da Fonseca"
            },
            {
                question: "Qual é o país de origem do tango?",
                options: ["Argentina", "Itália", "Brasil", "Espanha"],
                answer: "Argentina"
            }
        ]
    },
    {
        category: "Ciências",
        questions: [
            {
                question: "Qual é o nome dado ao processo pelo qual as plantas convertem a luz solar em energia química?",
                options: ["Respiração", "Fotossíntese", "Transpiração", "Absorção"],
                answer: "Fotossíntese"
            },
            {
                question: "Qual é o maior órgão do corpo humano?",
                options: ["Cérebro", "Estômago", "Pulmões", "Pele"],
                answer: "Pele"
            },
            {
                question: "Qual é o nome dado à camada mais externa da Terra?",
                options: ["Manto", "Litosfera", "Crosta", "Solo"],
                answer: "Crosta"
            },
            {
                question: "Qual é o processo pelo qual ocorre a formação de novas espécies ao longo do tempo?",
                options: ["Evolução", "Reprodução", "Mutação", "Adaptação"],
                answer: "Evolução"
            },
            {
                question: "Qual é o nome dado à mudança de estado físico do vapor para líquido?",
                options: ["Sublimação", "Evaporização", "Condensação", "Solidificação"],
                answer: "Condensação"
            }
        ]
    },
    {
        category: "História",
        questions: [
            {
                question: "Qual foi o evento que marcou o início da Segunda Guerra Mundial?",
                options: ["Queda do muro de Berlim", "Ataque a Pearl Harbor", "Invasão da Polônia", "Bombardeio de Hiroshima"],
                answer: "Invasão da Polônia"
            },
            {
                question: "Qual foi o líder sul-africano que lutou contra o apartheid e se tornou o primeiro presidente negro do país?",
                options: ["Desmond Tutu", "Nelson Mandela", "Barack Obama", "Jacob Zuma"],
                answer: "Nelson Mandela"
            },
            {
                question: "Qual foi a civilização que construiu a cidade de Machu Picchu, no Peru?",
                options: ["Maias", "Otomanos", "Astecas", "Incas"],
                answer: "Incas"
            },
            {
                question: "Qual foi o movimento intelectual que influenciou diretamente o Iluminismo?",
                options: ["Renascimento", "Reforma Protestante", "Revolução Industrial", "Contrarreforma Católica"],
                answer: "Renascimento"
            },
            {
                question: "Qual foi o líder político que liderou a independência do Brasil de Portugal em 1822?",
                options: ["José Bonifácio", "Tiradentes", "Dom Pedro II", "Dom Pedro I"],
                answer: "Dom Pedro I"
            }
        ]
    },
    {
        category: "Geografia",
        questions: [
            {
                question: "Qual é a capital da Turquia?",
                options: ["Istambul", "Ancara", "Atenas", "Cairo"],
                answer: "Ancara"
            },
            {
                question: "O bloco econômico conhecido como União Europeia é composto por quantos países atualmente?",
                options: ["27", "24", "18", "11"],
                answer: "27"
            },
            {
                question: "Qual é o único país que faz fronteira com mais de 14 países?",
                options: ["Rússia", "Brasil", "China", "Índia"],
                answer: "Rússia"
            },
            {
                question: "Qual é o maior arquipélago do mundo?",
                options: ["Filipinas", "Indonésia", "Maldivas", "Japão"],
                answer: "Indonésia"
            },
            {
                question: "Qual é o bloco econômico formado por países da América do Sul?",
                options: ["NAFTA", "ASEAN", "Mercosul", "BRICS"],
                answer: "Mercosul"
            }
        ]
    },
    {
        category: "Filmes e séries",
        questions: [
            {
                question: 'Em "Interestelar", qual é o planeta onde os personagens encontram ondas de tempo dilatadas?',
                options: ["Planeta Mann", "Planeta Edmunds", "Planeta Miller", "Planeta Cooper"],
                answer: "Planeta Miller"
            },
            {
                question: 'Em "Stranger Things", qual é o nome real do vilão Vecna?',
                options: ["Henry Creel", "Jason Voorhees", "Michael Myers", "Jack Torrance"],
                answer: "Henry Creel"
            },
            {
                question: "Qual é o nome da série de televisão que apresenta a história de um professor de química que se torna um grande produtor de metanfetamina?",
                options: ["Better Call Saul", "Narcos", "Dark", "Breaking Bad"],
                answer: "Breaking Bad"
            },
            {
                question: 'Qual é o nome do ator que interpretou o personagem Coringa no filme "Batman: O Cavaleiro das Trevas"?',
                options: ["Joaquin Phoenix", "Jack Nicholson", "Heath Ledger", "Jared Leto"],
                answer: "Heath Ledger"
            },
            {
                question: 'Em "Vingadores: Ultimato", quem realiza o estalo que traz todos de volta?',
                options: ["Tony Stark", "Bruce Banner", "Thor", "Steve Rogers"],
                answer: "Bruce Banner"
            }
        ]
    },
    {
        category: "Esportes",
        questions: [
            {
                question: "Qual é o nome do maior torneio de tênis do mundo?",
                options: ["Wimbledon", "Australian Open", "US Open", "Roland Garros"],
                answer: "Australian Open"
            },
            {
                question: "Qual é o jogador de basquete que detém o recorde de pontos marcados em um único jogo da NBA, com 100 pontos?",
                options: ["Wilt Chamberlain", "LeBron James", "Kobe Bryant", "Michael Jordan"],
                answer: "Wilt Chamberlain"
            },
            {
                question: "Qual time venceu mais edições da Champions League?",
                options: ["Barcelona", "Milan", "Real Madrid", "Liverpool"],
                answer: "Real Madrid"
            },
            {
                question: "Quais são as posições do vôlei?",
                options: ["Goleiro, zagueiro, atacante, lateral", "Armador, ala, pivô", "Levantador, oposto, ponteiro, central, líbero", "Fixo, alas, pivô"],
                answer: "Levantador, oposto, ponteiro, central, líbero"
            },
            {
                question: "Qual é o atleta com mais medalhas em Jogos Olímpicos?",
                options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Robert Scheidt"],
                answer: "Michael Phelps"
            }
        ]
    }
];

export default data;
export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://avatars1.githubusercontent.com/u/29154104?s=460&u=a8c6b1483c305db8bdbfc697ab3e1b5de644511a&v=4'
          },
          {
            id: 2,
            content: 'Estudar adobe Premier',
            labels: ['#7159c1'],
            user: 'https://avatars1.githubusercontent.com/u/29154104?s=460&u=a8c6b1483c305db8bdbfc697ab3e1b5de644511a&v=4'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://avatars1.githubusercontent.com/u/29154104?s=460&u=a8c6b1483c305db8bdbfc697ab3e1b5de644511a&v=4'
          },
          {
            id: 4,
            content: 'Estudar sobre RXJS',
            labels: ['#54e1f7'],
            user: 'https://avatars1.githubusercontent.com/u/29154104?s=460&u=a8c6b1483c305db8bdbfc697ab3e1b5de644511a&v=4'
          },
          {
            id: 5,
            content: 'Fazer deploy da aplicacao Crispefy',
            labels: ['#54e1f7'],
            user: 'https://avatars1.githubusercontent.com/u/29154104?s=460&u=a8c6b1483c305db8bdbfc697ab3e1b5de644511a&v=4'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://avatars1.githubusercontent.com/u/29154104?s=460&u=a8c6b1483c305db8bdbfc697ab3e1b5de644511a&v=4'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://avatars1.githubusercontent.com/u/29154104?s=460&u=a8c6b1483c305db8bdbfc697ab3e1b5de644511a&v=4'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://avatars1.githubusercontent.com/u/29154104?s=460&u=a8c6b1483c305db8bdbfc697ab3e1b5de644511a&v=4'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }
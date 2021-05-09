var notasAlunosJSON = {
  01: {
    nome: "Alfredo",
    notas: {
      nota01: 10,
      nota02: 08,
      nota03: 10,
      nota04: 10,
    },
  },
  02: {
    nome: "Beatriz",
    notas: {
      nota01: 07,
      nota02: 06,
      nota03: 08,
      nota04: 07,
    },
  },
  03: {
    nome: "Carlos",
    notas: {
      nota01: 04,
      nota02: 05,
      nota03: 07,
      nota04: 10,
    },
  },
  04: {
    nome: "Daniel",
    notas: {
      nota01: 10,
      nota02: 08,
      nota03: 10,
      nota04: 07,
    },
  },
  05: {
    nome: "Elaine",
    notas: {
      nota01: 06,
      nota02: 07,
      nota03: 06,
      nota04: 08,
    },
  },
  06: {
    nome: "Francine",
    notas: {
      nota01: 10,
      nota02: 09,
      nota03: 10,
      nota04: 10,
    },
  },
  07: {
    nome: "Gustavo",
    notas: {
      nota01: 05,
      nota02: 06,
      nota03: 06,
      nota04: 08,
    },
  },
  08: {
    nome: "Heitor",
    notas: {
      nota01: 03,
      nota02: 02,
      nota03: 00,
      nota04: 08,
    },
  },
  09: {
    nome: "Iago",
    notas: {
      nota01: 07,
      nota02: 03,
      nota03: 08,
      nota04: 07,
    },
  },
  10: {
    nome: "Jonathan",
    notas: {
      nota01: 10,
      nota02: 09,
      nota03: 08,
      nota04: 07,
    },
  },
  11: {
    nome: "Kyle",
    notas: {
      nota01: 06,
      nota02: 05,
      nota03: 10,
      nota04: 07,
    },
  },
  12: {
    nome: "Matheus",
    notas: {
      nota01: 02,
      nota02: 03,
      nota03: 01,
      nota04: 02,
    },
  },
  13: {
    nome: "Nair",
    notas: {
      nota01: 10,
      nota02: 08,
      nota03: 09,
      nota04: 07,
    },
  },
  14: {
    nome: "Orlando",
    notas: {
      nota01: 05,
      nota02: 07,
      nota03: 04,
      nota04: 06,
    },
  },
  15: {
    nome: "Peter",
    notas: {
      nota01: 09,
      nota02: 07,
      nota03: 08,
      nota04: 06,
    },
  },
  16: {
    nome: "Queiros",
    notas: {
      nota01: 02,
      nota02: 05,
      nota03: 03,
      nota04: 04,
    },
  },
  17: {
    nome: "Raimundo",
    notas: {
      nota01: 06,
      nota02: 05,
      nota03: 08,
      nota04: 09,
    },
  },
  18: {
    nome: "Suzana",
    notas: {
      nota01: 10,
      nota02: 09,
      nota03: 10,
      nota04: 09,
    },
  },
  20: {
    nome: "Thais",
    notas: {
      nota01: 07,
      nota02: 05,
      nota03: 04,
      nota04: 09,
    },
  },
  21: {
    nome: "Ursula",
    notas: {
      nota01: 08,
      nota02: 08,
      nota03: 07,
      nota04: 09,
    },
  },
  22: {
    nome: "Victoria",
    notas: {
      nota01: 06,
      nota02: 07,
      nota03: 08,
      nota04: 10,
    },
  },
  23: {
    nome: "Xuxa",
    notas: {
      nota01: 06,
      nota02: 07,
      nota03: 07,
      nota04: 06,
    },
  },
  24: {
    nome: "Zelda",
    notas: {
      nota01: 10,
      nota02: 10,
      nota03: 10,
      nota04: 10,
    },
  },
  25: {
    nome: "Wagner",
    notas: {
      nota01: 02,
      nota02: 03,
      nota03: 03,
      nota04: 06,
    },
  },
  26: {
    nome: "Yasmin",
    notas: {
      nota01: 06,
      nota02: 07,
      nota03: 05,
      nota04: 08,
    },
  },
};

function calcMediaAlunos (notasAlunosJSON) {

  let media_NotasArr = [];

  for (const [key, value] of Object.entries(notasAlunosJSON)){
    let notas = value.notas;
    let total = Object.values(notas).reduce((a, b) => a + b, 0)/Object.values(notas).length;
    media_NotasArr.push(total);
    notasAlunosJSON[key]["media"] = total;
  }

  // Organizando array das médias em ordem crescente 
  media_NotasArr = media_NotasArr.sort(function(a,b){
      if (a > b) {
        return - 1;
      } else {
        return true;
      }
  });

  // Ecnontrar as notas da média de aprovação, reprovação e nota min. do exame final
  let mediaAprovado = calcNotasAprovado(media_NotasArr);
  let mediaReprovado = calcNotasReprovado(media_NotasArr);
  let notaExameFinal = (mediaAprovado + mediaReprovado) / 2;


  // Status dos alunos
  for (const [key, value] of Object.entries(notasAlunosJSON)){
      let mediaAluno = value.media;
      let statusDoAluno = statusAlunos(mediaAluno, mediaAprovado, mediaReprovado);
      notasAlunosJSON[key]["resultado"] = statusDoAluno;
  }

  // Saída de dados
  console.log(`A média de aprovação da turma foi: ${mediaAprovado}`);
  console.log(`A média de reprovação da turma foi: ${mediaReprovado}`);
  console.log(`A nota para passar no exame final é ${notaExameFinal}`);
  console.table(notasAlunosJSON)
}

/* Cálculo da média Aprovado e Reprovado */

calcNotasAprovado = (media_NotasArr) => {
  let posicaoMediaAprovado = Math.trunc(media_NotasArr.length*(3/10)-1); 
  let media_Aprovado = media_NotasArr[posicaoMediaAprovado];

  return (media_Aprovado);
}

calcNotasReprovado = (media_NotasArr) => {
  let posicaoMediaReprovado = Math.trunc(media_NotasArr.length*9/10); 
  let media_Reprovado = media_NotasArr[posicaoMediaReprovado];

  return (media_Reprovado);
}

/* Status dos Alunos */

var statusAlunos = (mediaAluno, mediaAprovado, mediaReprovado) => {
  let mensagem = "";
  if (mediaAluno >= mediaAprovado){
      mensagem ="O aluno está aprovado";
  } else if (mediaAluno <= mediaReprovado){
      mensagem = "O aluno está reprovado";
  } else if  (mediaAluno < mediaAprovado && mediaAluno > mediaReprovado){
    mensagem = "O aluno deverá fazer a recuperação";
  }
  return mensagem;
}
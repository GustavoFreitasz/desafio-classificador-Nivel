
function classificadorNivel(xp) {
  let nivel;

  switch (true) {
    case xp >= 10001:
      nivel = "Radiante";
      break;
    case xp >= 9001:
      nivel = "Imortal";
      break;
    case xp >= 8001:
      nivel = "Ascendente";
      break;
    case xp >= 7001:
      nivel = "Platina";
      break;
    case xp >= 5001:
      nivel = "Ouro";
      break;
    case xp >= 2001:
      nivel = "Prata";
      break;
    case xp >= 1001:
      nivel = "Bronze";
      break;
    default:
      nivel = "Ferro";
  }

  return nivel;
}

 let nome = "";
// Entrada de dados
  nome = nome+"freitas";
  
  // Classificação do nível
  const nivel = classificadorNivel(7002);
  
  // Exibição da mensagem final
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
  
  
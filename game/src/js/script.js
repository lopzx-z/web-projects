const personagem = document.getElementById("zombie");

function positionPersonagem() {
  const box = personagem.getBoundingClientRect();
  const posX = box.left;
  const posZ = box.right;
  const posY = box.top;

  console.log(`Posição X: ${posX} \n Posição Y: ${posY} \n Posição Z: ${posZ}`);
}

positionPersonagem();

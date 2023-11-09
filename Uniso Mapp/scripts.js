
// Zoom
const mapContainer = document.querySelector('.map_container');
const mapImage = document.getElementById('main_map');
let scale = 1;

function zoomIn() {
  scale += 0.1;
  updateMapTransform();
}

function zoomOut() {
  if (scale > 0.1) {
    scale -= 0.1;
    updateMapTransform();
  }
}

function updateMapTransform() {
  const containerWidth = mapContainer.clientWidth;
  const containerHeight = mapContainer.clientHeight;
  const imageWidth = mapImage.width;
  const imageHeight = mapImage.height;

  const maxScaleX = containerWidth / imageWidth;
  const maxScaleY = containerHeight / imageHeight;

  scale = Math.min(maxScaleX, maxScaleY, scale);

  mapImage.style.transform = `scale(${scale})`;
}

updateMapTransform();

/*Schuab - Função de trocar imagem*/
function changeImage(id) {
    
  const imgPath = imagePaths[id];
  document.getElementById('main_map').src = imgPath;
  mainMap.style.opacity = 0; 
  mainMap.onload = function () {
      mainMap.style.opacity = 1;
  };
}

/*Schuab - Banco de imagens*/
const imagePaths = {
    'link_biblioteca': 'assets/Imagem/biblioteca.svg',
    'link_saa': 'assets/Imagem/saa.svg',
    'link_apoio1': 'assets/Imagem/logo-svg.svg',
    'link_apoio2': 'assets/Imagem/apoio2.svg',
    'link_apoio3': 'assets/Imagem/apoio3.svg',
    'link_apoio4': 'assets/Imagem/apoio4.svg',
    'link_blocoA': 'assets/Imagem/blocoA.svg',
    'link_blocoB': 'assets/Imagem/blocoB.svg',
    'link_blocoC': 'assets/Imagem/blocoC.svg',
    'link_blocoD': 'assets/Imagem/blocoD.svg',
    'link_blocoE': 'assets/Imagem/blocoE.svg',
    'link_blocoF': 'assets/Imagem/blocoF.svg',
    'link_quadras': 'assets/Imagem/quadras.svg',
    'link_estacionamentos': 'assets/Imagem/estacionamentos.svg',
    'link_lapec': 'assets/Imagem/lapec.svg',
    'link_casas_apoios': 'assets/Imagem/casas_apoios.svg',
    'link_veterinária': 'assets/Imagem/veterinária.svg',
};
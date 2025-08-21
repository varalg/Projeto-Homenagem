function atualizarPreview() {
  const titulo = document.getElementById('titulo').value;
  const mensagem = document.getElementById('mensagem').value;
  const midia = document.getElementById('uploadMidia').files[0];
  const spotify = document.getElementById('spotifyLink').value;

  document.getElementById('previewTitulo').innerText = titulo;
  document.getElementById('previewMensagem').innerText = mensagem;

  const midiaPreview = document.getElementById('previewMidia');
  midiaPreview.innerHTML = '';
  if (midia) {
    const url = URL.createObjectURL(midia);
    if (midia.type.startsWith('image')) {
      const img = document.createElement('img');
      img.src = url;
      img.style.maxWidth = '100%';
      midiaPreview.appendChild(img);
    } else if (midia.type.startsWith('video')) {
      const video = document.createElement('video');
      video.src = url;
      video.controls = true;
      video.style.maxWidth = '100%';
      midiaPreview.appendChild(video);
    }
  }

  if (spotify) {
    document.getElementById('textoSpotify').innerText = "Sua música:";
    document.getElementById('previewSpotify').innerHTML =
      `<iframe src="https://open.spotify.com/embed/track/${spotify.split('/').pop().split('?')[0]}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
  }
}

function salvarHomenagem() {
  alert("Funcionalidade de salvar ainda não implementada.");
}

function gerarQRCode() {
  const url = document.getElementById('urlHomenagem').value;
  document.getElementById('qrcode').innerHTML = '';
  new QRCode(document.getElementById('qrcode'), url);
}

function copiarLink() {
  const input = document.getElementById('urlHomenagem');
  input.select();
  document.execCommand('copy');
  alert('Link copiado!');
}

function baixarHTML() {
  alert("Funcionalidade de download ainda não implementada.");
}



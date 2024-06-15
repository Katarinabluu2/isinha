document.getElementById('inclusaojs').addEventListener('submit', function(event) {
   event.preventDefault();
   alert('Informações apagadas com sucesso');
});


document.getElementById('inclusaojs').addEventListener('submit', function(event) {
   if (!confirm('Deseja enviar enviar?')) {
       event.preventDefault();
   }
});


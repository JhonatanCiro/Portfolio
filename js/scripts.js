$(document).ready(function () {

  // Al hacer clic en "Ver Video" se carga el video de YouTube en el modal
  $(".btn-video").on("click", function () {
    var idVideo = $(this).data("video");
    var titulo = $(this).data("titulo");

    $("#modalTitulo").text(titulo);
    $("#videoFrame").attr("src", "https://www.youtube.com/embed/" + idVideo + "?rel=0");

    var modal = new bootstrap.Modal(document.getElementById("modalVideo"));
    modal.show();
  });

  // Al cerrar el modal se detiene el video
  $("#modalVideo").on("hidden.bs.modal", function () {
    $("#videoFrame").attr("src", "");
  });

});

$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    // pega o que esta dentro do imput
    const tarefa = $("#campoTarefa").val();

    if (tarefa.length === 0 || !tarefa.trim()) {
        alert('po')
    } else {
      const novaTarefa = $(`<li id="tarefa">${tarefa}</li>`).appendTo(
        "#conteudo-lista"
      );
      $("ul li").click(function (event) {
        const teste = $(event.target).text();
        $(event.target).css({ "text-decoration": "line-through", 'text-decoration-color': 'red' });
      });
    }

    //adiciona a tarefa no HTML
  });
});

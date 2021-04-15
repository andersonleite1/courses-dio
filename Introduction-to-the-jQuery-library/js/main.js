  function searchCep() {
    $(".progress").show();

    var cep = document.getElementById("cep").value;
    console.log(cep);
    var url = "http://viacep.com.br/ws/"+ cep +"/json";
    $.ajax({
      url: url,
      type: "GET",
      success: function(response) {
        $("#title-cep").html("CEP: "+ response.cep);
        $("#logradouro").html(response.logradouro);
        $("#bairro").html(response.bairro);
        $("#localidade").html(response.localidade);
        $("#uf").html(response.uf);
        $(".cep").show();
        $(".progress").hide();
      },
    });
  }

$(function() {
  $(".cep").hide();
  $(".progress").hide();
});

function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response.logradouro);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".barra-progresso").hide();
            $(".cep").show();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})
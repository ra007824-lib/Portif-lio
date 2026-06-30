function enviarFormulario(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").innerHTML =
    "Obrigado pelo contato, " + nome + "!";

}

document.getElementById("formulario").addEventListener("submit", enviarFormulario);

tsParticles.load("tsparticles", {

    particles: {

        number: {

            value: 80

        },

        color: {

            value: "#ffffff"

        },

        links: {

            enable: true,

            color: "#ffffff"

        },

        move: {

            enable: true,

            speed: 2

        }

    }

})

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      const emailData = {
        to: "allancrasso@gmail.com",  // Endereço de e-mail para onde enviar
        subject: "Nova mensagem de contato",
        body: `Nome: ${formData.get("name")}\nE-mail: ${formData.get("email")}\nMensagem:\n${formData.get("message")}`
      };
  
      // Simulação de envio (não enviará e-mail de verdade)
      console.log("Dados do e-mail:", emailData);
      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  });
  
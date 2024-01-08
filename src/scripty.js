document.getElementById("loginButton").addEventListener("click", validateLogin);
    // Obtém os valores dos campos de nome de usuário e senha
    function validateLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("username").value;
  
    // Exemplo de validação (substitua isso pela lógica real de autenticação)
    if (username === "user" && password === "password") {
        alert("Login successful");
        
      } else {
        alert("Invalid username or password");
      }
    }
  
  
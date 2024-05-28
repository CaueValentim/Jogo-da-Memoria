//Login

const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({target }) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled');
    } else{
        button.setAttribute('disabled', '');
    }
}// Evento para configurar o botão de login.

const handleSubmit = (event) =>{
    event.preventDefault();// desabilita o comportamento padrão de recarregar a pagina do forms.
    localStorage.setItem('Player', input.value);// serve para salvar informações no localStorege do navegador.
    window.location = 'pages/game.html'// serve para enviar a pessoa para a pagina do jogo, ao efetuar o login.
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

//fim da area de login
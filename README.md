# Encurtador de URLs com Rebrandly API

## Descrição

Este projeto utiliza a API da Rebrandly para transformar URLs longas em links curtos. O usuário informa uma URL através de um campo de entrada e, ao clicar em um botão, o sistema envia uma requisição para a API da Rebrandly e retorna o link encurtado.

---

## Funcionamento

1. O usuário digita uma URL no campo de entrada.
2. O sistema verifica se a URL foi informada.
3. Uma requisição `POST` é enviada para a API da Rebrandly.
4. A API gera um link curto.
5. O link curto é exibido no próprio campo de entrada.

---
Requisitos

Antes de executar o projeto, certifique-se de possuir:

Visual Studio Code instalado;
Extensão Live Server instalada no VS Code;
Conexão com a internet para acessar a API da Rebrandly;
Uma chave de API válida da Rebrandly.

---

## Estrutura do Código

### Chave da API

```javascript
const key = 'SUA_CHAVE_API'
```

Armazena a chave utilizada para autenticar as requisições na API da Rebrandly.

---

### Seleção do Botão

```javascript
const btn = document.getElementById('btn')
```

Obtém a referência do botão presente na página.

---

### Função `valida()`

Responsável por:

* Capturar a URL digitada pelo usuário.
* Validar se o campo não está vazio.
* Criar os cabeçalhos da requisição.
* Montar o corpo da requisição.
* Enviar os dados para a API.
* Exibir o link encurtado retornado.

#### Captura da URL

```javascript
const url = document.getElementById('inpt').value
```

Obtém o valor digitado pelo usuário.

---

#### Validação

```javascript
if(!url){
    alert('Url invalida')
    return
}
```

Impede o envio da requisição caso o campo esteja vazio.

---

#### Cabeçalhos da Requisição

```javascript
let headers = {
    "content-Type": "application/json",
    "apiKey": "sua_chave_aqui"
}
```

Define o formato JSON e a chave de autenticação da API.

---

#### Corpo da Requisição

```javascript
let request = {
    destination: url,
    domain: {
        fullname: "rebrand.ly"
    }
}
```

Define:

* `destination`: URL original.
* `domain.fullname`: domínio utilizado para gerar o link curto.

---

#### Envio da Requisição

```javascript
fetch('https://api.rebrandly.com/v1/links', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(request)
})
```

Realiza uma requisição HTTP do tipo `POST` para a API da Rebrandly.

---

#### Tratamento da Resposta

```javascript
.then(response => response.json())
.then(json => {
    console.log(json.shortUrl);
})
```

Converte a resposta para JSON e exibe a URL encurtada no console.

---

#### Exibição do Resultado

```javascript
let table = document.getElementById('inpt')
table.value = json.shortUrl
```

Substitui o valor do campo de entrada pelo link encurtado gerado.

---

### Evento de Clique

```javascript
btn.addEventListener('click', valida);
```

Executa a função `valida()` quando o botão é pressionado.

---

## Exemplo de Uso

### Entrada

```text
https://www.google.com
```

### Saída

```text
rebrand.ly/abc123
```

---

## Melhorias Futuras

* Validação de URLs utilizando Expressões Regulares (Regex).
* Tratamento de erros da API.
* Exibição de mensagens de sucesso e falha.
* Botão para copiar o link encurtado.
* Uso de variáveis de ambiente para armazenar a chave da API.
* Interface responsiva para dispositivos móveis.

---

## Atenção

⚠️ Nunca publique sua chave da API em repositórios públicos. Utilize variáveis de ambiente ou um backend intermediário para proteger credenciais sensíveis.

## Objetivo
Desenvolver um aplicativo que consome APIs externas para obter informações meteorológicas e recomendações musicais, a partir de documentação.
Armazenar as informações apenas no storage do navegador, sem utilizar backend ou banco de dados.
Organizar a estrutura do projeto com componentes e outros recursos do Angular.

## Descrição do projeto
O Music Weather App permitirá que o usuário insira uma localização (cidade, latitude, longitude etc.) e buscará a temperatura relativa dessa localização na API do tempo (como a Weather API). Em seguida, o aplicativo solicitará recomendações musicais para a categoria de temperatura atual à API de música (como a Shazam API ou outras APIs semelhantes).

Se a temperatura for superior a 32 graus, serão exibidas recomendações de rock.
Se a temperatura estiver entre 24 e 32 graus, serão exibidas recomendações de pop.
Se a temperatura estiver entre 16 e 24 graus, serão exibidas recomendações de música clássica.
Se a temperatura for inferior a 16 graus, serão exibidas recomendações de música lo-fi.

Se a lista de músicas recomendadas for do agrado do usuário, ele poderá salvá-la no storage do navegador, juntamente com a data da busca, a lista de músicas, a temperatura, a cidade e a categoria das músicas.

O aplicativo terá uma página que exibirá a lista de músicas salvas por data no storage, permitindo que o usuário as exclua.

## APIs recomendadas
- https://openweathermap.org/current
- https://rapidapi.com/apidojo/api/shazam

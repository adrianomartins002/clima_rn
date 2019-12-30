# clima_rn
Projeto para criação de aplicativo para verificar o clima da região pelo gps

[Tela1](https://imgur.com/NoRZk3K)

# Iniciando
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto em um sistema ativo.

## Pré-requisitos:
Para execução e desenvolvimento do projeto é necessário, ou que tenha instalado:
- nodejs
- react-native
- yarn ou npm
- Android SDK


## Desenvolvido com
 - JavaScript
 - [React-Native](https://facebook.github.io/react-native/)
 - [react-native-svg](https://github.com/react-native-community/react-native-svg)
 - [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
 - [react-native-geolocation](https://github.com/react-native-community/react-native-geolocation)
 - [react-native-netinfo](https://github.com/react-native-community/react-native-netinfo)

### Atomic design
 - Para design e organização do projeto utilizei parte dos conceitos do Design atomico para aplicacoes react
 

## Executando os testes
<!-- - Para execução dos testes unitários basta utilizar o comando ```  ``` na pasta raiz do projeto. -->

## Execução pro projeto
 - Para executar o aplicativo pela avd do android sdk basta baixar os pacotes do package.json utilizando o comando ``` yarn ou npm install ``` e logo após o download terminar, utilizar o comando ``` react-native run-android ```.

## Autores
- Adriano Martins de Oliveira Sousa.

## Api para dados de clima
 - [Open Weather](https://openweathermap.org/)

## Imagens e SVG (Autores)
    Algumas das imagens e svg's grátis que utilizei vieram do site [Flaticon](https://www.flaticon.com/)
- Autores :

    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    
    <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->



## Arquitetura do projeto	

	```
	shared
		-stacks
			-carregamento
			-principal
		-common
			-apis
			-assets
			-services
		-components
			-atoms
			-molecules
			-organisms
	```

### Stacks
	- Parte do projeto onde conterá os fluxos para transição entre as telas
	- Fiz uso do react-navigation para a transição, ele já possui um conceito de container, switch e stack de navegação, a parte de stack foi meio que pensada nisso
	A stack de carregamento por exemplo, monta a page de carregamento, e permissão de localização, para caso o usuário não dê permissão realizar a transição entre elas
	A stack principal, como o próprio nome já diz, contem a tela principal onde mostrará as informações de clima

### Common
	Coisas comuns para o projeto, entre elas: apis, assets e services
	Nesse caso foi levado em conta que services, seria a parte do projeto responsável por parte da lógica de requisição das informações, elas são montadas na parte de apis
	Para as requests, utilizei o axios

### Comoponents
	Essa parte foi criada pensando na idéia do atomic design para aplicações web/mobile, onde cada componente é criado e reutilizado

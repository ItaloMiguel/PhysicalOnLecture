class ContainerText {
    constructor(title, text, links) {
        this.title = title ?? "";
        this.text = text ?? "";
        this.links = links ?? "";
    }

    get getTitle() {
        return this.title;
    }

    get getText() {
        return this.text;
    }

    get getLinks() {
        return this.links;
    }
}


const sobreSite = new ContainerText(
    'Sobre o site', 
    'O site tem o objetivo de compartilhar e ensinar sobre ciências exatas e da terra de forma divertida, com aniamções e desenhos. Além disso com o código aberto para o público poder pegar e melhorar.'
);
const softwareLivre = new ContainerText(
    'O que é código aberto?', 
    ['Código aberto é um jeito de produzir software sem fins lucrativos que permite a qualquer pessoa modificar e compartilhar. Para mais detalhes acesse essa página', 'Código do software disponível nesse'], 
    ['https://pt.wikipedia.org/wiki/Software_de_c%C3%B3digo_aberto', '#']
);

export let listOfContainerText = [sobreSite, softwareLivre];
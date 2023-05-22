#### 1.Crie um componente chamado ParentComponent que tenha uma propriedade chamada message. Exiba essa mensagem em um parágrafo no template do componente.

#### 2.Crie um componente chamado ChildComponent que tenha uma propriedade chamada inputValue decorada com @Input(). Exiba o valor de inputValue em um parágrafo no template do componente.

#### 3.No ParentComponent, crie uma instância do ChildComponent e passe a mensagem do ParentComponent para a propriedade inputValue do ChildComponent.

#### 4.Adicione um botão no ParentComponent que permita ao usuário atualizar a mensagem exibida no ChildComponent. Quando o botão for clicado, atualize a mensagem no ParentComponent e verifique se a mensagem é atualizada corretamente no ChildComponent.

#### 5.Crie um novo componente chamado GrandchildComponent que também tenha uma propriedade chamada inputValue decorada com @Input(). Exiba o valor de inputValue em um parágrafo no template do componente.

#### 6.No ChildComponent, crie uma instância do GrandchildComponent e passe o valor da propriedade inputValue do ChildComponent para a propriedade inputValue do GrandchildComponent.

#### 7.No ParentComponent, crie um botão que permita ao usuário atualizar a mensagem exibida no GrandchildComponent. Quando o botão for clicado, atualize a mensagem no ParentComponent e verifique se a mensagem é atualizada corretamente no ChildComponent e no GrandchildComponent.

#### 8.Experimente passar outros tipos de dados, como números ou objetos, para as propriedades decoradas com @Input() e verifique se os valores são exibidos corretamente nos componentes filhos.

#### 9.Crie um componente adicional e pratique a comunicação entre os componentes pai e filho usando @Input(). Experimente diferentes combinações de hierarquia de componentes e veja como os valores são propagados e exibidos.

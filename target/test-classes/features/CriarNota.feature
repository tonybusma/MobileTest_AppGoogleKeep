#language: pt
#encoding: UTF-8
@totalTest
Funcionalidade: Google keep

Contexto: 
Dado que eu aciono o get started

@newNote
Cenario: criar uma nota
Quando eu criar uma nova nota
E eu informar no campo title "Nota 1"
E eu informar no campo note "Esta nota é um teste"
E eu acionar o botao voltar
Entao o aplicativo cadastra a nota com o titulo "Nota 1"

@switch
Cenario: interagir com switch das configuracoes
Quando eu acionar o menu
E eu acionar a aba settings
E eu tocar no switch
Entao o switch fica desabilitado

@delete
Cenario: excluir nota
Quando eu tocar e segurar a nota
E eu acionar as opcoes
E eu tocar em deletar
Entao o sistema adiciona a nota na lixeira

@scroll
Cenario: rolar e selecionar nota
Quando eu selecionar a nota

@swide
Cenario: arrastar nota para a direita
Quando arrastar a nota para a direita
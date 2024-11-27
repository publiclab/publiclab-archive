---
nid: 13155
title: T-Box
path: public/static/notes/GSan/05-30-2016/therminator-box-thermal-arduino-incubator-box.md
uid: 426547
tagnames: culture,water-quality,box,thermal,brasil,barnstar:photo-documentation,redeinfoamazonia,maedagua,microbiological,ecoli,incubator,therminator
---

# T-Box

###Therminator Box  - Thermal arduino incubator Box - V1.1.0

### Caixa térmica de incubação microcontrolada. 
### Microcontrolled Thermal Incubator Box 

O objetivo da Therminator Box é manter uma incubadora para cultura de bactérias com temperatura controlada. Quando ligada, a caixa procurará se regular automaticamente com a temperatura selecionada pelo botão angular (potenciômetro) desde que a temperatura desejada seja maior que a do ambiente. Caso deseje resfriar o ar da incubadora o lado da pastilha peltier deverá ser invertido ao desta montagem.

##Como fazer
##How-To

###Materiais necessários

1 Arduino UNO https://www.arduino.cc/en/Main/ArduinoBoardUno atualizado com firmware therminator-box: https://github.com/guimasan/therminator-box ;

1 Mini BreadBoard https://www.sparkfun.com/products/12043 ;

1 Transistor NPN TIP122 - https://cdn-shop.adafruit.com/datasheets/TIP120.pdf ;

1 Fonte 12Volts 5A (no mínimo);

Fios para eletrônica ;

1 Pastilha peltier 12V ~ 40W http://peltiermodules.com/peltier.datasheet/TEC1-12705.pdf ;

[![IMG_7377_v1.JPG](//i.publiclab.org/system/images/photos/000/016/410/large/IMG_7377_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/410/original/IMG_7377_v1.JPG)


1 Dissipador com relevo do tamanho da pastilha:

[![IMG_7364_v1.JPG](//i.publiclab.org/system/images/photos/000/016/411/large/IMG_7364_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/411/original/IMG_7364_v1.JPG)

1 Dissipador do tamanho da pastila peltier:

[![IMG_7389.JPG](//i.publiclab.org/system/images/photos/000/016/420/large/IMG_7389.JPG)](//i.publiclab.org/system/images/photos/000/016/420/original/IMG_7389.JPG)

1 Caixa plástica (Incubadoras que fiquem com temperatura de até 60⁰C):

[![IMG_7365_v1.JPG](//i.publiclab.org/system/images/photos/000/016/412/large/IMG_7365_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/412/original/IMG_7365_v1.JPG)


1 Sensor de temperatura:
http://www.seeedstudio.com/wiki/Grove_-_Temperature_Sensor

[![IMG_7399.JPG](//i.publiclab.org/system/images/photos/000/016/421/large/IMG_7399.JPG)](//i.publiclab.org/system/images/photos/000/016/421/original/IMG_7399.JPG)

1 Display LCD:
https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight
http://www.seeedstudio.com/wiki/Grove_-_LCD_RGB_Backlight


###Construção

Marque o tamanho do relevo do dissipador escolhido, para que apenas essa área fique em contato com a parte interna da incubadora.
Faça um corte na caixa plástica:


[![IMG_7381.JPG](//i.publiclab.org/system/images/photos/000/016/415/large/IMG_7381.JPG)](//i.publiclab.org/system/images/photos/000/016/415/original/IMG_7381.JPG)


[![IMG_7371_v1.JPG](//i.publiclab.org/system/images/photos/000/016/413/large/IMG_7371_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/413/original/IMG_7371_v1.JPG)

Acople o dissipador, se necessário pode ser colada a parte de baixo na caixa plástica com silicone de alta temperatura:

[![IMG_7375_v1.JPG](//i.publiclab.org/system/images/photos/000/016/414/large/IMG_7375_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/414/original/IMG_7375_v1.JPG)

Passe pasta térmica no dissipador e na pastilha peltier. Coloque o lado que resfria da pastilha com o dissipador externo da caixa:

[![IMG_7388.JPG](//i.publiclab.org/system/images/photos/000/016/416/large/IMG_7388.JPG)](//i.publiclab.org/system/images/photos/000/016/416/original/IMG_7388.JPG)

Adicione um dissipador menor que fará o papel de aquecer o ar interno da incubadora:

[![IMG_7389.JPG](//i.publiclab.org/system/images/photos/000/016/418/large/IMG_7389.JPG)](//i.publiclab.org/system/images/photos/000/016/418/original/IMG_7389.JPG)


[![IMG_7394.JPG](//i.publiclab.org/system/images/photos/000/016/419/large/IMG_7394.JPG)](//i.publiclab.org/system/images/photos/000/016/419/original/IMG_7394.JPG)

Coloque o sensor de temperatura próximo de onde ficará a amostra incubada:

[![IMG_7415_v1.JPG](//i.publiclab.org/system/images/photos/000/016/422/large/IMG_7415_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/422/original/IMG_7415_v1.JPG)

A amostra não deve ficar sobre o dissipador interno pois o mesmo ficará com temperatura superior enquanto mantém o ar a caixa em temperatura controlada. 

Conecte um Transistor NPN Darlington TIP122 na protoboard:
https://cdn-shop.adafruit.com/datasheets/TIP120.pdf

[![IMG_7408_v1.JPG](//i.publiclab.org/system/images/photos/000/016/423/large/IMG_7408_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/423/original/IMG_7408_v1.JPG)

Conecte o fio negativo (preto)  da pastilha peltier no pino 2 do transistor TIP122 e o fio positivo (vermelho) da pastilha conecte na saída Vin do arduino

[![IMG_7412_v1.JPG](//i.publiclab.org/system/images/photos/000/016/424/large/IMG_7412_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/424/original/IMG_7412_v1.JPG)

Conecte o sensor de temperatura na entrada A0 do Arduino (Neste exemplo o Arduino está com um shield de conexão (Groove Seeedstudio)
[![IMG_7419_v1.JPG](//i.publiclab.org/system/images/photos/000/016/425/large/IMG_7419_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/425/original/IMG_7419_v1.JPG)

Conecte um potenciômetro (sensor angular resistivo) na entrada A1 do Arduino

[![IMG_7420_v1.JPG](//i.publiclab.org/system/images/photos/000/016/426/large/IMG_7420_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/426/original/IMG_7420_v1.JPG)

Conecte o pino 3 do transistor TIP122 no GND do Arduino

[![IMG_7421_v1.JPG](//i.publiclab.org/system/images/photos/000/016/427/large/IMG_7421_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/427/original/IMG_7421_v1.JPG)

Faça um dissipador de calor para o transistor TIP122. Passe pasta térmica na carcaça de junção dos metais
[![IMG_7426_v1.JPG](//i.publiclab.org/system/images/photos/000/016/430/large/IMG_7426_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/430/original/IMG_7426_v1.JPG)

Conecte o pino 1 do transistor TIP122 na saída digital 3 ~ PWM do Arduino

[![IMG_7425_v1.JPG](//i.publiclab.org/system/images/photos/000/016/428/large/IMG_7425_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/428/original/IMG_7425_v1.JPG)

[![IMG_7424_v1.JPG](//i.publiclab.org/system/images/photos/000/016/429/large/IMG_7424_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/429/original/IMG_7424_v1.JPG)

Tampe a caixa e adicione o Display LCD
[![IMG_7429_v1.JPG](//i.publiclab.org/system/images/photos/000/016/431/large/IMG_7429_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/431/original/IMG_7429_v1.JPG)


[![IMG_7430_v1.JPG](//i.publiclab.org/system/images/photos/000/016/432/large/IMG_7430_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/432/original/IMG_7430_v1.JPG)


Conecte a fonte 12V 5A no Arduino e ajuste no potênciometro a temperatura na qual o dissipador deverá chegar e manter o ar da caixa aquecido

[![IMG_7431_v1.JPG](//i.publiclab.org/system/images/photos/000/016/433/large/IMG_7431_v1.JPG)](//i.publiclab.org/system/images/photos/000/016/433/original/IMG_7431_v1.JPG)

###Questões e próximos passos
###Questions and next steps


[1]Esta estufa ainda não é capaz de trabalhar com temperaturas maiores que 60⁰C por muito tempo por conta de uma limitação no tip122.

[2]Pensando em acessibilidade e facilidade de replicação, uma versão simples (SV) foi desenvolvida:

#Therminator Box SV (Small Version)


[![therminatorBoxSV_bb.png](//i.publiclab.org/system/images/photos/000/016/471/large/therminatorBoxSV_bb.png)](//i.publiclab.org/system/images/photos/000/016/471/original/therminatorBoxSV_bb.png)



firmware: https://github.com/guimasan/therminator-box/blob/master/therminatorBoxSV.ino

Edite no código a temperatura (em graus Celsius) desejada, ex.:

[...]define TEMP 37 (37 é a temperatura desejada);

Proceda a montagem como no tutorial acima, substituindo o termistor sensor de temperatura da Grove Kit pelo lm35 e a fiação necessária. 

Substitua o LCD Display pelo LED RGB Anôdo comum. 
O TherminatorBox SV ligará:

LED Azul quando a temperatura estiver abaixo do desejado;

LED Verde quando a temperatura estiver equilibrada com o desejado;

LED Vermelho quando a temperatura estiver acima do dejesado;

Pode ser comum o LED Vermelho ligar quando a estufa estiver se equilibrando com a temperatura, por causa do delay entre o aquecimento do ar e o da pastilha. 

Espere aproximadamente 10min para que a incubadora fique em temperatura equilibrada.

###Why I'm interested
###Qual meu interesse

Incubar culturas de e.coli em aproximadamente 37⁰C constante.

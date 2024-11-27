---
nid: 30705
title: Construya un sensor de conductividad Coqui generador de sonido
path: public/static/notes/alejobonifacio/05-10-2022/construya-un-sensor-de-conductividad-coqui-generador-de-sonido.md
uid: 639376
tagnames: water-quality-sensor,lang:es,coqui,activity:coqui,water-conductivity,zoom:7,lon:-64,lat:-31,agua,research-curation-fellows,calidad-de-agua
---

# Construya un sensor de conductividad Coqui generador de sonido

_Esta es una traducción de la_ [<em>nota</em>]
_([https://publiclab.org/notes/warren/03-01-2019/build-a-sound-generating-coqui-conductivity-sensor](https://publiclab.org/notes/warren/03-01-2019/build-a-sound-generating-coqui-conductivity-sensor)) escrita por @warren, @asnow y @zengirl2_

Esta es una guía para construir el Coqui: una versión compacta y ligeramente refinada del sensor de conductividad del agua Coqui. El Coqui lleva el nombre de una pequeña rana, porque en lugar de producir una salida numérica, hace un ruido.

Es bastante fácil de construir, y en este tutorial, lo guiaremos a través de la construcción con una mini protoboard. Las piezas son bastante pequeñas, pero debería poder ensamblarlas en 20 minutos o menos.

Necesitará las piezas de un kit de Coqui, disponible en la [tienda Public Lab](https://store.publiclab.org/collections/diy-tools-sensors), o puede buscar a continuación para encontrar las piezas usted mismo.

![image description](/i/46646.jpg "1.jpg")

# Lista de piezas

- [Mini protoboard de 170 puntos](https://articulo.mercadolibre.com.ar/MLA-705949153-mini-protoboard-de-170-puntos-experimentador-arduino-nubbeo-_JM#position=1&search_layout=grid&type=pad&tracking_id=165b1d34-fcc2-4bc8-be5e-8f298464f824&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=NWM2NGQxNTgtNzU1MS00ZmVlLWI5NjgtMmM5ZWJmMTY1NzRk)
- [Zumbador piezoelectrico](https://articulo.mercadolibre.com.ar/MLA-1105666220-buzzer-zumbador-pasivo-16-ohms-universal-_JM#position=3&search_layout=grid&type=item&tracking_id=e0648a2e-490c-4d5f-84d6-2132a272c14d)
- [Capacitor cerámico](https://articulo.mercadolibre.com.ar/MLA-795403680-pack-x10-capacitor-ceramico-100nf-01uf-104-arduino-nubbeo-_JM#position=1&search_layout=grid&type=item&tracking_id=f342a173-1d6d-445d-b3cb-125b0d00a7ee)
- [Circuito integrado 555](https://articulo.mercadolibre.com.ar/MLA-905098754-circuito-integrado-ne555-timer-temporizador-555-nubbeo-_JM#position=2&search_layout=grid&type=item&tracking_id=aecf4256-7a40-4ac7-b303-c82aa73036e1)
- [Fotoresistencia](https://articulo.mercadolibre.com.ar/MLA-706340541-10-x-fotorresistencias-ldr-5mm-sensor-de-luz-fotoresistor-_JM?searchVariation=41841440717#searchVariation=41841440717&position=2&search_layout=grid&type=item&tracking_id=84344a3f-bfe6-46cc-86c8-e7268e76e103)
- [Cables dupont macho-macho](https://articulo.mercadolibre.com.ar/MLA-870464332-pack-40-cables-macho-macho-10cm-dupont-_JM#position=5&search_layout=grid&type=item&tracking_id=6032ffa6-4e0d-43eb-af5d-bd86b754441d)
- [Resistor](https://articulo.mercadolibre.com.ar/MLA-728781831-resistencia-1w-10000-ohms-10k-carbon-5-pack-x10-_JM#position=6&search_layout=grid&type=item&tracking_id=8defe3ca-34bf-41e1-bca1-b4ab22ba252e)

# 9 pasos

Esta imagen muestra los nueve pasos para ensamblar en una sola imagen y se puede usar para ejecutar un taller casi solo! Pero vamos a caminar a través de los pasos uno por uno a continuación. También puede observar un [video de la construcción del Coqui](https://publiclab.org/notes/imvec/09-22-2020/haam-3-sensor-de-conductividad-coqui) hecho por @imvec.

![image description](/i/46647.jpg "2.jpg")

Aquí hay un diagrama de Fritzing estándar del circuito de @zengirl2 que es un buen folleto. Si está familiarizado con Fritzing, puede ayudarlo paso a paso. ¡Sin embargo, las fotos a continuación también funcionan!

![image description](/i/46648.png "3.png")

# Paso 1

Disponga todas las partes del kit sobre una mesa. El kit que se vende en Public Lab Store viene con piezas adicionales, especialmente cables adicionales. Se muestran cables de las longitudes necesarias; el resto son extras. Incluimos algunos que mantienen su forma cuando se doblan y otros que no; Aquí se muestran algunos que mantienen su forma, y encontramos que los otros se ensucian un poco y son difíciles de leer después de la instalación (vea algunas imágenes aquí).

**Nota sobre los colores:** desafortunadamente, no hemos encontrado que los colores de los cables no siempre representen cables de la misma longitud, por lo tanto, vaya por longitud, no por color. ¡Lo sentimos! **Doblar cables:** vea cómo hemos doblado el cable más largo en forma de "J" o "G"; esto tendrá sentido en un minuto cuando veas cómo se enchufa. **Conseguir cables:** los cables Ethernet internamente tienen filamentos de cobre forrados en distintos colores, son maleables e ideales para usarse en el diseño de un Coqui.

![image description][1]


# Paso 2

Coloque la pieza negra de 8 patas de modo que se extienda a ambos lados del "canal" central. También tiene una dirección "hacia arriba correcta"; vea la siguiente imagen.

![image description](/i/46649.jpg "4.jpg")

Esta pieza es el temporizador, llamado "temporizador 555". Una vez que terminemos, generará pulsos rápidos de electricidad que sonarán como un zumbido.

Aquí vea el pequeño círculo que indica el camino correcto hacia arriba:

![image description](/i/46650.jpg "5.jpg")

# Paso 3

Coloque un cable a través del temporizador en diagonal, desde la 2da pata hacia abajo a la izquierda, hasta la 3era hacia abajo a la derecha, como se muestra. Use un cable corto, pero si no permanece adentro, pruebe con uno un poco más largo.

Las patas deben entrar de forma segura en los agujeros que se muestran; es posible que tengas que usar la uña para empujarlos. Muévelo un poco si no entra al principio.


![image description](/i/46651.jpg "6.jpg")

# Paso 4

Ahora agregue un segundo cable en diagonal hacia el otro lado, desde el lado superior derecho hasta el lado inferior izquierdo. Será un poco más largo que el último cable.


![image description](/i/46652.jpg "7.jpg")

Tenga en cuenta que todas las filas están conectadas horizontalmente en conjuntos de cinco, por lo que cuando colocamos los cables uno al lado del otro en una fila, se conectan. Las conexiones son como se muestra en las líneas de esta imagen:

![image description](/i/46653.jpg "8.jpg")

# Paso 5

Ahora coloque el pequeño componente en forma de tubo (una resistencia) en la fila superior, uniendo el canal (a veces será azul, pero se nota por las rayas de colores). Una vez conectado, esto ayudará a disminuir los pulsos del temporizador para que no sean de frecuencia demasiado alta. No importa la dirección en la que lo conectes.

Este componente (y algunos de los otros) pueden entrar o permanecer más fácilmente si recorta las piernas con un alicate. Unas tijeras grandes también pueden funcionar. También podrías probar con un cortaúñas... ¿funcionará?

![image description](/i/46654.jpg "9.jpg")

# Paso 6

Ahora conectamos el lado derecho de la resistencia a la tercera pata por el lado izquierdo del temporizador como se muestra en la siguiente imagen. Simplemente puede enchufarlo, pero ayuda un poco hacer la forma de "J" o "G" al revés que se muestra aquí, para mantener las cosas ordenadas.

![image description](/i/46655.jpg "10.jpg")

# Paso 7

Ahora agregue un cable recto desde la segunda fila superior izquierda (uno debajo de la resistencia, por lo que no está conectado a ella) hasta la segunda pata del lado izquierdo del temporizador, como se muestra en la siguiente imagen.

![image description](/i/46656.jpg "11.jpg")

# Paso 8

Ahora agregamos el pequeño componente amarillo-naranja plano, llamado capacitor (tiene forma de lenteja). Almacena un poco de electricidad, que se acumula hasta que el temporizador emite un pulso. Conéctelo desde la segunda fila superior izquierda (justo al lado del último cable) hasta la pata superior izquierda del temporizador, como se muestra en la siguiente imagen. No importa en qué dirección para este tipo de capacitor.

Descubrí que era útil convertirlo en una "postura de piernas anchas" como se muestra en la última imagen.

![image description](/i/46657.jpg "12.jpg")

# Paso 9

Ahora agregue el gran componente redondo negro en forma de botón, el zumbador. Llamado zumbador piezoeléctrico, es el "altavoz" en este circuito. Conéctelo a la pata superior izquierda del temporizador y la pata que está en el tercer lugar desde la parte superior izquierda, como se muestra en la siguiente imagen. No importa la dirección en la que lo conectes.

Lo aplané un poco para que se pueda ver mejor, y me gusta así.

![image description](/i/46658.jpg "13.jpg")

# Paso 10

Ahora necesitamos agregar los cables de la sonda, que sumergirás en agua para probarlos. Dos más largos, conectados entre sí, funcionan mejor, pero también puede pegar dos juntos. Se conectan a la fila superior izquierda y la fila debajo de ella.

Nota sobre el sensor de luz (fotoresistencia): hemos incluido un componente más en la mayoría de los kits, un componente muy plano con un garabato de metal impreso en la parte superior. Es un sensor de luz, y si quiere probar el circuito sin agua al principio, puede enchufarlo en lugar de estas sondas, y detectará luz en lugar de conductividad. Una vez que lo tengas funcionando, puedes volver a cambiar.

![image description](/i/46659.jpg "14.jpg")

# Paso 11

Ahora enchufamos una batería. Puedes usar 2 pilas AA, solo una, o una pila de 9 voltios. Más potencia (9v es más de dos AA) será más fuerte. Esta vez, qué cable va a dónde es importante. El cable rojo es + (positivo) y se conecta a la pata inferior izquierda del temporizador (o cualquier espacio directamente a la izquierda del mismo; ¡recuerde cómo se conectan las filas en conjuntos de 5!). El cable negro es - (negativo) y va a la pata superior izquierda del temporizador, como se muestra en la siguiente imagen.

![image description](/i/46660.jpg "15.jpg")

# Probandolo

Ahora está listo para sumergir los cables de la sonda en un poco de agua. Puede probar con agua del grifo, agua destilada y agua salada (como una solución de contacto).

![image description](/i/46661.jpg "16.jpg")

## Protegiendo el circuito

Con el tiempo, los cables pueden salirse. Si está totalmente seguro, puede poner un montón de pegamento caliente sobre el circuito, pero parece una pena taparlo. O podría pegar los cables con cinta adhesiva. Puede ser útil quitar la parte posterior y pegar todo en una caja, como una botella de agua cortada por la mitad.

¡Lea sobre más que puede hacer con el Coqui en esta página, incluidas actividades y actualizaciones!

[https://publiclab.org/coqui](https://publiclab.org/coqui)

  [1]: /i/46663.jpg "q.jpg"
---
title: "¿Cómo hago una serie de diluciones para calibrar un Coqui para medir sólidos disueltos totales (STD)?"

tagnames: 'calibration, water-quality, lang:es, coqui, activity:coqui, activity:new, zoom:6, lon:-64, lat:-31, conductividad, coqui-conductivity'
author: alejobonifacio
path: /notes/alejobonifacio/05-03-2022/como-hago-una-serie-de-diluciones-para-calibrar-un-coqui-para-medir-solidos-disueltos-totales-std.md
nid: 30545
uid: 639376
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/046/324/original/Dilution-grenadine.jpg)

# ¿Cómo hago una serie de diluciones para calibrar un Coqui para medir sólidos disueltos totales (STD)?

by [alejobonifacio](/profile/alejobonifacio) | May 03, 2022 20:45

May 03, 2022 20:45 | Tags: [calibration](/tag/calibration), [water-quality](/tag/water-quality), [lang:es](/tag/lang:es), [coqui](/tag/coqui), [activity:coqui](/tag/activity:coqui), [activity:new](/tag/activity:new), [zoom:6](/tag/zoom:6), [lon:-64](/tag/lon:-64), [lat:-31](/tag/lat:-31), [conductividad](/tag/conductividad), [coqui-conductivity](/tag/coqui-conductivity)

----

_Foto de portada bajo licencia CC 2.5, autor de la foto [Leridant~commonswiki](https://commons.wikimedia.org/wiki/User:Leridant~commonswiki)_

## Propósito

Para poder calibrar un Coqui es necesario hacer una serie de diluciones en donde tengamos cantidades conocidas de algún sólido soluble en agua, como la sal de mesa, llamada también cloruro de sodio, NaCl es su fórmula química. De esta manera vamos a poder comparar en un gráfico la distancia entre picos de sonido que genera Coqui cuando sus dos patitas metálicas están en contacto con el agua con la cantidad conocida de sólido disuelto en la solución que preparamos. De esta manera, con unos simples cálculos, podremos tener una idea estimada de qué cantidad de sales disueltas hay por ejemplo en un río o laguna que deseemos estudiar.

## Materiales necesarios

- Sal de mesa, sobrecitos de los que entregan en los bares y restaurantes
- Agua destilada (con una cantidad despreciable de sales disueltas)
- Recipientes de vidrio
- Jeringas descartables de 30, 10 y 1 mL
- [Coqui](https://publiclab.org/notes/imvec/09-22-2020/haam-3-sensor-de-conductividad-coqui)

---------

## Paso 1: Lavado del material :droplet:

Lava cuidadosamente los recipientes de vidrio en donde vas a hacer las mediciones con agua de la canilla y detergente. Enjuaga con agua de la canilla hasta que no se vea más espuma ni burbujas en el agua de enjuague. Llena y vacía los recipientes 5 veces con agua de la canilla. Llena y vacía los recipientes 5 veces con agua destilada. Repite estos pasos con las jeringas.

## Paso 2: Realiza una solución madre ⚗️

De la solución madre vamos a tomar fracciones para armar las distintas diluciones. Para prepararla vamos a colocar en un recipiente de vidrio 100mL de agua destilada midiendo los volúmenes con las jeringas o un vaso medidor. Al recipiente con agua destilada le agregamos un sobrecito de sal de mesa de 1g. Si bien estos sobrecitos poseen aditivos su componente mayoritario es el cloruro de sodio. De esta manera vamos a obtener una solución de 10 g/L. A este valor llegamos haciendo el siguiente cálculo: 1g de sal / 0,1L de agua destilada = 10g/L.

## Paso 3: Preparación de las disoluciones 🧪

Ahora nos toca preparar las diluciones a partir de la madre. Estas las haremos en el rango de los 0,1 - 0,5 g/L, que fue en \[las concentraciones en donde mejor funcionó la curva\](link al post de calibración). Teniendo en cuenta que por mL de la solución madre, hay 0,01 g haremos las soluciones con las siguientes cantidades de solución madre y agua destilada:  
**0,1 g/L =** 1 mL de solución madre + 99 mL agua destilada =\> Volumen final de la solución 100 mL  
**0,2 g/L =** 2 mL de solución madre + 98 mL agua destilada =\> Volumen final de la solución 100 mL  
**0,3 g/L =** 3 mL de solución madre + 97 mL agua destilada =\> Volumen final de la solución 100 mL  
**0,4 g/L =** 4 mL de solución madre + 96 mL agua destilada =\> Volumen final de la solución 100 mL  
**0,5 g/L =** 5 mL de solución madre + 95 mL agua destilada =\> Volumen final de la solución 100 mL

## Paso 4: Medición del sonido producido por Coqui 🎙️

Para medir la concentración de SDT en nuestra muestra de agua lo que haremos será grabar el sonido que produce Coqui cuando se sumergen sus dos patitas metálicas en agua en cada una de las 5 soluciones preparadas. Luego con el software libre [audacity](https://www.audacityteam.org/download/)
mediremos la distancia entre "beeps" que realiza el Coqui para cada una de las soluciones y la expresaremos en milisegundos. Esta medición fue explicada en más detalle en un [post anterior](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor)![image description](/i/46633.png "dep.png")

## Paso 5: Armando la curva 📈

Luego usando una planilla de cálculo (libreoffice, excel, google sheets, etc) armaremos una planilla con 3 columnas. La primer columna es el nombre que le damos a la solución, ya sea una solución para la curva o una muestra de SDT desconocidos. La segunda columna tendrá los valores de concentración de sal expresados en g/L y la tercera la distancia entre "beeps que hace el Coqui" expresada en milisegundos. A partir de la tabla haremos un gráfico de dispersión, con los valores de SDT en el eje "x" y los valores del Coqui en el eje "y". Mientras más derecha es la recta mejor es la calibración del Coqui, dato que observaremos como R2\. Para no tener que hacer el archivo desde cero recomiendo hacer una copia de la siguiente [tabla](https://docs.google.com/spreadsheets/d/1OooPjyyKg0riMqr5FVWwofmYdo731_Rhn4wwolopB7o/edit#gid=0) y reemplazar con los valores que obtengamos.

## Paso 6: Obtención de una ecuación de regresión 🤓

En la misma planilla de cálculo a partir del gráfico podremos hacer una regresión lineal y generar una ecuación de regresión con la siguiente forma:
_aX+b=Y_
Donde _a_ es la pendiente, _X_ es el valor de SDT, _b_ es la ordenada al origen, e _Y_ es la distancia entre "Beeps" que genera el Coqui.
Entonces con la grabación del audio de Coqui de algún río podríamos estimar que cantidad de SDT hay en un río y a partir de esto empezar a monitorearlo para detectar cambios

---------

## Cerrando

El agua de ríos y arroyos suele tener valores de SDT que pueden estar entre los 0,1 - 0,5 g/L, especialmente si son de montaña. Con Coqui y esta curva hecha podemos empezar a monitorear valores de SDT en ríos y compartirlos en PublicLab. Aún queda mucho por aprender de Coqui pero la mejor forma de que lo sigamos haciendo es compartiendo nuestros resultados.

_Cualquier duda o sugerencia por favor no dudes en hacerla como comentario..._
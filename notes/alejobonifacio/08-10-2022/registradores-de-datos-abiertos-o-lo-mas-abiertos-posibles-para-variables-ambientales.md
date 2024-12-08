---
title: Registradores de datos abiertos (o lo más abiertos posibles) para variables ambientales
tagnames: lat:0, lon:0, zoom:0
author: alejobonifacio
path: /notes/alejobonifacio/08-10-2022/registradores-de-datos-abiertos-o-lo-mas-abiertos-posibles-para-variables-ambientales.md
nid: 34859
uid: 639376

---

# Registradores de datos abiertos (o lo más abiertos posibles) para variables ambientales

by [alejobonifacio](../profile/alejobonifacio) August 10, 2022 19:51

August 10, 2022 19:51 | Tags: [lat:0](../tag/lat:0), [lon:0](../tag/lon:0), [zoom:0](../tag/zoom:0)

Hola gente! Paso por acá solo para comentarles que voy a estar compartiendo instrucciones para la  construcción de registradores de datos con Hardware Abierto a través de [una página de gitHub](https://github.com/Open-Hardware-Leaders/LoRa-Data-Loggers-for-environmental-quality). La página aun está principalmente en inglés pero la idea es ir haciendo una documentación diferente, más como el proyecto abierto y participativo requiere. Por lo pronto, vamos a las instrucciones para medir variables, luego registrarlas y cada vez ir haciendo a los dispositivos lo más independientes de los cables que se pueda.

 # Motivación
El origen de todo esto es tratar de estudiar en mayor profundidad el deterioro de los ambientes acuáticos que está sufriendo la provincia de Córdoba en Argentina y que esto pueda servir para otras partes del mundo.

# La tecnología
La idea de poder llevar a cabo algo de esto surge de un hermoso proyecto llamado [The Cave Pearl Project](https://thecavepearlproject.org/). Ellos han hecho una documentación maravillosa de los registradores a partir de microcontroladores Arduino. La idea es brindar a partir de ellos y otras fuentes los pasos para llegar a armar un registrador en español y de esta manera hacerlo lo más accesible a los hispanohablantes.

# Algunas pruebas
Los últimos días armé un registrador de datos basado en Arduino Uno y un sensor de temperatura. Un desafío fue encontrar un contenedor para el mismo que sea hermético para que pueda ir debajo del agua sin temor a que el agua dañe la electrónica. Paso algunas fotos de éxito y de fracaso...  
![image description][1]
![image description][2]
![image description][3]  
_El frasco de aceitunas no sirvió, en cuanto quise hacer girar la tapa la silicona que fijaba el termómetro a la tapa se despegó :(_
![image description][4]
![image description][5]
![image description][6]
![image description][7]  
_Lo que por ahora me anduvo fue un contenedor de alimentos hermético, es más la última foto es con el registrador del agua tomando valores de temperatura_

  [1]: /i/46995.jpg "IMG_20220807_223830.jpg"
  [2]: /i/46996.jpg "IMG_20220808_223114.jpg"
  [3]: /i/46997.jpg "IMG_20220808_223134.jpg"
  [4]: /i/46998.jpg "IMG_20220808_224639.jpg"
  [5]: /i/46999.jpg "IMG_20220808_224457.jpg"
  [6]: /i/47000.jpg "IMG_20220808_224732.jpg"
  [7]: /i/47001.jpg "IMG_20220808_225224.jpg"
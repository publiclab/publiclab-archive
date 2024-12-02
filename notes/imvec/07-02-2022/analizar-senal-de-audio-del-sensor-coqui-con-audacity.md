---
nid: 31177
title: Analizar señal de audio del sensor Coqui con Audacity
path: public/static/notes/imvec/07-02-2022/analizar-senal-de-audio-del-sensor-coqui-con-audacity.md
uid: 495038
tagnames: water-quality,water-quality-sensor,conductivity,lang:es,coqui,activity:coqui,with:xose,water-conductivity,agua,calidad-de-agua,conductividad
---

# Analizar señal de audio del sensor Coqui con Audacity

### Que queremos hacer
Determinar la frecuencia de la onda generada por el [sensor de conductividad Coqui](https://publiclab.org/wiki/coqui).

### Nuestro intento y resultados
AUDIO FILE → <a href="/i/25188"><i class="fa fa-file"></i> LS_51372.ogg</a>

Después de [grabar la señal que genera nuestro sensor de conductividad Coqui](https://publiclab.org/notes/imvec/06-09-2018/coqui-wave-audio-recording) midiendo una muestra de agua embotellada Bezoya a la que añadimos un poco de sal hacia el final de la grabación, abrimos el archivo con la aplicación Audacity. Obtuvimos esta onda.

[![bezoya.png](/i/25193)](/i/25193)

### Analizando parte de la onda
Hemos seleccionado 1/2 segundo de la señal más grave (agua Bezoya). Puedes hacerlo directmente en el timeline usando el cursor o en la parte baja de la interfaz.

[![selection.png](/i/25195)](/i/25195)

Una vez seleccionada, en el menú de la la parte superior ve a "Analyze → Plot spectrum". Para l parte mś baja de nuestra oda hemos obtenido esta curva.

[![low.png](/i/25196)](/i/25196)

Para la parte más aguda de la onda (a la que añadimo la sal) hemos obtenido este resultado tras seleccionar 1/2 segundo de la onda.

[![high.png](/i/25197)](/i/25197)

Audacity dispone de diferentes patrones de análisis y opciones. Juega un poco con ella.

## Preguntas y próximos pasos
Utilizar un producto de conductividad conocido y modificar la señal del Coqui con un potenciómetro para "afinar" esta señal de conductividad conocida a una nota musical?¿ ¿Alguien lo ha probado?
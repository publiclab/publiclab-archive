---
title: "Coqui para medir conductividad de un río"

tagnames: 'lang:es, coqui, south-america, lat:-30, zoom:5, research-curation-fellows, calidad-de-agua, lon:-60, solidos-disueltos-totales, conductividad, sudamerica, monitoreo'
author: alejobonifacio
path: /notes/alejobonifacio/04-14-2022/coqui-para-medir-conductividad-de-un-rio.md
nid: 30377
uid: 639376
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/045/755/original/Portada%281%29.png)

# Coqui para medir conductividad de un río

by [alejobonifacio](/profile/alejobonifacio) | April 14, 2022 19:00

April 14, 2022 19:00 | Tags: [lang:es](/tag/lang:es), [coqui](/tag/coqui), [south-america](/tag/south-america), [lat:-30](/tag/lat:-30), [zoom:5](/tag/zoom:5), [research-curation-fellows](/tag/research-curation-fellows), [calidad-de-agua](/tag/calidad-de-agua), [lon:-60](/tag/lon:-60), [solidos-disueltos-totales](/tag/solidos-disueltos-totales), [conductividad](/tag/conductividad), [sudamerica](/tag/sudamerica), [monitoreo](/tag/monitoreo)

----

#Introducción

Después de tratar de [calibrar un Coqui para conductividad del agua](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor) decidí probarlo en un río. Para esto me fuí al río Suquía, uno de los ríos más contaminados de la Argentina, pero a un sitio moderadamente contaminado, la Isla de los Patos, en el centro de la ciudad de Córdoba. Usé un Coqui con un resistor de 10 kohm y un capacitor de 10uf. Después de tener [ciertos inconvenientes con la calibración del Coqui](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor) recordé que los SDT (solidos disueltos totales), directamente relacionados con la conductividad del agua y que este sitio, por lo registrado en publicaciones científicas está en el rango de mejor linealidad (0,1-1g/L) de mi calibración. **Por lo tanto, me propuse como objetivo de este viaje ver si el Coqui podía dar información precisa usando como control un medidor de SDT comercial como control**. 

# Materiales

* Coqui
* Medidor de SDT comercial
* Teléfono móvil o algún dispositivo para grabar audio
* Vaso para recolectar agua
* Cuaderno o papel para tomar notas
* Programa de análisis de audio [Audacity](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor)

# Sitio de estudio
El sitio elegido es la Isla de los Patos en el río Suquía (en el centro de la ciudad de Córdoba). Este sitio fue previamente estudiado en un [estudio de caso](https://publiclab.org/notes/alejobonifacio/10-13-2021/el-desague-sospechoso-en-el-rio-suquia), con 3 sitios de muestreo, aguas arriba del drenaje (S1), el drenaje sospechoso (S2) y aguas abajo del drenaje sospechoso (S3).

![image description][1]

# Resultados

## Las buenas noticias :smiley:
La relación entre los SDT y la distancia entre picos de sonido producidos por Coqui ([como expliqué en una nota previa](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor)) fue **muy lineal**!!! Esto es muy bueno para la confiabilidad de las mediciones de Coqui. 

![image description][2]


## Las noticias malas :worried:
La relación entre los SDT y la distancia entre picos de sonido producidos por Coqui fue inversamente proporcional, es decir que cuando los SDT de una solución eran más altos menor era la distancia entre picos. Esto es raro porque en la [nota previa sobre la calibración del Coqui](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor) la relación fue directamente proporcional, es decir que cuando los SDT de la solución eran más altos mayor era la distancia entre picos. 

# Reflexiones :thought_balloon:
Sería interesante calibrar el Coqui para rangos menores y con más puntos que los usados en la
[nota de calibración](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor). Además, sería interesante tener en cuenta el efecto de la temperatura en conductividad.

  [1]: /i/45649.png "sitios_de_muestreo.png"
  [2]: /i/45651.png "Coqui_río.png"
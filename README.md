## 1st Nodejs/Express Website

A very simple nodejs real project 
Try understand:

- *all the code* n 
- the reasons why I choose certain *modules*.

### Targets

- [ ] nodejs Howto **start a project**
- [ ] Howto create **routes** for your server app
- [ ] Howto use **template engines** like ejs, handlebars, pug, etc.
- [ ] call assets from CDNs and use static files
- [ ] divide content using **partials features** from Template engines
- [ ] deploy our app using a simple service called Now(A service from Zeit Company)

### local deploy n run finished

```sh
git clone https://github.com/FaztWeb/first-node-express-app # clone app
cd first-node-express-app
npm install # dependencies
npm run dev
```

### local from scratch

# Configuracion del Proyecto

```sh
mkdir nodejs.first.project
cd nodejs.first.project
npn init -y # a mano seria ~ touch nodejs.first.project/package.json
```

El `package.json` creado nos describe, define dependencias, indica el archivo de inicio, ... :

```json
Wrote to /home/ray/Escritorio/my-remix-app/first-node-express-app-fatz/package.json:

{
  "name": "first-node-express-app-fatz",
  "version": "1.0.0",
  "description": "a very simple nodejs real project Try understand all the code and the reasons why I choose certain modules.",
  "main": "index.js",
  "dependencies": {
    "abbrev": "^1.1.1",
    "accepts": "^1.3.8",
    "ansi-styles": "^4.3.0",
    "anymatch": "^3.1.2",
    "array-flatten": "^1.1.1",
    "async": "^3.2.4",
    "balanced-match": "^1.0.0",
    "basic-auth": "^2.0.1",
    "binary-extensions": "^2.2.0",
    "body-parser": "^1.20.0",
    "brace-expansion": "^1.1.11",
    "braces": "^3.0.2",
    "bytes": "^3.1.2",
    "call-bind": "^1.0.2",
    "chalk": "^4.1.2",
    "chokidar": "^3.5.3",
    "color-convert": "^2.0.1",
    "color-name": "^1.1.4",
    "concat-map": "^0.0.1",
    "content-disposition": "^0.5.4",
    "content-type": "^1.0.4",
    "cookie": "^0.5.0",
    "cookie-signature": "^1.0.6",
    "debug": "^2.6.9",
    "depd": "^2.0.0",
    "destroy": "^1.2.0",
    "ee-first": "^1.1.1",
    "ejs": "^3.1.8",
    "encodeurl": "^1.0.2",
    "escape-html": "^1.0.3",
    "etag": "^1.8.1",
    "express": "^4.18.1",
    "filelist": "^1.0.4",
    "fill-range": "^7.0.1",
    "finalhandler": "^1.2.0",
    "forwarded": "^0.2.0",
    "fresh": "^0.5.2",
    "function-bind": "^1.1.1",
    "get-intrinsic": "^1.1.2",
    "glob-parent": "^5.1.2",
    "has": "^1.0.3",
    "has-flag": "^4.0.0",
    "has-symbols": "^1.0.3",
    "http-errors": "^2.0.0",
    "iconv-lite": "^0.4.24",
    "ignore-by-default": "^1.0.1",
    "inherits": "^2.0.4",
    "ipaddr.js": "^1.9.1",
    "is-binary-path": "^2.1.0",
    "is-extglob": "^2.1.1",
    "is-glob": "^4.0.3",
    "is-number": "^7.0.0",
    "jake": "^10.8.5",
    "media-typer": "^0.3.0",
    "merge-descriptors": "^1.0.1",
    "methods": "^1.1.2",
    "mime": "^1.6.0",
    "mime-db": "^1.52.0",
    "mime-types": "^2.1.35",
    "minimatch": "^3.1.2",
    "morgan": "^1.10.0",
    "ms": "^2.0.0",
    "negotiator": "^0.6.3",
    "nodemon": "^2.0.22",
    "nopt": "^1.0.10",
    "normalize-path": "^3.0.0",
    "object-inspect": "^1.12.2",
    "on-finished": "^2.3.0",
    "on-headers": "^1.0.2",
    "parseurl": "^1.3.3",
    "path-to-regexp": "^0.1.7",
    "picomatch": "^2.3.1",
    "proxy-addr": "^2.0.7",
    "pstree.remy": "^1.1.8",
    "qs": "^6.10.3",
    "range-parser": "^1.2.1",
    "raw-body": "^2.5.1",
    "readdirp": "^3.6.0",
    "safe-buffer": "^5.1.2",
    "safer-buffer": "^2.1.2",
    "semver": "^5.7.2",
    "send": "^0.18.0",
    "serve-static": "^1.15.0",
    "setprototypeof": "^1.2.0",
    "side-channel": "^1.0.4",
    "simple-update-notifier": "^1.1.0",
    "statuses": "^2.0.1",
    "supports-color": "^7.2.0",
    "to-regex-range": "^5.0.1",
    "toidentifier": "^1.0.1",
    "touch": "^3.1.0",
    "type-is": "^1.6.18",
    "undefsafe": "^2.0.5",
    "unpipe": "^1.0.0",
    "utils-merge": "^1.0.1",
    "vary": "^1.1.2"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```


Si estamos instalando módulos para crear un servidor lo primero es un framework que facilite la creación del servidor mismo. Aquí entra uno como **express** vamos a instalarlo aquí 
@@@@@
en ping
store express expresó es un framework que fácilmente nos permite poder crear
3:30
un servidor estar pensando cómo funcionan los módulos de servidor internamente cómo
3:36
leer archivos como cargar imágenes ni nada de eso express ya tiene todo eso creado simplemente para que nosotros lo
3:42
llevemos a través de código entonces expresa era el encargado de poder servir páginas hacia el front-end páginas hacia
3:49
el navegador luego también voy a estar instalando un modo llamado morgan este módulo nos va ayudar para poder ver por
3:54
consola las peticiones que van llegando es decir cuando una página o mejor dicho un navegador solicita una página en
4:01
nuestro servidor morgan me va a ayudar mostrando por consola las peticiones que van llegando de esta forma voy a poder
4:06
ver si realmente el servidor respondió algo ocurrió en algún error y finalmente
4:12
voy a estar instalando un problema 2 y es este módulo más que para poder funcionar internamente en nuestro
4:18
servidor va a servir para poder generar páginas html html nos permite poder
4:23
crear interfaces sencillas botones nos permite poder crear digamos elementos o etiquetas html pero es y es lo que hace
4:31
es extender el html también con lógica de programación es decir nos permite poder utilizar condicionales bucles e
4:37
incluso ejecutar algunas funciones de javascript dentro de html directamente sin la necesidad de llamar a script se
4:44
silencia llamaron una etiqueta script javascript no se preocupen es más sencillo de lo que parece vamos a dar un enter y con esto tendríamos los tres
4:50
módulos principales de esta aplicación ahora estos son los módulos de producción los módulos que sí o sí necesita mi proyecto para funcionar y
4:58
como pueden ver aquí en el pack a jason en la sección dependencias están listados los tres módulos ahora aparte
5:03
de esto también necesito módulos de desarrollo es decir módulos que me ayuden al momento de crear la aplicación
5:08
pero que en producción ya no sean necesarios estos módulos se le conoce como módulos de dependencia o
5:15
dependencia de desarrollo y para este ejemplo tan solo voy a utilizar uno que se llama notebook lo hice la moss esta
5:20
forma en princeton uno de mont y le colocamos la opción guión de por que
5:25
esta opción le va a decir en este caso no 10 que es un módulo de desarrollo entonces voy a dar una enter y vamos a
5:32
ver que aquí va a aparecer otra sección así como tengo dependencias aquí debajo aparece desde penden sis entonces aquí
5:37
están los módulos que necesita mi aplicación y esos son los módulos que voy a utilizar en desarrollo entonces vamos a venir aquí en nuestro proyecto
5:44
puede crear una carpeta por lo general yo puedo crear archivos de jaws quería aquí directamente y empezar a escribir
5:50
código pero en lo personal prefiero crear una carpeta y que esa carpeta contiene todo nuestro código de esta
5:55
forma separamos nuestro código fuente de los otros archivos de configuración entonces vamos a crear que una carpeta
6:01
roser lo llamamos rc porque es básicamente un abreviado de source de source code de código fuente y al centro
6:09
voy a crear un archivo llamado index punto jsr este index punto js por ahora simplemente vamos a colocarle un halo
6:15
wars sencillo un hello ball que nos permita poder ejecutar en consolas entonces voy a escribir aquí hello world
6:21
y vamos a venir aquí en nuestra consola y vamos a ejecutarlo para hacerlo simplemente tengo que decir un out entre
6:27
en la carpeta ese error se ejecuta el archivo index punto js y pueden ver que vemos por aquí por consola hello work ok
6:33
ahora es la forma típica de poder ejecutar código pero el estar escribiendo cada momento no desarrolla
6:39
de js puede llegar a ser un proceso tedioso en el desarrollo es por eso que tenemos este modelo de aquí no al mont
6:45
que nos va ayudar a poder reiniciar el código o volver a ejecutar el código cada vez que cambiamos entonces por
6:51
ejemplo quiero ejecutarlo en lugar de decir no de voy a decir en pecs no de mont y el
6:56
resto se mantiene igual ejecuta el código que está en carpeta es rc y el archivo index punto js si doy un enter
7:03
van a ver que ahora la consola ha cambiado este comando en pecs en n px es
7:08
necesario cuando tenemos módulos que hemos instalado localmente por ejemplo no demos lo instale en este proyecto
7:14
para poder ejecutarlo tengo que ejecutar primero n px y luego el comando ok ahora
7:20
esto es un poco largo de escribir entonces vamos a cancelar con cuadros aquí dos veces y vamos a crear nuestro
7:26
propio script vamos a venir aquí voy a crear un script llamado df vamos a quitar esto voy a decir voy a crear un
7:31
script llamado def y como valor va a decir no de mont s reserva indicó js
7:37
entonces con esto tengo lo mismo de hecho esto es lo mismo que ejecuta en consola pero ahora puede ejecutar de esta forma en pie
7:44
ramdev y si doy un enter aquí pueden ver que me da la misma salida entonces esta es una forma más típica de poder
7:50
ejecutar código con el pie en run def okey así que es la recomendada y listo con esto ya tenemos nuestro proyecto
7:56
inicial izado en la siguiente sección vamos a aprender cómo crearnos servidor utilizando el módulo de express

## Servidor de Express

8:02
en esta sección vamos a aprender cómo crear un servidor básico utilizando express para poder hacerlo primero necesito requerir el módulo que
8:09
instalado en la sección anterior el módulo express y de hecho para requerir en audios nosotros tenemos la forma de
8:15
como en 10 es decir el requerido utilizando esta palabra recuerde si yo escribo recuadro express con esto ya
8:21
estaría requiriendo el módulo lo siguiente sería guardarle una constante y es una forma de utilizarlo ahora en
8:27
las últimas versiones de now 10 ya es posible utilizar los ies models o la forma de importar módulos de dpa script
8:33
y esto es recomendado porque al final podemos tener una forma muy similar a cómo se utiliza en el estándar o mejor
8:40
dicho como también lo utiliza el front end entonces para este ejemplo voy a estar utilizando los ies models en lugar
8:46
de como yo y es que para este ejemplo tan sencillo pues no nos va a hacer falta los recuadros o una funcionalidad
8:51
específica de los recuadros entonces vamos a venir aquí en el pack a jason y voy a crear una opción más llamada type
8:58
model y simplemente añadiendo esta propiedad en el packaging son ahora le estoy diciendo naut ok cuando ejecuten
9:04
el código voy a estar utilizando los import y export entonces voy a guardar y esto no va alterar en nada es lo mismo
9:10
sólo que ahora en lugar de requerir express de esta forma voy a poder hacer de esta forma import express from
9:17
express ok entonces estas serían equivalentes estos dos entonces voy a quitar eso de aquí el consuelo también y
9:23
voy a crear una aplicación utilizando expresa entonces puede decirle app es igual a la ejecución de express una vez
9:29
tengo este app lo que voy a hacer es poder empezar a ejecutarlo con su método listen entonces voy a ir aa pp quiero
9:36
que escuches y le pasó un número de puerto en este caso lo voy a pasar el 3000 que es bastante común y luego un
9:42
mensaje por consola que dígalo como server sles event o port y vamos a
9:48
colocarle por ejemplo con el número 3000 para que se pueda ver que está funcionando en el número 3000 ok
9:54
entonces yo guardo esto pueden ver que me dice por consola server está escuchando me puerto 3000 ahora para poder ver este servidor simplemente voy
10:01
a abrir un navegador y en mi barra de direcciones voy a tipear local house 2 puntos 3000 si no hay una
10:07
intervenir la ruta inicial y básicamente esto hace referencia a que tengo un
10:12
servidor ejecutándose pero no me puede responder nada de hecho aunque parezca un error en realidad esto significa que
10:18
mi servidor ha respondido algo solo que como está vacío no tiene nada que responder responde esta respuesta por
10:24
defecto listo entonces vamos a crear nuestro primer ruta o nuestra primera url de nuestro servidor y para hacer eso
10:31
simplemente voy si la app quiero que cuando soliciten la petición get de mi servidor a la ruta inicial pues voy a
10:37
responder con un récord sin response y voy a responder con un hello world tres puntos en hello world vamos a colocarle
10:45
el guard equipo esta síntesis que están viendo aquí es básicamente una función dentro de otra se lee de esta forma en
10:52
la aplicación que hemos creado por lo general nosotros podemos recibir peticiones http y las peticiones http
10:58
tienen varias formas de poder enviar o solicitar datos una forma típica es
11:03
utilizar el método que cuando nosotros entramos desde nuestras páginas nosotros estamos haciendo peticiones que a
11:08
nuestro servidor es decir estamos solicitando datos a nuestro servidor y en este caso le estoy diciendo que
11:14
cuando solicite en la ruta inicial es decir solicite en la página principal que vendría a ser lo mismo los tresmiles
11:20
las ok le digo que responda con un mensaje hello world entonces si yo guardo esto y vengo ahora en el local
11:26
house 3000 y refresco o vuelvo a dar un / en la barra de direcciones pueden ver qué me dice hello world ok esta no es
11:33
una página html esto es básicamente un string es decir está respondiendo simplemente un stream de hecho si
11:39
nosotros venimos en el navegador y damos un clic derecho ver código fuente de la página vamos a ver que lo único que
11:44
obtenemos como código o como respuesta es básicamente un gel word es decir no hay html no hay nada de eso ok entonces
11:51
en este ejemplo si vamos a estar utilizando html pero lo vamos a estar utilizando con el módulo 10 entonces
11:57
vamos a importarlo también puede decir voy a importar el ies y le voy a decir from y es ok por lo general importamos
12:03
así módulos y para utilizarlo simplemente voy a decirle antes de que se ejecute y mi ruta le voy a ir a pepe
12:10
voy a configurar voy a establecer una nueva configuración con el método set set es básicamente para decirle a
12:16
nuestro servidor qué es lo que queremos que utilice qué característica queremos activar y adentro voy a utilizar una característica que se llama new engine
12:25
digamos en español sería su traducción como motor de vistas o motor de plantillas en nuestro caso los motores
12:31
de plantillas son básicamente aquellos módulos que nos permiten extender el html y nos permiten poder digamos añadir
12:38
lógica de programación dentro del html pero al final todo eso se transforma en html puro y es enviado al navegador ok
12:46
no hay necesidad de enfocarnos en esto es simplemente entienda lo que es básicamente como html con características extras ok ahora en
12:54
nuestro caso nosotros tenemos un motor de plantillas que hemos instalado la sesión anterior llamado leyes entonces podemos importarlo de esta forma el ies
13:01
y de hecho como expresa es un framework que tiene integración con ellas por defecto no ha necesario tampoco
13:07
importarlo de esta forma ok así que lo puedo obviar listo entonces con esto le estoy diciendo a mi aplicación ok voy
13:13
está utilizando yes entonces si yo guardo esto de aquí ahora yo puedo crear una carpeta que contenga mis archivos de
13:19
las vistas es decir los archivos de las páginas que voy a enviar hacia el front end por lo general eso se crea con una
13:25
carpeta llamada views entonces aquí dentro de ese roce voy a crear una carpeta views y dentro de la carpeta
13:31
vídeos voy todas las páginas que yo quiera enviar hacia el front end en este caso por ahora simplemente voy a colocar
13:36
un index -es y voy a colocarle un h uno que diga por ejemplo hello word voy a
13:43
guardar y con esto vamos a intentar enviarlo al front end entonces para enviarlo nosotros vamos a decir en lugar
13:49
de redes puntos en vamos a quitar este ciento y voy sin redes punto render y ya no necesito enviarle un stream sino le
13:55
voy a enviar el archivo que o el nombre del archivo que quiero que el front end reciba en este caso el nombre de la
14:01
ciudad se llama index punto y es de hecho tampoco necesario añadirle en la extensión l y es porque él sabe que
14:08
todos los archivos terminan con esta extensión entonces lo que el único que le está diciendo aquí es quiero que el
14:14
render y cesc o quiero que envíes un archivo html que va a estar a partir del archivo index punto y es ahora muy
14:20
importante le está diciendo el nombre del archivo pero no la carpeta en donde está entonces para poder decirle a
14:26
express que nosotros tenemos una carpeta donde van a estar todas nuestras páginas pues voy a añadir otra configuración que
14:32
se llame views ok así como tenemos view engine tenemos views views es para
14:37
decirle en donde está la carpeta d no está la carpeta views ahora para poder decirle en dónde está esto yo necesito
14:43
colocar la ruta entera de esta carpeta es decir se llama ruta absoluta ruta absoluta por ejemplo se le conoce esta
14:50
ruta de aquí por ejemplo si yo estoy en esta carpeta esta carpeta está dentro del escritorio está dentro de mi usuario
14:56
y está dentro de la unidad set entonces una ruta absoluta sería de esta forma hace dos puntos en las células y users
15:03
el nombre de usuario fases por ejemplo en mi caso luego el escritorio que sería de stock y luego el ejército llamada no
15:09
10 first project ok estoy bastante común en código nosotros siempre utilizamos
15:14
estas rutas absolutas el asunto es que si yo las tipeo a mano si yo trato de buscar esa ruta y escribir la mano
15:20
cuando yo mueva la carpeta simplemente a otra otra ruta pues esto va a dejar de funcionar porque ya no lo va a encontrar
15:26
entonces nosotros necesitamos una forma dinámica en la que podamos darle esta ruta y que el programa siga funcionando
15:32
entonces para poder hacer eso nosotros tenemos que crear algo llamado un dirnei o un directorio o un nombre de
15:38
directorio entonces para hacerlo nosotros podemos utilizar códigos de nou por ejemplo puede decirle que voy a
15:44
utilizar el módulo de naut y desde allí voy a traer primero una función llamada tirón name este tiene una y me va a
15:50
permitir poder crear una ruta absoluta ahora esto de aquí se ejecuta esta forma
15:55
yo les digo tiro name of love y culto y adentro le voy a pasar una función que
16:01
viene a partir de otro módulo de naut llamada y url esta función de aquí se
16:06
llama file url tupac básicamente está digamos esta función yo lo ejecutó de
16:11
esta forma fácil y ahora de tu putt y aquí adentro le voy a pasar un objeto global que tenemos cuando hemos activado
16:17
hace time o de un llamado import y desde import voy a traer meta url o sea que
16:23
esta sintaxis puede ser un poco complicada de entender al inicio pero básicamente todo esto se transforma en
16:28
esa ruta absoluta en esta ruta que hemos visto algo que de tipeado ahorita entonces miren si yo guardo esto es una
16:34
constante llamada su guión su guión the name vamos a guardar le con el nombre su
16:39
guión subieron dirnei para decirle que es algo interno de nuestra aplicación justamente ahorita les voy a explicar
16:45
por qué se llama así y vamos a mostrar por consola su guión su guión viernes si yo guardo esto miren por consola
16:52
tengo ya toda la dirección toda la ruta absoluta de esta carpeta viene de dc
16:57
user fase de esto no 10 first project y la carpeta es rc es ir a llegado hasta
17:02
aquí y no he tenido que tipear lo y de hecho si yo muevo esta carpeta luego por ejemplo esta carpeta nou de spears
17:08
project número luego dentro de otra carpeta o lo nuevo son dos carpetas dentro pues no va a importar porque al
17:15
final esto va a poder seguir obteniendo esa dirección entonces esto es una forma dinámica de poder obtener la ruta
17:20
absoluta ahora eso para qué sirve bueno simplemente voy a decirle aquí voy a quitar esta consola o le voy a decir que
17:26
al final mi carpeta views de hecho está en esta ruta dirnei concatenado con views con él es la views si yo guardo
17:35
miren al final lo que yo voy a estar pasándole avíos es algo como esto voy a ganar ese race views para decirle que
17:42
aquí está la carpeta dentro desarrolle y es arroz está dentro de todas esas otras carpetas ok entonces en realidad aquí
17:50
también hay otro asunto y es que miren por lo general si están en linux o mac en sistemas unix por lo general se
17:55
utilizará islas en win utilicé la contra barra como pueden ver entonces un tema también el poder concatenar directorios
18:02
por suerte el módulo pad trae otra otra función llamada join la cual nos permite concatenar estos directorios y evitar
18:09
pensar si estamos en linux windows o mac él lo va a hacer por nosotros y dependiendo el sistema operativo funcionar de una u otra manera entonces
18:15
en lugar de estar limpiando nosotros mismos aquí dieron en su guión dieron en
18:20
más es las views de esta forma en lugar de tipear esto pues simplemente voy a
18:26
concatenar los con esta función con la función join le digo te voy a pasar su guión su guión de jermaine y te voy a
18:31
pasar también views ok entonces yo puedo quitar este con sólo y sí guardo esto de
18:36
aquí ésta llegó encadenado en la forma típica de windows de hecho podemos ver lo podemos copiarlo y podemos pegarlo
18:42
aquí debajo y puedo colocarlo entre un con sólo para poder verlo ok vamos a colocarlo aquí y si yo guardo miren al
18:50
final toda esta dirección es lo que estoy pasando a vídeos en otras palabras esta dirección le estoy diciendo express
18:55
que aquí es donde están las vistas está en su ser fase de estudio de spears project ese roce la carpeta dios
19:03
listo todo eso es básicamente para eso pero al final nosotros con eso ya podríamos empezar a crear las páginas
19:10
que queramos y express ya se sabría dónde encontrarlos ok entonces con esto si yo vengo en mi aplicación en el
19:15
navegador y refresco pueden ver que ahora dice hello web y claro nosotros dimos todo ese trabajo para ver un hello world pero miren si yo abro aquí de
19:22
nuevo con el clic derecho ver código fuente de la página vemos que ahora tenemos etiquetas html y no sólo eso sino que si entre un índice y es y por
19:29
ejemplo digo ok no quiero un hello world tan solamente si no quiero un html 2.5 pueden ver que aquí estoy creando
19:35
estructura de html entonces aquí le puedo decir mi primer página my first
19:41
website y aquí dentro del bad y puedo colocar el h1 si yo guardo esto y vengo en la
19:47
aplicación en lo que los 3000 y refresco pueden ver que ahora el título y si my first website y aquí dice hello world y
19:53
si refresco aquí también el código fuente pueden ver que ahora estoy obteniendo todo esa porción de código de
19:59
html listo entonces ya estamos configurando un servidor básico de express ya estamos enviando páginas en
20:05
la siguiente sección vamos a crear otras páginas más que nuestra aplicación va a tener por ahora simplemente vamos a cerrar esto close all y continuamos en
20:11
la siguiente sección en esa sección vamos a definir todas las páginas que va a tener nuestra

## Express Routes

20:17
aplicación para poder hacer eso vamos a venir nuevamente en index punto js y así como estamos enviando un index punto y
20:23
es cuando se visita la ruta inicial también nosotros podemos repetir este proceso para enviar otras rutas es decir
20:28
vamos a copiar esto de aquí en esta línea de código dos veces dos veces más y vamos a ir cambiando la ruta por
20:35
ejemplo esto que tenemos aquí el inicio está islas nos dice qué ruta es visitada yo le puedo decir cuando visite en la
20:41
ruta about quiero que render y cesc otro archivo aquí vamos a crear otro about punto y es que es diga por ejemplo por
20:48
ahora un hecho 1 about ok y luego también le voy a decir que voy a crear otra ruta que se llama contacto de
20:55
contacto ok y esta ruta con tag vamos a realizar también otro archivo llamado contacto contactless y vamos a enviarlo
21:03
aquí le digo vas a renderizar contacto con esto si yo vengo ahora en el navegador y por ejemplo puedes arrastrar
21:09
aquí y le digo localhost 3000 me dice hello world si yo le digo local house 3000 2 puntos perdón en la dge about
21:16
vamos a ver que en este caso debería decir about pero en no me envía nada porque esto no sólo me envía ayer word y
21:23
es que aquí me ha faltado algo me dice about pero aquí le tengo que decir que envié about elly es ahora sí sí yo
21:29
refresco pueden ver qué dice about y se digo contar vamos a ver que también también debería decir contact pero no me
21:35
muestra nada principalmente porque contacto le falta aún algún contenido entonces por ahora le voy a decir a h1
21:41
contact para poder ver algo refresco y ahí está ok entonces en otras palabras
21:46
cuando yo visité una de estas rutas cada uno me va a revender izar una página distinta ok de nuevo lo que los 3.000
21:52
about y contact ok entonces de esta forma yo
21:57
puedo ir enviando distintas páginas cada vez que yo creo una de estas rutas si yo necesito enviar una página necesito
22:03
crear una ruta ahora eso está bien para empezar pero si yo empiezo a crear más y más páginas este archivo va a crecer
22:10
entonces una mejor forma de organizar esto es separando estas porciones de código en otros archivos por ejemplo voy
22:16
a venir dentro de esa ruta y voy a crear una carpeta llamada road esta carpeta va a tener todas nuestras rutas entonces
22:21
voy a cortar estas tres líneas de código lo voy a cortar y voy a venir aquí en road y voy a crear un archivo que se
22:28
llame por ejemplo index punto js y aquí es donde voy a pegar las tres rutas ok
22:34
de esta forma este archivo tan solo va a tener las rutas relacionadas con mi aplicación ahora en este caso en este
22:40
archivo no tengo app entonces me va a dar un error tampoco tengo la forma de poder exportarlo entonces vamos a
22:47
solucionar eso primero para obtener app aquí vamos a decir que voy a importar express y ya no voy a importar todo el
22:54
módulo sino tan sólo quiero una parte desde express en este caso lo que nos dice el framework es que si nosotros queremos separar una porción
23:01
digamos de aplicación en un archivo por aparte utilicemos un módulo llamado router este módulo router me va a
23:08
permitir poder definir distintas rutas entonces voy a instancia lo voy a empezar a ejecutarlo de esta forma con
23:14
el router igual al router ok y con este router de aquí este router que he
23:20
obtenido a partir de la ejecución de esta función pues voy a poder empezar a reemplazarlo en lugar de app entonces
23:26
vamos a quitar este app de aquí y voy a llamar los router al final es lo mismo solamente le estamos cambiando un nombre
23:31
por otro pero esto indica básicamente que tenemos una parte de la aplicación y
23:37
no toda la aplicación ok entonces este router es tan solo un enrutador ahora
23:42
esto de aquí lo voy a utilizar en la aplicación principal en la aplicación que está en index aquí entonces para
23:47
poder unir esta porción de código con esta vamos a exportarlo entonces voy a decir voy a exportar por defecto router
23:54
ok vamos a formatear lo para formatear lo podemos escribir aquí f1 forma
24:00
document y él le va a añadir los puntos y coma si hace falta ok entonces vamos a guardar esto de aquí
24:05
y vamos a importarlo y en index y le voy a decir voy a importar un punto y una islas desde la carpeta
24:12
route el index y en este caso es muy importante que si estamos utilizando los
24:18
tie mobile coloquemos el punto j s ok entonces desde aquí voy a decirle desde
24:23
ese archivo voy a estar requiriendo un index road nosotros podemos nombrar esto
24:28
como queramos de hecho si ustedes no entienden muchos de estos de import-export luego dejar un vídeo dedicado con solo import y export en
24:34
donde lo explico más a detalle pero yo estoy asumiendo que ustedes ya conocen esas características básicas de que hace
24:40
el import que hace el export y en este caso lo único que estoy haciendo es que desde este archivo estoy trayendo lo que
24:46
me está exportando por defecto que sería router entonces aquí le estoy llamando in these roads ahora para utilizarlo
24:53
aquí en esta aplicación voy a decirle a beber quiero que utilices index road y
24:58
si yo guardo esto no va a cambiar mucho es decir si yo vengo en el navegador y visite lo que el house 3000 me dice
25:03
hello world xi visitó en los 3000 slash about me is about y si visito contact
25:09
los escribirá bien me dice contras ok entonces con esto yo tengo lo mismo sólo
25:14
que código está mucho más ordenado ahora una ventaja también que tiene ella y es que como éstos están renderizando en
25:21
cada visita es decir cuando yo visito esta página se genera un html a partir de este archivo lo mismo con el resto yo
25:29
puedo antes de que se genere enviarle algunas variables por ejemplo si aquí en index yo quiero colocar un título
25:35
personalizado por ejemplo un título que venga desde el backend le puedo hacer esto puedo decir aquí en index punto j s
25:41
the roads voy a enviarte aquí justo al lado de este index una coma y voy a
25:46
enviar un objeto este objeto voy a decirle que tiene una propia llamada title y que como valor va a ser un string de hecho puede ser cualquier tipo
25:53
de datos pero en este caso voy a colocarle un stream y aquí le voy a decir first website without o primer
26:00
sitio con un out ok entonces ya tengo un título ya tengo una variable que le esté pasando a index si yo vengo index el ies
26:07
le puede decir ok yo quiero que ese título se muestre aquí entonces para hacerlo simplemente quito este my first
26:12
website que está tipeado a mano y voy a colocar una sintaxis que posee y es aquí
26:17
donde digo que tiene algunas características extras el html entonces por ejemplo aquí voy a colocar
26:22
unos símbolos de porcentaje con mayor y menor que es un poco extraño pero aquí
26:28
voy a colocarle un igual y está igual sirve para nosotros poder interpretar una variable en este caso la variable que estamos pasando se llama title si
26:35
guardó esto esta sintaxis lo guardo vengo del navegador y vengo de local house 3000 y refresco van a ver que aquí
26:42
en el título dicen fiestas website whithout o primer sitio con un out entonces si nosotros en el servidor por
26:48
ejemplo le cambiamos aquí le digo que no están solo fish web como no guardo easy refresco vamos a ver
26:56
que también se ha actualizado entonces de esta forma le estoy pasando un dato desde el backend al franken eso
27:01
típicamente es utilizado cuando utilizamos base de datos es decir cuando hacemos consultas a la base de datos y
27:06
obtenemos datos y queremos enviarlo al front-end bueno se lo pasamos de esta forma pero bueno eso es para otro
27:11
ejemplo un poco más extenso en el canal ahora así como tengo digamos una variable para esta página puedo enviarle
27:18
distintas variables para cada una de estas páginas por ejemplo en el lavado también puedo hacer lo mismo que un objeto y le digo voy a crear una
27:24
propiedad title y aquí le voy a decir que esta página se llama about ok o about me y vamos a colocarle luego en el
27:31
contacto también lo mismo vamos a colocarle un título y voy a decirle contacto lo que ahora no tiene que
27:37
llamarse title pueden nombrarlo en español o como ustedes quieran recuerden que esto es un objeto de javascript y
27:42
los objetos ustedes deberían conocer sus reglas que por ejemplo están conformados por pares clave valor aquí pueden
27:48
colocar el nombre una variable y el valor puede ser un string un número etcétera entonces en este caso le estoy diciendo que el título se va a llamar
27:54
contact page es así guardo esto y quiero mostrarlos en estas páginas de aquí
27:59
simplemente voy a hacer lo mismo por ejemplo en el about primero about y es voy a cortar esto voy a crear una
28:06
estructura de html5 y aquí vamos a colocarle en lugar de contar vamos a decirle que quiero que muestre lo que
28:12
viene desde el servidor o desde el backend vamos a colocar aquí un símbolo de mayor y le voy a decir que va a
28:17
interpretar el título y adentro pegamos este h1 vamos a formatear lo conforman
28:22
document y en este caso visto el estudio code lo ordena de esta forma no hay ningún problema al final es lo mismo si
28:28
guardamos y venimos ahora en nuestra página es la dge about vamos a ver qué dice about el ayuno pero también el
28:34
título dice about mit que es básicamente lo que le hemos pasado del back-end lo mismo vamos a hacer con el contacto vamos a cortar este hecho 1 y voy a
28:40
decirle html 2.5 y aquí en lugar de tipear lo manualmente puede decirle voy a pasarte la variable y quiero que los
28:46
intérpretes y como h1 voy a decirle contra si guarda esto de aquí y vengo ahora en es light contact vamos a ver
28:52
qué dice con tres también entonces de esta forma tengo el índice y es el contacto y el about y están recibiendo
28:57
valores que vienen de selva que ahora adicionalmente a esto probablemente luego ustedes van a querer pasar más
29:03
datos si quieren pasar más datos sí no de nuevo como es un objeto pueden colocar una coma y pueden pasar por
29:08
ejemplo equis y pueden pasar un valor 30 y supongamos ok entonces si ustedes quieren mostrar esto lo mismo vienen
29:15
aquí en index que es el archivo que está siendo digamos pasado las variables entonces
29:20
aquí voy a decirle ok por ejemplo no quiero que diga hello world sino quiero que diga hello concatenados con el valor
29:26
que le está pasando el back-end por ejemplo se llama x eso sí guardó y vengo
29:32
aquí en el local house 3000 pueden ver qué dice hello 30 ok entonces esto es
29:37
básicamente porque hemos instalado y es porque nos permite poder extender nuestro front-end a partir de código que
29:44
viene del back entonces voy a guardar esto de aquí y si el refresco ya no lo tengo ok pero algo así es y yo quiero
29:49
evitar que lo pases pues aquí simplemente lo quito le digo no quiero pasar un valor extra además tan solo
29:55
quiero ese título y ya está entonces en esa sección ya tenemos listo nuestras rutas o páginas más básicas pero tenemos
30:01
un detalle como algo que cada una de estas páginas tenga una navegación es decir para ello no están viniendo aquí
30:08
en la url y tipeando slash about o slash contact sino que cuando yo escribo algo
30:13
está realmente permita cambiar desde la propia interfaz con botones o enlaces bueno eso lo que vamos a hacer en la
30:19
siguiente sesión vamos a crear nuestra primera navegación por ahora vamos a cerrar eso aquí close hol y continuamos
30:24
en la siguiente sección en esta sección vamos a aprender los conceptos de parcelas en ellas este

## EJS, Template engine

30:31
concepto nos va a ayudar a poder tener una navegación en todas las páginas para poder entender esto primero debemos ver
30:36
el problema ya que cuando nosotros creamos múltiples páginas utilizando el ies estamos recreando nuestra estructura
30:41
en cada momento por ejemplo se crean una 7 ml 5 aquí aquí y aquí entonces si por ejemplo yo crear una navegación en esta
30:48
página en index punto díaz lo tendría que copiar y pegarla en contacto también copiar y pegar en about entonces una
30:53
forma de evitar esto es usando un concepto que trae los motores de plantilla llamado partners ese concepto
30:59
nos permite poder crear un archivo por aparte e importarlo en el resto de páginas para poder verlo primero vamos a
31:05
crear aquí una carpeta de hecho vamos a crear acciones de pt llamada partners no tiene que estar dentro una carpeta pero
31:10
por lo general prefiero así para poder tener un poco más de orden y dentro de esa carpeta vamos a crear un archivo
31:15
llamado navigation punto y es dentro de ese navigation vamos a crear una 'v' y dentro escena fue creo muele una lista y
31:22
una lista de ítems y aquí voy a colocar una etiqueta y en este caso de colocar
31:27
simplemente un slash y como texto font esto básicamente es mi navegación entonces si yo quiero añadir dentro de
31:34
index punto y es lo único que tengo que hacer es importarlo o incluirlo para eso ellos tiene una palabra especial llamada
31:41
en club entonces puedo venir aquí arriba y le puedo decir aquí quiero mi navegación justo arriba de mi contenido
31:46
entonces le puedo decir ok vamos a colocar este símbolo de mayor y menor con porcentajes en el medio y voy a
31:53
colocarle un guión ese guión es para decirles que voy a ejecutar algo voy a interpretar código y lo que voy a
31:58
interpretar es el link club ok la palabra include que me da ahí es y aquí voy a colocar entre dobles comillas
32:04
simples voy a colocar el nombre del archivo ahora en mi caso el archivo se llama navigation pero está dentro de la
32:10
carpeta parsons entonces voy decir parcials en las navigation sí guardo
32:15
esto y vengo en la página principal y refresco vamos a ver que ahora veo un home ok este básicamente mi navegación y
32:23
cada vez que doy un clic esto cómo está redireccionando hacia el slice me está llevando a la página inicial ahora si yo
32:28
vengo en contact el light contact por ejemplo aquí no está la navegación entonces en lugar de recrearlo
32:35
simplemente voy a venir aquí en index punto de 10 voy a copiar esta línea de código vamos a dar clic derecho a copiar
32:40
vamos a venir en contacto y lo voy a pegar en donde quiera la navegación esto no es tan solo para la navegación es que
32:46
esto es para cualquier porción de interfaz que queramos pero mi sencillo guardo esto lo he pegado aquí en contact
32:52
y refresco pueden ver que ahora tengo también la navegación aquí hice un clic me envía a home entonces lo mismo si
32:58
vengo en about vamos a ver que aquí no tengo la navegación copio esta línea de código nuevamente vengo en about y lo pego ok
33:07
entonces si yo vengo aquí en about y refresco también tengo la navegación de font entonces si nosotros tenemos una
33:13
forma de utilizar código también lo podemos utilizar como un führer podemos utilizarlo para una especie de tarjetas
33:20
o podemos utilizarlo básicamente para poder reutilizar porciones de código en donde no queremos estar tirando los a
33:25
cada momento y por ejemplo si queremos completar nuestra navegación también puede decirle aquí ok voy a copiar estos
33:32
dos veces más y le voy a decir también que vamos a enviar aquí a contact glass contact con el texto contact
33:40
y aquí le voy a decir about y aquí con el texto es la about ok entonces si yo
33:45
vengo aquí en cualquier parte de mi interfaz y por ejemplo quiero estoy en localhost 3000 quiero ir about pueden
33:51
ver qué me dice about ok y si tengo en cuenta que me redirige counter y ahora pueden ver que los tres tienen la misma
33:57
navegación entonces en un solo lugar al final está mi navegación y el resto de páginas simplemente lo está importando
34:03
esta misma idea sirve también para importar archivos de css nos sirve también para traer estilos o javascript
34:10
que queremos utilizar en todas las páginas ahora siempre vamos a tener que utilizar este include para traer esas
34:16
porciones de digamos de interfaz por darles otro ejemplo más vamos a crear un fútbol un fútbol y es y para este fútbol
34:24
simplemente vamos a colocar una etiqueta fútbol y voy a colocar un h1 con un loren de tres y una etiqueta pe con
34:31
loren de 100 por ejemplo entonces aquí tengo un fútbol y si yo quiero utilizarlo en algunas páginas y en
34:37
algunas otras no pues simplemente voy a incluir en la que quiero por ejemplo en el index yo quiero añadir este fútbol
34:42
entonces voy a copiar esto y voy a explicarlo debajo porque debajo de mi contenido es donde añadir el parcial
34:48
poder si yo guardo esto y vengo en el home pueden ver que hay dice hello y
34:53
abajo está todo el fútbol y ustedes pueden verlo de hecho si bien el código fuente la página pueden ver que aquí al
34:58
final esto se ha unido es decir tenemos nuestro html aquí está la navegación mi contenido y debajo está el fútbol esto
35:05
es básicamente lo que al final genera ella y es por nosotros el listo entonces de esta forma nosotros estamos
35:10
utilizando porciones de nuestra interfaz l son 3 qué pasa si yo quiero luego empezar a digamos estilizar mi
35:15
aplicación porque en estos momentos yo tan sólo tengo en forma de cambiar de página y algunos textos pero yo quisiera
35:22
crear una interfaz que luzca un poco mejor bueno en la siguiente sección nos vamos a enfocar los estilos utilizando un framework de css llamado bus trap

## Bootstrap5

35:31
en esta sección vamos a aprender cómo utilizar nuestra aplicación hasta este momento tenemos algunas páginas pero no
35:36
lo sé muy bien porque no tienen estilos entonces para poder añadir estilos tengo dos opciones una es colocando mis
35:41
propios estilos y la otra es utilizando algún framework de css empecemos con la primera vamos a venir aquí en nuestro
35:47
index punto js y lo primero que voy a decirle express es que conozca una carpeta en donde van a estar mis estilos
35:53
por lo general a esas carpetas se le conoce como archivos estáticos o static files o en express se le conoce con el
35:59
nombre la carpeta pub le vamos a venir aquí dentro desarrolle y voy a crear una carpeta llamada tablet dentro del public
36:05
voy a crear el archivo de css pueden colocarles cualquier nombre en mi caso voy a colocarle main ss y voy a crear
36:11
una regla básica por ejemplo cambiarle el color el background el bad y pues si le va diva tiene un color background
36:17
negro ok entonces con esto ya tengo algo básico ahora lo que voy a hacer es empezar a utilizar estas reglas dentro
36:23
de mis páginas para poder hacer eso primero tengo que decirle express que sea capaz de servir este archivo css al
36:30
navegador para que las páginas de navegador puedan acceder lo entonces voy a venir aquí en index punto js y debajo
36:36
de las rutas aquí donde lo habíamos configurado pues voy a decir que debajo voy a utilizar
36:41
desde app desde express su método llamado static este static como indica
36:47
que el propio vice el estudio code es que necesita un rut o mejor dicho necesita una carpeta que leer y la
36:54
carpeta está aquí esta carpeta que se llama public entonces ustedes pensarán bueno le vas a colocar pavlik y ya está
37:00
el asunto es que por lo general como nosotros estamos dentro de la carpeta cerro se necesito darle también todo de
37:06
esa ruta completa ahora no necesito volver a escribir toda esta función rara que nos daban nuestra ruta completa ya
37:13
está guardada en dir name entonces simplemente voy a utilizar algo similar como hicimos con la carpeta vídeos le
37:18
voy decir voy a unir el directorio actual el de hernán buen y los con el nombre la carpeta y pavlik
37:24
ahora lo uno de esta forma porque dieron name me dá la carpeta es rc es decir me da la ruta hasta aquí entonces yo lo
37:31
concatenó con pavlik va a llegar esta carpeta entonces esta forma es diciendo en esta carpeta están mis archivos estáticos ok por eso dice express static
37:38
en la dirección de esa carpeta guardo y si vengo ahora en mi aplicación
37:43
si yo vengo en cualquier página vamos a ver que ninguna está afectada y es porque en realidad no he añadido en
37:49
ninguna de estas el archivo css pero gracias a esta configuración que tengo aquí si yo visito por ejemplo mail css
37:56
pueden ver que aquí está el código el código de css ustedes saben que las páginas tienen código de css y esta
38:03
puede ser accedida desde el navegador bueno pueden ser accedidas justamente porque el servidor se lo permite
38:09
entonces en este caso pueden ver que ya puede acceder del navegador a mis reglas ahora yo no quiero tan sólo acceder desde el navegador sino que quiero que
38:15
mis páginas puedan leer estas reglas entonces para hacerlo vamos a venir en una de estos por ejemplo en index punto
38:21
y es y aquí arriba le voy a decir que a través de una etiqueta link valer lo que esté en mi punto css le colocó esta es
38:28
la base al inicio porque esto no está leyendo sedes de estos archivos sino esto está leyendo algo que viene desde
38:34
mi servidor email punto se ese ese entonces voy a guardar esto y si vengo en la página inicial vamos a ver que
38:40
tengo todo el código y negro ok entonces si yo quiero alterar algo le digo que también el color de los textos es blanco
38:46
vamos a colocarle white por ejemplo y pueden ver que los estilos han cambiado entonces lo que podemos hacer así como
38:52
estamos cambiando los estilos aquí es poder añadir esta etiqueta que tenemos
38:58
aquí en índice y es este link en cada una de estas páginas el asunto es que estaría repitiendo esta línea de código
39:04
y si yo por ejemplo luego también añado bibliotecas de animaciones o bibliotecas de css de frameworks pues voy a tener
39:10
que estar copiando en cada una estas páginas entonces podemos utilizar un parcial para poder repetir estas
39:16
pequeñas líneas de código en todo el resto de páginas vamos a venir aquí voy a crear también un parcial que se llame
39:21
por ejemplo head punto que es y lo llamo head porque por lo general los enlaces
39:28
van en la cabecera en la cabeza de nuestro html en el health entonces voy a cortar esto de aquí lo voy a pegar en el
39:34
head porque ya está aquí voy a colocar un comentario incluso vamos a colocarle el custom ciencias que se hace
39:41
personalizado y vamos a venir aquí le voy a decir ok voy a traer y voy a colocar aquí en símbolo de mayor le voy
39:47
a decir voy a incluir aquí vamos a colocarle nuevamente el incluye vamos con el guión y voy a colocar el nombre
39:53
del parcial desde la carpeta parches vas a traer ok si yo guardo esto y vengo en el index
39:59
y refresco sigue igual pero si yo copio esto ahora y vengo en el head perdonen el about y lo pego debajo de
40:07
title y guardo y vengo ahora en slash about también vamos a tener sus estilos
40:13
como pueden ver lo mismo también voy a venir en contact y lo voy hacer ok también voy a añadir aquí bueno no
40:19
etiqueta link sino la misma línea de código include partners head y si vengo en contacto pueden ver que también
40:25
tienen los estilos entonces ahora toda mi aplicación está compartiendo los mismos estilos ok ahora esto es para
40:32
empezar el asunto es que para ahorrarme algo de tiempo y no estar aquí escribiendo como css vamos a estar añadiendo también un framework de css en
40:39
este caso puede estar utilizando bus trap voy a buscar de esta forma como get bus track puntocom este ejercicio de
40:45
vuestra muestra es un framework esss que nos permite poder añadir estilos como de tarjetas de listas desordenadas o nos
40:53
permite puede añadir estilos para poder centrar o ubicar elementos en nuestra interfaz entonces de esta forma nosotros
40:59
podemos utilizar una aplicación web de forma rápida por lo general está creando un proyecto web y no
41:05
quieren estar enfocándose en los estilos pueden utilizar un framework y si por ejemplo ustedes requieren de alguna
41:11
funcionalidad rápida también este freno les puede dar digamos a resolver la creación de interfaces ok entonces para
41:18
empezar a utilizarlo vamos a venir aquí en red box y aquí nos da una introducción de que es buscar cómo añadirlo pero lo que nos importa es esta
41:24
parte donde dice cdn links aquí nos da dos cosas una cdn de css y una de
41:30
javascript la ss es básicamente los estilos css que yo puedo empezar a importar en mi
41:35
aplicación de hecho miren si yo copio esto y lo pegó en una pestaña nueva del navegador aquí está todo el código de
41:40
ccs de booster entonces yo pueda empezar a acceder a todas las clases que ofrecen ok entonces de hecho vamos a copiar esta
41:47
esta dirección y vamos a venir nuestro código y en head vamos a pegarlo debajo
41:52
y voy a decirle en el derecho arriba porque primero vamos a colocar el framework voice y le busca 5
41:58
y debajo vamos a pegarlo pero vamos a aplicarlo como etiqueta link ok entonces con esto lo estoy diciendo aquí estoy
42:05
entendiendo vuestros cinco y después estoy añadiendo mis estilos personalizados esto es importante porque si nosotros por ejemplo luego vamos a
42:11
querer alterar algún estilo de bus trap vamos a querer colocarlo después ok entonces vamos a venir nuestro código y
42:18
si refrescamos vamos a ver que algunas cosas han cambiado principalmente por ejemplo los colores de los enlaces o
42:24
también la fuente de nuestra aplicación también ha cambiado y es porque vuestra añade algunos estilos globales es decir
42:30
estilos que ya alteran algunos comportamientos por defecto que tiene el navegador entonces con eso ya tenemos
42:36
nuestro framework que nos permite hacer bueno primero vamos a hacer esto vamos a quitar la regla de color negro y blanco
42:43
ok para que quede nuevamente normal ok entonces podemos seguir escribiendo código css personalizado pero de momento
42:50
está vacío entonces vamos a venir aquí en nuestra aplicación en index punto y es y vamos a añadir algunos contenidos
42:58
de ejemplo vamos a empezar por la navegación hasta este momento nuestro navigation tan sólo tiene un app unos
43:04
cuantos enlaces de ellos y vemos aquí en nuestra página inicial vamos a ver qué tenemos hong kong tagab out vamos a
43:10
cambiarlo para poder hacerlo vamos a venir nuestro framework en la documentación en redox vamos a venir en
43:17
esta sección donde dice component y aquí vamos a buscar esta parte donde dicen nada bar si damos un clic aquí vamos a
43:22
ver distintas navegación es que podemos utilizar de hecho no es necesario entrar en detalle de cada una de las cosas que
43:28
hacen tan sólo quiero que resuelve un asunto y es que quiero una navegación de este tipo entonces pueden ver que esa
43:34
navegación que está aquí que tiene el título hay algunas pestañas me puede servir entonces puedo copiarlo con este clic puedes seleccionarlo también todo
43:40
de copiarlo y luego puedo venir en mi código enap en navigation y puede obligarlo debajo entonces si lo pego
43:47
debajo ahora tendría dos navegación es y como esto se está incluyendo en todas las páginas si yo guardo y vengo la
43:52
aplicación y refresco pueden ver que aquí aparece la navegación vamos a modificarlo lo primero que voy a hacer
43:58
es que aquí en lugar de que digan al bar voy a colocarle 110 website por ejemplo
44:04
y en lugar de que sea de color claro voy a colocar la vejez dark este para que sea un color oscuro vamos a no sería así
44:11
y aquí también le tengo que colocar en nad bar dark para que sea un color en este caso digamos invertido que los
44:18
colores estén invertidos sean blancos ok y luego vamos a colocar estas pestañas hacia la derecha entonces para poder
44:24
hacer esto vamos a venir aquí el que contiene esas pestañas que sería éste dif de aquí ok y aquí adentro está este
44:32
huele que contiene estas cuatro pestañas entonces voy a colocarle el inicio simplemente ms auto que es como decirle
44:39
en margin start auto elche que este espacio sea automático lo que va a hacer que se vaya hacia el lado vamos a verlo
44:44
refresco y pueden ver que ya está luego también trae un container fluid voy a cambiarlo con un container simplemente
44:50
guardo refresco y pueden ver que se centra el contenido de fluid hace que abarque todo el ancho disponible
44:56
mientras que el contenido en línea de un espaciado ok y aquí en las pestañas vamos a colocar estos por ejemplo le
45:01
digo que no quiero la pestaña picture si no quiero la pestaña islas que diga home
45:07
luego tampoco quiero la pestaña price inc quiero la pestaña about aquí quiero que diga about y también quiero que aquí
45:14
diga la pestaña contact y esto me va a direccionar a hr es la dge counter de
45:20
hecho aquí no quiero que diga disabled quiero que esté habilitado guardo y tan solo quito esta primera opción de aquí
45:27
le quite ley y me quedaría con estos tres si yo guardo y refresco ahora pueden ver que tengo mi navegación ya
45:33
puedo quitar la navegación de arriba entonces entonces puedo quitar todo esto de aquí lo seleccionó y lo quito
45:38
si guardo y refresco ahí está mi navegación entonces ahora sí puedo cambiar de página como pueden ver ok
45:44
ahora en cuanto al contenido que indicado en estas páginas por ejemplo en este caso yo tengo un hello este hello
45:50
de aquí lo vamos a cambiar el primero vamos a hacer esto voy a decirle que aquí bayern contenido principal vamos a
45:57
colocarle me en content ok debajo del main content vamos a colocar por ejemplo
46:02
una cabecera un header y desde quedar voy a colocar aquí adentro una etiqueta
46:07
img esa etiqueta img vamos a colocarle un logo ahora el logo que ustedes pueden
46:13
colocar siempre pueden añadir lo que en la carpeta pavle porque la carpeta para lee puede de nuevo servir archivos al front
46:20
end es el front end puede visitarlo en mi caso por ejemplo voy a estar descargando una imagen y ustedes también
46:26
van a poder hacer uso de esa imagen ok esta imagen lo pueden encontrar en esta dirección vamos a venir en nuestro
46:31
navegador y pueden encontrarlo en el repositorio de código de este ejemplo aquí está el ejemplo terminado del día
46:37
de hoy y bueno para encontrar la imagen simplemente ven en este repositorio que les voy a dejar en la descripción aquí
46:42
en src aquí van a ver una carpeta llamada public carpeta img y aquí ya
46:48
está la imagen ok esta es la imagen de mi logo entonces simplemente pueden descargarlo aquí uno dice download y van
46:54
a ver que aquí sale la imagen el navegador entonces pueden dar clic derecho a guardar imagen como en mi caso voy a guardarlo en el escritorio en la
47:01
carpeta no first project que es nuestra carpeta de nuestro proyecto en src en tablet y voy a guardarlo aquí ok
47:08
entonces yo puedo cerrarlo si vengo ahora en mi código pueden ver que ahora tengo una imagen aquí está la imagen del
47:13
logo de hecho en mi caso yo prefiero tener un poco más de orden para no combinar imagen y css puedo crear una
47:19
carpeta img y la imagen lo arrastró hacia dentro de la carpeta luego también puedo crear una
47:25
carpeta llamada css y el css lo arrastró entre la carpeta y bueno ahora tengo un
47:30
poco más de orden y sé qué carpetas contienen tan solo archivos de qué tipo ok entonces si yo quiero incluir ahora
47:36
el css por ejemplo en el gel tengo que actualizarlo porque en estos momentos ya
47:41
está dentro una carpeta es ese entonces le digo entre la carpeta es el cs y luego él me dice ese es luego en cuanto
47:47
a las imágenes si yo quiero añadirla aquí le digo desde la carpeta img vas a utilizar fast punto png que es
47:54
básicamente la imagen miren si yo vengo aquí en mi aplicación principal y refresco vamos a ver que tengo la imagen
47:59
entonces vamos a cambiarlo y para poder hacerlo tengo que utilizarlo entonces voy a venir aquí y voy a ir unas cuantas
48:05
clases la primera clase que voy a añadir aquí en este y me va a ser una clase de with voy a colocar lewis 25 que es una
48:11
clase de bustra ok esto inmediatamente va a reducir el tamaño pueden verlo allí ok luego también otra clase que voy a
48:18
añadir es una que centro el contenido en este caso pueden ver que este es el futuro que olvídense de esto por de
48:24
momento pero el contenido quiero que abarque toda la pantalla y que se centre de hecho en este caso como tiene un zoom se ve esta forma pero este es el tamaño
48:30
normal entonces yo quiero que se centra al contenido y debajo está el fútbol para poder hacer eso entonces todo el
48:36
header voy a decirle que va a tener una clase voy a decirle que va a tener una clase container esto lo que va hacer es
48:42
centrarlo como pueden ver ok de yo también colocarle un color como eje de dart por ejemplo para que puedan ver el
48:47
color entero y luego nosotros podemos entrar digamos el tamaño primero por ejemplo decirle the view por gates jane
48:55
para que abarque todo el alto de la pantalla y ahí pueden verlo luego también puedes decirle display flex para
49:02
que utilice flex box luego voy a colocar en justified content center para que el centre
49:09
contenido horizontalmente y luego online itunes centre para que centre el
49:14
contenido verticalmente a la extensión center si guardo esto y refresco vamos a
49:19
ver que tengo el contenido centrado ok de hecho éste deje de dar no es necesario porque no lo voy a utilizar ok
49:25
entonces con esto ya tengo finalmente mi contenido centrado o el contenido principal debajo de colocar un h uno
49:32
simplemente con un título que diga por ejemplo vamos a colocarle fast y aquí
49:37
voy a colocarle una clase también de buster que se llama display flex esto hace que sea un título grande luego un
49:43
margin en el eje de la jr es decir arriba y abajo de 5 luego de colocarle un texto a pair keys y un fondo weight
49:50
bolt para que sea un texto que digamos se note bastante ok ahora en este caso
49:57
todo esto está uno al lado del otro yo quisiera que esté debajo entonces también lo puedo colocar dentro de un
50:02
contenedor con flex box miren vamos a cortar esto voy a colocar aquí un día pegó estoy esta imagen y éste h1 y voy a
50:10
decirle el clip voy a utilizar una clase display flex puede decir que es un flex colom y con esto vamos a cambiar la
50:17
dirección de los elementos pueden ver que está uno debajo del otro pero necesito también de nuevo central entonces voy a colocarle justified
50:24
content center y voy a colocarlo también online itunes
50:29
centre lo está colocados en la derecha porque tiene digamos un ancho máximo decir estaba abarcando todo el ancho por
50:36
eso que lo coloca allí pero colocando esto lo va a centrar dentro del mismo contenedor como pueden ver ok y
50:41
finalmente voy a colocarle un botón aquí debajo que va a ser un enlace pero va a ser un botón que cuando hay un clic me va a enviar about ok vamos a colocar
50:48
aquí debajo una etiqueta esta etiqueta me va a enviar a slash about a la ruta y
50:53
aquí le voy a colocar un texto about y para que esto luzca como un botón voy a colocar una clase que diga btn vtn
51:00
primer i y vamos a colocarle luego también w25 para que abarque 25 por ciento de la
51:07
pantalla que si yo refresco pueden ver que ya está lavado entonces si yo doy un clic como es un enlace me envía about ok
51:14
el listo y si bajo aquí está el fútbol entonces como yo no quiero un fondo blanco también podemos combinarlo con
51:20
nuestros estilos personalizados por ejemplo en main punto css nuevamente pues silva di y le puedo decir que va a
51:25
tener un background y en mi caso voy a colocarle un 20 20 20 si yo guardo y refresco pueden ver que ahora tengo ese
51:30
color luego también en cuanto el color del texto vamos a colocar aquí un color debo decir que va a ser white ok guardo
51:38
y refresco y allí estaría ok entonces ya tenemos nuestra interfaz básica al menos en cuanto a la pantalla principal
51:44
entonces en la digamos en estas otras páginas en about contar también voy a colocar algún texto de ejemplo empecemos
51:50
con el lab out que es el más fácil vamos a venir aquí en en el lab out y es y por ejemplo como ya está utilizando el head
51:57
él ya trae los estilos de bus pero también además del custom css entonces aquí el archivo uno simplemente voy a
52:03
cambiarlo entonces voy a colocarle aquí dentro del barrio una etiqueta a main que es el contenido principal
52:08
y colocarle un section y dentro un archivo uno que diga about luego en cuanto al hecho uno voy a colocar una
52:14
clase que diga display uno por ejemplo y si guardo y refrescó el about pueden ver
52:19
que ha cambiado el título luego en cuanto al texto voy a colocarle un texto aquí con una etiqueta pe y ustedes
52:25
pueden hacer esto en visual studio code puede escribir loren y por ejemplo si escriben 200 y de aumentar esto va
52:31
autocompletar ahora hay muchos que no están acostumbrados a visión studio court y no saben cómo obtener el autocompletado puede escribir
52:37
simplemente el texto loren y el por defecto les va autocompletar pero si no aparece por alguna razón pueden
52:43
presionar contra el espacio ok esto va a ser que el vicio estudio code les fuerce a dar el autocompletado entonces voy a
52:49
colocarlo ahora en 300 guardo y si refresco pueden ver que es el texto de ejemplo ok vamos a ordenarlo también voy
52:55
a colocar el contenido centrado entonces vamos a venir aquí en el mail y le voy a decir que él me iba a tener por ejemplo
53:00
una clase y ugt o mejor dicho el alto de la de
53:05
toda la pantalla de 100 de toda la pantalla el alto máximo lo voy a colocarle un container para que se ha
53:10
centrado en paddington dedos para que se separen del contenido hacia arriba jon centre para que esté centrado en el
53:17
texto y finalmente un display flex con justify content centre para que se ha
53:22
centrado horizontalmente este caso esta sección y luego una line height en centre para que esté centrado
53:28
verticalmente si yo guardo esto y refresco pueden ver que ahora está centrado todo el contenido y bueno con
53:33
esto ya tendríamos nuestro about entonces vamos con el contact en cuanto al contact por lo general siempre es un formulario así que vamos a crear un
53:40
formulario de manera rápida pero no vamos a hacerlo funcionar para este ejemplo tan sólo vamos a dejarlo allí y
53:45
ya luego lo voy a dejar un tutorial de cómo añadir por ejemplo hay otro paquete de mount mailer que nos permite poder
53:50
enviar realmente correos a través de un out pero es todo un asunto de configurarlos y que para no extender mucho este vídeo que es básico pues
53:57
vamos a enfocarnos simplemente en crear la interfaz vamos a quitar este h1 y voy a colocar aquí un dif este tipo tiene
54:03
una clase que sea container voy a colocarle un vejete siempre voy a colocarle también un display flex y voy
54:10
a colocar la misma clase que había utilizado antes para centrarlo entonces justified content center on line itunes
54:16
center y adentro voy a colocar simplemente una tarjeta para colocar en
54:22
muestra podemos utilizar la clase card dentro de la clase card puede colocarle por ejemplo un kart header feder y
54:28
adentro puede colocar un h3 por ejemplo que diga contact y debajo voy a colocar también un formulario entonces debajo
54:35
del dis voy a colocarle aquí un kart body y adentro el formulario entonces en cuanto al formulario nosotros podemos
54:40
colocar por ejemplo distintos inputs y leigh bolton si voy a decirle aquí voy a decirle ley bold voy a decirle email
54:46
para email y aquí voy a colocarle un input es decir de tipo email y aquí voy a colocar un break holder que diga email
54:53
luego lo mismo voy a copiar esto de aquí voy a colocar también no tan sólo un mes sino un mensaje entonces decirle para
54:59
mesas y aquí voy a colocar el texto que diga mesas dos puntos y aquí en lugar de un input de hecho vamos a colocarle un
55:05
text área entonces en cuanto a las propiedades voy a colocar aquí simplemente como name vamos a colocar
55:11
las mesas el haití no es necesario el call tampoco es necesario el rose y lo
55:16
voy a colocar en tres para que ocupe tres filas y luego un botón entonces si yo le digo que y guardar y vengo aquí en
55:23
la aplicación en este caso en nuestro navegador que refrescó pueden ver que hay un formulario aunque no luce muy lo
55:29
principal es que en la tarjeta el kart tiene un color blanco entonces vamos a cambiar la vez quedar sexuales para que
55:35
sea color oscuro de fondo y color de texto blanco allí más o menos se nota
55:40
luego en cuanto al digamos al contenido de los textos vamos a centrar los textos centre guardamos los centro el contenido
55:47
y luego en cuanto al karpaty que contiene un formulario vamos a colocarle a cada uno esto es ley vol dice que los
55:54
separe por ejemplo aquí voy a decir le voy a colocar estos dos zinc un día aquí una clase martín botón de tres y elebol
56:01
voy a colocar le podría añadir una clase para cambiar el tamaño pero de hecho como el input puedo colocarle la clase
56:07
llamada font control esto ya lo va a separar hacia debajo miren yo refresco y hasta debajo ahora esto de aquí para
56:13
empezar le está colocando también el email centrado voy a colocar aquí tan sólo en el carbón y un texto left para
56:20
que lo coloque hacia la izquierda creo que es este es estar vamos a probarlo ok es texto estado y lo mismo
56:27
voy a colocar aquí este libro y este texto área en un día que sea más bien botón de tres y luego del dif voy a
56:33
decirle que también lo mismo va a tener en clase y el texto de clase forma control y también puedo colocar un place
56:40
holder que diga bright a message ok guardo esto refresco y ahí luciría mi
56:47
formulario luego en cuanto al botón también voy a colocar unas clases hoy 6 clase vtn btn primary para que sea un
56:53
botón de color azul y veten y guión blog para que abarque todo el ancho disponible de la tarjeta y pueden ver
57:00
que así quedaría ok entonces con esto ya tengo finalmente mis múltiples páginas ya están estilizadas y pueden ver que no
57:06
ha sido difícil ahora aquí nada más en la navegación cuando den clic en el logo esto no me redirige al inicio si no me
57:12
está colocando un numeral simplemente entonces vamos a venir navigation y le digo ok cuando dé un clic vas a
57:17
redireccionarlo hacia el es las guardo y si vengo a la aplicación y refresco y por ejemplo vengan a home about contact
57:25
y luego en naut website o bueno notebooks hoy me envía hacia hong también ok listo tan sólo nos falta el
57:31
fútbol vamos a estilizar lo que sería lo más rápido realmente entonces vamos a venir el código en fútbol
57:37
y en este caso el fútbol tan solo es un contenedor que ustedes saben que el fútbol al final es como especie de ti
57:43
pero semántico entonces aquí voy a colocarle class bg dark y text center
57:49
para que esté centrado y luego un padding dedos hacia todos los lados en cuanto al segundo no es necesario no
57:55
sólo dejar la etiqueta para dejar la etiqueta que también es demasiado texto voy a colocar simplemente un link de 10 por ejemplo y aquí voy a colocarle un
58:02
clase h 4 esto es para que a pesar de que es un párrafo nosotros vamos a hacer que luzca como un h 4 entonces si yo
58:08
refresco aquí en la página vamos a ver que así lucía mi fútbol aunque de hecho vamos a colocarle un país de cuatro para
58:14
que esté un poco más espaciado ahí está 10 lo que entonces sí por ejemplo navegó
58:19
hacia about en este caso no tiene el fútbol pero sí navego contac este si
58:24
quiero que tenga el fútbol entonces simplemente puedo hacer esto puede venir about para un en contact y aquí así como
58:29
tengo este navigation puedo copiar esta línea de código y pegarlo aquí debajo antes de que termine el bad y el vídeo
58:36
aquí van a ir el fútbol si guardo y vengo la aplicación y refresco vamos a ver que aquí debajo está el fútbol ok
58:42
ahora como esto es vuestra otros reducimos el tamaño por ejemplo en tamaño de pantalla móvil en este caso
58:49
pueden ver que ya se adapta los antes que que ya vamos a querer hacer funcionar esta navegación ahora en este
58:55
caso no funciona y es porque nos falta añadir el código de javascript entonces vamos a venir aquí en este caso
59:00
en nuestra documentación en la parte de documentación inicial donde dice read de
59:06
docs y así como teníamos el enlace de css vamos a añadir también el de javascript porque aquí estamos haciendo
59:12
funcionarios de lleva script estamos presionando un botón entonces para poder manejar eso vamos a venir en el código y
59:18
le voy a decir ok aquí en el fútbol puede añadir en el futuro o debajo entonces si nosotros queremos por
59:24
ejemplo en algunas páginas tener este escribió en algunas otras no puede añadir en algunas como in club o puedo
59:30
colocarla aquí también así como tenía un header o un head puedo colocar otro archivo que tan sólo añada los
59:36
javascript que van a ser utilizados para este ejemplo lo que voy a hacer para simplificarlo es ir aquí en el poder y
59:42
voy a añadir lo voy a añadir lo aquí una etiqueta script ok de vuelta que éste escribe ese roce y adentro pego el
59:47
enlace de esa forma ahora si yo quiero que todas las páginas tengan escribe entonces tengo que añadir al fútbol en
59:53
todos lados vamos a venir aquí por ejemplo en el abad el abad debería tener entonces también el fútbol para que
59:59
funcione en la navegación para que se pueda digamos funcionar ese botón cuando
1:00:05
esté en tamaño pantalla móvil 2 aquí le digo fútbol y el contac también tiene el fútbol ok entonces si vengo ahora en la
1:00:11
aplicación y abro vamos a refrescar y abro pueden ver que ahora funciona incluso puedo navegar puedes ir lo que
1:00:17
vamos a en about que esta es la bout puedo abrirlo me envía el contacto y lo mismo entonces de esta forma ahora puedo
1:00:22
navegar fácilmente tanto en móvil como obviamente falta muchas cosas que podría mejorar aquí pero vamos a pasar en la
1:00:28
siguiente sección finalmente a desplegar este sitio porque ya estaría su aplicación es decir con esto ya podrían
1:00:33
empezar a crear algunos sitios sencillos pero ya han practicado lo suficiente como para poder entender el rotador los
1:00:39
estilos y cómo añadir código dejaba escribir incluso utilizando estos scripts ahora en la siguiente sección
1:00:45
vamos a aprender cómo desplegarlo gratuitamente utilizando un servicio llamado heroku

## Despliegue en Heroku

1:00:51
ok en esta última sección vamos a aprender cómo desplegar nuestra primera aplicación de now 10 para poder hacerlo
1:00:56
puede estar utilizando un servicio llamado heroku pero que es un servicio que nos permite poder desplegar nuestro
1:01:02
código y ese va encargar básicamente de generar todas las configuraciones y todos los necesarios para poder hacer
1:01:08
funcionar nuestro sitio en producción ahora para esta aplicación va a ser muy sencillo desplegarlo porque no hay base
1:01:13
de datos no hay ninguna otra aplicación externa tan sólo es now 10 entonces podemos utilizarlo gratuitamente lo
1:01:19
primero es registrarse yo lo recomiendo que venga aquí donde dice sign up y se registren es gratuito y no les pide
1:01:25
tarjeta de crédito ni nada de eso así que les recomiendo que lo hagan una vez se registren van a poder obtener acceso
1:01:30
a una página como ésta esta es mi cuenta por ejemplo entonces voy a venir aquí voy a decirle create new up get aquí con
1:01:38
esto vamos a crear nuestra primera aplicación creo que le llama aplicaciones o proyectos a los digamos a
1:01:44
las aplicaciones web que nosotros subimos en su plataforma entonces vamos a colocar un nombre muy importante que
1:01:49
coloquemos su nombre aquí único porque él nos va a dar una url gratuita con https incluso entonces vamos a colocar
1:01:56
una url por ejemplo o sea única de hecho él también lo comprueba vamos a colocarle no 10 years
1:02:02
y voy a colocarle de nuevo 10 years fast ok para que sea único la url prueben con otros nombres ok y luego le dan en
1:02:09
create up una vez hemos creado esta aplicación lo que vamos a hacer luego es empezar a subirlo y lo primero que nos
1:02:16
detalla aquí debajo es cómo instalar o cómo empezar a desplegar esta aplicación utilizando unos comandos ahora muy
1:02:23
importante para poder subir esta aplicación vamos a necesitar conocimientos básicos de git git es un
1:02:28
sistema de control de versiones es un programa que nos permite controlar el código si no saben nada de git les
1:02:34
recomiendo que primero vayan en este vídeo que les voy a dejar en pantalla aquí arriba que es el curso básico de
1:02:39
git allí les explico los comandos básicos y es muy importante si están empezando a desarrollar aplicaciones que lo conozcan porque tarde o temprano si
1:02:45
van a trabajar para ustedes para alguien o para una empresa al final van a necesitar de esa herramienta así que les
1:02:51
dejo el vídeo para que primero pueden aprenderlo pero para los que ya saben pues vamos a hacer esto lo que nos pide
1:02:56
hero que en primer lugar es descargar su programa de consola llamado hero cooklin que está aquí si nosotros damos un clic
1:03:02
esto nos va a llevar a la documentación buckley vamos a bajar un poco y aquí algo de talla tres formas de instalar
1:03:08
hello click para los distintos sistemas operativos para windows para linux y para mac en mi caso como estoy en
1:03:14
windows voy a descargar el instalador de 64 bits pero si están en mac pueden copiar y pegar este código en su
1:03:19
terminal y lo mismo con linux pueden copiar y pegar este código su terminal y ya estaría ya lo tendrían listo ok en mi
1:03:25
caso como estoy en windows tengo que descargar un instalador voy a dar un clic aquí se descarga el instalador es bastante ligero no es pesado el programa
1:03:32
de nuevo es un programa de consola tan solamente esto me va a lanzar una pantalla de si aceptar o no le voy a dar
1:03:38
que sí y pueden ver que aquí está el instalador y vamos a darle next instalar y siguiente esto lo único que va a hacer
1:03:45
es instalar el programa listo como pueden ver aquí ya terminó vamos a darle close o cerrar y ahora para comprobar si
1:03:51
tengo realmente instalado heroku clic vamos a hacer esto vuelvo a abrir una consola terminal si está en el libro su
1:03:56
mac y si están en windows vamos a presionar windows r y vamos a escribir en esta ventana que aparece llamada run
1:04:03
vamos a escribir cmd y vamos a dar un enter esto lo que era es que va a permitirnos comprobar el comando heroku
1:04:08
espacio versión escriban esto en su terminal o consola y si da un ínter van a ver una salida como
1:04:14
esta que dice heroku y el nombre del o el número de la versión que tienen de hero q instalado ok esto significa que
1:04:22
ya tenemos claro que instalado nuestro computador entonces vamos a ir en visión estudio code y aquí vamos a abrir una
1:04:27
consola nueva y también vamos a comprobarlo heroku guión guión versión doy un enter y bueno pueden ver que allí
1:04:33
lo tengo si por alguna razón lo están viendo en su consola pero cuando ejecutan aquí no está es posiblemente
1:04:39
porque visual estudio como necesita reiniciarse simplemente los cierren y lo vuelven a abrir es decir cierran aquí
1:04:44
visible estudio code y vuelven a abrir el editor y una vez abierto pues ya
1:04:50
debería reconocer heroku ok tan sólo para tomar en cuenta esos posibles casos listo entonces vamos a empezar a
1:04:56
desplegarlo lo primero que necesito hacer es crear un repositorio de git vamos a limpiar aquí la consola y el
1:05:02
primer comando que voy a ejecutar es el comando git init esto va a inicializar un repositorio de git esto lo que va a
1:05:08
hacer es que va a seleccionar todos mis archivos y va a creer que todo esto es lo que necesito subir pero en realidad
1:05:13
todo sólo necesita subir el código fuente no necesito subir la carpeta no tomo dios por qué puede volver a generar
1:05:18
ejecutando en pie in store ya que aquí están anotados básicamente en mis módulos que necesiten mi proyecto ok
1:05:24
entonces no es necesario que subir la carpeta nuevos módulos entonces voy a añadir aquí un archivo que ignore ignore
1:05:32
y dentro de getting no voy a decirle ignora la carpeta no su guión models no quiero que subas esto ok entonces con
1:05:39
esto si escribo quite status en consola vamos a ver que los únicos archivos que voy a estar subiendo es grito ignore
1:05:45
patas locas jason y la carpeta cerro set de hecho si ustedes quieren verlo gráficamente aquí visible estudio code
1:05:51
tiene una pestaña de más shows control y aquí están todos los archivos que van a estar siendo subidos a su repositorio
1:05:57
por lo general nosotros subimos estos repositorios a kid cap pero hero q tiene su propia forma de almacenar código así
1:06:04
que no es necesario que los subamos a gif pero si podríamos subirlo a ambos incluso ok podemos subir los guías
1:06:09
viajero q ahora en este caso para desplegarlo tan solo necesito subiera heroku entonces vamos a venir aquí y voy
1:06:14
seguir apuntó y si escribo aquí está status nuevamente vamos a ver como ahora
1:06:20
aparecen en verde como diciéndome ya seleccionar estos archivos que van a ser subidos entonces vamos a crear nuestra
1:06:25
primera versión de nuestro proyecto voy a decir git comité jon m espacio y entre dobles comillas voy a colocar un mensaje
1:06:31
por ejemplo fierce comité listo ya tengo mi primer comité de mi proyecto entonces ya puede empezar a subirlo a heroku
1:06:38
entonces voy a volver a la página de hero y aquí en esta pestaña y pueden ver que lo siguiente que me dice que luego
1:06:44
que instaló heroku clic es que ejecute blogging ok vamos a hacerlo vamos a venir en consola es decir heroku login
1:06:51
esto lo usa para que nosotros podamos autenticar nuestra aplicación con
1:06:56
nuestra cuenta y decirle que vamos a subir esta aplicación a nuestra cuenta ok vamos a presionar cualquier tecla que
1:07:02
no sea la que por ejemplo w supongamos ok y esto abre una pestaña nueva aquí le
1:07:07
vamos a dar login y con esto vamos a estar bloqueando nuestra consola con heroku aquí me dice ya está bloqueado
1:07:13
puedes cerrar esta página ok ya puedo cerrarlo si vengo ahora en la consola pueden ver que mi sitio está bloqueado
1:07:19
con tu correo falso robo fastweb puntocom ok entonces vamos a escribir nuestro primer comando para subirlo si
1:07:25
venimos nuevamente en las instrucciones él me dice que los siguientes crear un proyecto darwin init y añadir esto estos
1:07:32
dos primeros comandos o líneas ya lo tengo hecho porque ya tengo mi proyecto ya ha dado un hit init incluso un comité
1:07:38
entonces simplemente vamos a añadir este heroku git remote vamos a copiar esto de aquí vamos a venir a la consola y vamos
1:07:44
a pegar lo damos un enter con esto ya tengo en mi repositorio añadido ahora vamos a venir en los
1:07:51
últimos comandos y necesito ejecutar este git pusieron master tampoco necesito ejecutar quitar ni git commit
1:07:57
porque ya lo hemos hecho tan solo necesito este de aquí copio y pego y si doy un -entre ahora va a empezar a subir
1:08:02
nuestro código a heroku ok entonces esto de aquí de hecho hace una especie de subida de código
1:08:08
heroku luego en jericó empieza a saber que esto está utilizando un pack a jason y como tiene un podcast jason empieza a
1:08:15
generar digamos la instalación de nuestros módulos y luego la ejecución pero vamos a tener un error prefiero que
1:08:21
vean el error para que no tengan problema pueden ver que aquí me dice aquí está desplegado tu aplicación si yo doy un clic vamos a ver que no se
1:08:27
ejecuta nada ok de hecho me dice application error si ustedes obtiene un error pueden verlo con este comando heroku logs -- tail vamos a copiar lo
1:08:35
vamos a pegarlo en nuestra consola de visual studio code damos un mente esto va a cargar y pueden ver qué me dice se
1:08:40
requiere o digamos no se encuentra en la escribe start esto es importante en hero
1:08:46
con nosotros vamos a tener que ejecutar el script start que se describe estar bueno así como tenemos nuestro script
1:08:51
def también estamos crear un script entonces vamos a colocar una coma y voy a colocar aquí start y luego para
1:08:59
ejecutarlo en producción no necesito no de mont porque no necesito reiniciar el código entonces vamos a utilizar no de simplemente ese arroz en inglés punto
1:09:07
fota ese entonces con esto ya estaría ahora un asunto más pero que nos va a dar el puerto cuando hemos desarrollado
1:09:12
nosotros mismos en index hemos colocado el puerto 3000 y está bien para empezar pero jericho luego nos va a dar un
1:09:18
puerto que puede ser 4.000 80 89 mil entonces para poder tomar ese puerto que
1:09:23
nos da heroku en lugar de decirle 3000 voy a decirle al inicio vas a utilizar el proceso punto en punto port o el 3000
1:09:32
esto que ven aquí esta palabra rara se le conoce como una variable de entorno ok estamos leyendo
1:09:38
una variable que está dada por el sistema operativo como jericó se está ejecutando en una máquina y al final él
1:09:44
está digamos distribuyendo puertos o está asignando aplicaciones con puertos pues él nos va a dar el puerto de esta
1:09:50
forma yo le digo toma el puerto que te dé la máquina y si no te está dando nada pues utiliza el 3000 entonces esta forma
1:09:56
aquí también lo puedes ir concatenando con el proceso punto en el punto port el 3000 si yo guardo esto y vengo la
1:10:04
aplicación con el pie en run def vamos a venir aquí en consola esto no va a haber ningún cambio ok bueno aquí el
1:10:11
escrito mal tan solamente vamos a refrescar pueden ver que sigue funcionando el 3000 pero esto de aquí en
1:10:17
heroku lo que va a hacer es usar el puerto que nos dé heroku ok vamos a verlo primero necesito hacer un cómic
1:10:22
nuevamente entonces vamos a cancelar la consola y voy a decir git status
1:10:29
bit.ly status nuevamente para ver que estos son los dos archivos que he cambiado y git commit millón m y vamos a
1:10:37
decirle aquí entre las dobles comillas vamos a colocarle puerto actualizado puede colocar en español donde si ningún
1:10:43
problema puerto actualizado y luego git push ahora para hacer la actualización
1:10:48
pueden volver a ejecutar este comando que tienen aquí ese comando que le da aquí heroku que es git pusieron master
1:10:55
ok que es el mismo comando de git si se dan cuenta son los que lo están subiendo a los repositores de heroku entonces al
1:11:01
yo subir estos cambios pero que nuevamente están recibiendo el código y va a volver a generar todas de nuestro
1:11:09
programa ahora esto el proceso es mucho más rápido que el anterior principalmente porque ya tienen la dependencia están solo está actualizando
1:11:15
el código ok entonces en nuestro caso lo único que vamos a obtener es nuevamente el enlace vamos a dar un control clic
1:11:20
para abrirlo en el navegador y me decía ahora el navegador pueden ver que ya está la dirección con el know the
1:11:26
spheres fast que es el nombre del proyecto heroku up puntocom y se cambia de página pueden ver que ahí está
1:11:32
nuestra aplicación entonces esto de aquí ya lo pueden compartir mira incluso éste como https ok entonces pueden
1:11:38
compartirlo fácilmente y ya han prototipado y ya han creado su primera aplicación utilizando nautile eso sería
1:11:44
todo por este vídeo si quieren saber más de hero que nos dejen en los comentarios que les gustaría saber también he creado
1:11:50
algunos vídeos dedicados a algunos temas como desplieguen heroku por ejemplo que está en mi otro canal pero eventualmente
1:11:55
voy a publicarlos aquí porque voy a estar ordenando un poco mis canales entonces les recomiendo que estén atentos al canal porque voy a estar
1:12:01
publicando frecuentemente tanto charts como vídeos extensos y bueno con esto ya actualizado ejemplo que hace mucho
1:12:07
tiempo creo que era justamente tu primer sitio con audios sólo que desde ese momento que hace tres años hasta ahora
1:12:13
han cambiado módulos y pueden ver que hoy en día tenemos una forma más actualizada de crear servidores en nube
1:12:19
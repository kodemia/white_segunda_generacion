# Ejercicios de spread 

Instrucciones:
Deben hacer fork de este repositorio, deben clonarlo en su computadora y crear una carpeta con su nombre a la altura de este archivo.
En la carpeta deben poner un script de node con la resolucion de cada uno de los ejercicios, despues suban los cambios y hagan un pullRequest a este repositorio para que pueda revisar su codigo

Nota: obviamente todos estos ejercicios deben realizarse usando el operado spread/rest "```...```" y/o la deconstruccion de Objeto y de Array


Recusros: 
- [MDN web docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator)
---

## Objetos

### 1.- Union de 2 objetos

Descripción:
Dados 2 objetos crear un solo objeto que tenga las propiedades de los dos iniciales

Entrada: 
```javascript
const mujeres = {
  rak: "koder",
  caro: "koder",
  daniela: "koder"
}
const hombres = {
  antonio: "koder",
  daniel: "koder",
  edwin: "koder",
  manuel: "koder"
}
```

Salida: 
```javascript
{
  rak: "koder",
  caro: "koder",
  daniela: "koder",
  antonio: "koder",
  daniel: "koder",
  edwin: "koder",
  manuel: "koder"
}
```
### 2.- Deconstruccion de objetos

Descripción:
Dado el objeto ```koders``` tomar solo los keys de las koders mujeres

Entrada:
```javascript
const koders = {
  rak: "koder",
  caro: "koder",
  daniela: "koder",
  antonio: "koder",
  daniel: "koder",
  edwin: "koder",
  manuel: "koder"
}
```

Salida:
```javascript
{
  rak: "koder",
  caro: "koder",
  daniela: "koder"
}
```

### 3.- Deconstruccion y renombramiento

Descripción:
Tomar los Cambiar el nombre de 3 de los koders por el mismo nombre pero con matuscula, emeplo ```rak => Rak```

Entrada: 
```javascript
const koders = {
  rak: "koder",
  caro: "koder",
  daniela: "koder",
  antonio: "koder",
  daniel: "koder",
  edwin: "koder",
  manuel: "koder"
}
```
Salida: 
```javascript
  Rak = "koder"
  Caro = "koder"
  Daniela = "koder"
  Antonio = "koder"
  Daniel = "koder"
  Edwin = "koder"
  Manuel = "koder"
```

### 4.- Valores por defecto

Descripción:
Tomar los keys "manul" y "memo" del objeto ```koders``` y si no se encuntra alguno debe tener como valor default la cadena "koder nuevo"

Entrada: 
```javascript
const koders = {
  rak: "koder",
  caro: "koder",
  daniela: "koder",
  antonio: "koder",
  daniel: "koder",
  edwin: "koder",
  manuel: "koder"
}
```
Salida: 
```javascript
  manuel = "koder"
  memo = "koder nuevo"
```

### 5.- Deconstruir y guardar el resto

Descripcion:
Deconstruir el objeto kodemia para guardar en un varibale al unico mentor que esta en el objeto y guardar el resto en otro objeto llamado koders

Entrada:
```javascript
const kodemia = {
  rose: 'koder',
  memo: 'koder',
  charles: 'mentor',
  edwin: 'koder'
}
```
Salida: 
```javascript
mentors = { charles: 'mentor' }
koders = {
  rose: 'koder',
  memo: 'koder',
  edwin: 'koder'
}
```

---
## Arrays

### 1.- Union de n arrays

Descripción:
Dado n numero de arrays unirlos EN ORDEN en un solo array resultante

Entradas:
```javascript
const oneToThree = [ 1, 2, 3 ]
const sevenToNine = [ 7, 8, 9 ]
const fourToSix = [ 4, 5, 6 ]
```

Salida:
```javascript
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```
### 2.- Deconstruccion de arrays

Tomar los 2 primeros elementos del array y guardar cada uno en variables llamadas "primero" y "segundo" respecticamente

Entrada:
```javascript
const mentors = ['Isra', 'David', 'Charles', 'Kevin']
```
Salida: 

```javascript
primero = "Isra"
segundo = "David"
```

### 3.- Deconstruccion y guardar resto

Descripción:
Deconstruir el array ```people``` para guardar el primer elemento en una varibale llamada "stranger" el resto en una variable llamada "koders"

Entrada:
```javascript
const personas = ['Juanin', 'Edwin', 'Diego', 'Daniel', 'Francisco', 'Misael', 'Rosa', 'Caro']
```
Salida:
```javascript
stranger = 'Juanin'
koders = ['Edwin', 'Diego', 'Daniel', 'Francisco', 'Misael', 'Rosa', 'Caro']
```


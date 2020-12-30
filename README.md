# manager-json
A simple way to edit json files. (Read, Delete, Write and Update)

## Installation 🚀

```bash
$ npm install manager-json
```
## Functions

```js
/**
 * Insert a new item to the json file
 * @param {string} file - Absolut route
 * @param {object} item - New Object to insert
 *  
 */
addNewItem(file, item)

/**
 * Get the items from the json file and return them in array of objects
 * @param {string} file - Absolute route
 * @returns {Array<object>} All items
 */
getItems(file)

/**
 * Filter the items whit exact mach
 * @param {string} file - Absolute route
 * @param {string|number} _attr - Attribute
 * @param {string|number} _value - Attribute value
 * @returns {Array<object>} Items filtered
 */
filterItems(file, _attr, _value)

/**
 * Remove item from the Json File
 * @param {string} file - Absolute route
 * @param {string|number} _attrUnico - Attibute
 * @param {string|number} _valueUnico - Attribute value
 * @returns {Array<object>} All items available in the json file
 */
removeItem(file, _attrUnico, _valueUnico)

/**
 * Change a item
 * @param {string} file - Absolute route
 * @param {string|number} _attrUnico - Attribute to find
 * @param {string|number} _valueUnico - Attribute value to find
 * @param {string|number} _attr - Attribute to change
 * @param {string|number} _value - Attribute with new value
 */
changeItem(file, _attrUnico, _valueUnico, _attr, _value)
```



## How to use

### Project Example

```
├── example         
	├── node_modules                
	├── src
	│   └── example.js
	│	└── data.json
	├── package.json

```

#### File: `data.json`

```json
[
    {
        "id":0,
        "name":"Hugo",
        "age":20
    },
    {
        "id":1,
        "name":"Homer",
        "age":25
    },
    {
        "id":2,
        "name":"Carla",
        "age":30
    }
]
```

#### File: `example.js`

##### .addNewItem(file, item)

###### Code editing

```js
const managerJson = require('manager-json');
const path = require('path');

const file = path.join(__dirname,"data.json");

let newItem = {
    "id":4,
    "name":"marcos",
    "age":35
};

managerJson.addNewItem(file, newItem);
```

###### File `data.json`

```json
[
    {
        "id": 0,
        "name": "Hugo",
        "age": 20
    },
    {
        "id": 1,
        "name": "Homer",
        "age": 25
    },
    {
        "id": 2,
        "name": "Carla",
        "age": 30
    },
    {
        "id": 4,
        "name": "marcos",
        "age": 35
    }
]
```

---

##### .getItems(file)

###### Code editing

```js
const managerJson = require('manager-json');
const path = require('path');

const file = path.join(__dirname,"data.json");

let data = managerJson.getItems(file);

console.log(data);
```

###### Console

```bash
[
  { id: 0, name: 'Hugo', age: 20 },
  { id: 1, name: 'Homer', age: 25 },
  { id: 2, name: 'Carla', age: 30 }
]
```

---

##### .filterItems(file, _attr, _value)

###### Code editing

```js
const managerJson = require('manager-json');
const path = require('path');

const file = path.join(__dirname,"data.json");

let data = managerJson.filterItems(file, "age", 25);

console.log(data);
```

###### Console

```bash
[ { id: 1, name: 'Homer', age: 25 } ]
```

---

##### .removeItem(file, _attrUnico, _valueUnico)

###### Code editing

```js
const managerJson = require('manager-json');
const path = require('path');

const file = path.join(__dirname,"data.json");

let data = managerJson.removeItem(file, "id", 1);

console.log(data);
```

###### Console

```bash
[ { id: 0, name: 'Hugo', age: 20 }, { id: 2, name: 'Carla', age: 30 } ]
```

---

##### .changeItem(file, _attrUnico, _valueUnico, _attr, _value)

###### Code editing

```js
const managerJson = require('manager-json');
const path = require('path');

const file = path.join(__dirname,"data.json");

managerJson.changeItem(file, "id", 1, "age", 22);
```

###### File `data.json`

```json
[
    {
        "id": 0,
        "name": "Hugo",
        "age": 20
    },
    {
        "id": 2,
        "name": "Carla",
        "age": 30
    },
    {
        "id": 1,
        "name": "Homer",
        "age": 22
    }
]
```

---

> Thanks  ❤️
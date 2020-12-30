const fs = require('fs');

/**
 * Insert a new item to the json file
 * @param {string} file - Absolut route
 * @param {object} item - New Object to insert
 *  
 */
function addNewItem(file, item) {
    let _data = getItems(file);
    _data.push(item);
    _json_data = JSON.stringify(_data);
    fs.writeFileSync(file, _json_data, "utf-8");
};

/**
 * Get the items from the json file and return them in array of objects
 * @param {string} file - Absolute route
 * @returns {Array<object>} All items
 */
function getItems(file) {
    const last_data = fs.readFileSync(file, "utf-8");
    let _detData;
    if (last_data === "") {
        _getData = [];
    } else {
        _getData = JSON.parse(last_data);
    }
    return _getData;
};

/**
 * Filter the items whit exact mach
 * @param {string} file - Absolute route
 * @param {string|number} _attr - Attribute
 * @param {string|number} _value - Attribute value
 * @returns {Array<object>} Items filtered
 */
function filterItems(file, _attr, _value) {
    let _data = getItems(file);
    _data = _data.filter(__data => __data[_attr] == _value);
    if (_data.length > 0) {
        _data[0][_attr] = _value;
    } else {
        return null;
    }
    return _data;
};

/**
 * Remove item from the Json File
 * @param {string} file - Absolute route
 * @param {string|number} _attrUnico - Attibute
 * @param {string|number} _valueUnico - Attribute value
 * @returns {Array<object>} All items available in the json file
 */
function removeItem(file, _attrUnico, _valueUnico) {
    let _data = getItems(file);
    _data = _data.filter(__data => __data[_attrUnico] != _valueUnico);
    _json_data = JSON.stringify(_data);
    fs.writeFileSync(file, _json_data, "utf-8");
    return _data;
};

/**
 * Change a item
 * @param {string} file - Absolute route
 * @param {string|number} _attrUnico - Attribute to find
 * @param {string|number} _valueUnico - Attribute value to find
 * @param {string|number} _attr - Attribute to change
 * @param {string|number} _value - Attribute with new value
 */
function changeItem(file, _attrUnico, _valueUnico, _attr, _value) {
    let temporalItem = filterItems(file, _attrUnico, _valueUnico);
    if (temporalItem != null) {
        let _data = getItems(file);
        _data = removeItem(file, _attrUnico, _valueUnico);
        temporalItem[0][_attr] = _value;
        addNewItem(file, temporalItem[0]);
    }
};



exports.addNewItem = addNewItem;
exports.getItems = getItems;
exports.filterItems = filterItems;
exports.removeItem = removeItem;
exports.changeItem = changeItem;

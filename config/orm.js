const connection = require("./connection.js");

// create methods for selectAll()
const orm = {
    selectAll: function(whatToSelect, tableInput) {
        const queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
          });
    },


// create methods for updateOne()
    updateOne: function(table, values, condition, cb) {
        const queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objtosql(values)
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(result);
        })
    },

// create methods for insertOne()
    insertOne: function(table, cols, values, cb) {
        const queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(result);
        })
}
}
function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i<num; i++) {
        arr.push("?")
    }
    return arr.toString();
}
function objtosql(ob) {
    const arr = [];
    for (let key in ob) {
        arr.push(key + "=" + ob[key])
    }
    return arr.toString();
}
// export ORM object
module.exports = orm;
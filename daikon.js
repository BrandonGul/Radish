const fs = require('fs')

var dict = {};

exports.loadDirectory = function(filePath) {
  fs.readdir(filePath, function(err, files) {
    files
    .filter(function(file) {
      return file.substr(-5) === '.html';
    });
    .forEach(function(file) {
      fs.readFile(filePath + '/' + file, function(err, data) { dict[file] = data.toString()});
    });
  })
}

exports.format = function (fileName, array, callback) {
  if (dict.hasOwnProperty(fileName)) {
    var str = dict[fileName];
    for (var i = 0; i < array.length; i++) {
      for (var key in array[i]) {
        str = str.replace(key, array[i][key]);
      }
    }
    return str;
  }
}

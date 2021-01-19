truncate = function(str, length) {
    if (length == null) {
      length = 150;
    }
   
    if (str.length > length) {
      return str.substring(0, length);
    } else {
      return str;
    }
  };
console.log(truncate('The quick brown fox jumps over the lazy dog'));
console.log(truncate('The quick brown fox jumps over the lazy dog',14));

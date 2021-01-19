protect_email = function (user_email) {
    var avg, split, left, right;
    split = user_email.split("@");
    left = split[0];
    avg = left.length / 2;
    left = left.substring(0, (left.length - avg));
    right = split[1];
    return left + "...@" + right;
};

console.log(protect_email("eddygrant@example.com"));
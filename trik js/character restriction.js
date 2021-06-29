var invalid = /[°"§%()\[\]{}=\\?´`'#<>|,;.:+_-]+/g;
var toCheck = 'asfasdf';
toCheck.match(invalid)

function validate(a, b, c) {
    var invalid = /[°"§%()\[\]{}=\\?´`'#<>|,;.:+_-]+/g;
    var result = b.match(invalid)

    if (result != null) {
        console.log('ada yg salah')
    } else {
        console.log('sudah benar')
    }
}
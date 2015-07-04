var Sex = (function(){
    var sex = {
        get MAN(){
            return 1;
        },
        get WOMAN(){
            return 2;
        }
    };

    return sex
})();

Object.freeze(Sex);
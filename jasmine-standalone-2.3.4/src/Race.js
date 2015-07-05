function Race(){};

(function(){
    Race.ELF = {
        language:"エルフ語"
    };
    Race.ELF.SORCERER = Object.create(Race.ELF, {
        race:_readOnly("ELF"),
        job:_readOnly("SORCERER"),
        "技":_readOnly(10),
        "体":_readOnly(3),
        "心":_readOnly(13)
    });

    function _readOnly(readOnly){
        return {
            get:function(){
                return readOnly;
            }
        };
    }
})();
var PlayerCharacter = (function(){
    /**
     * プレイヤーキャラクターを表現します。
     * @constructor
     */
    return function PlayerCharacter(json){
        _check(json);

        var _lif = json.race["体"] + json.spec.d;
        var _skills = json.skills;
        var _damage = json.damage;
        var _pow = json.race["心"] + json.spec.f;

        //publicプロパティ群
        var self = Object.create(PlayerCharacter.prototype, {
            hp:{
                get:function(){
                    return _lif + _skills.reduce(_countLv, 0) * 3 - _damage;
                }
            },
            mp:{
                get:function(){
                    return _pow + _skills.reduce(_countMagicSkill, 0) * 3
                }
            }
        });

        return self;
    };

    //private関数群

    /**
     * オブジェクトの型チェックを行います。
     * @param json
     * @private
     */
    function _check(json){
        ["spec", "race"].forEach(function(name){
            if(typeof json[name] !== "object") throw 0;
        });

        ["a", "b", "c", "d", "e", "f"].forEach(function(name){
            if(typeof json.spec[name] !== "number") throw 0;
        });

        ["技", "体", "心"].forEach(function(name){
            if(typeof json.race[name] !== "number") throw 0;
        });

        ["race", "job"].forEach(function(name){
            if(typeof json.race[name] !== "string") throw 0;
        });

        [
            "skills"
        ].forEach(function(name){
            if(!Array.isArray(json[name])) throw 0;
        });
    }

    /**
     * レベルを判定します。
     * この関数はreduce専用です。
     * @param lv
     * @param skill
     * @returns {*}
     * @private
     */
    function _countLv(lv, skill){
        if(skill.lv > lv){
            return skill.lv;
        }else{
            return lv;
        }
    }

    /**
     * 魔法技能数を判定します。
     * この関数はreduce専用です。
     * @param count
     * @param skill
     * @returns {*}
     * @private
     */
    function _countMagicSkill(count, skill){
        if(Skill.isMagic(skill)){
            return count + 1;
        }else{
            return count;
        }
    }
})();
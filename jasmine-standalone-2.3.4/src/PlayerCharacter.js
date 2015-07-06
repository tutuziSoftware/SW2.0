var PlayerCharacter = (function(){
    /**
     * プレイヤーキャラクターを表現します。
     * @constructor
     */
    return function PlayerCharacter(json){
        _check(json);

        var _LIFE = json.race["体"] + json.spec.d;
        var _skills = json.skills;
        var _damage = json.damage;
        var _POWER = json.race["心"] + json.spec.f;
        //器用度
        var _SKILLFULL = json.race["技"] + json.spec.a;
        var _SPEED = json.race["技"] + json.spec.b;
        var _MUSCULAR = json.race["体"] + json.spec.c;
        var _INT = json.race["心"] + json.spec.e;
        var _RACE = json.race;

        //publicプロパティ群
        var self = Object.create(PlayerCharacter.prototype, {
            hp:{
                get:function(){
                    return _LIFE + _skills.reduce(_countLv, 0) * 3 - _damage;
                }
            },
            mp:{
                get:function(){
                    return _POWER + _skills.reduce(_countMagicSkill, 0) * 3
                }
            },
            "器用度":{
                get:function(){
                    return _SKILLFULL;
                }
            },
            "器用度ボーナス":{
                get:function(){
                    return Math.floor(_SKILLFULL / 6);
                }
            },
            "敏捷度":{
                get:function(){
                    return _SPEED;
                }
            },
            "敏捷度ボーナス":{
                get:function(){
                    return Math.floor(_SPEED / 6);
                }
            },
            "筋力":{
                get:function(){
                    return _MUSCULAR;
                }
            },
            "筋力ボーナス":{
                get:function(){
                    return Math.floor(_MUSCULAR / 6);
                }
            },
            "生命力":{
                get:function(){
                    return _LIFE;
                }
            },
            "生命力ボーナス":{
                get:function(){
                    return Math.floor(_LIFE / 6);
                }
            },
            "知力":{
                get:function(){
                    return _INT;
                }
            },
            "知力ボーナス":{
                get:function(){
                    return Math.floor(_INT / 6);
                }
            },
            "精神力":{
                get:function(){
                    return _POWER;
                }
            },
            "精神力ボーナス":{
                get:function(){
                    return Math.floor(_POWER / 6);
                }
            },
            "生命抵抗力":{
                get:function(){
                    return _skills.reduce(_countLv, 0) + this["生命力ボーナス"];
                }
            },
            "精神抵抗力":{
                get:function(){
                    return _skills.reduce(_countLv, 0) + this["精神力ボーナス"];
                }
            },
            "言語":{
                get:function(){
                    var language = [
                        _RACE.language
                    ];

                    _skills.forEach(function(skill){
                        if("language" in skill)language.push(skill.language);
                    });

                    return language;
                }
            },
            "全力移動":{
                get:function(){
                    return this["敏捷度"] * 3;
                }
            },
            "通常移動":{
                get:function(){
                    return this["敏捷度"];
                }
            },
            "制限移動":{
                get:function(){
                    if(this["敏捷度"] <= 3) return this["敏捷度"];

                    return 3;
                }
            }
        });

        json = null;

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
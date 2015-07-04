/**
 * プレイヤーキャラクターを表現します。
 * @constructor
 */
function PlayerCharacter(json){
    [
        "lif",
        "damage",
        "pow"
    ].forEach(function(name){
        if(typeof json[name] !== "number") throw 0;
    });

    [
        "skills"
    ].forEach(function(name){
        if(!Array.isArray(json[name])) throw 0;
    });

    var _lif = json.lif;
    var _skills = json.skills;
    var _damage = json.damage;
    var _pow = json.pow;

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

    return self;
};
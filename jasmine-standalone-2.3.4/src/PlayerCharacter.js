/**
 * プレイヤーキャラクターを表現します。
 * @constructor
 */
function PlayerCharacter(json){
    ["lif", "damage"].forEach(function(name){
        if(typeof json[name] !== "number") throw 0;
    });

    var _lif = json.lif;
    var _lv = json.skills.reduce(function(lv, skill){
        if(skill.lv > lv){
            return skill.lv;
        }else{
            return lv;
        }
    }, 0);
    var _damage = json.damage;

    var self = Object.create(PlayerCharacter.prototype, {
        hp:{
            get:function(){
                return _lif + _lv * 3 - _damage;
            }
        }
    });

    return self;
};

function Skill(){}


Skill.MAGIC_SKILLS = {
    "ソーサラー":{
        name:"ソーサラー",
        lv:1
    },
    "コンジャラー":{
        name:"コンジャラー",
        lv:1
    },
    "プリースト":{
        name:"プリースト",
        lv:1
    },
    "フェアリーテイマー":{
        name:"フェアリーテイマー",
        lv:1
    },
    "マギテック":{
        name:"マギテック",
        lv:1,
        language:"魔動機文明語"
    }
};


Skill.Type = {};

Skill.Type["セージ"] = {
    name:"セージ",
    lv:1
};
Skill.Type["フェンサー"] = {
    name:"フェンサー",
    lv:1
};
Skill.Type["シューター"] = {
    name:"シューター",
    lv:1
};
Skill.Type["スカウト"] = {
    name:"スカウト",
    lv:1
};

Object.keys(Skill.MAGIC_SKILLS).forEach(function(name){
    Skill.Type[name] = Skill.MAGIC_SKILLS[name];
});

Skill.isMagic = function(skill){
    return skill.name in Skill.MAGIC_SKILLS;
};
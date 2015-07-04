describe("PC", function() {
    it('生成と各値のチェック', function(){
        var pc = new PlayerCharacter({
            name:"アーチャー",
            sex:Sex.MAN,
            age:256,
            //生まれ
            race:Race.ELF.SORCERER,
            //skillfull:器用度
            ski:15,
            //敏捷
            dex:18,
            //筋力
            str:9,
            //life:生命力
            lif:7,
            //知力
            int:20,
            //精神力
            pow:21,
            //経験値
            exp:1530,
            //生命力+冒険者Lv*3-damageで残りHPを表現するものとする。
            //jsonとしてデータを渡す場合、hpは常に0以下の数値で表現される。
            damage:0,
            //精神力+魔法使い系技能の合計*3-reduced_manaでMPを表現する
            reduced_mana:0,
            skills:[
                //ここでテストするのはあくまで初期値で、
                //技能上昇や技能により使える技の明示はここで行う事とする
                {
                    name:"ソーサラー",
                    lv:1
                },
                Skill.Type["セージ"],
                Skill.Type["フェンサー"],
                Skill.Type["シューター"],
                Skill.Type["スカウト"],
                Skill.Type["マギテック"]
            ],
            battle_skills:[
                BattleSkills["魔法誘導"]
            ],
            //合計名誉点
            max_honor:0,
            //名誉点
            honor:0,
            arms:[
                Arms["ノーマルボウ"],
                Arms["ショートソード"],
                Arms["トラドール"]
            ],
            armor:Armor["ソフトレザー"],
            shield:Shield["バックラー"],
            equipments:{
                neck:Equipment["首飾り"],
                left_hand:new Equipment({
                    name:"指輪",
                    effect:Effect["魔法の発動体"]
                }),
                etc:Equipment["スカウト用ツール"]
            },
            gamel:678,
            items:[
                Item["背負い袋"],
                Item["水袋"],
                Item["毛布"],
                Item["火口箱"],
                Item["小型ナイフ"],
                new Item({
                    name:"ロープ",
                    metre: 10
                }),
                {
                    name:"たいまつ",
                    count: 6
                },
                Item["魔晶石"],
                {
                    name:"矢",
                    count: 10
                },
                {
                    name:"保存食",
                    count: 5
                },
                {
                    name:"弾丸",
                    count: 11
                }
            ]
        });

        expect(pc.hp).toBe(10);
        expect(pc.mp).toBe(27);
    });
});

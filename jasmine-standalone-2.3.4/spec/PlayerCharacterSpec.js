describe("PC", function() {
    it('生成と各値のチェック', function(){
        var pc = new PlayerCharacter({
            name:"アーチャー",
            sex:Sex.MAN,
            age:256,
            //生まれ
            race:Race.ELF.SORCERER,
            spec:{
                a:5,
                b:8,
                c:7,
                d:4,
                e:7,
                f:9
            },
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
                    lv:1,
                    language:"魔法文明語"
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
        expect(pc.mp).toBe(28);
        expect(pc["器用度"]).toBe(15);
        expect(pc["器用度ボーナス"]).toBe(2);
        expect(pc["敏捷度"]).toBe(18);
        expect(pc["敏捷度ボーナス"]).toBe(3);
        expect(pc["筋力"]).toBe(10);
        expect(pc["筋力ボーナス"]).toBe(1);
        expect(pc["生命力"]).toBe(7);
        expect(pc["生命力ボーナス"]).toBe(1);
        expect(pc["知力"]).toBe(20);
        expect(pc["知力ボーナス"]).toBe(3);
        expect(pc["精神力"]).toBe(22);
        expect(pc["精神力ボーナス"]).toBe(3);
        expect(pc["生命抵抗力"]).toBe(2);
        expect(pc["精神抵抗力"]).toBe(4);
        expect(Array.isArray(pc["言語"])).toBeTruthy();
        expect(pc["言語"]).toContain("エルフ語");
        expect(pc["言語"]).toContain("魔動機文明語");
        expect(pc["言語"]).toContain("魔法文明語");
        expect(pc["全力移動"]).toBe(18 * 3);
        expect(pc["通常移動"]).toBe(18);
        expect(pc["制限移動"]).toBe(3);
    });
});

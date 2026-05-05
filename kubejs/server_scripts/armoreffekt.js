const set = {
    "name": "kubejs:spiny_nano",
    "effects": [
        {
            "effect": "minecraft:night_vision",
            "duration": 400,
            "amplifier": 0
        }
    ]
}

const sets = [set];

PlayerEvents.tick(e => {
    const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = e.player;
    if (e.player.level.time % 100 == 0) {
        for (let armorSet in sets) {
            if (headArmorItem.id === sets[armorSet].name + '_helmet') {
                for (let x in sets[armorSet].effects) {
                    e.player.potionEffects.add(sets[armorSet].effects[x].effect, sets[armorSet].effects[x].duration, sets[armorSet].effects[x].amplifier);
                }
            };
        }
    };
})
namespace SpriteKind {
    export const display = SpriteKind.create()
    export const koopaGreen = SpriteKind.create()
    export const offScreenKoopaGreen = SpriteKind.create()
    export const OffScreenEnemy = SpriteKind.create()
    export const koopaRed = SpriteKind.create()
    export const flag = SpriteKind.create()
    export const mushroom = SpriteKind.create()
    export const enemy_killer_sprite = SpriteKind.create()
    export const firebar = SpriteKind.create()
    export const utility = SpriteKind.create()
    export const lavabubble = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const fire = SpriteKind.create()
}
function world1 () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`Luigi`)
    powerup = 0
    World_Map_True = 1
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.koopaGreen)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.offScreenKoopaGreen)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.OffScreenEnemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.mushroom)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.firebar)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.utility)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.boss)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.lavabubble)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fire)) {
        value.destroy()
    }
    controller.moveSprite(mySprite, 100, 100)
    mySprite.ay = 0
    scene.cameraFollowSprite(mySprite)
    mySprite.setFlag(SpriteFlag.GhostThroughTiles, false)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.koopaGreen, function (sprite, otherSprite) {
    animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
    sprite.vx = sprite.vx * -1
    otherSprite.vx = otherSprite.vx * -1
    sprite.image.flipX()
    if (otherSprite.vx < 0) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            .................
            ....1............
            ...111...........
            ...1114..........
            ..471144.........
            ..471144.........
            ..471144.........
            ..411144.........
            .4441444.........
            .4744444.........
            .444444..77777...
            .444.44.7477747..
            .44..44.77474777.
            .44.441777747117.
            ..4.441777474717.
            ....441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            ....44111477111..
            ...4444411111444.
            ..44444......4444
            `,img`
            ....1............
            ...111...........
            ..41114..........
            ..471144.........
            .4471144.........
            .4471144.........
            47411144.........
            44441444.........
            44444444.........
            44444444.77777...
            4444..417477747..
            444...4177474777.
            .....41777747117.
            ....441777474717.
            ..44441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            .....41114771114.
            .....44411111444.
            ......444....444.
            .......444..444..
            `],
        200,
        true
        )
    } else if (otherSprite.vx > 0) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            .................
            ............1....
            ...........111...
            ..........4111...
            .........441174..
            .........441174..
            .........441174..
            .........441114..
            .........4441444.
            .........4444474.
            ...77777..444444.
            ..7477747.44.444.
            .77747477.44..44.
            .711747777144.44.
            .717474777144.4..
            .474777474144....
            .7477777471144...
            .474777474714....
            .777474777414....
            .77774777771.....
            111747477711.....
            ..11177411144....
            .4441111144444...
            4444......44444..
            `,img`
            ............1....
            ...........111...
            ..........41114..
            .........441174..
            .........4411744.
            .........4411744.
            .........44111474
            .........44414444
            .........44444444
            ...77777.44444444
            ..747774714..4444
            .7774747714...444
            .71174777714.....
            .717474777144....
            .47477747414444..
            .7477777471144...
            .474777474714....
            .777474777414....
            .77774777771.....
            111747477711.....
            .41117741114.....
            .44411111444.....
            .444....444......
            ..444..444.......
            `],
        200,
        true
        )
    }
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile13`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    luigi_Die()
})
function levelCastle () {
    color.setColor(9, color.rgb(191, 191, 191))
    color.setColor(11, color.rgb(131, 123, 129))
    music.play(music.createSong(assets.song`castle`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        mySprite2 = sprites.create(img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d f f . . 
            . f f f f f d d d d f f f f f . 
            . f f f f f f . . f f f f f f . 
            . . f f f f f . . f f f f f . . 
            `, SpriteKind.OffScreenEnemy)
        tiles.placeOnTile(mySprite2, value)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d f f . . 
            . f f f f f d d d d f f f f f . 
            . f f f f f f . . f f f f f f . 
            . . f f f f f . . f f f f f . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d f f . . 
            . . f f d d d d d d f f f f f . 
            . f f f f f d d d f f f f f f . 
            . f f f f f f . . f f f f f . . 
            . . f f f f f . . . . . . . . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d f f . . 
            . f f f f f d d d d f f f f f . 
            . f f f f f f . . f f f f f f . 
            . . f f f f f . . f f f f f . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . f f d d d d d d d d . . . . 
            . f f f f f d d d d d d f f . . 
            . f f f f f f d d d f f f f f . 
            . . f f f f f . . f f f f f f . 
            . . . . . . . . . f f f f f . . 
            `],
        200,
        true
        )
        mySprite2.ay = 500
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        mySprite2 = sprites.create(img`
            ................
            ............1...
            ...........111..
            ..........4111..
            .........441174.
            .........441174.
            .........441174.
            .........441114.
            .........4441444
            .........4444474
            ...77777..444444
            ..7477747.44.444
            .77747477.44..44
            .711747777144.44
            .717474777144.4.
            .474777474144...
            .7477777471144..
            .474777474714...
            .777474777414...
            .77774777771....
            111747477711....
            ..11177411144...
            .4441111144444..
            4444......44444.
            `, SpriteKind.offScreenKoopaGreen)
        tiles.placeOnTile(mySprite2, value)
        mySprite2.ay = 500
        animation.runImageAnimation(
        mySprite2,
        [img`
            .................
            ....1............
            ...111...........
            ...1114..........
            ..471144.........
            ..471144.........
            ..471144.........
            ..411144.........
            .4441444.........
            .4744444.........
            .444444..77777...
            .444.44.7477747..
            .44..44.77474777.
            .44.441777747117.
            ..4.441777474717.
            ....441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            ....44111477111..
            ...4444411111444.
            ..44444......4444
            `,img`
            ....1............
            ...111...........
            ..41114..........
            ..471144.........
            .4471144.........
            .4471144.........
            47411144.........
            44441444.........
            44444444.........
            44444444.77777...
            4444..417477747..
            444...4177474777.
            .....41777747117.
            ....441777474717.
            ..44441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            .....41114771114.
            .....44411111444.
            ......444....444.
            .......444..444..
            `],
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
        mySprite2 = sprites.create(img`
            ........................
            ........................
            ........................
            ..........ffffff........
            ........fff111ffff......
            .......ff1155555ff......
            .......f155111f55ff.....
            ......ff155155f55ff.....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......ff155155f55ff.....
            .......f155ffff55ff.....
            .......ff1555555ff......
            ........fff555ffff......
            ..........ffffff........
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value)
        animation.runImageAnimation(
        mySprite2,
        [img`
            ........ffffff..........
            ......fff111fff.........
            .....ff1155555ff........
            .....f155111f55ff.......
            ....ff155155f55ff.......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....ff155155f55ff.......
            .....f155ffff55ff.......
            .....ff1555555ff........
            ......fff555ffff........
            ........ffffff..........
            ........................
            `,img`
            .........ffff...........
            .......fff1ffff.........
            ......ff11555ff.........
            ......f1551f55ff........
            .....ff1551f55ff........
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....ff1551f55ff........
            ......f155ff55ff........
            ......ff15555ff.........
            .......fff5ffff.........
            .........ffff...........
            ........................
            `,img`
            .........fff............
            ........ff1fff..........
            .......ff155ff..........
            .......f15155ff.........
            ......ff15155ff.........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......ff15155ff.........
            .......f15f55ff.........
            .......ff155ff..........
            ........ff5fff..........
            .........fff............
            ........................
            `,img`
            ..........ff............
            .........ffff...........
            ........ff1ff...........
            ........f155ff..........
            .......ff155ff..........
            .......f15555ff.........
            .......f15555ff.........
            .......f15555ff.........
            .......f15555ff.........
            .......f15555ff.........
            .......ff155ff..........
            ........f155ff..........
            ........ff1ff...........
            .........ffff...........
            ..........ff............
            ........................
            `,img`
            .........fff............
            ........ff1fff..........
            .......ff155ff..........
            .......f15155ff.........
            ......ff15155ff.........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......ff15155ff.........
            .......f15f55ff.........
            .......ff155ff..........
            ........ff5fff..........
            .........fff............
            ........................
            `,img`
            .........ffff...........
            .......fff1ffff.........
            ......ff11555ff.........
            ......f1551f55ff........
            .....ff1551f55ff........
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....ff1551f55ff........
            ......f155ff55ff........
            ......ff15555ff.........
            .......fff5ffff.........
            .........ffff...........
            ........................
            `,img`
            ........ffffff..........
            ......fff111ffff........
            .....ff1155555ff........
            .....f155111f55ff.......
            ....ff155155f55ff.......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....ff155155f55ff.......
            .....f155ffff55ff.......
            .....ff1555555ff........
            ......fff555ffff........
            ........ffffff..........
            ........................
            `],
        100,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile47`)) {
        mySprite2 = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.firebar)
        mySprite2.setFlag(SpriteFlag.GhostThroughWalls, true)
        tiles.placeOnTile(mySprite2, value.getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Left))
        tiles.setTileAt(value, assets.tile`myTile22`)
        animation.runImageAnimation(
        mySprite2,
        assets.animation`myAnim7`,
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile48`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lavabubble)
        tiles.placeOnTile(mySprite2, value)
        mySprite2.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile53`)) {
        mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.boss)
        tiles.placeOnTile(mySprite2, value)
        mySprite2.ay = 500
        timer.after(500, function () {
            mySprite2.ay = 0
        })
    }
}
sprites.onOverlap(SpriteKind.koopaGreen, SpriteKind.koopaGreen, function (sprite, otherSprite) {
    animation.stopAnimation(animation.AnimationTypes.All, sprite)
    animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
    sprite.vx = sprite.vx * -1
    otherSprite.vx = otherSprite.vx * -1
    if (true) {
        animation.runImageAnimation(
        sprite,
        [img`
            .................
            ....1............
            ...111...........
            ...1114..........
            ..471144.........
            ..471144.........
            ..471144.........
            ..411144.........
            .4441444.........
            .4744444.........
            .444444..77777...
            .444.44.7477747..
            .44..44.77474777.
            .44.441777747117.
            ..4.441777474717.
            ....441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            ....44111477111..
            ...4444411111444.
            ..44444......4444
            `,img`
            ....1............
            ...111...........
            ..41114..........
            ..471144.........
            .4471144.........
            .4471144.........
            47411144.........
            44441444.........
            44444444.........
            44444444.77777...
            4444..417477747..
            444...4177474777.
            .....41777747117.
            ....441777474717.
            ..44441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            .....41114771114.
            .....44411111444.
            ......444....444.
            .......444..444..
            `],
        200,
        true
        )
    } else if (sprite.vx > 0) {
        animation.runImageAnimation(
        sprite,
        [img`
            .................
            ............1....
            ...........111...
            ..........4111...
            .........441174..
            .........441174..
            .........441174..
            .........441114..
            .........4441444.
            .........4444474.
            ...77777..444444.
            ..7477747.44.444.
            .77747477.44..44.
            .711747777144.44.
            .717474777144.4..
            .474777474144....
            .7477777471144...
            .474777474714....
            .777474777414....
            .77774777771.....
            111747477711.....
            ..11177411144....
            .4441111144444...
            4444......44444..
            `,img`
            ............1....
            ...........111...
            ..........41114..
            .........441174..
            .........4411744.
            .........4411744.
            .........44111474
            .........44414444
            .........44444444
            ...77777.44444444
            ..747774714..4444
            .7774747714...444
            .71174777714.....
            .717474777144....
            .47477747414444..
            .7477777471144...
            .474777474714....
            .777474777414....
            .77774777771.....
            111747477711.....
            .41117741114.....
            .44411111444.....
            .444....444......
            ..444..444.......
            `],
        200,
        true
        )
    }
    if (otherSprite.vx < 0) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            .................
            ....1............
            ...111...........
            ...1114..........
            ..471144.........
            ..471144.........
            ..471144.........
            ..411144.........
            .4441444.........
            .4744444.........
            .444444..77777...
            .444.44.7477747..
            .44..44.77474777.
            .44.441777747117.
            ..4.441777474717.
            ....441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            ....44111477111..
            ...4444411111444.
            ..44444......4444
            `,img`
            ....1............
            ...111...........
            ..41114..........
            ..471144.........
            .4471144.........
            .4471144.........
            47411144.........
            44441444.........
            44444444.........
            44444444.77777...
            4444..417477747..
            444...4177474777.
            .....41777747117.
            ....441777474717.
            ..44441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            .....41114771114.
            .....44411111444.
            ......444....444.
            .......444..444..
            `],
        200,
        true
        )
    } else if (otherSprite.vx > 0) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            .................
            ............1....
            ...........111...
            ..........4111...
            .........441174..
            .........441174..
            .........441174..
            .........441114..
            .........4441444.
            .........4444474.
            ...77777..444444.
            ..7477747.44.444.
            .77747477.44..44.
            .711747777144.44.
            .717474777144.4..
            .474777474144....
            .7477777471144...
            .474777474714....
            .777474777414....
            .77774777771.....
            111747477711.....
            ..11177411144....
            .4441111144444...
            4444......44444..
            `,img`
            ............1....
            ...........111...
            ..........41114..
            .........441174..
            .........4411744.
            .........4411744.
            .........44111474
            .........44414444
            .........44444444
            ...77777.44444444
            ..747774714..4444
            .7774747714...444
            .71174777714.....
            .717474777144....
            .47477747414444..
            .7477777471144...
            .474777474714....
            .777474777414....
            .77774777771.....
            111747477711.....
            .41117741114.....
            .44411111444.....
            .444....444......
            ..444..444.......
            `],
        200,
        true
        )
    }
    pause(1000)
})
function underwater_physics () {
    underwater = 1
    mySprite.ay = 100
}
scene.onOverlapTile(SpriteKind.display, assets.tile`myTile13`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (die == 0) {
        luigi_Die()
    }
})
function pathfinding (sprite: Sprite, edge_detection: boolean, speed: number, spriteType: string) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = speed
        sprite.image.flipX()
        if (spriteType == "koopaGreen") {
            animation.runImageAnimation(
            sprite,
            [img`
                .................
                ............1....
                ...........111...
                ..........4111...
                .........441174..
                .........441174..
                .........441174..
                .........441114..
                .........4441444.
                .........4444474.
                ...77777..444444.
                ..7477747.44.444.
                .77747477.44..44.
                .711747777144.44.
                .717474777144.4..
                .474777474144....
                .7477777471144...
                .474777474714....
                .777474777414....
                .77774777771.....
                111747477711.....
                ..11177411144....
                .4441111144444...
                4444......44444..
                `,img`
                ............1....
                ...........111...
                ..........41114..
                .........441174..
                .........4411744.
                .........4411744.
                .........44111474
                .........44414444
                .........44444444
                ...77777.44444444
                ..747774714..4444
                .7774747714...444
                .71174777714.....
                .717474777144....
                .47477747414444..
                .7477777471144...
                .474777474714....
                .777474777414....
                .77774777771.....
                111747477711.....
                .41117741114.....
                .44411111444.....
                .444....444......
                ..444..444.......
                `],
            200,
            true
            )
        }
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = 0 - speed
        sprite.image.flipX()
        if (spriteType == "koopaGreen") {
            animation.runImageAnimation(
            sprite,
            [img`
                .................
                ....1............
                ...111...........
                ...1114..........
                ..471144.........
                ..471144.........
                ..471144.........
                ..411144.........
                .4441444.........
                .4744444.........
                .444444..77777...
                .444.44.7477747..
                .44..44.77474777.
                .44.441777747117.
                ..4.441777474717.
                ....441474777474.
                ...4411747777747.
                ....417474777474.
                ....414777474777.
                .....17777747777.
                .....117774747111
                ....44111477111..
                ...4444411111444.
                ..44444......4444
                `,img`
                ....1............
                ...111...........
                ..41114..........
                ..471144.........
                .4471144.........
                .4471144.........
                47411144.........
                44441444.........
                44444444.........
                44444444.77777...
                4444..417477747..
                444...4177474777.
                .....41777747117.
                ....441777474717.
                ..44441474777474.
                ...4411747777747.
                ....417474777474.
                ....414777474777.
                .....17777747777.
                .....117774747111
                .....41114771114.
                .....44411111444.
                ......444....444.
                .......444..444..
                `],
            200,
            true
            )
        }
    }
    if (edge_detection == true) {
        if (!(tiles.tileAtLocationIsWall(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(sprite), CollisionDirection.Left), CollisionDirection.Bottom)))) {
            sprite.vx = speed
            if (spriteType == "koopaGreen") {
                animation.runImageAnimation(
                sprite,
                [img`
                    .................
                    ............1....
                    ...........111...
                    ..........4111...
                    .........441174..
                    .........441174..
                    .........441174..
                    .........441114..
                    .........4441444.
                    .........4444474.
                    ...77777..444444.
                    ..7477747.44.444.
                    .77747477.44..44.
                    .711747777144.44.
                    .717474777144.4..
                    .474777474144....
                    .7477777471144...
                    .474777474714....
                    .777474777414....
                    .77774777771.....
                    111747477711.....
                    ..11177411144....
                    .4441111144444...
                    4444......44444..
                    `,img`
                    ............1....
                    ...........111...
                    ..........41114..
                    .........441174..
                    .........4411744.
                    .........4411744.
                    .........44111474
                    .........44414444
                    .........44444444
                    ...77777.44444444
                    ..747774714..4444
                    .7774747714...444
                    .71174777714.....
                    .717474777144....
                    .47477747414444..
                    .7477777471144...
                    .474777474714....
                    .777474777414....
                    .77774777771.....
                    111747477711.....
                    .41117741114.....
                    .44411111444.....
                    .444....444......
                    ..444..444.......
                    `],
                200,
                true
                )
            }
        } else if (!(tiles.tileAtLocationIsWall(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(sprite), CollisionDirection.Right), CollisionDirection.Bottom)))) {
            sprite.vx = 0 - speed
            if (spriteType == "koopaGreen") {
                animation.runImageAnimation(
                sprite,
                [img`
                    .................
                    ....1............
                    ...111...........
                    ...1114..........
                    ..471144.........
                    ..471144.........
                    ..471144.........
                    ..411144.........
                    .4441444.........
                    .4744444.........
                    .444444..77777...
                    .444.44.7477747..
                    .44..44.77474777.
                    .44.441777747117.
                    ..4.441777474717.
                    ....441474777474.
                    ...4411747777747.
                    ....417474777474.
                    ....414777474777.
                    .....17777747777.
                    .....117774747111
                    ....44111477111..
                    ...4444411111444.
                    ..44444......4444
                    `,img`
                    ....1............
                    ...111...........
                    ..41114..........
                    ..471144.........
                    .4471144.........
                    .4471144.........
                    47411144.........
                    44441444.........
                    44444444.........
                    44444444.77777...
                    4444..417477747..
                    444...4177474777.
                    .....41777747117.
                    ....441777474717.
                    ..44441474777474.
                    ...4411747777747.
                    ....417474777474.
                    ....414777474777.
                    .....17777747777.
                    .....117774747111
                    .....41114771114.
                    .....44411111444.
                    ......444....444.
                    .......444..444..
                    `],
                200,
                true
                )
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.lavabubble, assets.tile`myTile41`, function (sprite, location) {
    sprite.vy = 0
    sprite.ay = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (World_Map_True == 1) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
            startNextLevel()
            World_Map_True = 0
        }
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile28`)) {
            startNextLevel()
            World_Map_True = 0
        }
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`)) {
            startNextLevel()
            World_Map_True = 0
        }
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile8`)) {
            startNextLevel()
            World_Map_True = 0
        }
    } else if (0 == 0 && canMove == 1 && (mySprite.isHittingTile(CollisionDirection.Bottom) && underwater == 0)) {
        mySprite.vy = -250
        if (mySprite.vx < 0 && powerup == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim2`,
            200,
            false
            )
        } else if (mySprite.vx >= 0 && powerup == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim3`,
            200,
            false
            )
        } else if (mySprite.vx >= 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . 7 7 7 7 7 . . . . . . . 
                . . . 7 7 7 7 7 7 7 7 7 . . . . 
                . . . f f f d d f d . . . . . . 
                . . f d f d d d f d d d . . . . 
                . . f d f f d d d f d d d . . . 
                . . f f d d d d f f f f . . . . 
                . . . . d d d d d d d . . . . . 
                . . . 7 7 8 7 7 7 . . . . . . . 
                . . 7 7 7 8 7 7 8 7 7 7 . . . . 
                . 7 7 7 7 8 8 8 8 7 7 7 7 . . . 
                . d d 7 8 5 8 8 5 8 7 7 7 . . . 
                . d d d 8 8 8 8 8 8 d d d . . . 
                . d d 8 8 8 8 8 8 8 8 d d . . . 
                . . . 8 8 8 . . 8 8 8 . . . . . 
                . . e e e . . . . e e e . . . . 
                . e e e e . . . . e e e e . . . 
                `,img`
                . . . . . . 7 7 7 7 7 . . . d d 
                . . . . . 7 7 7 7 7 7 7 7 7 d d 
                . . . . . f f f d d f d . . 7 7 
                . . . . f d f d d d f d d d 7 7 
                . . . . f d f f d d d f d d d 7 
                . . . . f f d d d d f f f f 7 . 
                . . . . . . d d d d d d 7 7 . . 
                . . 7 7 7 7 7 8 7 7 8 7 7 . . . 
                d 7 7 7 7 7 7 7 8 7 7 8 . . e . 
                d d 7 7 7 7 7 7 8 8 8 8 . . e . 
                d d d . 8 8 7 8 5 8 8 5 8 e e . 
                . d . e 8 8 8 8 8 8 8 8 8 e e . 
                . . e e e 8 8 8 8 8 8 . . . . . 
                . e e e 8 8 8 8 8 . . . . . . . 
                . e . . 8 8 8 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . 7 7 7 7 7 . . . d d 
                . . . . . 7 7 7 7 7 7 7 7 7 d d 
                . . . . . f f f d d f d . . 7 7 
                . . . . f d f d d d f d d d 7 7 
                . . . . f d f f d d d f d d d 7 
                . . . . f f d d d d f f f f 7 . 
                . . . . . . d d d d d d 7 7 . . 
                . . 7 7 7 7 7 8 7 7 8 7 7 . . . 
                d 7 7 7 7 7 7 7 8 7 7 8 . . e . 
                d d 7 7 7 7 7 7 8 8 8 8 . . e . 
                d d d . 8 8 7 8 5 8 8 5 8 e e . 
                . d . e 8 8 8 8 8 8 8 8 8 e e . 
                . . e e e 8 8 8 8 8 8 . . . . . 
                . e e e 8 8 8 8 8 . . . . . . . 
                . e . . 8 8 8 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . 7 7 7 7 7 . . . d d 
                . . . . . 7 7 7 7 7 7 7 7 7 d d 
                . . . . . f f f d d f d . . 7 7 
                . . . . f d f d d d f d d d 7 7 
                . . . . f d f f d d d f d d d 7 
                . . . . f f d d d d f f f f 7 . 
                . . . . . . d d d d d d 7 7 . . 
                . . 7 7 7 7 7 8 7 7 8 7 7 . . . 
                d 7 7 7 7 7 7 7 8 7 7 8 . . e . 
                d d 7 7 7 7 7 7 8 8 8 8 . . e . 
                d d d . 8 8 7 8 5 8 8 5 8 e e . 
                . d . e 8 8 8 8 8 8 8 8 8 e e . 
                . . e e e 8 8 8 8 8 8 . . . . . 
                . e e e 8 8 8 8 8 . . . . . . . 
                . e . . 8 8 8 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . 7 7 7 7 7 . . . d d 
                . . . . . 7 7 7 7 7 7 7 7 7 d d 
                . . . . . f f f d d f d . . 7 7 
                . . . . f d f d d d f d d d 7 7 
                . . . . f d f f d d d f d d d 7 
                . . . . f f d d d d f f f f 7 . 
                . . . . . . d d d d d d 7 7 . . 
                . . 7 7 7 7 7 8 7 7 8 7 7 . . . 
                d 7 7 7 7 7 7 7 8 7 7 8 . . e . 
                d d 7 7 7 7 7 7 8 8 8 8 . . e . 
                d d d . 8 8 7 8 5 8 8 5 8 e e . 
                . d . e 8 8 8 8 8 8 8 8 8 e e . 
                . . e e e 8 8 8 8 8 8 . . . . . 
                . e e e 8 8 8 8 8 . . . . . . . 
                . e . . 8 8 8 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . 7 7 7 7 7 . . . . . . . 
                . . . 7 7 7 7 7 7 7 7 7 . . . . 
                . . . f f f d d f d . . . . . . 
                . . f d f d d d f d d d . . . . 
                . . f d f f d d d f d d d . . . 
                . . f f d d d d f f f f . . . . 
                . . . . d d d d d d d . . . . . 
                . . . 7 7 8 7 7 7 . . . . . . . 
                . . 7 7 7 8 7 7 8 7 7 7 . . . . 
                . 7 7 7 7 8 8 8 8 7 7 7 7 . . . 
                . d d 7 8 5 8 8 5 8 7 7 7 . . . 
                . d d d 8 8 8 8 8 8 d d d . . . 
                . d d 8 8 8 8 8 8 8 8 d d . . . 
                . . . 8 8 8 . . 8 8 8 . . . . . 
                . . e e e . . . . e e e . . . . 
                . e e e e . . . . e e e e . . . 
                `],
            100,
            false
            )
        } else if (mySprite.vx <= 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . 7 7 7 7 7 . . . . 
                . . . . 7 7 7 7 7 7 7 7 7 . . . 
                . . . . . . d f d d f f f . . . 
                . . . . d d d f d d d f d f . . 
                . . . d d d f d d d f f d f . . 
                . . . . f f f f d d d d f f . . 
                . . . . . d d d d d d d . . . . 
                . . . . . . . 7 7 7 8 7 7 . . . 
                . . . . 7 7 7 8 7 7 8 7 7 7 . . 
                . . . 7 7 7 7 8 8 8 8 7 7 7 7 . 
                . . . 7 7 7 8 5 8 8 5 8 7 d d . 
                . . . d d d 8 8 8 8 8 8 d d d . 
                . . . d d 8 8 8 8 8 8 8 8 d d . 
                . . . . . 8 8 8 . . 8 8 8 . . . 
                . . . . e e e . . . . e e e . . 
                . . . e e e e . . . . e e e e . 
                `,img`
                d d . . . 7 7 7 7 7 . . . . . . 
                d d 7 7 7 7 7 7 7 7 7 . . . . . 
                7 7 . . d f d d f f f . . . . . 
                7 7 d d d f d d d f d f . . . . 
                7 d d d f d d d f f d f . . . . 
                . 7 f f f f d d d d f f . . . . 
                . . 7 7 d d d d d d . . . . . . 
                . . . 7 7 8 7 7 8 7 7 7 7 7 . . 
                . e . . 8 7 7 8 7 7 7 7 7 7 7 d 
                . e . . 8 8 8 8 7 7 7 7 7 7 d d 
                . e e 8 5 8 8 5 8 7 8 8 . d d d 
                . e e 8 8 8 8 8 8 8 8 8 e . d . 
                . . . . . 8 8 8 8 8 8 e e e . . 
                . . . . . . . 8 8 8 8 8 e e e . 
                . . . . . . . . . 8 8 8 . . e . 
                . . . . . . . . . . . . . . . . 
                `,img`
                d d . . . 7 7 7 7 7 . . . . . . 
                d d 7 7 7 7 7 7 7 7 7 . . . . . 
                7 7 . . d f d d f f f . . . . . 
                7 7 d d d f d d d f d f . . . . 
                7 d d d f d d d f f d f . . . . 
                . 7 f f f f d d d d f f . . . . 
                . . 7 7 d d d d d d . . . . . . 
                . . . 7 7 8 7 7 8 7 7 7 7 7 . . 
                . e . . 8 7 7 8 7 7 7 7 7 7 7 d 
                . e . . 8 8 8 8 7 7 7 7 7 7 d d 
                . e e 8 5 8 8 5 8 7 8 8 . d d d 
                . e e 8 8 8 8 8 8 8 8 8 e . d . 
                . . . . . 8 8 8 8 8 8 e e e . . 
                . . . . . . . 8 8 8 8 8 e e e . 
                . . . . . . . . . 8 8 8 . . e . 
                . . . . . . . . . . . . . . . . 
                `,img`
                d d . . . 7 7 7 7 7 . . . . . . 
                d d 7 7 7 7 7 7 7 7 7 . . . . . 
                7 7 . . d f d d f f f . . . . . 
                7 7 d d d f d d d f d f . . . . 
                7 d d d f d d d f f d f . . . . 
                . 7 f f f f d d d d f f . . . . 
                . . 7 7 d d d d d d . . . . . . 
                . . . 7 7 8 7 7 8 7 7 7 7 7 . . 
                . e . . 8 7 7 8 7 7 7 7 7 7 7 d 
                . e . . 8 8 8 8 7 7 7 7 7 7 d d 
                . e e 8 5 8 8 5 8 7 8 8 . d d d 
                . e e 8 8 8 8 8 8 8 8 8 e . d . 
                . . . . . 8 8 8 8 8 8 e e e . . 
                . . . . . . . 8 8 8 8 8 e e e . 
                . . . . . . . . . 8 8 8 . . e . 
                . . . . . . . . . . . . . . . . 
                `,img`
                d d . . . 7 7 7 7 7 . . . . . . 
                d d 7 7 7 7 7 7 7 7 7 . . . . . 
                7 7 . . d f d d f f f . . . . . 
                7 7 d d d f d d d f d f . . . . 
                7 d d d f d d d f f d f . . . . 
                . 7 f f f f d d d d f f . . . . 
                . . 7 7 d d d d d d . . . . . . 
                . . . 7 7 8 7 7 8 7 7 7 7 7 . . 
                . e . . 8 7 7 8 7 7 7 7 7 7 7 d 
                . e . . 8 8 8 8 7 7 7 7 7 7 d d 
                . e e 8 5 8 8 5 8 7 8 8 . d d d 
                . e e 8 8 8 8 8 8 8 8 8 e . d . 
                . . . . . 8 8 8 8 8 8 e e e . . 
                . . . . . . . 8 8 8 8 8 e e e . 
                . . . . . . . . . 8 8 8 . . e . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . 7 7 7 7 7 . . . . 
                . . . . 7 7 7 7 7 7 7 7 7 . . . 
                . . . . . . d f d d f f f . . . 
                . . . . d d d f d d d f d f . . 
                . . . d d d f d d d f f d f . . 
                . . . . f f f f d d d d f f . . 
                . . . . . d d d d d d d . . . . 
                . . . . . . . 7 7 7 8 7 7 . . . 
                . . . . 7 7 7 8 7 7 8 7 7 7 . . 
                . . . 7 7 7 7 8 8 8 8 7 7 7 7 . 
                . . . 7 7 7 8 5 8 8 5 8 7 d d . 
                . . . d d d 8 8 8 8 8 8 d d d . 
                . . . d d 8 8 8 8 8 8 8 8 d d . 
                . . . . . 8 8 8 . . 8 8 8 . . . 
                . . . . e e e . . . . e e e . . 
                . . . e e e e . . . . e e e e . 
                `],
            100,
            false
            )
        }
    } else if (underwater == 1) {
        mySprite.vy = -75
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.koopaGreen, function (sprite, otherSprite) {
    if (sprite.bottom < otherSprite.y) {
        otherSprite.setKind(SpriteKind.Projectile)
        animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 7 7 7 7 4 . . . . . 
            . . . . 7 7 4 4 4 4 7 7 . . . . 
            . . . 7 7 4 7 7 7 7 4 7 7 . . . 
            . . . 7 4 7 7 7 7 7 7 4 7 . . . 
            . . 7 4 7 7 7 7 7 7 7 7 4 7 . . 
            . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
            . 4 7 7 7 4 7 7 7 7 4 7 7 7 4 . 
            . 7 7 7 7 7 4 4 4 4 7 7 7 7 7 . 
            1 1 1 7 7 4 7 7 7 7 4 7 7 1 1 1 
            1 1 1 1 4 7 7 7 7 7 7 4 1 1 1 1 
            . . . 1 1 7 7 7 7 7 7 1 1 . . . 
            . . . . 1 1 7 7 7 7 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            `)
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 7 7 7 7 4 . . . . . 
            . . . . 7 7 4 4 4 4 7 7 . . . . 
            . . . 7 7 4 7 7 7 7 4 7 7 . . . 
            . . . 7 4 7 7 7 7 7 7 4 7 . . . 
            . . 7 4 7 7 7 7 7 7 7 7 4 7 . . 
            . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
            . 4 7 7 7 4 7 7 7 7 4 7 7 7 4 . 
            . 7 7 7 7 7 4 4 4 4 7 7 7 7 7 . 
            1 1 1 7 7 4 7 7 7 7 4 7 7 1 1 1 
            1 1 1 1 4 7 7 7 7 7 7 4 1 1 1 1 
            . . . 1 1 7 7 7 7 7 7 1 1 . . . 
            . . . . 1 1 7 7 7 7 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . 7 4 7 7 7 7 4 7 . . . . 
            . . . 7 7 7 4 4 4 4 7 7 7 . . . 
            . . 7 7 7 4 7 7 7 7 4 7 7 7 . . 
            . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
            . 7 7 4 7 7 7 7 7 7 7 7 4 7 7 . 
            . 7 4 7 4 7 7 7 7 7 7 4 7 4 7 . 
            7 4 7 7 7 4 7 7 7 7 4 7 7 7 4 7 
            4 7 7 7 7 7 4 4 4 4 7 7 7 7 7 4 
            7 7 7 7 7 4 1 1 1 1 4 7 7 7 7 7 
            1 1 4 4 4 1 1 1 1 1 1 4 4 4 1 1 
            . 1 1 1 4 1 1 1 1 1 1 4 1 1 1 . 
            . . . 1 1 4 4 4 4 4 4 1 1 . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            `],
        100,
        true
        )
        otherSprite.vx = -100
        sprite.vy = -100
    } else {
        luigi_Die()
    }
})
scene.onOverlapTile(SpriteKind.display, assets.tile`myTile20`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (die == 0 && canMove == 1 && powerup == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`big_walk0`,
        100,
        true
        )
    } else if (die == 0 && canMove == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim`,
        50,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.enemy_killer_sprite, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.enemy_killer_sprite, SpriteKind.koopaGreen, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Food, assets.tile`myTile49`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    otherSprite.vx = otherSprite.vx * -1
    sprite.image.flipX()
    otherSprite.image.flipX()
    pause(1000)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (die == 0 && canMove == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile49`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile13`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (die == 0 && canMove == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fire, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    luigi_Die()
})
function startNextLevel () {
    music.stopAllSounds()
    mySprite.ay = 500
    controller.moveSprite(mySprite, 100, 0)
    cameraOffsetScene.cameraFollowWithOffset(mySprite, 0, 30)
    if (currentLevel == 1) {
        tiles.setCurrentTilemap(tilemap`w1-1`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile19`)
        level_Above_Ground()
    } else if (currentLevel == 2) {
        scene.setBackgroundColor(15)
        tiles.setCurrentTilemap(tilemap`W1-2`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        levelBelowGround()
    } else if (currentLevel == 3) {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile19`)
        level_Above_Ground()
    } else if (currentLevel == 4) {
        tiles.setCurrentTilemap(tilemap`level`)
        for (let value of tiles.getTilesByType(assets.tile`myTile50`)) {
            mySprite8 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.utility)
            tiles.placeOnTile(mySprite8, value)
            animation.runImageAnimation(
            mySprite8,
            assets.animation`myAnim6`,
            200,
            true
            )
        }
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile19`)
        level_Above_Ground()
    } else if (currentLevel == 5) {
        tiles.setCurrentTilemap(tilemap`level0`)
        for (let value of tiles.getTilesByType(assets.tile`myTile48`)) {
            mySprite8 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.utility)
            tiles.placeOnTile(mySprite8, value)
            animation.runImageAnimation(
            mySprite8,
            assets.animation`myAnim10`,
            200,
            true
            )
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile42`)) {
            mySprite8 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.utility)
            tiles.placeOnTile(mySprite8, value)
            animation.runImageAnimation(
            mySprite8,
            assets.animation`myAnim10`,
            200,
            true
            )
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile44`)) {
            mySprite8 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.utility)
            tiles.placeOnTile(mySprite8, value)
            animation.runImageAnimation(
            mySprite8,
            assets.animation`myAnim8`,
            250,
            true
            )
        }
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        levelCastle()
    } else {
        color.setColor(3, color.rgb(201, 152, 88))
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile19`)
        tiles.setCurrentTilemap(tilemap`level4`)
        underwater_physics()
        for (let value of tiles.getTilesByType(assets.tile`myTile65`)) {
            mySprite11 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.utility)
            animation.runImageAnimation(
            mySprite11,
            assets.animation`myAnim11`,
            200,
            true
            )
            tiles.placeOnTile(mySprite11, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile64`)) {
            mySprite11 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.utility)
            animation.runImageAnimation(
            mySprite11,
            assets.animation`myAnim12`,
            150,
            true
            )
            tiles.placeOnTile(mySprite11, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile68`)) {
            mySprite11 = sprites.create(assets.image`myImage3`, SpriteKind.utility)
            tiles.placeOnTile(mySprite11, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile69`)) {
            mySprite11 = sprites.create(assets.image`myImage2`, SpriteKind.utility)
            tiles.placeOnTile(mySprite11, value)
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.koopaGreen, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Food, assets.tile`myTile41`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.Text, assets.tile`myTile20`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile20`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.mushroom, assets.tile`myTile20`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
function start_movement () {
    for (let value4 of sprites.allOfKind(SpriteKind.OffScreenEnemy)) {
        if (scene.screenWidth() / 2 + scene.cameraProperty(CameraProperty.X) + 10 >= value4.x) {
            value4.vx = -30
            value4.setKind(SpriteKind.Enemy)
        }
    }
    for (let value5 of sprites.allOfKind(SpriteKind.offScreenKoopaGreen)) {
        if (scene.screenWidth() / 2 + scene.cameraProperty(CameraProperty.X) + 10 >= value5.x) {
            value5.vx = -30
            value5.setKind(SpriteKind.koopaGreen)
        }
    }
}
scene.onOverlapTile(SpriteKind.koopaGreen, assets.tile`myTile49`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`win`), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`level11`)
    currentLevel += 1
    world1()
    loadworld()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    if (die == 0) {
        luigi_Die()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    if (die == 0) {
        luigi_Die()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (die == 0 && canMove == 1 && powerup == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`big_walk1`,
        100,
        true
        )
    } else if (die == 0 && canMove == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim4`,
        50,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprite.bottom < otherSprite.y) {
        sprite.vy = -100
        if (otherSprite.vx != 0) {
            otherSprite.vx = 0
            animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
        } else {
            if (true) {
                otherSprite.vx = -105
                animation.runImageAnimation(
                otherSprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 7 7 7 7 4 . . . . . 
                    . . . . 7 7 4 4 4 4 7 7 . . . . 
                    . . . 7 7 4 7 7 7 7 4 7 7 . . . 
                    . . . 7 4 7 7 7 7 7 7 4 7 . . . 
                    . . 7 4 7 7 7 7 7 7 7 7 4 7 . . 
                    . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
                    . 4 7 7 7 4 7 7 7 7 4 7 7 7 4 . 
                    . 7 7 7 7 7 4 4 4 4 7 7 7 7 7 . 
                    1 1 1 7 7 4 7 7 7 7 4 7 7 1 1 1 
                    1 1 1 1 4 7 7 7 7 7 7 4 1 1 1 1 
                    . . . 1 1 7 7 7 7 7 7 1 1 . . . 
                    . . . . 1 1 7 7 7 7 1 1 . . . . 
                    . . . . . 1 1 1 1 1 1 . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . 7 7 7 7 7 7 . . . . . 
                    . . . . 7 4 7 7 7 7 4 7 . . . . 
                    . . . 7 7 7 4 4 4 4 7 7 7 . . . 
                    . . 7 7 7 4 7 7 7 7 4 7 7 7 . . 
                    . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
                    . 7 7 4 7 7 7 7 7 7 7 7 4 7 7 . 
                    . 7 4 7 4 7 7 7 7 7 7 4 7 4 7 . 
                    7 4 7 7 7 4 7 7 7 7 4 7 7 7 4 7 
                    4 7 7 7 7 7 4 4 4 4 7 7 7 7 7 4 
                    7 7 7 7 7 4 1 1 1 1 4 7 7 7 7 7 
                    1 1 4 4 4 1 1 1 1 1 1 4 4 4 1 1 
                    . 1 1 1 4 1 1 1 1 1 1 4 1 1 1 . 
                    . . . 1 1 4 4 4 4 4 4 1 1 . . . 
                    . . . . 1 1 1 1 1 1 1 1 . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    `],
                100,
                true
                )
            } else if (false) {
                otherSprite.vx = 105
                animation.runImageAnimation(
                otherSprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 7 7 7 7 4 . . . . . 
                    . . . . 7 7 4 4 4 4 7 7 . . . . 
                    . . . 7 7 4 7 7 7 7 4 7 7 . . . 
                    . . . 7 4 7 7 7 7 7 7 4 7 . . . 
                    . . 7 4 7 7 7 7 7 7 7 7 4 7 . . 
                    . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
                    . 4 7 7 7 4 7 7 7 7 4 7 7 7 4 . 
                    . 7 7 7 7 7 4 4 4 4 7 7 7 7 7 . 
                    1 1 1 7 7 4 7 7 7 7 4 7 7 1 1 1 
                    1 1 1 1 4 7 7 7 7 7 7 4 1 1 1 1 
                    . . . 1 1 7 7 7 7 7 7 1 1 . . . 
                    . . . . 1 1 7 7 7 7 1 1 . . . . 
                    . . . . . 1 1 1 1 1 1 . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . 7 7 7 7 7 7 . . . . . 
                    . . . . 7 4 7 7 7 7 4 7 . . . . 
                    . . . 7 7 7 4 4 4 4 7 7 7 . . . 
                    . . 7 7 7 4 7 7 7 7 4 7 7 7 . . 
                    . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
                    . 7 7 4 7 7 7 7 7 7 7 7 4 7 7 . 
                    . 7 4 7 4 7 7 7 7 7 7 4 7 4 7 . 
                    7 4 7 7 7 4 7 7 7 7 4 7 7 7 4 7 
                    4 7 7 7 7 7 4 4 4 4 7 7 7 7 7 4 
                    7 7 7 7 7 4 1 1 1 1 4 7 7 7 7 7 
                    1 1 4 4 4 1 1 1 1 1 1 4 4 4 1 1 
                    . 1 1 1 4 1 1 1 1 1 1 4 1 1 1 . 
                    . . . 1 1 4 4 4 4 4 4 1 1 . . . 
                    . . . . 1 1 1 1 1 1 1 1 . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    `],
                100,
                true
                )
            }
        }
    } else if (otherSprite.vx == 0) {
        if (sprite.vx < 0) {
            otherSprite.vx = -105
            animation.runImageAnimation(
            otherSprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 4 7 7 7 7 4 . . . . . 
                . . . . 7 7 4 4 4 4 7 7 . . . . 
                . . . 7 7 4 7 7 7 7 4 7 7 . . . 
                . . . 7 4 7 7 7 7 7 7 4 7 . . . 
                . . 7 4 7 7 7 7 7 7 7 7 4 7 . . 
                . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
                . 4 7 7 7 4 7 7 7 7 4 7 7 7 4 . 
                . 7 7 7 7 7 4 4 4 4 7 7 7 7 7 . 
                1 1 1 7 7 4 7 7 7 7 4 7 7 1 1 1 
                1 1 1 1 4 7 7 7 7 7 7 4 1 1 1 1 
                . . . 1 1 7 7 7 7 7 7 1 1 . . . 
                . . . . 1 1 7 7 7 7 1 1 . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . 7 4 7 7 7 7 4 7 . . . . 
                . . . 7 7 7 4 4 4 4 7 7 7 . . . 
                . . 7 7 7 4 7 7 7 7 4 7 7 7 . . 
                . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
                . 7 7 4 7 7 7 7 7 7 7 7 4 7 7 . 
                . 7 4 7 4 7 7 7 7 7 7 4 7 4 7 . 
                7 4 7 7 7 4 7 7 7 7 4 7 7 7 4 7 
                4 7 7 7 7 7 4 4 4 4 7 7 7 7 7 4 
                7 7 7 7 7 4 1 1 1 1 4 7 7 7 7 7 
                1 1 4 4 4 1 1 1 1 1 1 4 4 4 1 1 
                . 1 1 1 4 1 1 1 1 1 1 4 1 1 1 . 
                . . . 1 1 4 4 4 4 4 4 1 1 . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                `],
            100,
            true
            )
        } else if (sprite.vx > 0) {
            invulnerability = 1
            otherSprite.vx = 105
            animation.runImageAnimation(
            otherSprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 4 7 7 7 7 4 . . . . . 
                . . . . 7 7 4 4 4 4 7 7 . . . . 
                . . . 7 7 4 7 7 7 7 4 7 7 . . . 
                . . . 7 4 7 7 7 7 7 7 4 7 . . . 
                . . 7 4 7 7 7 7 7 7 7 7 4 7 . . 
                . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
                . 4 7 7 7 4 7 7 7 7 4 7 7 7 4 . 
                . 7 7 7 7 7 4 4 4 4 7 7 7 7 7 . 
                1 1 1 7 7 4 7 7 7 7 4 7 7 1 1 1 
                1 1 1 1 4 7 7 7 7 7 7 4 1 1 1 1 
                . . . 1 1 7 7 7 7 7 7 1 1 . . . 
                . . . . 1 1 7 7 7 7 1 1 . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . 7 4 7 7 7 7 4 7 . . . . 
                . . . 7 7 7 4 4 4 4 7 7 7 . . . 
                . . 7 7 7 4 7 7 7 7 4 7 7 7 . . 
                . . 4 7 4 7 7 7 7 7 7 4 7 4 . . 
                . 7 7 4 7 7 7 7 7 7 7 7 4 7 7 . 
                . 7 4 7 4 7 7 7 7 7 7 4 7 4 7 . 
                7 4 7 7 7 4 7 7 7 7 4 7 7 7 4 7 
                4 7 7 7 7 7 4 4 4 4 7 7 7 7 7 4 
                7 7 7 7 7 4 1 1 1 1 4 7 7 7 7 7 
                1 1 4 4 4 1 1 1 1 1 1 4 4 4 1 1 
                . 1 1 1 4 1 1 1 1 1 1 4 1 1 1 . 
                . . . 1 1 4 4 4 4 4 4 1 1 . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                `],
            100,
            true
            )
            pause(200)
            invulnerability = 0
        }
    } else {
        if (invulnerability == 0) {
            luigi_Die()
        }
    }
    if (otherSprite.vx != 0) {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.lavabubble, function (sprite, otherSprite) {
    luigi_Die()
})
function luigi_Die () {
    if (invulnerability == 1 && !(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile20`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile13`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile41`))) {
    	
    } else if (powerup == 1 && !(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile20`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile13`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile41`))) {
        invulnerability = 1
        powerup = 0
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        mySprite.setImage(assets.image`Luigi`)
        timer.after(500, function () {
            mySprite.setFlag(SpriteFlag.Invisible, true)
            timer.after(500, function () {
                mySprite.setFlag(SpriteFlag.Invisible, false)
                timer.after(500, function () {
                    mySprite.setFlag(SpriteFlag.Invisible, true)
                    timer.after(500, function () {
                        mySprite.setFlag(SpriteFlag.Invisible, false)
                        timer.after(500, function () {
                            mySprite.setFlag(SpriteFlag.Invisible, true)
                            timer.after(500, function () {
                                mySprite.setFlag(SpriteFlag.Invisible, false)
                                invulnerability = 0
                            })
                        })
                    })
                })
            })
        })
    } else {
        music.stopAllSounds()
        mySprite.setFlag(SpriteFlag.GhostThroughTiles, true)
        die = 1
        animation.runImageAnimation(
        mySprite,
        [img`
            ......6666......
            ....66755766....
            ...6771551776...
            ..6777ffff7776..
            ..67ffffffff76..
            ...ffffffffff...
            ...6f2f22f2f6...
            ..ff22222222ff..
            ...f22333322f...
            ..ff23f33f32ff..
            .edf33dddd33fde.
            .edffddddddffde.
            .e4fdf4444fdf4e.
            .1edffffffffde..
            .11eddd22dddeee.
            ..77eed22dee711e
            ...7ced22decff1e
            ...caaedde1ffff.
            ...cb11ee11ffff.
            ..fff11bbbcffff.
            .f5eefcccc.ffff.
            .ffffef.....ff..
            .ffffff.........
            ....ff..........
            `,img`
            ......6666......
            ....66755766....
            ...6771551776...
            ..6777ffff7776..
            ..67ffffffff76..
            ...ffffffffff...
            ...6f2f22f2f6...
            ..ff22222222ff..
            ...f22333322f...
            ..ff23f33f32ff..
            .edf33dddd33fde.
            .edffddddddffde.
            .e4fdf4444fdf4e.
            ..edffffffffde1.
            .eeeddd22ddde11.
            e117eed22dee77..
            e1ffced22dec7...
            .ffff1eddeaac...
            .ffff11ee11bc...
            .ffffcbbb11fff..
            .ffff.ccccfee5f.
            ..ff.....feffff.
            .........ffffff.
            ..........ff....
            `],
        100,
        true
        )
        mySprite.vy = -250
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        music.play(music.createSong(assets.song`death`), music.PlaybackMode.UntilDone)
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
        mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
        mySprite.setFlag(SpriteFlag.GhostThroughTiles, false)
        die = 0
        world1()
        loadworld()
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    mySprite.setFlag(SpriteFlag.GhostThroughTiles, true)
    controller.moveSprite(mySprite, 0, 0)
    music.stopAllSounds()
    mySprite7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.utility)
    mySprite7.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(85, 12))
    for (let value of tiles.getTilesByType(assets.tile`myTile43`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.setWallAt(value, false)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile42`)) {
        mySprite10 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.utility)
        animation.runImageAnimation(
        mySprite10,
        assets.animation`myAnim10`,
        200,
        true
        )
        tiles.placeOnTile(mySprite10, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile41`)) {
        mySprite10 = sprites.create(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, SpriteKind.utility)
        tiles.placeOnTile(mySprite10, value)
    }
    animation.runImageAnimation(
    mySprite7,
    assets.animation`myAnim9`,
    100,
    false
    )
    music.play(music.createSong(assets.song`win`), music.PlaybackMode.InBackground)
    timer.after(3000, function () {
        for (let value of sprites.allOfKind(SpriteKind.boss)) {
            value.vy = 50
        }
        timer.after(3000, function () {
            tiles.setCurrentTilemap(tilemap`level11`)
            currentLevel += 1
            world1()
            loadworld()
        })
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mushroom, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    powerup = 1
    mySprite.setImage(assets.image`myImage`)
    mySprite.y += -40
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile20`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
controller.combos.attachCombo("up down left right b", function () {
    currentLevel += 1
    loadworld()
})
scene.onOverlapTile(SpriteKind.koopaGreen, assets.tile`myTile20`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
function loadworld () {
    tiles.setCurrentTilemap(tilemap`level11`)
    if (currentLevel == 2) {
        tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`myTile4`)
        tiles.setWallAt(tiles.getTileLocation(3, 7), false)
        tiles.setWallAt(tiles.getTileLocation(3, 6), false)
        tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`myTile28`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile28`)
    } else if (currentLevel == 3) {
        tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`myTile4`)
        tiles.setWallAt(tiles.getTileLocation(3, 7), false)
        tiles.setWallAt(tiles.getTileLocation(3, 6), false)
        tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`myTile29`)
        tiles.setWallAt(tiles.getTileLocation(6, 4), false)
        tiles.setWallAt(tiles.getTileLocation(6, 5), false)
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`myTile28`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile28`)
    } else if (currentLevel == 4) {
        tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`myTile4`)
        tiles.setWallAt(tiles.getTileLocation(3, 7), false)
        tiles.setWallAt(tiles.getTileLocation(3, 6), false)
        tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`myTile29`)
        tiles.setWallAt(tiles.getTileLocation(6, 4), false)
        tiles.setWallAt(tiles.getTileLocation(6, 5), false)
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`myTile29`)
        tiles.setWallAt(tiles.getTileLocation(9, 1), false)
        tiles.setWallAt(tiles.getTileLocation(9, 2), false)
        tiles.setTileAt(tiles.getTileLocation(9, 8), assets.tile`myTile26`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile26`)
    } else if (currentLevel == 5) {
        tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`myTile4`)
        tiles.setWallAt(tiles.getTileLocation(3, 7), false)
        tiles.setWallAt(tiles.getTileLocation(3, 6), false)
        tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`myTile29`)
        tiles.setWallAt(tiles.getTileLocation(6, 4), false)
        tiles.setWallAt(tiles.getTileLocation(6, 5), false)
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`myTile29`)
        tiles.setWallAt(tiles.getTileLocation(9, 1), false)
        tiles.setWallAt(tiles.getTileLocation(9, 2), false)
        tiles.setTileAt(tiles.getTileLocation(9, 8), assets.tile`myTile27`)
        tiles.setWallAt(tiles.getTileLocation(11, 8), false)
        tiles.setWallAt(tiles.getTileLocation(11, 9), false)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile8`)
    } else {
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    }
}
function level_Above_Ground () {
    music.play(music.createSong(assets.song`mariomusic`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(assets.image`BG`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile19`)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        mySprite2 = sprites.create(img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d f f . . 
            . f f f f f d d d d f f f f f . 
            . f f f f f f . . f f f f f f . 
            . . f f f f f . . f f f f f . . 
            `, SpriteKind.OffScreenEnemy)
        tiles.placeOnTile(mySprite2, value)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d f f . . 
            . f f f f f d d d d f f f f f . 
            . f f f f f f . . f f f f f f . 
            . . f f f f f . . f f f f f . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d f f . . 
            . . f f d d d d d d f f f f f . 
            . f f f f f d d d f f f f f f . 
            . f f f f f f . . f f f f f . . 
            . . f f f f f . . . . . . . . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d f f . . 
            . f f f f f d d d d f f f f f . 
            . f f f f f f . . f f f f f f . 
            . . f f f f f . . f f f f f . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . f f d d d d d d d d . . . . 
            . f f f f f d d d d d d f f . . 
            . f f f f f f d d d f f f f f . 
            . . f f f f f . . f f f f f f . 
            . . . . . . . . . f f f f f . . 
            `],
        200,
        true
        )
        mySprite2.ay = 500
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        mySprite2 = sprites.create(img`
            ................
            ............1...
            ...........111..
            ..........4111..
            .........441174.
            .........441174.
            .........441174.
            .........441114.
            .........4441444
            .........4444474
            ...77777..444444
            ..7477747.44.444
            .77747477.44..44
            .711747777144.44
            .717474777144.4.
            .474777474144...
            .7477777471144..
            .474777474714...
            .777474777414...
            .77774777771....
            111747477711....
            ..11177411144...
            .4441111144444..
            4444......44444.
            `, SpriteKind.offScreenKoopaGreen)
        tiles.placeOnTile(mySprite2, value)
        mySprite2.ay = 500
        animation.runImageAnimation(
        mySprite2,
        [img`
            .................
            ....1............
            ...111...........
            ...1114..........
            ..471144.........
            ..471144.........
            ..471144.........
            ..411144.........
            .4441444.........
            .4744444.........
            .444444..77777...
            .444.44.7477747..
            .44..44.77474777.
            .44.441777747117.
            ..4.441777474717.
            ....441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            ....44111477111..
            ...4444411111444.
            ..44444......4444
            `,img`
            ....1............
            ...111...........
            ..41114..........
            ..471144.........
            .4471144.........
            .4471144.........
            47411144.........
            44441444.........
            44444444.........
            44444444.77777...
            4444..417477747..
            444...4177474777.
            .....41777747117.
            ....441777474717.
            ..44441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            .....41114771114.
            .....44411111444.
            ......444....444.
            .......444..444..
            `],
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile31`)) {
        mySprite2 = sprites.create(img`
            ........................
            ........................
            ........................
            ..........ffffff........
            ........fff111ffff......
            .......ff1155555ff......
            .......f155111f55ff.....
            ......ff155155f55ff.....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......ff155155f55ff.....
            .......f155ffff55ff.....
            .......ff1555555ff......
            ........fff555ffff......
            ..........ffffff........
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value)
        animation.runImageAnimation(
        mySprite2,
        [img`
            ........ffffff..........
            ......fff111fff.........
            .....ff1155555ff........
            .....f155111f55ff.......
            ....ff155155f55ff.......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....ff155155f55ff.......
            .....f155ffff55ff.......
            .....ff1555555ff........
            ......fff555ffff........
            ........ffffff..........
            ........................
            `,img`
            .........ffff...........
            .......fff1ffff.........
            ......ff11555ff.........
            ......f1551f55ff........
            .....ff1551f55ff........
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....ff1551f55ff........
            ......f155ff55ff........
            ......ff15555ff.........
            .......fff5ffff.........
            .........ffff...........
            ........................
            `,img`
            .........fff............
            ........ff1fff..........
            .......ff155ff..........
            .......f15155ff.........
            ......ff15155ff.........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......ff15155ff.........
            .......f15f55ff.........
            .......ff155ff..........
            ........ff5fff..........
            .........fff............
            ........................
            `,img`
            ..........ff............
            .........ffff...........
            ........ff1ff...........
            ........f155ff..........
            .......ff155ff..........
            .......f15555ff.........
            .......f15555ff.........
            .......f15555ff.........
            .......f15555ff.........
            .......f15555ff.........
            .......ff155ff..........
            ........f155ff..........
            ........ff1ff...........
            .........ffff...........
            ..........ff............
            ........................
            `,img`
            .........fff............
            ........ff1fff..........
            .......ff155ff..........
            .......f15155ff.........
            ......ff15155ff.........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......ff15155ff.........
            .......f15f55ff.........
            .......ff155ff..........
            ........ff5fff..........
            .........fff............
            ........................
            `,img`
            .........ffff...........
            .......fff1ffff.........
            ......ff11555ff.........
            ......f1551f55ff........
            .....ff1551f55ff........
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....ff1551f55ff........
            ......f155ff55ff........
            ......ff15555ff.........
            .......fff5ffff.........
            .........ffff...........
            ........................
            `,img`
            ........ffffff..........
            ......fff111ffff........
            .....ff1155555ff........
            .....f155111f55ff.......
            ....ff155155f55ff.......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....ff155155f55ff.......
            .....f155ffff55ff.......
            .....ff1555555ff........
            ......fff555ffff........
            ........ffffff..........
            ........................
            `],
        100,
        true
        )
    }
}
scene.onOverlapTile(SpriteKind.Food, assets.tile`myTile13`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
function coinPlace () {
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ..........ffffff........
        ........fff111ffff......
        .......ff1155555ff......
        .......f155111f55ff.....
        ......ff155155f55ff.....
        ......f1555155f555ff....
        ......f1555155f555ff....
        ......f1555155f555ff....
        ......f1555155f555ff....
        ......f1555155f555ff....
        ......f1555155f555ff....
        ......ff155155f55ff.....
        .......f155ffff55ff.....
        .......ff1555555ff......
        ........fff555ffff......
        ..........ffffff........
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Food)
    animation.runImageAnimation(
    mySprite3,
    [img`
        ........ffffff..........
        ......fff111fff.........
        .....ff1155555ff........
        .....f155111f55ff.......
        ....ff155155f55ff.......
        ....f1555155f555ff......
        ....f1555155f555ff......
        ....f1555155f555ff......
        ....f1555155f555ff......
        ....f1555155f555ff......
        ....ff155155f55ff.......
        .....f155ffff55ff.......
        .....ff1555555ff........
        ......fff555ffff........
        ........ffffff..........
        ........................
        `,img`
        .........ffff...........
        .......fff1ffff.........
        ......ff11555ff.........
        ......f1551f55ff........
        .....ff1551f55ff........
        .....f15551f555ff.......
        .....f15551f555ff.......
        .....f15551f555ff.......
        .....f15551f555ff.......
        .....f15551f555ff.......
        .....ff1551f55ff........
        ......f155ff55ff........
        ......ff15555ff.........
        .......fff5ffff.........
        .........ffff...........
        ........................
        `,img`
        .........fff............
        ........ff1fff..........
        .......ff155ff..........
        .......f15155ff.........
        ......ff15155ff.........
        ......f1551555ff........
        ......f1551555ff........
        ......f1551555ff........
        ......f1551555ff........
        ......f1551555ff........
        ......ff15155ff.........
        .......f15f55ff.........
        .......ff155ff..........
        ........ff5fff..........
        .........fff............
        ........................
        `,img`
        ..........ff............
        .........ffff...........
        ........ff1ff...........
        ........f155ff..........
        .......ff155ff..........
        .......f15555ff.........
        .......f15555ff.........
        .......f15555ff.........
        .......f15555ff.........
        .......f15555ff.........
        .......ff155ff..........
        ........f155ff..........
        ........ff1ff...........
        .........ffff...........
        ..........ff............
        ........................
        `,img`
        .........fff............
        ........ff1fff..........
        .......ff155ff..........
        .......f15155ff.........
        ......ff15155ff.........
        ......f1551555ff........
        ......f1551555ff........
        ......f1551555ff........
        ......f1551555ff........
        ......f1551555ff........
        ......ff15155ff.........
        .......f15f55ff.........
        .......ff155ff..........
        ........ff5fff..........
        .........fff............
        ........................
        `,img`
        .........ffff...........
        .......fff1ffff.........
        ......ff11555ff.........
        ......f1551f55ff........
        .....ff1551f55ff........
        .....f15551f555ff.......
        .....f15551f555ff.......
        .....f15551f555ff.......
        .....f15551f555ff.......
        .....f15551f555ff.......
        .....ff1551f55ff........
        ......f155ff55ff........
        ......ff15555ff.........
        .......fff5ffff.........
        .........ffff...........
        ........................
        `,img`
        ........ffffff..........
        ......fff111ffff........
        .....ff1155555ff........
        .....f155111f55ff.......
        ....ff155155f55ff.......
        ....f1555155f555ff......
        ....f1555155f555ff......
        ....f1555155f555ff......
        ....f1555155f555ff......
        ....f1555155f555ff......
        ....ff155155f55ff.......
        .....f155ffff55ff.......
        .....ff1555555ff........
        ......fff555ffff........
        ........ffffff..........
        ........................
        `],
    100,
    true
    )
    tiles.placeOnTile(mySprite3, tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
    mySprite3.vy = -200
    coins += 1
    textSprite.setText(convertToText(coins))
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile41`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.koopaGreen, assets.tile`myTile41`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    coins += 1
    textSprite.setText(convertToText(coins))
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
function kill_above_block (location_of_block: tiles.Location) {
    mySprite5 = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.enemy_killer_sprite)
    mySprite5.setVelocity(0, -50)
    mySprite5.setFlag(SpriteFlag.GhostThroughWalls, true)
    mySprite5.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(mySprite5, location_of_block)
    timer.after(500, function () {
        sprites.destroy(mySprite5)
    })
}
scene.onOverlapTile(SpriteKind.mushroom, assets.tile`myTile49`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    if (die == 0) {
        luigi_Die()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.firebar, function (sprite, otherSprite) {
    luigi_Die()
})
scene.onOverlapTile(SpriteKind.Text, assets.tile`myTile13`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.koopaGreen, assets.tile`myTile13`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile49`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile41`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
function levelBelowGround () {
    music.play(music.createSong(assets.song`underground music`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    scene.setBackgroundColor(15)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        mySprite2 = sprites.create(img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d f f . . 
            . f f f f f d d d d f f f f f . 
            . f f f f f f . . f f f f f f . 
            . . f f f f f . . f f f f f . . 
            `, SpriteKind.OffScreenEnemy)
        tiles.placeOnTile(mySprite2, value)
        mySprite2.ay = 500
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d f f . . 
            . f f f f f d d d d f f f f f . 
            . f f f f f f . . f f f f f f . 
            . . f f f f f . . f f f f f . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d f f . . 
            . . f f d d d d d d f f f f f . 
            . f f f f f d d d f f f f f f . 
            . f f f f f f . . f f f f f . . 
            . . f f f f f . . . . . . . . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d f f . . 
            . f f f f f d d d d f f f f f . 
            . f f f f f f . . f f f f f f . 
            . . f f f f f . . f f f f f . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . f f d d d d d d d d . . . . 
            . f f f f f d d d d d d f f . . 
            . f f f f f f d d d f f f f f . 
            . . f f f f f . . f f f f f f . 
            . . . . . . . . . f f f f f . . 
            `],
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        mySprite2 = sprites.create(img`
            ................
            ............1...
            ...........111..
            ..........4111..
            .........441174.
            .........441174.
            .........441174.
            .........441114.
            .........4441444
            .........4444474
            ...77777..444444
            ..7477747.44.444
            .77747477.44..44
            .711747777144.44
            .717474777144.4.
            .474777474144...
            .7477777471144..
            .474777474714...
            .777474777414...
            .77774777771....
            111747477711....
            ..11177411144...
            .4441111144444..
            4444......44444.
            `, SpriteKind.offScreenKoopaGreen)
        tiles.placeOnTile(mySprite2, value)
        mySprite2.ay = 500
        animation.runImageAnimation(
        mySprite2,
        [img`
            .................
            ....1............
            ...111...........
            ...1114..........
            ..471144.........
            ..471144.........
            ..471144.........
            ..411144.........
            .4441444.........
            .4744444.........
            .444444..77777...
            .444.44.7477747..
            .44..44.77474777.
            .44.441777747117.
            ..4.441777474717.
            ....441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            ....44111477111..
            ...4444411111444.
            ..44444......4444
            `,img`
            ....1............
            ...111...........
            ..41114..........
            ..471144.........
            .4471144.........
            .4471144.........
            47411144.........
            44441444.........
            44444444.........
            44444444.77777...
            4444..417477747..
            444...4177474777.
            .....41777747117.
            ....441777474717.
            ..44441474777474.
            ...4411747777747.
            ....417474777474.
            ....414777474777.
            .....17777747777.
            .....117774747111
            .....41114771114.
            .....44411111444.
            ......444....444.
            .......444..444..
            `],
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
        mySprite2 = sprites.create(img`
            ........................
            ........................
            ........................
            ..........ffffff........
            ........fff111ffff......
            .......ff1155555ff......
            .......f155111f55ff.....
            ......ff155155f55ff.....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......f1555155f555ff....
            ......ff155155f55ff.....
            .......f155ffff55ff.....
            .......ff1555555ff......
            ........fff555ffff......
            ..........ffffff........
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value)
        animation.runImageAnimation(
        mySprite2,
        [img`
            ........ffffff..........
            ......fff111fff.........
            .....ff1155555ff........
            .....f155111f55ff.......
            ....ff155155f55ff.......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....ff155155f55ff.......
            .....f155ffff55ff.......
            .....ff1555555ff........
            ......fff555ffff........
            ........ffffff..........
            ........................
            `,img`
            .........ffff...........
            .......fff1ffff.........
            ......ff11555ff.........
            ......f1551f55ff........
            .....ff1551f55ff........
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....ff1551f55ff........
            ......f155ff55ff........
            ......ff15555ff.........
            .......fff5ffff.........
            .........ffff...........
            ........................
            `,img`
            .........fff............
            ........ff1fff..........
            .......ff155ff..........
            .......f15155ff.........
            ......ff15155ff.........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......ff15155ff.........
            .......f15f55ff.........
            .......ff155ff..........
            ........ff5fff..........
            .........fff............
            ........................
            `,img`
            ..........ff............
            .........ffff...........
            ........ff1ff...........
            ........f155ff..........
            .......ff155ff..........
            .......f15555ff.........
            .......f15555ff.........
            .......f15555ff.........
            .......f15555ff.........
            .......f15555ff.........
            .......ff155ff..........
            ........f155ff..........
            ........ff1ff...........
            .........ffff...........
            ..........ff............
            ........................
            `,img`
            .........fff............
            ........ff1fff..........
            .......ff155ff..........
            .......f15155ff.........
            ......ff15155ff.........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......f1551555ff........
            ......ff15155ff.........
            .......f15f55ff.........
            .......ff155ff..........
            ........ff5fff..........
            .........fff............
            ........................
            `,img`
            .........ffff...........
            .......fff1ffff.........
            ......ff11555ff.........
            ......f1551f55ff........
            .....ff1551f55ff........
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....f15551f555ff.......
            .....ff1551f55ff........
            ......f155ff55ff........
            ......ff15555ff.........
            .......fff5ffff.........
            .........ffff...........
            ........................
            `,img`
            ........ffffff..........
            ......fff111ffff........
            .....ff1155555ff........
            .....f155111f55ff.......
            ....ff155155f55ff.......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....f1555155f555ff......
            ....ff155155f55ff.......
            .....f155ffff55ff.......
            .....ff1555555ff........
            ......fff555ffff........
            ........ffffff..........
            ........................
            `],
        100,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Food, assets.tile`myTile20`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.bottom < otherSprite.y) {
        otherSprite.destroy()
        sprite.vy = -100
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    } else {
        luigi_Die()
    }
})
scene.onOverlapTile(SpriteKind.mushroom, assets.tile`myTile41`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.mushroom, assets.tile`myTile13`, function (sprite, location) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
let mySprite9: Sprite = null
let mySprite5: Sprite = null
let coins = 0
let mySprite3: Sprite = null
let mySprite10: Sprite = null
let mySprite7: Sprite = null
let mySprite11: Sprite = null
let mySprite8: Sprite = null
let die = 0
let underwater = 0
let mySprite2: Sprite = null
let mySprite4: Sprite = null
let invulnerability = 0
let canMove = 0
let powerup = 0
let currentLevel = 0
let textSprite: TextSprite = null
let World_Map_True = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Luigi`, SpriteKind.Player)
World_Map_True = 1
game.setDialogCursor(img`
    ..........666666666666..........
    ........6667777777777666........
    ......66677777777777777666......
    .....6677777779999777777766.....
    ....667777779966669977777766....
    ....677777799668866117777776....
    ...66777779966877861197777766...
    ...66777799668677686699777766...
    ...88777796688888888669777788...
    ...88777788888888888888777788...
    ...88977888679999997688877988...
    ...88977886777777777768877988...
    ...88997777777777777777779988...
    ...88799777777777777777711788...
    ...88679997777777777779117688...
    ..cc866679999999999999976668cc..
    .ccbc6666679999999999766666cbcc.
    .fcbcc66666666666666666666ccbcf.
    .fcbbcc666666666666666666ccbdcf.
    .f8bbbccc66666666666666cccbddcf.
    .f8cbbbbccccccccccccccccbdddbcf.
    .f8ccbbbbbccccccccccccb111ddccf.
    .f6ccccbbbddddddddddddd111dcccf.
    .f6ccccccbbddddddddddddddbbcccf.
    .f6cccccccccccccbbbbbbbbbdbcccf.
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..ff6ccccccccbbbbbbbbbbbddbcff..
    ...ff6cccccccbbbbbbbbbbbddbff...
    ....ffcccccccbbbbbbbbbbbdbff....
    ......ffccccbbbbbbbbbbbbff......
    ........ffffffffffffffff........
    `)
game.setDialogFrame(img`
    333333333333333333333333
    3dddddddddddddddddddddd3
    b3dddddddddddddddddddd3b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    bb33333333333333333333bb
    bccccccccccccccccccccccb
    cccccccccccccccccccccccc
    `)
game.showLongText(" SUPER LUIGI 2D WORLD! ", DialogLayout.Full)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level11`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
world1()
let mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.display)
textSprite = textsprite.create("0")
textSprite.setIcon(img`
    ........................
    ........................
    ........................
    ..........ffffff........
    ........fff111ffff......
    .......ff1155555ff......
    .......f155111f55ff.....
    ......ff155155f55ff.....
    ......f1555155f555ff....
    ......f1555155f555ff....
    ......f1555155f555ff....
    ......f1555155f555ff....
    ......f1555155f555ff....
    ......f1555155f555ff....
    ......ff155155f55ff.....
    .......f155ffff55ff.....
    .......ff1555555ff......
    ........fff555ffff......
    ..........ffffff........
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
textSprite.setStayInScreen(true)
currentLevel = 1
powerup = 0
canMove = 1
invulnerability = 0
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal, scroller.BackgroundLayer.Layer4)
scroller.scrollBackgroundWithSpeed(5, 0, scroller.BackgroundLayer.Layer4)
game.onUpdate(function () {
    if (World_Map_True == 0) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile23`)) {
            mySprite3 = sprites.create(assets.image`mushroom`, SpriteKind.mushroom)
            mySprite3.ay = 500
            mySprite3.vx = 30
            tiles.placeOnTile(mySprite3, tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
            tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`myTile22`)
            for (let value of sprites.allOfKind(SpriteKind.koopaGreen)) {
                if (value.overlapsWith(mySprite3)) {
                    sprites.destroy(value)
                }
            }
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                if (value.overlapsWith(mySprite3)) {
                    sprites.destroy(value)
                }
            }
        }
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile21`)) {
                kill_above_block(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top))
                if (powerup == 1) {
                    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`transparency16`)
                    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), false)
                }
            }
            if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile34`)) {
                if (powerup == 1) {
                    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`transparency16`)
                    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), false)
                }
            }
        }
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            pathfinding(value, false, 30, "goomba")
        }
        for (let value of sprites.allOfKind(SpriteKind.koopaGreen)) {
            pathfinding(value, true, 30, "koopaGreen")
        }
        for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
            pathfinding(value, false, 100, "shellGreen")
        }
        for (let value of sprites.allOfKind(SpriteKind.firebar)) {
            transformSprites.changeRotation(value, 5)
        }
        start_movement()
    }
})
game.onUpdateInterval(5000, function () {
    for (let value of sprites.allOfKind(SpriteKind.lavabubble)) {
        value.ay = 500
        value.vy = -250
        animation.runImageAnimation(
        value,
        assets.animation`myAnim5`,
        200,
        false
        )
    }
    for (let value of sprites.allOfKind(SpriteKind.boss)) {
        mySprite9 = sprites.create(img`
            . . . . . . . . . . 2 2 2 2 2 2 . . 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 4 4 2 2 4 4 4 4 2 2 4 4 4 4 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 1 1 1 1 2 2 
            . . . . . 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 1 2 
            . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 2 2 2 2 . 
            . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 . . 2 2 2 . 2 2 . . 2 . . . . . . 
            `, SpriteKind.fire)
        mySprite9.setFlag(SpriteFlag.GhostThroughWalls, true)
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(value.tilemapLocation().column, randint(8, 13)))
        mySprite9.vx = -50
        animation.runImageAnimation(
        mySprite9,
        assets.animation`myAnim1`,
        100,
        true
        )
    }
})
forever(function () {
    textSprite.x = 0
    textSprite.y = -99999
})

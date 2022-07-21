import Matter from "matter-js";
import P5, { Image } from "p5";
import { Player, Ease } from "textalive-app-api";

let c: string = ""

// ---- 画面効果 ----------------------------------------------------------

// スクリーンシェイク

/** シェイクの現在の強さ */
let shakeMagnitude;

/** シェイクの減衰に使う係数 */
let shakeDampingFactor;

/** シェイクをリセット */
function resetShake() {
    shakeMagnitude = 0;
    shakeDampingFactor = 0.95;
}

/** シェイクを任意の強さで発動 */
function setShake(magnitude) {
    shakeMagnitude = magnitude;
}

/** シェイクを更新 */
function updateShake() {
    shakeMagnitude *= shakeDampingFactor; // シェイクの大きさを徐々に減衰
}

/** シェイクを適用。描画処理の前に実行する必要あり */
function applyShake(p: P5) {
    if (shakeMagnitude < 1) return;

    // currentMagnitude の範囲内で、ランダムに画面をずらす
    p.translate(
        p.random(-shakeMagnitude, shakeMagnitude),
        p.random(-shakeMagnitude, shakeMagnitude)
    );
}

// スクリーンフラッシュ

/** フラッシュのα値 */
let flashAlpha;

/** フラッシュの持続時間（フレーム数） */
let flashDuration;

/** フラッシュの残り時間（フレーム数） */
let flashRemainingCount;

/** フラッシュをリセット */
function resetFlash() {
    flashAlpha = 255;
    flashDuration = 1;
    flashRemainingCount = 0;
}

/** フラッシュを、任意のα値と持続時間で発動 */
function setFlash(alpha, duration) {
    flashAlpha = alpha;
    flashDuration = duration;
    flashRemainingCount = duration;
}

/** フラッシュを更新 */
function updateFlash() {
    flashRemainingCount -= 1;
}

/** フラッシュを適用。描画処理の後に呼ぶ必要あり */
function applyFlash(p: P5) {
    if (flashRemainingCount <= 0) return;

    let alphaRatio = flashRemainingCount / flashDuration;
    p.background(255, alphaRatio * flashAlpha);
}






// プレイヤーの初期化 / Initialize TextAlive Player
const Mplayer = new Player({
    // トークンは https://developer.textalive.jp/profile で取得したものを使う
    app: { token: "aFtWhwrz3UnWjZcB" },
    // mediaElement: document.querySelector("#media"),
    vocalAmplitudeEnabled: true,
    valenceArousalEnabled: true
});

// リスナの登録 / Register listeners
Mplayer.addListener({
    onAppReady: (app) => {
        if (!app.managed) {
            Mplayer.createFromSongUrl("https://piapro.jp/t/FDb1/20210213190029", {
                video: {
                    // 音楽地図訂正履歴: https://songle.jp/songs/2121525/history
                    beatId: 3953882,
                    repetitiveSegmentId: 2099561,
                    // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FFDb1%2F20210213190029
                    lyricId: 52065,
                    lyricDiffId: 5093,
                },
                // Mplayer.createFromSongUrl("https://piapro.jp/t/N--x/20210204215604", {
                //     video: {
                //         // 音楽地図訂正履歴: https://songle.jp/songs/2121403/history
                //         beatId: 3953761,
                //         repetitiveSegmentId: 2099586,
                //         // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FN--x%2F20210204215604
                //         lyricId: 52094,
                //         lyricDiffId: 5171,
                //     },
            });
            document.querySelector("#control")!.className = "active";
        } else {
            document.querySelector("#control")!.className = "inactive";
        }
    },

    onTextLoad: (body) => {
        // Webフォントを確実に読み込むためDOM要素に歌詞を貼り付ける
        document.querySelector("#dummy")!.textContent = body?.text;
    },

    onVideoReady: () => {
        if (!Mplayer.app.managed) {
            document.querySelector("#message")!.className = "active";
        }
        document.querySelector("#overlay")!.className = "inactive";
    },

    onPlay: () => {
        document.querySelector("#message")!.className = "inactive";
        console.log("player.onPlay");
    },

    onPause: () => {
        if (!player.app.managed) {
            document.querySelector("#message")!.className = "active";
        }
        console.log("player.onPause");
    },

    onSeek: () => {
        console.log("player.onSeek");
    },

    onStop: () => {
        console.log("player.onStop");
    },
});

// 再生ボタン
document.querySelector("#play")!.addEventListener("click", () => {
    Mplayer.requestPlay();
});

let Engine = Matter.Engine, World = Matter.World, Bodies = Matter.Bodies, Body = Matter.Body
let engine
let world

let boundary;
let wall = Array();


let player;
let bullets = Array();
let rain = Array()

let chars = Array()
let particle = Array()// パーティクル

let score = 0;
let multiple = 1.0
let gameState;
let miku = Array()


// スコア加算
const addScore = (point) => {
    score += Math.floor(point * multiple)
}

// 初期化
const reset = (p: P5) => {
    engine = Engine.create()
    world = engine.world
    gameState = "play"
    // player = createPlayer();
    player = new PlayerController(p)
    resetShake()
    resetFlash()
}

// ゲームの更新
const updateGame = (p: P5) => {
    if (gameState === "gameover") return;

    // パーティクルの追加（プレイヤー）色も発射可能化でかえる
    let colorChange = [255, 255, 255]
    if (bullets.length < 1) colorChange = [255, 160, 0]
    particle.push(createParticle(player.body.position.x, player.body.position.y + 20, 0, 2, 50, colorChange))
    // 死んだエンティティの削除
    particle = particle.filter(particleIsAlive)

    // 位置更新
    // updatePositionP(player, p)
    particle.forEach(part => updatePosition(part))

    // パーティクルのライフ減少
    particle.forEach(part => decreaseLife(part))

}

const drawGameOverScreen = (p: P5) => {
    p.background(0, 192)
    p.fill(255)
    p.textSize(64)
    p.textAlign("center", "center")
    p.text("GAME OVER", p.width / 2, p.height / 2)
}

// ゲームの描写
const drawGame = (p) => {
    // 画面こうか
    updateShake();
    updateFlash();
    applyShake(p)

    // 描写
    p.background(0)

    // 雨
    rain.forEach(r => {
        fallRain(r)
        showRain(r, p)
    })

    // ミク
    const mikuPosX = (Mplayer.mediaPosition / Mplayer.video.duration) * 700
    let mikuImg = miku[0]
    if (Mplayer.findBeat(Mplayer.timer.position) && Mplayer.findBeat(Mplayer.timer.position).index % 2 == 0) mikuImg = miku[1]

    p.image(mikuImg, mikuPosX, 355, miku[0].width / 10, miku[0].height / 10)

    player.show(p)
    // drawPlayer(player, p)
    particle.forEach(part => drawParticle(part, p))
    // p.square(player.x, player.y, 40)

    applyFlash(p)

}



// マウスクリック
const onMouseClick = (p: P5) => {

    // 一発以上打てない
    if (bullets.length < 1) bullets.push(new Bullet(player.body.position.x, player.body.position.y - 15, 10, 20, p))
}

const sketch = (p: P5) => {
    p.preload = () => {
        // miku[0] = p.loadImage("./img/miku_shiro.png")
        miku[0] = p.loadImage("./img/miku_huchi.png")
        // miku[1] = p.loadImage("./img/miku_walk_shiro.png")
        miku[1] = p.loadImage("./img/miku_walk_huchi.png")
    }

    p.setup = () => {
        p.createCanvas(800, 500)
        p.rectMode("center")


        reset(p)
        // 床
        boundary = new Boundary(-1000, 470, 5000, 60, 0, p)
        // 壁
        wall.push(new Wall(-10, -1000, 10, 5000, 0, p))
        wall.push(new Wall(810, -1000, 10, 5000, 0, p))
        wall.push(new Wall(-100, -100, 5000, 10, 0, p))

        // 雨
        for (let i = 0; i < 100; i++) {
            rain.push(createRain())
        }

        // 衝突判定
        Matter.Events.on(engine, "collisionStart", function (event) {
            let pairs = event.pairs; // 衝突物
            pairs.forEach(pair => {
                // console.log(pair.bodyB);
                // 床と文字の衝突判定
                if (pair.bodyA.label === "boundary" && pair.bodyB.label === "char") {
                    World.remove(world, pair.bodyB)
                    chars = chars.filter(char => char.body.id != pair.bodyB.id)
                    // 床に砕けるパーティクル
                    const num = 20
                    for (let i = 0; i < num; i++) {
                        let color = [255, 255, 255]
                        if (pair.bodyB.isHit) color = [255, 160, 0]
                        particle.push(createParticle(pair.bodyB.position.x, pair.bodyB.position.y + 30, 0, -0.2, 20, color))
                    }
                }

                // 弾の判定
                if (pair.bodyB.label === "bullet") {
                    World.remove(world, pair.bodyB)
                    bullets = []
                    // 砕けるパーティクル
                    const num = 10
                    for (let i = 0; i < num; i++) {
                        particle.push(createParticle(pair.bodyB.position.x, pair.bodyB.position.y, 0, 0, 80, [255, 160, 0]))
                    }
                    // 文字だったら
                    if (pair.bodyA.label === "char") {
                        pair.bodyA.isHit = true; // activeにする
                        addScore(300)// スコア
                    }
                }

                // 活性化した文字の衝突
                if (pair.bodyB.label === "char" && pair.bodyA.label === "char" && pair.bodyA.isHit) {
                    pair.bodyB.isHit = true; // activeにする
                    // 砕けるパーティクル
                    const num = 10
                    for (let i = 0; i < num; i++) {
                        particle.push(createParticle(pair.bodyB.position.x, pair.bodyB.position.y, 0, 0, 80, [255, 160, 0]))
                    }

                    addScore(1200)// スコア
                }

                if (pair.bodyA.label === "player" && pair.bodyB.label === "char"
                    && !pair.bodyB.isHit && pair.bodyA.invincible < 1) {
                    pair.bodyA.invincible = 120 // 無敵
                    multiple = 1 // 倍率リセット
                    // 演出
                    setShake(30);
                    setFlash(60, 30);
                }
            })
        })
        Matter.Events.on(engine, "beforeUpdate", function () {
            Body.setVelocity(player.body, {
                x: 0,
                y: 0
            })

            Body.setPosition(player.body, {
                x: p.mouseX,
                y: p.mouseY
            })

        })

    }

    p.draw = () => {
        p.blendMode("source-over");

        if (!Mplayer || !Mplayer.video) {
            return;
        }

        p.fill(255, 255, 255)
        updateGame(p)
        drawGame(p)




        // 物理エンジン
        Engine.update(engine)
        boundary.show() // 床
        wall.forEach(w => w.show()) // 壁
        chars.forEach(char => { // 文字
            char.show()
        });
        // たま
        bullets.forEach(bullet => {
            // bullet.body.position.y += 0.2;
            bullet.time++
            if (bullet.time > 60) { // １秒経過で削除
                World.remove(world, bullet.body)
                bullets = bullets.filter(b => b !== bullet)
            }
            bullet.show(p)
        })

        // 歌詞
        const pos = Mplayer.timer.position + 2000
        let char = Mplayer.video.findChar(pos, { loose: false }) ?? null
        if (char) {
            if (char.text !== c) {
                c = char.text
                // console.log(char.text);
                // 落下文字追加

                // 声大きさ
                const size = Math.min(Mplayer.getVocalAmplitude(pos) / 100, 100)
                const x = Math.random() * 600 + 100
                chars.push(new Char(x, -20, size, c, p))

            }


        }

        // スコア
        if (Mplayer.isPlaying) {
            addScore(1)
            // 倍率
            if (p.frameCount % 120 == 1) {
                multiple += 0.1
                multiple = Math.floor(multiple * 10) / 10
            }
        }

        // スコア表示
        p.textSize(30)
        p.stroke(0)
        p.fill(255)
        p.text(`x${multiple}`, 240, 30)
        p.text(`SCORE:${score}`, 370, 30)

        // 操作説明
        p.textSize(20)
        p.noStroke()
        p.fill(0)
        p.text(`マウス：移動　クリック：発射`, 10, 485)

        const reverseColor = () => {
            p.blendMode("exclusion");
            p.fill(255);
            p.rect(0, 0, 1600, 1000);
        }
        // サビだったら色反転
        const segment = Mplayer.findChorus(Mplayer.timer.position)
        // console.log(segment);
        if (segment) reverseColor()


    }

    p.mouseClicked = () => {
        onMouseClick(p)
    }
}

new P5(sketch)



// 床
function Boundary(x, y, w, h, a, p: P5) {
    let options = {
        friction: 0,
        restitution: 0.95,
        angle: a,
        isStatic: true,
        // collisionFilter: { group: 1 },
        label: "boundary"

    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    this.show = function () {
        let pos = this.body.position;
        let angle = this.body.angle;
        p.push();
        p.translate(pos.x, pos.y);
        p.rotate(angle);
        p.rectMode("center");
        p.strokeWeight(1);
        p.noStroke();
        p.fill(180)
        p.rect(0, 0, this.w, this.h);
        p.pop();
    };
}
// 床
function Wall(x, y, w, h, a, p: P5) {
    let options = {
        friction: 0,
        restitution: 0.95,
        angle: a,
        isStatic: true,
        // collisionFilter: { group: 1 },
        label: "wall"

    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    this.show = function () {
        let pos = this.body.position;
        let angle = this.body.angle;
        p.push();
        p.translate(pos.x, pos.y);
        p.rotate(angle);
        p.rectMode("center");
        p.strokeWeight(1);
        p.noStroke();
        p.fill(180)
        p.rect(0, 0, this.w, this.h);
        p.pop();
    };
}

function Char(x, y, size, text, p: P5) {
    const options: Matter.IChamferableBodyDefinition = {
        friction: 0.0005,
        restitution: 1,
        frictionAir: 0.06,
        density: 0.02,
        isStatic: false,
        // collisionFilter: { group: -2 },
        label: "char"

    }
    this.body = Bodies.circle(x, y, size * 0.4, options)
    // this.body = Bodies.rectangle(x, y, size, size, options);
    // this.w = size;
    // this.h = size;
    this.r = size

    this.body.isHit = false; // 被弾したらactiveになる
    this.count = 0;
    World.add(world, this.body);

    // console.log(this.body.position);

    // Body.applyForce(this.body,
    //     { x: this.body.position.x, y: this.body.position.y },
    //     { x: 0, y: -0.07 })

    this.show = function () {
        // 被弾していたら寿命減らす
        if (this.body.isHit) {
            this.count++
            if (this.count > 120) { // 寿命迎えたら消す
                World.remove(world, this.body)
                chars = chars.filter(char => char.body.id != this.body.id)
                // 砕けるパーティクル
                const num = 10
                for (let i = 0; i < num; i++) {
                    particle.push(createParticle(this.body.position.x, this.body.position.y, 0, -3, 80, [255, 160, 0]))
                }
            }
        }

        var pos = this.body.position;
        var angle = this.body.angle;

        p.push();
        p.textAlign("center", "center")
        p.translate(pos.x, pos.y);
        p.rotate(angle);
        p.rectMode("center");
        p.strokeWeight(1);
        p.stroke(255);
        p.noFill();
        // p.rect(0, 0, this.w, this.h);
        // p.stroke(255);
        // translate(-this.w/2, -this.h/2); // Is you want to move the text at the top left corner
        this.body.isHit ? p.fill(255, 160, 0) : p.fill(255);
        this.body.isHit ? p.stroke(255, 160, 0) : p.stroke(255);
        p.textSize(size)
        p.text(text, 0, 0);
        // p.ellipse(0, 0, this.w*0.4 * 2)
        p.pop();
    };
}

// 弾
function Bullet(x, y, width, height, p: P5) {
    const options = {
        friction: 0.01,
        restitution: 1,
        frictionAir: 0,
        isStatic: false,
        density: 9999,
        // collisionFilter: { group: -2 },
        label: "bullet"
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.w = width;
    this.h = height;
    this.time = 0;

    World.add(world, this.body);

    Body.applyForce(this.body,
        { x: this.body.position.x, y: this.body.position.y },
        { x: 0, y: -149999 })

    this.show = function (p) {
        var pos = this.body.position;
        var angle = this.body.angle;

        p.push();
        p.translate(pos.x, pos.y);
        p.rotate(angle);
        p.rectMode("center");
        p.strokeWeight(1);
        p.noStroke();
        p.fill(255, 160, 0);
        p.rect(0, 0, this.w, this.h);
        p.pop();
    };
}

function PlayerController(p: P5) {
    const options = {
        friction: 0,
        restitution: 0,
        frictionAir: 0,
        density: 1,
        collisionFilter: { group: -2 },
        label: "player"
    }

    this.body = Bodies.rectangle(p.mouseX, p.mouseY, 4, 4, options);
    // this.r = r;
    this.angle = 0
    this.body.invincible = 0 // 0以外は無敵

    World.add(world, this.body);

    this.show = function (p) {
        // console.log(this.body.position);
        // this.body.velocity = { x: 0, y: 0 }
        // this.body.position = { x: p.mouseX, y: p.mouseY }

        if (this.body.invincible > 0) {
            this.body.invincible--;
        }

        let pos = this.body.position;
        const beat = Mplayer.findBeat(Mplayer.timer.position) ? Mplayer.findBeat(Mplayer.timer.position).duration : 0
        this.angle += beat / 20000;

        p.push();
        p.translate(pos.x, pos.y);
        p.rotate(this.angle);
        p.rectMode("center");
        p.strokeWeight(1);
        p.noStroke();
        p.fill(255);

        p.rect(0, 0, 40);
        p.pop();
    };
}
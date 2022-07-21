const createRain = () => {
    const z = Math.random() * 20
    return {
        x: Math.random() * 800,
        y: Math.random() * 500 - 500,
        z: z, // 0~20
        len: z / 2 + 10, // 10~20
        yspeed: z + 1, // 1~20
    }

}

const fallRain = (e) => {
    e.y = e.y + e.yspeed
    const grav = e.z / 100
    e.yspeed = e.yspeed + grav
    if (e.y > 500) {
        e.y = Math.random() * 100 - 200
        e.yspeed = e.z / 4 + 5
    }
}

const showRain = (e, p) => {
    const thick = e.z / 10 + 1
    p.strokeWeight(thick)
    // p.stroke(138, 43, 226)
    p.stroke(200)
    p.line(e.x, e.y, e.x, e.y + e.len)
    p.noStroke()
}
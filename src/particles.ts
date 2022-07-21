const createParticle = (x, y, vx = 0, vy = 0, time = 50, color = [255, 255, 255]) => {
    let direnction = Math.random() * Math.PI * 2
    let speed = 2

    return {
        x,
        y,
        // vx: -2 + speed * Math.cos(direnction),
        vx: speed * Math.cos(direnction) + vx,
        vy: speed * Math.sin(direnction) + vy,
        life: Math.random() * time + 75,
        color: color
    }
}

const decreaseLife = (particle) => {
    particle.life -= 2
}

const particleIsAlive = (particle) => {
    return particle.life > 0
}

const drawParticle = (particle, p) => {
    p.push()
    p.noStroke()
    p.fill(particle.color[0], particle.color[1], particle.color[2], particle.life * 255 / 100)
    p.square(particle.x, particle.y, particle.life / 10)
    p.pop()
}
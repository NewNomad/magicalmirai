const createBlock = (y = 0)=>{
    return {
        x: 900,
        y: y,
        vx: -2,
        vy: 0
    };
};
const drawBlock = (e, p)=>{
    p.rect(e.x, e.y, 80, 400);
};
const blockIsAlive = (e)=>{
    return -100 < e.x;
};

//# sourceMappingURL=index.a5fc3d10.js.map

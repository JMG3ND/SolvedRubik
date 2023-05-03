export const useSectionCrossData = () => {
    //c = center, t = top, r = right, l = left, b = bottom
    const c = 1, t = 2, r = 3, l = 4, b = 5;
    const algorithmData = [
        {
            image: [
                t, c, t,
                c, c, c,
                b, c, b,
            ],
            algorithm: "R U2 R' U' (R U R' U') R U' R'",
        },
        {
            image: [
                l, c, t,
                c, c, c,
                l, c, b,
            ],
            algorithm: "R U2 R2 U' R2 U' R2 U2 R",
        },
        {
            image: [
                l, c, t,
                c, c, c,
                b, c, c,
            ],
            algorithm: "L' U R U' L U R'",
        },
        {
            image: [
                t, c, r,
                c, c, c,
                c, c, b,
            ],
            algorithm: "R U' L' U R' U' L",
        },
        {
            image: [
                t, c, t,
                c, c, c,
                c, c, c,
            ],
            algorithm: "R2 D' R U2 R' D R U2 R",
        },
        {
            image: [
                t, c, c,
                c, c, c,
                b, c, c,
            ],
            algorithm: "r U R' U' r' F R F'",
        },
        {
            image: [
                c, c, t,
                c, c, c,
                l, c, c,
            ],
            algorithm: "R' F' L' F R F' L F",
        }
    ]

    return { algorithmData };
}
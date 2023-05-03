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
        }
    ]

    return { algorithmData };
}
export const useSidebarData = () => {
    const sidebarData = [
        {
            name: "Cubo 3 x 3",
            link: "/cube-three-by-three",
            articles: [
                {
                    name: "Notación de movimientos",
                    link: '/cube-three-by-three/movement-notation',
                    articles: null
                },
                {
                    name: "Métodos de resolución",
                    link: '/cube-three-by-three/resolution-methods',
                    articles: [
                        {
                            name: "Principiante",
                            link: '/cube-three-by-three/beginner',
                            articles: [
                                {
                                    name: 'Cruz',
                                    link: '/cube-three-by-three/beginner-cross',
                                    articles: null
                                },
                                {
                                    name: 'Esquinas inferiores',
                                    link: '/cube-three-by-three/bottom-corners',
                                    articles: null
                                },
                                {
                                    name: 'Segunda capa',
                                    link: '/cube-three-by-three/second-layer',
                                    articles: null
                                },
                                {
                                    name: 'Cruz superior',
                                    link: '/cube-three-by-three/upper-cross',
                                    articles: null
                                },
                                {
                                    name: 'Esquinas superiores',
                                    link: '/cube-three-by-three/top-corners',
                                    articles: null
                                },
                                {
                                    name: 'Orientación de esquinas',
                                    link: '/cube-three-by-three/corner-orientation',
                                    articles: null
                                },
                                {
                                    name: 'Permutación final de las esquinas',
                                    link: '/cube-three-by-three/final-permutation-of-the-corners',
                                    articles: null
                                },
                            ]
                        },
                        {
                            name: "Fridrich",
                            link: '/cube-three-by-three/fridrich',
                            articles: [
                                {
                                    name: 'Cross',
                                    link: '/cube-three-by-three/fridrich-cross',
                                    articles: null,
                                },
                                {
                                    name: 'F2L',
                                    link: '/cube-three-by-three/f2l',
                                    articles: null,
                                },
                                {
                                    name: 'PLL',
                                    link: '/cube-three-by-three/pll',
                                    articles: null,
                                },
                                {
                                    name: 'OLL',
                                    link: '/cube-three-by-three/oll',
                                    articles: null,
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ]

    return {
        sidebarData
    }
}
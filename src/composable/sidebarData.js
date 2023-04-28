export const useSidebarData = () => {
    const sidebarData = [
        {
            name: "Notación de movimientos",
            link: '/cube-three-by-three/movement-notation',
            articles: null
        },
        {
            name: "Método de resolución Fridrich",
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

    return {
        sidebarData
    }
}
export const PATHS = {
    HOME: '/',
    SIMULATION: '/hoc-120-cau-mo-phong',
    THEORY: '/hoc-600-cau-ly-thuyet',
    PROCESS: '/quy-trinh-hoc',
    B1: '/hoc-b1',
    B2: '/hoc-b2',
    C: '/hoc-c',
    UPGRADE: '/nang-dau',
}

export const routes = [
    {
        key: 'home-route',
        label: 'Trang chủ',
        url: PATHS.HOME
    }, {
        key: 'process-route',
        label: 'Quy trình học',
        url: PATHS.PROCESS
    }, {
        key: 'simulation-route',
        label: 'Học 120 câu mô phỏng',
        url: PATHS.SIMULATION
    }, {
        key: 'theory-route',
        label: 'Học 600 câu lý thuyết',
        url: PATHS.THEORY
    },
    // {
    //     key: 'b1-route',
    //     label: 'Bằng B1',
    //     url: PATHS.B1
    // }, {
    //     key: 'b2-route',
    //     label: 'Bằng B2',
    //     url: PATHS.B2
    // }, {
    //     key: 'c-route',
    //     label: 'Bằng C',
    //     url: PATHS.C
    // }, {
    //     key: 'upgrade-route',
    //     label: 'Nâng dấu',
    //     url: PATHS.UPGRADE
    // }
]

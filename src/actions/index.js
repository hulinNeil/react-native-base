export function add(num) {
    console.log('actions add', num)
    return {
        type: 'add',
        value: ++num
    }
}

export function cut(num) {
    return {
        type: 'cut',
        value: --num
    }
}

export function login(user) {
    console.log('点击登录')
    return {
        type: 'login',
        user: user
    }
}
export function logout() {
    console.log('点击退出')
    return {
        type: 'logout'
    }
}
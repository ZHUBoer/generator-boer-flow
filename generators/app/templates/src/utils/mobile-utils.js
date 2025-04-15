/**
* 移动端常见问题解决方案
*/

// 1. 解决iOS点击延迟
export function setupFastClick() {
    if ('addEventListener' in document) {
        document.addEventListener(
            'DOMContentLoaded',
            () => {
                FastClick.attach(document.body)
            },
            false
        )
    }
}

// 2. 解决1px边框问题
export function setupBorderScale() {
    if (window.devicePixelRatio && devicePixelRatio >= 2) {
        const meta = document.createElement('meta')
        meta.setAttribute('name', 'viewport')
        meta.setAttribute(
            'content',
            `width=device-width, initial-scale=${1 / devicePixelRatio}, maximum-scale=${1 / devicePixelRatio}, user-scalable=no`
        )
        document.head.appendChild(meta)
    }
}

// 3. 禁止长按弹出菜单
export function disableLongPress() {
    document.addEventListener('contextmenu', e => e.preventDefault())
}

// 4. 解决输入框被键盘遮挡问题
export function adjustInputPosition(inputEl) {
    inputEl.addEventListener('focus', () => {
        setTimeout(() => {
            inputEl.scrollIntoView({ block: 'center' })
        }, 300)
    })
}
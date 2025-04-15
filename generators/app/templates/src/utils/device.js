export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
}

export const getDevicePixelRatio = () => {
    return window.devicePixelRatio || 1
}
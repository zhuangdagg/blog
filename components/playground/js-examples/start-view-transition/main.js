function main() {
    console.log('view transition example:')

    const btn = document.querySelector('#theme-switch')

    btn.addEventListener('click', handleThemeChange)
}

main()

let inDark = false

function handleThemeChange() {
    const canStartViewTransition =
        document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)')?.matches

    if(!canStartViewTransition) {

        console.log('不会播放动效')
        return 
    }

    const transition = document.startViewTransition(() => {
        // todo: change theme
        console.log('切换主题')
        inDark = !inDark
        document.documentElement.className =  inDark ? 'dark' : ''
    })

    transition.ready.then(() => {
        const clipPath = [
            `circle(0 at 0% 0%)`,
            `circle(${Math.hypot(innerHeight, innerWidth)} at 0% 0%)`
        ]
        console.log({inDark})
        document.documentElement.animate({
            clipPath: !inDark ? [...clipPath].reverse() : clipPath
        }, {
            duration: 500,
            // delay: 100,
            // easing: 'easy-in',
            PresudoElement: '::view-transition-new(root)'
        })
    })
}
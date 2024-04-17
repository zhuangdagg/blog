import { readdirSync } from 'node:fs'

export const getPathName = (path = './') => {
    const fileNameList = readdirSync(path) 
    return fileNameList
}

export const getSidebarLinkList = (path = './') => {
    return getPathName(path)
    .filter(
        (item) => item !== 'index.md'
    )
    .map((item) => ({
        text: item.slice(0, -3),
        link: './' + item,
    }))
}
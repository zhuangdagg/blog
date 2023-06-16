import { readdirSync } from 'node:fs'

export const getPathName = (path = './') => {
    const fileNameList = readdirSync(path) 
    return fileNameList
}
import * as fs from 'fs'

export const appendFile = (filename: string, data: any) : Promise<any> => new Promise((resolve, reject) => {
    fs.appendFile(filename, data, { encoding: 'utf-8' }, (err) => {
        err ? reject(err) : resolve(data)
    })
})
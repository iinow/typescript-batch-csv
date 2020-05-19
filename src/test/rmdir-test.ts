import { rmdir } from '../fileApi/rmdir'

const deleteDatadir = async (dir: string) => {
    const result = await rmdir(dir)
    console.log(`${result} dir deleted`)
}

deleteDatadir('./data/today')
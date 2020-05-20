import { getFileNameAndNumber } from "./utils";
import { csvFileReaderGenerator } from "./fileApi/csvFileReaderGenerator";

// const [ filename, numberOfFakeData ] = getFileNameAndNumber('./data/fake', 1)
// const csvFilename = `${filename}-${numberOfFakeData}.csv`
// writeCsvFormatFakeData(csvFilename, numberOfFakeData)
//     .then(result => console.log(result))
//     .catch((e: Error) => console.log(e.message))

const [filename] = getFileNameAndNumber("./data/fake-100000.csv", 1);

let line = 1;
// @ts-ignore
for (let object of csvFileReaderGenerator(filename)) {
    console.log(`[${line++}] ${JSON.stringify(object)}`)
}

console.log('\n read complete.')

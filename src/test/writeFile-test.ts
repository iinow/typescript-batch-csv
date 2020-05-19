import * as path from "path";
import { writeFile } from "../fileApi/writeFile";
import { mkdir } from "../fileApi/mkdir";
// import mkdirp from "mkdirp";

const writeTest = async (filename: string, data: any) => {
  const result = await writeFile(filename, data);
  console.log(`write ${result} to ${filename}`);
};

mkdir("./data")
  .then(s => writeTest("./data/hello.txt", "hello world"))
  .then(s =>
    writeTest(
      "./data/test.json",
      JSON.stringify({ name: "Jack", age: 32 }, null, 2)
    )
  )
  .catch(e => console.log(e));

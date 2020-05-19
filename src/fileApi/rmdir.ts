import rimraf from "rimraf";
import { fileExists } from "./fileExists";

export const rmdir = (dirname: string): Promise<string> =>
  new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(dirname);
    !alreadyExists
      ? resolve(dirname)
      : rimraf(dirname, e => (e ? reject(e) : resolve(dirname)));
  });

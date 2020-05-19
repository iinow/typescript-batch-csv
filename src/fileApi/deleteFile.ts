import * as fs from "fs";
import { fileExists } from "./fileExists";

export const deleteFile = (filename: string): Promise<string> =>
  new Promise<string>(async (resolve, reject) => {
    const alreadyExists = await fileExists(filename);
    !alreadyExists
      ? resolve(filename)
      : fs.unlink(filename, error =>
          error ? reject(error) : resolve(filename)
        );
  });

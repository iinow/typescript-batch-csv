import * as fs from "fs";

export const readFile = (filename: string): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    fs.readFile(
      filename,
      {
        encoding: "utf-8"
      },
      (error, data: any) => {
        error ? reject(error) : resolve(data);
      }
    );
  });

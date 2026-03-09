import { Request, Response } from "express";  

export class ServerController {

  static async servercheck(req: Request, res: Response) {
    try {
      console.log("server is active and running");
      res.status(200).json({ status: "OK" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

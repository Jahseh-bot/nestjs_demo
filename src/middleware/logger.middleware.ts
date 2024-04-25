import { Request, Response, NextFunction } from "express"

export function logger(req: Request, res: Response, next: NextFunction): void {
  res
    .setHeader('cache-control', 'no-store')
    .setHeader('set-cookie', new Date().getTime())
    .contentType('application/json')
  next()
}
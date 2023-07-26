// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import express, { Application, NextFunction, Request, Response } from 'express'

const app: Application = express()
// eslint-disable-next-line @typescript-eslint/ban-types
const port: Number = 4000

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: '200' })
})

// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
app.listen(port, () => console.log(`Server is listening on port ${port}`))

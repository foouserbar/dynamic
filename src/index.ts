import express from 'express'

const app = express()

app.get('*', (req, res) => {
  const div = 1495
  const min = Math.ceil(10000 / div)
  const max = Math.floor(99999999 / div)

  const randomMultiplier = Math.floor(Math.random() * (max - min + 1)) + min
  const result = randomMultiplier * div

  res.type('text/plain').send(`Random value is ${result}`)
})

export default app

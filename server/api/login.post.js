import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { defineEventHandler, readBody } from 'h3'

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  const users = [
    { id: 1, email: 'test@example.com', password: await bcrypt.hash('123456', 10) }
  ]
  const user = users.find(u => u.email === email)
  if (!user) return { success: false, message: 'User not found' }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) return { success: false, message: 'Invalid credentials' }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' })

  return { success: true, token }
})

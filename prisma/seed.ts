import { PrismaClient, UserRole } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

// const seed = process.env.PRISMA_SEED as string
const seed = 'admin'

async function main() {
  const password = await hash(seed, 10)
  const user = await prisma.user.upsert({
    where: { email: 'EricCrow@pm.me' },
    update: {},
    create: {
      email: 'EricCrow@pm.me',
      username: 'admin',
      role: UserRole.ADMIN,
      password
    }
  })
  console.log({ user })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
module.exports = { createEntry }
import prisma from './listener'

async function createEntry(name: string, currentWeight: string, goalWeight: string, email: string, describeYourGoals: string) {
    const user = await prisma.user.create({ data: { name, currentWeight, goalWeight, email, describeYourGoals } })
}

async function deleteAll() {
    await prisma.user.deleteMany()
}

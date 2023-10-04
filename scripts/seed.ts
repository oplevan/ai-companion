const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: 'Doctors' },
        { name: 'Philosophers' },
        { name: 'Scientists' },
        { name: 'Painters' },
        { name: 'Musicians' },
        { name: 'Movie & TV stars' },
        { name: 'Other' },
      ],
    });
  } catch (error) {
    console.error('Error sending default categories:', error);
  } finally {
    await db.$disconnect();
  }
}
main();

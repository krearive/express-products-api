import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

const getHighOrderCustomers = async () => {
  return prisma.user.findMany({
    where: {
      orders: {
        some: {
          total: {
            gt: 1000000,
          },
        },
      },
    },
  });
};

const getAverageOrderCustomer = async () => {
  return prisma.order.groupBy({
    by: ['userId'],
    _avg: {
      total: true,
    },
  });
};

const updateOrderStatus = async () => {
  return prisma.order.updateMany({
    where: {
      total: {
        gt: 500000,
      },
    },
    data: {
      status: 'completed',
    },
  });
};

const disconnectPrisma = async () => {
  await prisma.$disconnect();
};

export {
  getHighOrderCustomers,
  getAverageOrderCustomer,
  updateOrderStatus,
  disconnectPrisma,
};
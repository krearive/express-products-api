import { getHighOrderCustomers, getAverageOrderCustomer, updateOrderStatus, disconnectPrisma } from '../services/prismaService.js';

const handlePrismaOperations = async (req, res) => {
  try {
    const highOrderCustomers = await getHighOrderCustomers();
    const averageOrderCustomer = await getAverageOrderCustomer();
    const updateStatus = await updateOrderStatus();

    res.json({
      message: 'Prisma connected successfully',
      highOrderCustomers,
      averageOrderCustomer,
      updateStatus,
    });
  } catch (error) {
    console.error('Error connecting to Prisma:', error);
    res.status(500).json({ error: 'Failed to connect to Prisma' });
  } finally {
    await disconnectPrisma();
  }
};

export { handlePrismaOperations };
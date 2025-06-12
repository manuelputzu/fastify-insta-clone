// src/modules/health/health.controller.ts

export const getHealth = () => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
  };
};

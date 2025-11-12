export const useMessages = () => {
  const createUUID = () => {
    return new Date().getTime();
  };

  return {
    createUUID,
  };
};

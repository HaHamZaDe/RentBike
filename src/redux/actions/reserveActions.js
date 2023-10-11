export const setReserve = (isReserved) => {
  return {
    type: "SET_RESERVE",
    payload: isReserved,
  };
};

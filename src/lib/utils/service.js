export const dispatchService = (
  service,
  callback = (_) => {},
  errCallback = (_) => {},
  always = () => {},
) => {
  let isSubscribed = true;
  service()
    .then((response) => {
      if (isSubscribed) callback(response.data, response.meta);
    })
    .catch((err) => {
      errCallback(err.data || err.message);
    })
    .finally(always);
  return () => {
    isSubscribed = false;
  };
};

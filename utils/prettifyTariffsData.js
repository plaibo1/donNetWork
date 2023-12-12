export const prettifyTariffsData = (tariff) => {
  const { tariffName, relationTo } = tariff;
  return relationTo.map(({ fields }) => {
    const {
      channelsCount,
      comboChannelsCount,
      comboInternetSpeed,
      comboPrice,
      internetSpeed,
      order,
      plusTv,
      price,
      title,
      tvUrl,
    } = fields;

    return {
      channelsCount,
      comboChannelsCount,
      comboInternetSpeed,
      comboPrice,
      internetSpeed,
      order,
      plusTv,
      price,
      title,
      tvUrl,
      tariffName,
    };
  });
};

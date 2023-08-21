export const heroContentId = "37gdnriE7RczvUjGWykoob";
export const NEWS_ENTRY = "donNetworkNews";
export const ADVANTAGES_ENTRY = "advantages";
export const TARIFFS_ENTRY = "tariffs";
export const getUserFromTariffHTMLString = (category, tariff, isCombo) => {
  return `<i>Тарифов на главной</i> </br> Категория: <span style='color: #3d4dff'>${category}</span>, Тариф: <span style='color: #3d4dff'>${tariff} ${
    isCombo ? "+ комбо" : "- без комбо"
  }</span>`;
};

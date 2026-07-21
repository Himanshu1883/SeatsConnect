export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(value: number) {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

export function calculateVIPMargins(baseTravel: number, premiumTicket: number) {
  const travel = Number(baseTravel) || 0;
  const ticket = Number(premiumTicket) || 0;

  const travelMarginAmount = Math.round(travel * 0.08);
  const ticketMarginAmount = Math.round(ticket * 0.12);
  const tradProfit = travelMarginAmount + ticketMarginAmount;
  const baseSum = travel + ticket;
  const seatsConnectProfit = Math.round(baseSum * 0.26);
  const totalVIPValue = baseSum + (seatsConnectProfit - tradProfit);
  const tradBarWidth = Math.max(
    10,
    Math.min(100, Math.round((tradProfit / seatsConnectProfit) * 75))
  );
  const profitMultiplier =
    tradProfit > 0 ? (seatsConnectProfit / tradProfit).toFixed(1) : "0.0";
  const tradMarginPercent =
    baseSum > 0 ? Math.round((tradProfit / baseSum) * 100) : 0;
  const vipMarginPercent = 26;

  return {
    travelMarginAmount,
    ticketMarginAmount,
    tradProfit,
    seatsConnectProfit,
    totalVIPValue,
    tradBarWidth,
    vipBarWidth: 100,
    profitMultiplier,
    tradMarginPercent,
    vipMarginPercent,
  };
}

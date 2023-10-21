// TODO: 役割の応じてファイルを分割する
// TODO: ValueObject, EntityにNominal型を使う
// TODO: amountが０以下として存在しないことを保証する場合は、validationしてassert or errorにする?
export type Invoice = {
  total: number;
}

export type CashPayment = {
  type: 'CASH';
  amount: number;
}
export type CouponPayment = {
  type: 'COUPON';
  percentage?: number;
  amount?: number;
}

export type Payment = CashPayment | CouponPayment;

export type Receipt = {
  total: number;
  deposit: number;
  change: number;
}

export const Receipt = {
  hasCash: (payments: Payment[]) => {
    return payments.some((payment) => payment.type === 'CASH');
  },
  getCouponDeposit: ({invoice, payment}: { invoice: Invoice; payment: CouponPayment }) => {
    const {amount = 0} = payment;
    const {total} = invoice;
    if (payment.percentage != null) {
      return Math.floor(total * (payment.percentage / 100));
    }
    return amount
  },
  getCashDeposit: ({payment}: { payment: CashPayment }) => {
    const {amount = 0} = payment;
    return amount;
  },
  charge: ({invoice, payments}: { invoice: Invoice; payments: Payment[] }): Receipt => {
    const {total: invoiceTotal} = invoice;
    const cashDeposit = payments
      .filter((payment): payment is CashPayment => payment.type === 'CASH')
      .reduce((acc, payment) =>
          acc + Receipt.getCashDeposit({payment: payment})
        , 0)
    const couponDeposit = payments
      .filter((payment): payment is CouponPayment => payment.type === 'COUPON')
      .reduce((acc, payment) =>
          acc + Receipt.getCouponDeposit({invoice, payment: payment})
        , 0)

    const deposit = cashDeposit + couponDeposit;
    if (couponDeposit >= invoiceTotal && cashDeposit > 0) {
      throw new Error('OverCharge');
    }
    if (invoiceTotal > deposit) {
      throw new Error('Shortage');
    }
    // 現金が含まれている場合はおつりを返す
    const change = Receipt.hasCash(payments) ? deposit - invoiceTotal : 0;
    return {total: invoiceTotal, deposit, change};
  },
};

export function charge(invoice: Invoice, payments: Payment[]) {
  return Receipt.charge({invoice, payments});
}

import Currency from './3-currency';

export default class Pricing {
  constructor (amount, currency) {
     if (typeof amount != 'number') {
       throw new TypeError('Amount must be a number');
     } else if (!(currency instanceof Currency)) {
       throw new TypeError('Currency must be an instance of class Currency');
     }
     this._amount = amount;
     this._currency = currency;
  }
  // Getter for amount
  get amount() {
    return this._amount;

  // Setter for amount
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  // Setter for currency
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }

    return amount * conversionRate;
  }
}

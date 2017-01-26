/**
 * Created by Viktor_Melnyk on 1/25/2017.
 */

class billingService {
  constructor(store) {
    this.store = store;
  }

  addBill(bill) {
    this.bills = this.getBills();
    this.bill = this.prepareBill(bill);
    this.bills.push(this.bill);
    this.updateBills();
  }


  getBills() {
    this.bills = this.store.get('bills');
    return this.prepareBills(this.bills);
  }

  prepareBill(bill) {
    bill.type = bill.type || 'incomes';
    bill.category = bill.category || 'other';
    bill.subCategory = bill.subCategory || 'other';
    bill.date = bill.date || new Date();
    return bill;
  }

  prepareBills(bills, toServer) {
    let prepareMethod = this.numberToDate;

    if (toServer) {
      prepareMethod = this.dateToNumber
    }

    return bills.forEach((bill) => {
      bill.date = prepareMethod(bill.date);
    });
  }

  dateToNumber(date) {
      return date.valueOf();
  }

  numberToDate(date) {
    return new Date(date);
  }

  updateBills() {
    this.prepareBills(this.bills, true);
    this.store.set('bills', this.bills);
  }
}

export default billingService;

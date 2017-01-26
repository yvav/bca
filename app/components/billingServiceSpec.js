import billingService from './billingService';

describe('billingService', () => {
  let sut;
  let store;
  let result;
  const bill = {
    type: 'incomes',
    sum: 123
  };
  const preparedBill = {
    type: 'incomes',
    category: 'other',
    subCategory: 'other',
    sum: 123,
    date: new Date()
  };
  let bills = [];

  beforeEach(() => {
    store = {
      get: jasmine.createSpy('get').and.returnValue(bills),
      set: jasmine.createSpy('set')
    };

  });

  beforeEach(() => {
    sut = new billingService(store);
    sut.prepareBill = jasmine.createSpy('prepareBill').and.returnValue(preparedBill);
  });

  describe('on add new bill', () => {
    beforeEach(() => {
      sut.getBills = jasmine.createSpy('getBills').and.returnValue(bills);
      sut.updateBills = jasmine.createSpy('sut.updateBills');
      sut.addBill(bill);
    });

    it('should get bills from store', () => {
      expect(sut.getBills).toHaveBeenCalled();
    });

    it('should prepare bill', () => {
      expect(sut.prepareBill).toHaveBeenCalled();
    });

    it('should add new bill', () => {
      expect(sut.bills.pop()).toEqual(preparedBill);
    });

    it('should update bills list', () => {
      expect(sut.updateBills).toHaveBeenCalled();
    });
  });

  describe('on get bills', () => {
    beforeEach(() => {
      sut.prepareBills = jasmine.createSpy('prepareBills');
      sut.getBills();
    });

    it('should get bills from store', () => {
      expect(store.get).toHaveBeenCalledWith('bills');
    });

    it('should prepare bills list', () => {
      expect(sut.prepareBills).toHaveBeenCalledWith(sut.bills);
    });
  });

  describe('on prepare bill', () => {
    beforeEach(() => {
      result = sut.prepareBill(bill);
    });

    it('should return prepared bill', () => {
      expect(result).toEqual(preparedBill);
    });
  });

  describe('on prepare list of bills', () => {
    beforeEach(() => {
      sut.dateToNumber = jasmine.createSpy('dateToNumber');
      result = sut.prepareBills(bills, true);
    });

    it('should convert dates to number', () => {
      expect(sut.dateToNumber).toHaveBeenCalled();
    });
  });

  describe('on update bills', () => {
    beforeEach(() => {
      sut.prepareBills = jasmine.createSpy('prepareBills');
      sut.updateBills();
    });

    it('should prepare bills list', () => {
      expect(sut.prepareBills).toHaveBeenCalledWith(sut.bills, true);
    });

    it('should store new list of bills', () => {
      expect(store.set).toHaveBeenCalledWith('bills', sut.bills);
    });
  });
});

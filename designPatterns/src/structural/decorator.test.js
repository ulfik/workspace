import decorator from './decorator';

const {CellPhone, SmartPhone} = decorator;
let cellPhone;
let smartPhone;

beforeEach(() => {
  cellPhone = new CellPhone();
  smartPhone = new SmartPhone(cellPhone);
});

test('smartphone should send sms', ()=>{
  const result = smartPhone.sendSMS("hello!");

  expect(result.sms).toBe("hello!");
});

test('smartphone should call', ()=>{
  const result = smartPhone.call();

  expect(result).toBe('halo haloo!');
});

test('smartphone should browse internet', ()=>{
  const result = smartPhone.browseInternet();

  expect(result).toBe('wwww.google.com');
});
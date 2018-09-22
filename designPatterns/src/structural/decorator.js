class CellPhone {
  call(){
    return 'halo haloo!';
  }
  sendSMS(msg){
    return {
      sms: msg
    };
  }
};

class SmartPhone {
  constructor(cellPhone){
    this.cellPhone = cellPhone;
  }
  browseInternet(){
    return 'wwww.google.com';
  }
  call(){
    return this.cellPhone.call();
  }
  sendSMS(msg){
    return this.cellPhone.sendSMS(msg);
  }
};

export default {CellPhone, SmartPhone};
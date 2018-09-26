export class NutVal {
  val: number;
  unit: string;

  constructor(val: number, unit: string) {
    this.val = val;
    this.unit = unit;
  }
}

export class NutdataModel {
  ndbNo: string;
  protein: NutVal;
  calcium: NutVal;
  magnesium: NutVal;
  phosphorus: NutVal;
  potassium: NutVal;

  constructor(jsonDataArr: {[key: string]: string}[]) {
    this.ndbNo = jsonDataArr[0].ndb_no;
    let jsonData: {[key: string]: string};
    let nutVal: NutVal;

    for (let idx = 0; idx < jsonDataArr.length; idx++) {
      jsonData = jsonDataArr[idx];
      nutVal = new NutVal(Number(jsonData.nutr_val), jsonData.units);

      switch (jsonData.nutr_no) {
        case '203':
          this.protein = nutVal;
          break;
        case '301':
          this.calcium = nutVal;
          break;
        case '304':
          this.magnesium = nutVal;
          break;
        case '305':
          this.phosphorus = nutVal;
          break;
        case '306':
          this.potassium = nutVal;
          break;
        default:
      }
    }
  }

}

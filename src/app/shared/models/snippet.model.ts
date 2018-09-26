export class SnippetModel {
  fdgrpCd: string;
  fdgrpDesc: string;
  longDesc: string;
  ndbNo: string;

  constructor(jsonData: {[key: string]: string}) {
    this.fdgrpCd = jsonData.fdgrp_cd;
    this.fdgrpDesc = jsonData.fdgrp_desc;
    this.longDesc = jsonData.long_desc;
    this.ndbNo = jsonData.ndb_no;
  }
}

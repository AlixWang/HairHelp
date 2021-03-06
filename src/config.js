export const config = [
  {
    title: "抢派单日清报表-（工贸-网格-服务商）",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    // industryCodes: "ZHL,XYJ,XWJ,DR,CD,KT",
    industryCodes: "JS,XYJ,ZHL,XWJ,DR,CD,KT,SHJD,ZNHL,SYKT,AF,YT",
    regionCodes: "HR11",
    filed: [
      "woSum",
      "yingGrabNum",
      "grabPushPersonNum",
      "grabPushPerson_rate",
      "noPushPersonNum",
      "noPushPerson_rate",
      "undefined",
      "undefined",
    ],
    wanggeCodes: "",
    serviceCodes: "",
    ids: "",
    url:
      "http://10.133.0.119:8099/reportWoqiangRegIndSerFwbNewController.do?exportXlsRegWgeSer2&",
  },
  {
    title: "抢派单日清报表-（工贸-产业-服务商）",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    industryCodes: "",
    regionCodes: "HR11",
    filed: [
      "woSum",
      "yingGrabNum",
      "grabPushPersonNum",
      "grabPushPerson_rate",
      "noPushPersonNum",
      "noPushPerson_rate",
      "undefined",
      "undefined",
    ],
    wanggeCodes: "",
    serviceCodes: "",
    ids: "",
    url:
      "http://10.133.0.119:8099/reportWoqiangRegIndSerFwbNewController.do?exportXlsRegAndInd&",
  },
  {
    title: "在线支付分析--产业",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    industryCodes: "",
    regionCodes: "HR11",
    filed: ["undefined", "undefined", "undefined", "undefined"],
    wanggeCodes: "",
    serviceCodes: "",
    ids: "",
    url:
      "http://10.133.0.119:8099/reportZhifuController.do?exportXlsRegIndSer2New&",
  },
  {
    title: "在线支付分析--网格",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    industryCodes: "",
    regionCodes: "HR11",
    filed: ["undefined", "undefined", "undefined", "undefined"],
    wanggeCodes: "",
    serviceCodes: "",
    ids: "",
    url:
      "http://10.133.0.119:8099/reportZhifuController.do?exportXlsRegWgeSer2New&",
  },
  {
    title: "照片距离分析--网格",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    industryCodes: "ZHL,XYJ,XWJ,DR,CD,KT",
    regionCodes: "HR11",
    filed: [
      "woSum",
      "photoSum",
      "coordinateEmpty",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
    ],
    wanggeCodes: "",
    serviceCodes: "",
    ids: "",
    url:
      "http://10.133.0.119:8099/reportPhotoDistanceController.do?exportXlsRegWgeSer2New&",
  },
  {
    title: "照片距离分析--产业",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    industryCodes: "ZHL,XYJ,XWJ,DR,CD,KT",
    regionCodes: "HR11",
    filed: [
      "woSum",
      "photoSum",
      "coordinateEmpty",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
    ],
    wanggeCodes: "",
    serviceCodes: "",
    ids: "",
    url:
      "http://10.133.0.119:8099/reportPhotoDistanceController.do?exportXlsRegIndSer2New&",
  },
  {
    title: "签到异常分析--网格",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    industryCodes: "ZHL,XYJ,XWJ,DR,CD,KT",
    regionCodes: "HR11",
    filed: [
      "woSum",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
    ],
    wanggeCodes: "",
    serviceCodes: "",
    ids: "",
    isGrid: "",
    url:
      "http://10.133.0.119:8099/reportSignRegIndQuySerNewController.do?exportXlsRegWgeSer2New&",
  },
  {
    title: "签到异常分析--产业",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    industryCodes: "ZHL,XYJ,XWJ,DR,CD,KT",
    regionCodes: "HR11",
    filed: [
      "woSum",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
      "undefined",
    ],
    wanggeCodes: "",
    serviceCodes: "",
    ids: "",
    isGrid: "",
    url:
      "http://10.133.0.119:8099/reportSignRegIndQuySerNewController.do?exportXlsRegIndSer2New&",
  },{
    title: "工单人力调配--产业",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    //industryCodes: "ZHL,XYJ,XWJ,DR,CD,KT",
    //regionCodes: "HR11",
    filed: ['regionName','industryName','woSum','yingGrabNum','undefined','undefined','undefined' ],
    ids: "",
    url:
      "http://10.133.0.119:8099/reportDeployRegIndWgeSerNewController.do?exportXlsRegIndSer2New&",
  },{
    title: "工单人力调配--网格",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    //industryCodes: "ZHL,XYJ,XWJ,DR,CD,KT",
    //regionCodes: "HR11",
    filed: ['regionName','wanggeName','woSum','yingGrabNum','undefined','undefined','undefined'],
    ids: "",
    url:
      "http://10.133.0.119:8099/reportDeployRegIndWgeSerNewController.do?exportXlsRegWgeSer2New&",
  }
];

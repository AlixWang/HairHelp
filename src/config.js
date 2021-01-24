export const  config = [
  {
    title: "抢派单日清报表-（工贸-网格-服务商）",
    createTime_begin: "2021-01-01",
    createTime_end: "2021-01-23",
    regionName: "南京市场服务小微",
    industryCodes: "ZHL,XYJ,XWJ,DR,CD,KT",
    regionCodes: "HR11",
    filed: ["woSum", "yingGrabNum", "grabPushPersonNum", "grabPushPerson_rate", "noPushPersonNum", "noPushPerson_rate" ,"undefined", "undefined",],
    sort: "wanggeCode",
    order: "asc",
    url: "http://10.133.0.119:8099/reportWoqiangRegIndSerFwbNewController.do?exportXlsRegWgeSer2&"
  }
];

// &field=woSum,
// yingGrabNum,
// grabPushPersonNum,
// grabPushPerson_rate,
// noPushPersonNum,
// noPushPerson_rate
// ,undefined,
// undefined,
// &&createTime_begin=2021-01-01
// &createTime_end=2021-01-23
// &regionName=%E5%8D%97%E4%BA%AC%E5%B8%82%E5%9C%BA%E6%9C%8D%E5%8A%A1%E5%B0%8F%E5%BE%AE
// &industryCodes=ZHL,XYJ,XWJ,DR,CD,KT
// &regionCodes=HR11
// &wanggeCodes=
// &serviceCodes=
// &ids=

http://10.133.0.119:8099/reportWoqiangRegIndSerFwbNewController.do?exportXlsRegWgeSer2&createTime_begin=2021-01-01&createTime_end=2021-01-23&industryCodes=ZHL,XYJ,XWJ,DR,CD,KT&regionCodes=HR11&filed=woSum,yingGrabNum,grabPushPersonNum,grabPushPerson_rate,noPushPersonNum,noPushPerson_rate,undefined,undefined&sort=wanggeCode&order=asc&
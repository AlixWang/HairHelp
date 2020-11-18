const axios  = require ('axios')
const moment = require('moment')
const fs = require('fs')
const path = require('path')
const baseUrl = "http://hcc.haier.net/ordinaryPath/ordinaryTool/exportHsicrmWorkorderPage"
const configFile = path.resolve(__dirname, './config.json')



const readConfigFile = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(configFile,(err,data) => {
      if(!err) {
        resolve(JSON.parse(data))
      } else {
        reject({})
      }
    })
 })
}

const parseConfigFile =  (config) => {
  const { queryEndDate, queryStartDate } = config
  let dates = [] 
  
  function pushDate(startDate,endDate) {
    if(moment(startDate).add(6,'days').isBefore(endDate)) {
      const startDateTwo =  moment(startDate).add(6,'days').format('YYYY-MM-DD')
      dates.push({
        queryStartDate:startDate + '%2000:00:00', 
        queryEndDate: startDateTwo + '%2023:59:59'
      })
      pushDate(moment(startDateTwo).add(1,'days').format('YYYY-MM-DD'), endDate);
    } else {
      dates.push({
        queryStartDate:startDate + '%2000:00:00',
        queryEndDate:endDate + '%2023:59:59'
      })
      return
    }
  }
  pushDate(queryStartDate, queryEndDate);
  return dates
}

const generateUrls  = (config, dates)  => {
  let urls = []
  const { otherQueryParams } = config
  dates.forEach(item => {
    const { queryStartDate, queryEndDate } = item
    let url = ''
    let params = ''
    url += baseUrl;
    url += `?queryStartDate=${queryStartDate}&queryEndDate=${queryEndDate}&`
    
    Object.keys(otherQueryParams).forEach(item => {
      params+=`${item}=${otherQueryParams[item]}&`
    })
    url += params
    urls.push(url)
  })
  return urls;
}

const generateQueryPromise = (urls) => {
  const arr = []
  urls.forEach(url => {
    arr.push(axios.get(url,{
      responseType: 'blob',
      headers:{
        Cookie: "cid=Cp+u0lzRdqspkq5SBtcvAg==; gr_user_id=0de75465-20b9-4f5d-b39e-8ac4e97e5a78; xn_dvid_kf_10008=3C8697-9EA18CCD-5142-8411-53A2-D2B8CA28A8C8; cookiesession1=07B8C0A98CIXIMKNNXN6HKV8SGYUC843; xn_sid_kf_10008=1582101607867698; Uid=19010444; SESSION=a3a50a6b-c4e9-4cce-bee6-eb1847cdb920; _pk_id.101.8fd9=76e3211bc3c2b119.1568790800.139.1582295329.1582292973."
    }}))
  })
  return arr
}

const main = async () => {
  const config = await readConfigFile()
  const dates =  parseConfigFile(config)
  const urls = generateUrls(config,dates)
  const reqsList = generateQueryPromise(urls)
//console.log(urls)
  
/*Promise.all(reqsList).then((res) => {
    res.forEach((res,index) => {
      fs.writeFile(path.resolve(__dirname,`${index}.xls`), res, (err) => {
        if(!err) {
          
        }
      })   
    })
})*/

  //console.log(urls)
  return urls
}
module.exports = main

//main()




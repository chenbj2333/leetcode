// import moment from 'moment'
var moment = require('moment')
var _ = require('lodash')

let transactions = [
  { timestamp: 1519864292535, category: '餐饮', price: 6.00 },
  { timestamp: 1519899849526, category: '餐饮', price: 12.00 },
  { timestamp: 1519953249020, category: '餐饮', price: 52.50 },
  { timestamp: 1519963102270, category: '餐饮', price: 4.50 },
  { timestamp: 1519999849526, category: '餐饮', price: 13.50 },
  { timestamp: 1519874872261, category: '餐饮', price: 104.25 },
  { timestamp: 1519764292543, category: '餐饮', price: 6.00 },
  { timestamp: 1519664292535, category: '餐饮', price: 6.00 },
  { timestamp: 1519564292595, category: '餐饮', price: 6.00 }
]

// // 按天分组
// const transactionsGroupedByDate = _.groupBy(transactions, (transaction) => {
//   return moment(transaction.timestamp).format('YYYY-MM-DD')
// })
// console.info(transactionsGroupedByDate)

// // 按星期分组
// const transactionsGroupedByWeek = _.groupBy(transactions, (transaction) => {
//   return moment(transaction.timestamp).format('YYYY-WW')
// })
// console.info(transactionsGroupedByWeek)

// // 按月分组
// const transactionsGroupedByMonth = _.groupBy(transactions, (transaction) => {
//   return moment(transaction.timestamp).format('YYYY-MM')
// })
// console.info(transactionsGroupedByMonth)

// // 按年分组
// const transactionsGroupedByYear = _.groupBy(transactions, (transaction) => {
//   return moment(transaction.timestamp).format('YYYY')
// })
// console.info(transactionsGroupedByYear)

// 封装成函数
function createTimeSeries (timeSeriesArray) {
  const timeSeriesObj = {
    array: timeSeriesArray.map(item => moment(item.timestamp)),

    groupByFormat (formatPattern) {
      return _.groupBy(timeSeriesObj.array, (item) => {
        return item.format(formatPattern)
      })
    },

    groupedByDate () {
      const groupedResult = {
        map: timeSeriesObj.groupByFormat('YYYY-MM-DD'),
        dates () {
          return _.keys(groupedResult.map)
        },
        sum (date) {
          return _.sumBy(groupedResult.map[date], 'price')
        }
      }
      return groupedResult
    },

    groupedByWeek () {
      return timeSeriesObj.groupByFormat('YYYY-WW')
    },

    groupedByMonth () {
      return timeSeriesObj.groupByFormat('YYYY-MM')
    },

    groupedByYear () {
      return timeSeriesObj.groupByFormat('YYYY')
    }
  }
  return timeSeriesObj
}

console.log(createTimeSeries(transactions).groupedByDate())
console.log(createTimeSeries(transactions).groupedByWeek())
console.log(createTimeSeries(transactions).groupedByMonth())
console.log(createTimeSeries(transactions).groupedByYear())

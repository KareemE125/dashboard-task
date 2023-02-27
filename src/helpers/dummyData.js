const barChartData = [];
const categories = []
for (let i = 1; i <= 31; i++) {
    barChartData.push(parseInt(Math.random() * 90) + 1)
    categories.push(i)

}

const areaData1 = [5, 4, 3, 4, 3, 5, 1, 4, 3]
const areaData2 = [1, 4, 2, 5, 3, 5, 2, 4, 1]
const areaData3 = [5, 4, 2, 1, 3, 4, 2, 4, 3]
const areaData4 = [2, 5, 5, 1, 3, 4, 2, 4, 5]
const lables = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const tableOneData = [
    {
        pageName: '/store/',
        visitors: '4,890',
        upv: '3,985',
        rate: '81.56%'
    },
    {
        pageName: '/store/symbols',
        visitors: '3,785',
        upv: '3,182',
        rate: '62.56%'
    },
    {
        pageName: '/store/dashboard',
        visitors: '2,985',
        upv: '2,115',
        rate: '58.76%'
    },
    {
        pageName: '/store/webflows-card',
        visitors: '2,440',
        upv: '1,789',
        rate: '39.59%'
    },
]

const tableTwoData = [
    {
        network: 'Instgram',
        visitors: '3,550',
        progress: '80'
    },
    {
        network: 'Facebook',
        visitors: '2,236',
        progress: '50'
    },
    {
        network: 'Twitter',
        visitors: '1,795',
        progress: '40'
    },
    {
        network: 'LinkedIn',
        visitors: '62',
        progress: '5'
    },
]

export {
    barChartData,
    categories,
    areaData1,
    areaData2,
    areaData3,
    areaData4,
    lables,
    tableOneData,
    tableTwoData
};
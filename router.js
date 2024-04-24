const Router = require('@koa/router')
const db = require('./db')
const router = new Router()

router.get('/', async ctx => {
  ctx.body = '这是首页'
})
router.get('/list', async ctx => {
  ctx.body = '这是列表'
})
router.get('/add', async ctx => {
  const collection = db.collection('students')

  const info = await collection.insertOne({ name: 'zs', age: 20 })
  console.log(info)

  collection.find().forEach(item => {
    console.log(item)
  })

  ctx.body = '操作完成'
})

module.exports = router
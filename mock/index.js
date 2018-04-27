const jsonServer = require('json-server')
const server = jsonServer.create()
const data = require('./db')
const fs = require("fs");
const apiData = fs.readdirSync(__dirname);
// const path = require('path')
// path.join(__dirname, 'db.json')
const router = jsonServer.router(data(), {
  foreignKeySuffix: ''
})
const middlewares = jsonServer.defaults()

function resData (data = {}, code = 200, msg = '') {
  return {
    code,
    data,
    msg
  }
}

// Custom output
router.render = (req, res) => {
  res.jsonp(resData(res.locals.data, res.statusCode))
}

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  // if (req.method === 'POST') {
  //   req.body.createdAt = Date.now()
  // }
  next()
})

let session

server.get('/api/user', (req, res) => {
  if (session) {
    res.jsonp(resData(session, 200))
  } else {
    res.jsonp(resData(undefined, 403, '未登录'))
  }
})

server.post('/api/login', (req, res) => {
  let body = req.body
  let code = 302
  let data = {}
  let msg = '密码错误'
  console.log(body);
  if (body.username === 'admin' && body.password === 'admin') {
    msg = ''
    code = 200
    data = req.body
    data.id = 1
    data.name = data.username
    delete data.password
    session = data
  }
  res.jsonp(resData(data, code, msg))
})

server.get('/api/logout', (req, res) => {
  session = null
  res.jsonp(resData({}, 200, '注销成功'))
})

//add api
for (let apiFile of apiData) {
  if (apiFile.indexOf("api.js") > 0) {
    const api = require(`${__dirname}/${apiFile}`);
    for (let apiRouter in api) {
      for (let method in api[apiRouter]) {
        server[method](apiRouter, api[apiRouter][method]);        
      }
    }    
  }
}

// Use default router
server.use('/api', router)
const port = 9999
server.listen(port, () => {
  console.log('JSON Server is running, port: ' + port)
})

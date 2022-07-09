



module.exports.handler = function(req, resp, context) {
    resp.setHeader('content-type', 'application/json')
    var uri = (req.url).split('/')
    const routT = uri[uri.length -2]
    const route = uri[uri.length -1]
    console.log(uri)
    let items = ['a', 'b']
    
    //endpoint: list all items
    if (req.method == 'GET') {
        if (route == 'list') {
            resp.send(JSON.stringify({'code': 200, 'body': items}))
        } else {
            resp.send(JSON.stringify({'code': 400}))
        }

    //endpoint: add item
    } else if (req.method == 'POST') {
        items.push(route)
        console.log(items)
        resp.send(JSON.stringify({'code': 200, items}))
    }
    //endpoint: delete item
    else if (req.method == 'DELETE') {
        resp.send(JSON.stringify({'code': 200, 'body': 'This is a GET request'}))
    }
    else {
        resp.send(JSON.stringify({'code': 200, 'body': 'This is a GET request'}))
    }


/*     if(uri.length == 0) {
     resp.send(JSON.stringify({'code': 400, 'body': 'Bad Request'}, null, ''))
    } else {
     var route = uri[uri.length-1]
     console.log(route)
     switch(req.method) {
     case 'GET':
     resp.send(JSON.stringify({'code': 200, 'body': 'This is a GET request'}, ${items}))
     break0
    //  case 'POST':
    //  resp.send(JSON.stringify({'code': 200, 'body': 'This is a POST request'}))
     
    }
    } */
    }

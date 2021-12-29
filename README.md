# Go Gin Web Server

This repo can be used as a starting point to deploy [Go](https://golang.org/) web applications on Render.

It is based on the [realtime chat](https://github.com/gin-gonic/examples/tree/master/realtime-advanced) example powered by the [Gin](https://github.com/gin-gonic/gin) web framework.

The sample app is up at https://go-gin.onrender.com.

## Deployment

See the guide at https://render.com/docs/deploy-go-gin.


Build Command	go build -tags netgo -ldflags '-s -w' -o app
Start Command	./app

Pressure Testing(By k6)
k6 run test.js
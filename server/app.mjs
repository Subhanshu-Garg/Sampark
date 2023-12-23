// NOTE: Prioritzed Imports
import './loadEnv.mjs'
import './polyfill/nodeEnv.js'
import './polyfill/apiLogger.js'
import '@am92/api-logger/polyfillConsole'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { configureApp } from '@am92/express-utils'

import startServer from './startServer.mjs'
import Routes from './api/routes/index.mjs'
import SERVER_CONFIG from './config/SERVER_CONFIG.mjs'

import "./api/helpers/passport.mjs"
import passport from 'passport'
import { errorMiddleware } from './api/helpers/middlewares/errorMiddleware.mjs'

const { BODY_LIMIT, CORS_OPTIONS } = SERVER_CONFIG
const app = express()

app.use(cors(CORS_OPTIONS))
app.use(express.json({ limit: BODY_LIMIT }))
app.use(express.urlencoded({ limit: BODY_LIMIT, extended: true }))
app.use(helmet())

//passport is initialized
app.use(passport.initialize())

// Initialize Routes
// configureApp(app, Routes)
Routes.forEach((route) => {
  app.use('/api/v1'+ route.path, route.router);
})

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "This route doesn't exist."
  })
})

app.use(errorMiddleware);
// Start Server
await startServer(app)

// For testing
export default app

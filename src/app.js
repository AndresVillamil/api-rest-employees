import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'




const app = express()

//Interpreta los datos que vienen del FrontEnd
app.use(express.json())


app.use(indexRoutes)
app.use('/api',employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' })
})


export default app

const express = require("express")
const app = express()

const PORT = 4000
process.env.PORT

app.get('/', (req = Request,res = Response) => {
    res.status(200)
    res.send("HELLO WORLD!!!")
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
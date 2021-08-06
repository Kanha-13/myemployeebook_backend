const app = require("express")()
const PORT = process.env.PORT || 1312
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
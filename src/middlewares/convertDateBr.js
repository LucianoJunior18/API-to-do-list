const dayjs = require("dayjs")
const customParseFormat = require("dayjs/plugin/customParseFormat")
dayjs.extend(customParseFormat)

module.exports = (req, res, next) => {
    if(req.body.dueDate) {
        const data = dayjs(req.body.dueDate, "DD/MM/YYYY", true)
        if(!data.isValid()) {
            return res.status(400).json({ mensagem: "Data inválida" })
        }

        req.body.dueDate = data.toDate()
    }
    next()
}

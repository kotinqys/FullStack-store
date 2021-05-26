const { Device,DeviceInfo } = require('../models/models')
const path = require('path')
const uuid = require('uuid')

class DeviceController{
    async getAll(req, res) {
        let { page, limit } = req.query
        page = page || 1
        limit = limit || 4
        let offset = page*limit - limit
        const devices = await Device.findAndCountAll({limit,offset})
        res.json(devices)
    }
    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne({ where: { id }, include: [{ model: DeviceInfo, as: 'info'}] })
        res.json(device)
    }
    async create(req,res) {
        try {
            const { name, price, info } = req.body
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        descripton: i.descripton,
                        deviceId: device.id
                    })
                })
            }
            const {img}  = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname,'..','static',fileName))
            const device = await Device.create({ name, price, img: fileName })
            return res.json(device)
        } catch (e) {
            console.log(e);
        }
    }
    async delete(req, res) {
        const { id } = req.params
        const device = await Device.destroy({ where: { id } })
        return res.json(device)
    }
}

module.exports = new DeviceController()
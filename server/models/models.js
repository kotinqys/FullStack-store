const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Device = sequelize.define('device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: {type: DataTypes.STRING,allowNull:false}
})

const DeviceInfo = sequelize.define('device_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    descripton: { type: DataTypes.STRING, allowNull: false}
})

Device.hasMany(DeviceInfo,{as: 'info'})
DeviceInfo.belongsTo(Device)

module.exports = {
    Device,
    DeviceInfo
}
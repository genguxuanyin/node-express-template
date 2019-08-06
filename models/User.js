import sequelize from '../db/connect'
import Sequelize from 'sequelize'
import moment from 'moment'

const User = sequelize.define('t_user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nickName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sex: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    birthday: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('birthday')).format('YYYY-MM-DD');
        },
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cardNum: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address:{
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    identity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
        }
    },
    updatedAt: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
        }
    },
    status: {
        type: Sequelize.INTEGER
    }
});

export default User;
const {User} = require('./User')
const {Board} = require('./Board')
const {Cheese} = require('./Cheese')

User.hasMany(Board);
Board.belongsToMany(Cheese, {through: 'cheese_board', as: 'cheeses'});
Cheese.belongsToMany(Board, {through: 'cheese_board', as: 'board'});

module.exports = {
    User,
    Board,
    Cheese
}
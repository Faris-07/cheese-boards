const { sequelize } = require("../db")
const { User, Board, Cheese } = require("../models/index")

describe("Database tests:", () => {
    beforeEach(async () => {
        await sequelize.sync({force: true})
    })

    test("Test to create a user", async () => {

        const user = await User.create({
            name: "James",
            email: "james@email.com"
        })

        expect(user).toBeInstanceOf(User);
        expect(user.name).toBe("James");
        expect(user.email).toBe("james@email.com");
        expect(user.id).toBe(1);
    })

    test("Test to create a board", async () => {

        const board = await Board.create({
            type: "Soft Cheese Board",
            description: "A selection of soft cheese",
            rating: 4
        })

        expect(board).toBeInstanceOf(Board);
        expect(board.type).toBe("Soft Cheese Board");
        expect(board.description).toBe("A selection of soft cheese");
        expect(board.rating).toBe(4);
        expect(board.id).toBe(1);
    })

    test("Test to create a cheese", async () => {

        const cheese = await Cheese.create({
            title: "Feta",
            description: "A soft crumbly cheese"
        })

        expect(cheese).toBeInstanceOf(Cheese);
        expect(cheese.title).toBe("Feta");
        expect(cheese.description).toBe("A soft crumbly cheese");
        expect(cheese.id).toBe(1);
    })

    test("Test to create a user with a board", async () => {

        const user = await User.create({
            name: "Gale",
            email: "gale@email.com"
        })

        const board = await Board.create({
            type: "The English Cheesefast",
            description: "A selection of british cheese",
            rating: 5
        })
        
        expect(userBoards[0]).toBeInstanceOf(Board);
        expect(userBoards[0].type).toBe("The English Cheesefast");
        expect(userBoards[0].description).toBe("A selection of british cheese");
        expect(userBoards[0].rating).toBe(5);
        expect(userBoards[0].id).toBe(1);
    })

    test("Test to create a board with a cheese", async () => {

        const board = await Board.create({
            type: "The Mold Brothers",
            description: "A selection of moldy cheese",
            rating: 3
        })

        const cheese = await Cheese.create({
            title: "Blue Cheese",
            description: "A moldy soft cheese"
        })

        expect(boardCheeses[0]).toBeInstanceOf(Cheese);
        expect(boardCheeses[0].title).toBe("Blue Cheese");
        expect(boardCheeses[0].description).toBe("A moldy soft cheese");
        expect(boardCheeses[0].id).toBe(1);
    })
})
const { sequelize } = require("../db")
const { User, Board, Cheese } = require("../models/index")

describe("Database tests:", () => {

    beforeAll(async () => {
        // will run before any test
        await sequelize.sync({ force: true });
    });
    
    beforeEach(async () => {
        // will run before each test
        await sequelize.sync({ force: true });
    });
    
    afterEach(async () => {
        // will run after each test
        await User.sync({ force: true });
        await Board.sync({ force: true });
        await Cheese.sync({ force: true });
    });
    
    afterAll(async () => {
        // will run before any test
        await sequelize.drop()
    });

    
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

    test("Test to create a user with a cheese board and a cheese", async () => {

        const user = await User.create({
            name: "Gale",
            email: "gale@email.com"
        })

        const board = await Board.create({
            type: "The English Cheesefast",
            description: "A selection of british cheese",
            rating: 5
        })

        const cheese = await Cheese.create({
            title: "Cheddar",
            description: "A hard mild cheese"
        })

        await user.addBoard(board)
        await board.addCheese(cheese)

        const userBoards = await user.getBoards()

        expect(userBoards[0].id).toBe(1);
        expect(userBoards[0]).toBeInstanceOf(Board);
        expect(userBoards[0].type).toBe("The English Cheesefast");
        expect(userBoards[0].description).toBe("A selection of british cheese");
        expect(userBoards[0].rating).toBe(5);
        
        const boardCheeses = await userBoards[0].getCheeses()

        expect(boardCheeses[0].id).toBe(1);
        expect(boardCheeses[0]).toBeInstanceOf(Cheese);
        expect(boardCheeses[0].title).toBe("Cheddar");
        expect(boardCheeses[0].description).toBe("A hard mild cheese");
        })
});
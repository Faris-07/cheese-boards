const { sequelize } = require("../db")
const { User, Board, Cheese } = require("../models/index")

describe("Database tests:", () => {
    beforeEach(async () => {
        await sequelize.sync({force: true})
    })

    it("Test to create a user", async () => {
        const user = await User.create({
            name: "James",
            email: "james@email.com"
        })
        expect(user).toBeInstanceOf(User);
        expect(user.name).toBe("James");
        expect(user.email).toBe("james@email.com");
        expect(user.id).toBe(1);
    })

    it("Test to create a board", async () => {
        const board = await Board.create({
            type: "Soft",
            description: "A soft cheese",
            rating: 4
        })
        expect(board).toBeInstanceOf(Board);
        expect(board.type).toBe("Soft");
        expect(board.description).toBe("A soft cheese");
        expect(board.rating).toBe(4);
        expect(board.id).toBe(1);
    })

    it("Test to create a cheese", async () => {
        const cheese = await Cheese.create({
            title: "Feta",
            description: "A soft crumbly cheese"
        })
        expect(cheese).toBeInstanceOf(Cheese);
        expect(cheese.title).toBe("Feta");
        expect(cheese.description).toBe("A soft crumbly cheese");
        expect(cheese.id).toBe(1);
    })
})
const User = require("./../../app/models/User")

describe("Preba de User", () => {
    test("Creación de User", () => {
        const user = new User(1,"IkerMarcor","Iker","Bio","dateCreated","lastUpdate")
        expect(user.id).toBe(1)
        expect(user.username).toBe("IkerMarcor")

    })
})
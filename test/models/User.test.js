const User = require("./../../app/models/User")

describe("Preba de User", () => {
    test("Requerimiento 1: Creación de User", () => {
        const user = new User(1,"IkerMarcor","Iker","Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("IkerMarcor")

    })

    test("Requerimiento 2: Fechas en atributos de User", ()=>{
        const user = new User(1,"IkerMarcor","Iker","Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test("Requerimiento 3: Agregando getters", ()=>{
        const user = new User(1,"IkerMarcor","Iker","Bio")
        expect(user.getUsername).toBe("IkerMarcor")
        expect(user.getBio).toBe("Bio")
    })
})
import { timesTwo, order } from "./function"

it("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
})

const menuItems = [
    {
        id: "1",
        name: "test1",
        price: 10.5
    },
    {
        id: "2",
        name: "test2",
        price: 22.5
    },
    {
        id: "3",
        name: "test3",
        price: 10
    }
]


test("Build an order object", () => {
    const result = {
        orderItems: menuItems,
        total: 43
    }
    expect(order(menuItems).total).toEqual(result.total)
})
let teller = 10
while (teller >= 0) {
    basic.showNumber(teller)
    game.addScore(0)
    basic.pause(100)
    teller += -1
}
for (let index = 0; index < 10; index++) {
    game.addScore(0)
    basic.pause(100)
}

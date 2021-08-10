new Vue({
  el: '#desafio',
  data: {
    player: {
      name: 'Jogador',
      hp: 100,
      attack: 0,
      cure: 0,
    },
    monster: {
      name: 'Monstro',
      hp: 100,
      attack: 0
    },
    startGame: false,
    logBattle: [],
    logMessage: {
      message: '',
      player: ''
    },
    winLoss: false,
    messageWinLoss: ''
  },
  computed: {

  },
  methods: {
    baseAttack(max, min) {
      return parseInt(Math.random() * (max - min) + min)
    },
    baseCure(max, min) {
      return parseInt(Math.random() * (max - min) + min)
    },
    attack(special) {

      if (special === true) {
        this.player.attack = this.baseAttack(10, 8)
        this.monster.attack = this.baseAttack(8, 5)
      } else {
        this.player.attack = this.baseAttack(8, 4)
        this.monster.attack = this.baseAttack(10, 8)
      }

      if ((this.player.hp -= this.monster.attack) < 0) {
        this.player.hp = 0
        this.messageWinLoss = 'Jogador Perdeu!! :('
        this.winLoss = true
      }
      if ((this.monster.hp -= this.player.attack) < 0) {
        this.monster.hp = 0
        this.messageWinLoss = 'Jogador Ganhou!! :)'
        this.winLoss = true
      }

      this.logBattleFunc(`Jogador hitou ${this.player.attack}`)
      this.logBattleFunc(`Monstro hitou ${this.monster.attack}`)

    },
    cure() {
      this.player.cure = this.baseCure(10, 5)
      this.monster.attack = this.baseAttack(10, 5)

      if ((this.player.hp -= this.monster.attack) < 0) {
        this.player.hp = 0
        this.messageWinLoss = 'Jogador Ganhou!! :)'
        this.winLoss = true
      }
      if ((this.player.hp += this.player.cure) > 100) {
        this.player.hp = 100
      }

      this.logBattleFunc(`Jogador curou ${this.player.cure}`)
      this.logBattleFunc(`Monstro hitou ${this.monster.attack}`)
    },
    quit() {
      this.player.hp = 100
      this.monster.hp = 100
      this.startGame = false
      this.winLoss = false
      this.logBattle = []
    },
    logBattleFunc(message) {
      this.logBattle.push(message)
    },
    barHp(value) {
      return value <= '21' ? `background-color : red; width: ${value}%;`
        : `background-color : green; width: ${value}%;`
    },
  },
  watch: {},
})
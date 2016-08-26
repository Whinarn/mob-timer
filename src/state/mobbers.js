const newGuid = require('node-uuid').v4

class Mobbers {
  constructor() {
    this.mobbers = []
    this.currentMobber = 0
  }

  getAll() {
    return this.mobbers
  }

  addMobber(mobber) {
    if (!mobber.id) {
      mobber.id = newGuid()
    }
    this.mobbers.push(mobber)
  }

  getCurrentAndNextMobbers() {
    if (!this.mobbers.length) {
      return { current: null, next: null }
    }

    return {
      current: this.mobbers[this.currentMobber],
      next: this.mobbers[(this.currentMobber + 1) % this.mobbers.length]
    }
  }

  rotate() {
    this.currentMobber = this.mobbers.length ? (this.currentMobber + 1) % this.mobbers.length : 0
  }

  removeMobber(mobber) {
    this.mobbers = this.mobbers.filter(m => m.name !== mobber.name)
    if (this.currentMobber >= this.mobbers.length) {
      this.currentMobber = 0;
    }
  }
}

module.exports = Mobbers
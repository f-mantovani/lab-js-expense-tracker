// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date
    this.amount = amount
    this.description = description
  }

  getFormattedAmount() {
    return `${this.amount} €`
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description)

    this.type = 'income'
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, category){
    super(date, amount, description)

    this.paid = category
    this.type = 'expense'
  }

  getFormattedAmount() {
    return `-${this.amount} €`
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = []
  }

  addEntry(newEntry){
    this.entries.push(newEntry)    
  }

  getTotal(type) {
    let total = 0

    this.entries.forEach(e => {
      if (e.type === type) total += e.amount
    })
    return total
  }

  getTotalIncome() {
    return this.getTotal('income')
  }

  getTotalExpense() {
    return this.getTotal('expense')
  }

  getCurrentBalance() {
    if (!this.entries.length) return 0

    return this.getTotalIncome() - this.getTotalExpense()
  }

  getFormattedEntries() {
    let entries = []

    this.entries.forEach(e => {
      if (e.type === 'income') {
        entries.push(`${e.date} | ${e.description} | +${e.amount} €`)
      } else if (e.type === 'expense') {
        entries.push(`${e.date} | ${e.description} | -${e.amount} €`)
      }
    })

    return entries
  }
}

const wait = (seconds) => {
  const milliseconds = seconds * 1000
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//Contracts
const Booking = artifacts.require("./Booking.sol");

module.exports = async function(callback) {
  try {
    //Fetch accounts from wallet -- those are unlocked
    const accounts = await web3.eth.getAccounts()

    //Fetch the deployed contract
    const booking = await Booking.deployed()
    console.log(`Token fetched`, booking.address)

    //Give tokens to account[1]
    const restaurant1Owner = accounts[1]
    const user1 = accounts[2]
    const user2 = accounts[3]
    let resutaurantAddress 
    let seatNum
    let yaerAndMonth
    let time
    let cost
    let amount

    //
    resutaurantAddress = restaurant1Owner
    seatNum = 1
    yaerAndMonth = 201906 
    time = 10301130
    cost = 3
    await booking.registerSeat(resutaurantAddress, seatNum, yaerAndMonth, time, cost, { from: user1 })
    console.log(`Created register from ${User1}`)

    await booking.onSale(resutaurantAddress, seatNum, yaerAndMonth, time, cost, { from: user1 })
    console.log(`On sale from ${user1}`)

    amount = 3
    await booking.buySeat( user1, tokenId, amount, { from: user2 })
    console.log(`bought from ${user2}`)

  } catch(error) {
    console.log(error)
  }

  callback()
} 
App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    return await App.initWeb3();
  },

  initWeb3: async function() {
      // Modern dapp browsers...
  if (window.ethereum) {
    App.web3Provider = window.ethereum;
    try {
      // Request account access
      await window.ethereum.enable();
      console.log(1)
    } catch (error) {
      // User denied account access...
      console.error("User denied account access")
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    App.web3Provider = window.web3.currentProvider;
  }
  // If no injected web3 instance is detected, fall back to Ganache
  else {
    App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
  }

  web3 = new Web3(App.web3Provider);
  return App.initContract();
  },

  initContract: function() {
      $.getJSON('Booking.json', function(data) {
    // Get the necessary contract artifact file and instantiate it with truffle-contract
    var BookingArtifact = data;
    App.contracts.Booking = TruffleContract(BookingArtifact);

    // Set the provider for our contract
    App.contracts.Booking.setProvider(App.web3Provider);
  });

    web3.eth.getAccounts(function (error, accounts) {
      var account = accounts[0];
      console.log(account)
    })
    

    
    App.registerSeat();
    // App.onSale();
    // App.buySeat();
    // App.getBackSeat();
    // App.getoneMonthSeatInfo();
    // App.createSeat();
    // App.getSeatInfo();
  },

  registerSeat: function(){
      $(document).on('click', '.bookSeat', function(event){
          var accounts = web3.eth.getAccounts()
          console.log(accounts[1])
          const address = accounts[1]
          const seatNum = 1;
          const yearMonth = 20190609;
          const time = 1500;
          const cost = 1;
          // const address = $(this).attr("data-restaurant");
          // const seatNum = $(this).attr("data-seatNum");
          // const yearMonth = $(this).attr("data-yearMonth");
          // const time = $(this).attr("data-time");
          // const cost = $(this).attr("data-cost");

         App.contracts.Booking.deployed().then(instance => {
             instance.registerSeat(address, seatNum, yearMonth, time, cost, {value: cost});
         })

      });
  },

  onSale: function(){
      App.contracts.Booking.deployed().then(instance => {
          instance.onSale(address, seatNum, yearMonth, time, cost, {value: cost});
      });
  },

  buySeat: function(){
      // App.contracts.Booking.deployed().then(instance => {
      //     instance.buySeat(address, seatNum, yearMonth, time, cost, {value: cost});
      // })
  },

  getBackSeat: function(){

  },

  getoneMonthSeatInfo: function(){

  },

  createSeat: function(){

  },

  getSeatInfo: function(){

  }


}

$(function() {
  $(window).load(function() {
    App.init();
  });
});
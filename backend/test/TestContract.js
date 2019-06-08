const { balance, BN, constants, ether, expectEvent, shouldFail } = require('openzeppelin-test-helpers');
const { ZERO_ADDRESS } = constants;

const Booking = artifacts.require('Booking');

contract('Booking', function (accounts) {
    const resutaurantAddress = accounts[1];
    const seatNum = 1;
    const yearAndMonth = 201906
    const time = 1400;
    const cost = 0.01 ether;
    const capacity = 4;
    describe('registerSeat', async function () {
        beforeEach(async function () {
          this.bookingContract = await Booking.new();
        });

        context('nil check', async function () {
          it('should revert when restaurant address is blank', async function () {
            await shouldFail.reverting(this.bookingContract.registerSeat(ZERO_ADDRESS, seatNum, yearAndMonth, time, cost)
            )
          });

          it('should revert when seatNum is blank', async function () {
            await shouldFail.reverting(this.bookingContract.registerSeat(resutaurantAddress, 0, yearAndMonth, time, cost)
            )
          });

          it('should revert when yearAndMonth is blank', async function () {
            await shouldFail.reverting(this.bookingContract.registerSeat(resutaurantAddress, seatNum, 0, time, cost)
            )
          });

          it('should revert when time is blank', async function () {
            await shouldFail.reverting(this.bookingContract.registerSeat(resutaurantAddress, seatNum, yearAndMonth, 0, cost)
            )
          });

          it('should revert when cost is blank', async function () {
            await shouldFail.reverting(this.bookingContract.registerSeat(resutaurantAddress, seatNum, yearAndMonth, time, 0)
            )
          });
        });

        context('check registered information', async function () {
            beforeEach(async function () {
              this.bookingContract.registerSeat(resutaurantAddress, seatNum, yearAndMonth, time, cost);
            });

            it('can register a seat', async function () {
              let owner = await this.bookingContract.ownerOf(1);
              owner.should.be.equal(account[0]);
            });




        });

    });
});

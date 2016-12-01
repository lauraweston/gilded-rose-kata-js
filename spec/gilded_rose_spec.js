var gildedRose = require("../src/gilded_rose.js");
var Item = gildedRose.item
var updateQuality = gildedRose.updateQuality

describe("Gilded Rose", function () {
  var testCases = [
    { name: "foo", sellIn: 0, quality: 0 },
    { name: "bar", sellIn: 5, quality: 5 }
  ];
  testCases.forEach(function (testCase) {
    describe(Item, function () {
      beforeEach(function () {
        item = new Item(testCase.name, testCase.sellIn, testCase.quality);
      });

      it("has a name", function () {
        expect(item.name).toEqual(testCase.name);
      });
      it("has a sellIn value", function () {
        expect(item.sellIn).toEqual(testCase.sellIn);
      });
      it("has a quality value", function () {
        expect(item.quality).toEqual(testCase.quality);
      });
    });
  });

  it("should foo", function () {
    var items = [new Item("foo", 0, 0)];
    updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});

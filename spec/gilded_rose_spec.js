var gildedRose = require("../src/gilded_rose.js");
var Item = gildedRose.Item;
var items = gildedRose.items;
var updateQuality = gildedRose.updateQuality;

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

  describe(updateQuality, function () {
    afterEach(function() {
      items.length = 0;
    });

    it("should decrease sellIn and quality values by 1", function () {
      items.push(new Item("foo", 5, 5));
      updateQuality();
      expect(items[0].quality).toEqual(4);
      expect(items[0].sellIn).toEqual(4);
    });

    it("should decrease quality value by 2 when the sell by date has passed", function () {
      items.push(new Item("foo", 0, 5));
      updateQuality();
      expect(items[0].quality).toEqual(3);
    });
  });

});

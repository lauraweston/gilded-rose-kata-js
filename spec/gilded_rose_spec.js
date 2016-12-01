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
    afterEach(function () {
      items.length = 0;
    });

    describe("Regular items", function () {
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

      it("should not allow the quality value to be negative", function () {
        items.push(new Item("foo", 0, 0));
        updateQuality();
        expect(items[0].quality).toEqual(0);
      });
    });

    describe("Aged Brie", function () {
      it("should increase the quality of Aged Brie as it gets older", function () {
        items.push(new Item("Aged Brie", 0, 0));
        updateQuality();
        expect(items[0].quality).toEqual(1);
        expect(items[0].sellIn).toEqual(-1);
      });
      it("should not allow an item to have a quality value greater than 50", function () {
        items.push(new Item("Aged Brie", 2, 50));
        updateQuality();
        expect(items[0].quality).toEqual(50);
      });
      it("should decrease the sellIn value by 1", function() {
        items.push(new Item("Aged Brie", 2, 50));
        updateQuality();
        expect(items[0].sellIn).toEqual(1);
      });
      it("should decrease the sellIn value by 1 once sell by date has passed", function() {
        items.push(new Item("Aged Brie", 0, 50));
        updateQuality();
        expect(items[0].sellIn).toEqual(-1);
      });
    });

    describe("Sulfuras", function () {
      it("should never change the quality or sellIn value", function () {
        items.push(new Item("Sulfuras, Hand of Ragnaros", 2, 80));
        updateQuality();
        expect(items[0].quality).toEqual(80);
        expect(items[0].sellIn).toEqual(2);
      });
    });

    describe("Backstage passes", function () {
      it("should increase the quality as sellIn value decreases", function () {
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0));
        updateQuality();
        expect(items[0].quality).toEqual(1);
      });
      it("should increase the quality by 2 when sellIn value is 10 days or less", function () {
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0));
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 9, 0));
        updateQuality();
        expect(items[0].quality).toEqual(2);
        expect(items[1].quality).toEqual(2);
      });
      it("should increase the quality by 3 when sellIn value is 5 days or less", function () {
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0));
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 4, 0));
        updateQuality();
        expect(items[0].quality).toEqual(3);
        expect(items[1].quality).toEqual(3);
      });
      it("should drop the quality to 0 after the concert", function () {
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5));
        updateQuality();
        expect(items[0].quality).toEqual(0);
        expect(items[0].sellIn).toEqual(-1);
      });
    });

    describe("Conjured items", function() {
      it("should decrease in quality by 2", function() {
        items.push(new Item("Conjured Mana Cake", 3, 6));
        updateQuality();
        expect(items[0].quality).toEqual(4);
        expect(items[0].sellIn).toEqual(2);
      });
    });
  });
});

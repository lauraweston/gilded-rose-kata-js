var gildedRose = require("../src/gilded_rose.js");
var Item = gildedRose.item
var updateQuality = gildedRose.updateQuality

describe("Gilded Rose", function() {
  
  describe(Item, function() {
    var item = new Item("foo", 0, 0);
    it("has a name, sellIn value and quality value", function() {
      expect(item.name).toEqual("foo");
    });
    it("has a name, sellIn value and quality value", function() {
      expect(item.sellIn).toEqual(0);
    });
    it("has a name, sellIn value and quality value", function() {
      expect(item.quality).toEqual(0);
    });
  });

  it("should foo", function() {
    var items = [ new Item("foo", 0, 0) ];
    updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});

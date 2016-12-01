var gildedRose = require("../src/gilded_rose.js");
var Item = gildedRose.item
var updateQuality = gildedRose.updateQuality

describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});

var gildedRose = require("../src/gilded_rose.js");
var Item = gildedRose.item
var update_quality = gildedRose.updateQuality

describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

});

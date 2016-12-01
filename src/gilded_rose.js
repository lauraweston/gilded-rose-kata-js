function Item(name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

var items = []

function incrementQuality(item) {
  item.quality += 1;
}

function decrementQuality(item) {
  item.quality -= 1;
}

function updateQuality() {
  items.forEach(function (item) {
    var brie = "Aged Brie";
    var backstagePass = "Backstage passes to a TAFKAL80ETC concert";
    var sulfuras = "Sulfuras, Hand of Ragnaros";
    
    if (item.name == brie) {
      if (item.quality < 50) {
        incrementQuality(item);
      }
      item.sellIn -= 1;
      return;
    }
    if (item.name == backstagePass) {
      if (item.quality < 50) {
        incrementQuality(item);
        if (item.sellIn < 11 && item.quality < 50) incrementQuality(item);
        if (item.sellIn < 6 && item.quality < 50) incrementQuality(item);
      }
      item.sellIn -= 1;
      if (item.sellIn < 0) item.quality = 0;
      return;
    }
    if (item.name == sulfuras) {
      return;
    }
    if (item.quality > 0) {
      decrementQuality(item);
    }

    item.sellIn -= 1;
    if (item.sellIn < 0 && item.quality > 0) {
      decrementQuality(item);
    }
  });
}

module.exports = {
  Item: Item,
  items: items,
  updateQuality: updateQuality
};

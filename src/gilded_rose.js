function Item(name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

Item.prototype.incrementQuality = function() {
  this.quality += 1;
}

Item.prototype.decrementQuality = function() {
  this.quality -= 1;
}

var items = []

var itemUpdateFunctions = {
  "Aged Brie": function (item) {
    if (item.quality < 50) {
      item.incrementQuality();
    }
    item.sellIn -= 1;
  },
  "Backstage passes to a TAFKAL80ETC concert": function (item) {
    if (item.quality < 50) {
      item.incrementQuality();
      if (item.sellIn < 11 && item.quality < 50) item.incrementQuality();
      if (item.sellIn < 6 && item.quality < 50) item.incrementQuality();
    }
    item.sellIn -= 1;
    if (item.sellIn < 0) item.quality = 0;
  },
  "Sulfuras, Hand of Ragnaros": function(item) {}
};

function updateStandardItem(item) {
  if (item.quality > 0) {
    item.decrementQuality();
  }

  item.sellIn -= 1;
  if (item.sellIn < 0 && item.quality > 0) {
    item.decrementQuality();
  }
}

function updateQuality() {
  items.forEach(function (item) {
    var itemUpdateFunction = itemUpdateFunctions[item.name];
    if (itemUpdateFunction) {
      itemUpdateFunction(item);
    } else {
      updateStandardItem(item);
    }
  });
}

module.exports = {
  Item: Item,
  items: items,
  updateQuality: updateQuality
};

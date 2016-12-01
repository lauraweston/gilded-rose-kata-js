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

var itemUpdateFunctions = {
  "Aged Brie": function (item) {
    if (item.quality < 50) {
      incrementQuality(item);
    }
    item.sellIn -= 1;
  },
  "Backstage passes to a TAFKAL80ETC concert": function (item) {
    if (item.quality < 50) {
      incrementQuality(item);
      if (item.sellIn < 11 && item.quality < 50) incrementQuality(item);
      if (item.sellIn < 6 && item.quality < 50) incrementQuality(item);
    }
    item.sellIn -= 1;
    if (item.sellIn < 0) item.quality = 0;
  },
  "Sulfuras, Hand of Ragnaros": function(item) {}
};

function updateStandardItem(item) {
  if (item.quality > 0) {
    decrementQuality(item);
  }

  item.sellIn -= 1;
  if (item.sellIn < 0 && item.quality > 0) {
    decrementQuality(item);
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

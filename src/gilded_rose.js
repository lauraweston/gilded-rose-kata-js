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
    if (item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.quality < 50) {
        incrementQuality(item);
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11 && item.quality < 50) incrementQuality(item);
          if (item.sellIn < 6 && item.quality < 50) incrementQuality(item);
        }
      }
    } else if (item.quality > 0 && item.name != 'Sulfuras, Hand of Ragnaros') {
      decrementQuality(item);
    }

    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie') {
        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0 && item.name != 'Sulfuras, Hand of Ragnaros') decrementQuality(item);
        } else {
          item.quality = item.quality - item.quality
        }
      } else {
        if (item.quality < 50) incrementQuality(item);
      }
    }
  });
}

module.exports = {
  Item: Item,
  items: items,
  updateQuality: updateQuality
};

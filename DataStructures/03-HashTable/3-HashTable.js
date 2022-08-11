/* In computing, a hash table (hash map) is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found

Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way. */

/* 
We need to do three things in this data structure
1- Hashing function convert a string key to numeric index
2- Set to store a key-value pair
3- Get to retrieve a value given its key
 */

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    //this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] === value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    //return this.table[index];
    let bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      {
        if (sameKeyItem) {
          return sameKeyItem[1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    //this.table[index] = undefined;
    let bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      console.log(i, this.table[i]);
    }
  }
}

const table = new HashTable(20);
console.log(table.hash("16142549338"));
table.set("16142549338", "Bruce");
/* table.set("age", 25); */
table.set("16142544015", "Clark");
table.set("11666672296", "Diana");
table.set("66151549046", "Osman");

table.display();

console.log(table.get("66151549046"));

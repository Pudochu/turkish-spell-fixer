/*
English: Javascript code that you can use to correct common abbreviations when messaging.

EXAMPLE ENGLISH SPELL LIST:
let spell_list = [
["helo", "hello"],
["bye", "good bye"],
["byebye", "good bye"],
["wht", "what"]
];
*/

let spell_list = [
["slm", "selam"],
["slmm", "selam"],
["mrb", "merhaba"],
["mrbb", "merhaba"],
["nbr", "naber"],
["nbrr", "naber"],
["nslsn", "nasılsın"],
["naslsnn", "nasılsın"],
["nslsnn", "nasılsın"],
["nrd", "neredesin"],
["nzmn", "ne zaman"],
["tmmm", "tamam"],
["tmm", "tamam"],
["tm", "tamam"],
["ok", "tamam"],
["okey", "tamam"],
["oki", "tamam"],
["tbr", "tebrikler"],
["kib", "kendine iyi bak"],
["grşz", "görüşürüz"],
["hg", "hoşgeldin"],
["inş", "inşallah"],
["ınş", "inşallah"],
["fln", "falan"],
["muck", "öpüyorum"],
["mck", "öpüyorum"],
["mujk", "öpüyorum"],
["ss", "ekran görüntüsü"],
["sçs", "seni çok seviyorum"],
["ajkm", "aşkım"],
["aşkm", "aşkım"],
["cnm", "canım"],
["tnşlm", "tanışalım"],
["abv", "allah belanı versin"],
["aeo", "allaha emanet ol"],
["bgn", "bugün"],
["yrn", "yarın"],
["dm", "özel mesaj"],
["by", "güle güle"],
["bb", "güle güle"],
["knk", "kanka"],
["ayn", "aynen"],
["aynn", "aynen"],
["mük", "mükemmel"],
["müq", "mükemmel"],
["arv", "allah rahatlık versin"],
["gt", "geri takip et"],
["kt", "karşılıklı takip et"],
["napıyorsun", "ne yapıyorsun"],
["napyn", "ne yapıyorsun"],
["napıyon", "ne yapıyorsun"],
["napion", "ne yapıyorsun"],
["napiyon", "ne yapıyorsun"],
["bosvr", "boşver",]
]

let metin = "merhaba napıyon, slm naslsnn.";

let words = metin.split(" ");
for (let i = 0; i < words.length; i++) {
  let word = words[i].trim().toLowerCase();
  let replacement = spell_list.find(([key]) => key === word.replace(/[^a-zığüşöç]/gi, ''));
  if (replacement) {
    words[i] = `${replacement[1]}${word.replace(/[a-zığüşöç]/gi, '')}`;
  }
}

metin = words.join(" ");

console.log(metin); // "merhaba ne yapıyorsun, selam nasılsın."

# No-profanity compared to other packages

The no-profanity package was born because I was searching for an easy-to-use profanity filter, but found only outdated packages with tons of PR's and issues. 

But, I found a useful package I integrated into this package, namely `@coffeeandfun/google-profanity-words` which contains a list of profanity words.

## Compared to bad-words
The bad-words package has about 50.000 downloads a week, but has one major flaw. It loops through all the words in the list one by one, instead of incorporating it into a single regex. This makes it very slow. I compared the two packages by looping through 10.000 short strings, of which 1/3rd had a bad word in it. The results are as follows:

My code:

```js
console.time("bad-words");
arr.forEach((item) => {
    filter.clean(item);
});
console.timeEnd("bad-words");

console.time("no-profanity");
arr.forEach((item) => {
    replaceProfanities(item);
});
console.timeEnd("no-profanity");
```

The result, with 10.000 items:

```
bad-words: 37.993s
no-profanity: 241.211ms
```

As you can see this resulted in a massive speed increase. The no-profanity package is about 150 times faster than the bad-words package with this simple test.

Functionality wise they're the same, in fact, `no-profanity` supports almost the same options as bad-words. It's actually intended to be the replacement package for `bad-words`. 
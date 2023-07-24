# no-profanity

A JavaScript tool to detect and filter profanity
## Installation
```
npm i no-profanity
```

## Usage
Using the no-profanity library is very simple. You can use it to detect profanity, or to filter profanity from a string. There are some basic options as well, such as overriding the placeholder character, or adding/removing words from the filterlist.

### Check if a string contains profanity
A basic sample showing a simple checker
```js
import { isProfane } from 'no-profanity';
console.log(isProfane("Don't be an asshole")); // true
console.log(isProfane("This is a nice text")); // false
```

### Replace profanity in a string
A basic sample showing how to replace profanities
```js
import { replaceProfanities } from 'no-profanity';
console.log(replaceProfanities("Don't be an asshole")); // Don't be an *******
console.log(replaceProfanities("This is a nice text")); // This is a nice text
```

### Get profanities from a string
A basic sample returning the profanities
```js
console.log(containsProfanities("what an asshole"));
```

Will return:
```js
[ { 
    word: 'asshole', 
    index: 8 
} ]
```

## Options
There are some overrides possible, but as soon as you want to use an override you will no longer be able pass a string to the functions defined above, but instead, they require an arguments object, like this:

```js
replaceProfanities({
    testString: "testable string",
    options: {}
});
```

### Override placeholder
 The options object should contain a property called `replacement` which should be a string of length 1, unless you want a longer replacement value as the original wordlength. The default value is `*`.

```js
replaceProfanities({
    testString: "testable string",
    options: {
        replacement: '#'
    }
});
```

### Remove words from the filterlist
The options object should contain a property called `excludes` which should be an array of strings you don't want to filter on. 

```js
replaceProfanities({
    testString: "testable string",
    options: {
        excludes: ['testable']
    }
});
```

### Add words to the filterlist
The options object should contain a property called `includes` which should be an array of strings you want to filter on. 

```js
replaceProfanities({
    testString: "testable string",
    options: {
        includes: ['testable']
    }
});
```

## Contributing
Any contributions are highly appreciated. If you want to contribute, please fork the repository and create a pull request. If you have any questions, feel free to create an issue.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. With MIT comes the freedom to use the code for whatever you want, but a credit would be nice.
const url=require('url')

// const myUrl = new URL('/foo', 'https://example.org/')
// const myUrl = new URL({toString: ()=> 'https://example.org/'})
// const myUrl = new URL('https://測試');

const myUrl = new URL('https://abc:xyz@example.com?hjgvhjv=ghbv');

// const myUrl = new URL(__filename);
myUrl.searchParams.forEach((name, value)=>console.log(`${name} : ${value}`))
// console.log(url.pathToFileURL(__filename));


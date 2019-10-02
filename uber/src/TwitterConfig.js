const Twitter= require('twitter');

const twitter = new Twitter({
    consumer_key: 'IaKbR69AZjbNqqX7oj5OPx4Yt',
    consumer_secret: 'j3szYZlmr2kPqfwLVuEUyu813JUbk0i7iVn3yNIw4aanZNfWcj',
    access_token_key: '38118615-1iS5Fg6s3cncISTPnASyjhtauMrtpuMLiQEQdDr9b',
    access_token_secret: 'DBN7noyvXV3e0vVZYaI5ltwpHG5bYgSqYqlhDEx7QKmP7',
});

const params = {
    q: 'uber',
    count: 100,
    result_type: 'recent',
    lang: 'es',
    //country: 'chile'
    geocode: '-33.4718999,-70.9100235,2500km'
};

twitter.get('search/tweets', params).then(res=> {
    res.statuses.map(element=>{
        console.log(JSON.stringify({Tweets: element}))
    })
})

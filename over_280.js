[
    ['version:"cramming",max_tweet_length:280,default_weight:200,ranges:[{start:0,end:4351,weight:100},{start:4352,end:65535,weight:200}]})',
     'version:"default",max_tweet_length:280,default_weight:100,ranges:[{start:0,end:4351,weight:100},{start:4352,end:65535,weight:100}]})'],
    ['version:"default",max_tweet_length:140,scale:100,default_weight:100,short_url_length:23,short_url_length_https:23}',
     'version:"fault",max_tweet_length:280,scale:100,default_weight:100,short_url_length:23,short_url_length_https:23}'],
    ['getDeciderValue:function(t){return n.deciders[t]}',
    'getDeciderValue:function(t){n.deciders["cramming_feature_enabled"]=true;n.deciders["cramming_ui_enabled"]=false;return n.deciders[t]}'],
    ['r=c.a.getDeciderValue("cramming_ui_enabled")?{weighted_character_count:!0}',
     'r=true?{weighted_character_count:!0}'],
    ['url:"/i/tweet/create",isMutation:!1,data:h,success:s.bind(this),error:o.bind(this),',
     'url:"/i/tweet/create",isMutation:!1,data:h,success:(function(a){s.bind(this)(a);}).bind(this),error:(function(a){if (a.errors) { a.message = a.errors.message; }o.bind(this)(a);}).bind(this),'],
     //['url:"/i/tweet/create",',
    // 'url:"https:\/\/api.twitter.com/1.1/statuses/update.json",useOAuthSessionAuth:true,'],
    ['this.JSONRequest=function(i,n){',
     'this.JSONRequest=function(i,n){if (i.url === "/i/tweet/create") { let weight=0; if (typeof twttr !== "undefined") { weight = twttr.getTweetLength(i.data.status); } else { for (let c of i.data.status) { if (c.charCodeAt() <= 4351){ weight += 1; } else if (c.charCodeAt() <= 65535) { weight += 2; }}} if (weight > 140) { i.url = "https:\/\/api.twitter.com/1.1/statuses/update.json"; i.useOAuthSessionAuth = true; }};'],
    ['var p={status:t,media_ids:f.join(",")};',
     'var p={status:t,media_ids:f.join(","),weighted_character_count:true};'],
    ['_=t.MAX_TWEET_LENGTH=140',
     '_=t.MAX_TWEET_LENGTH=280'],
    ['d.txt.getTweetLength(e)>140?"too_long"',
     'd.txt.getTweetLength(e)>280?"too_long"'],
    ['this.on(document,"uiShowMessage",this.showTemporaryMessage),',
     'this.on(document,"uiShowMessage",this.showStickyMessage),']
]

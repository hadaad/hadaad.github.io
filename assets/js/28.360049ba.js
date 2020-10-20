(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{380:function(e,t,a){"use strict";a.r(t);var o=a(40),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"performance-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-improvements"}},[e._v("#")]),e._v(" Performance Improvements")]),e._v(" "),a("p",[e._v("I had some really good success today, improving the performance of an algorithm. I have thoughts.")]),e._v(" "),a("h3",{attrs:{id:"the-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-problem"}},[e._v("#")]),e._v(" The Problem")]),e._v(" "),a("p",[e._v("I heard from another team that uses our api that one of our endpoints was slow. Like, s-l-o-w. When I looked at the function that supplies the data to that endpoint, it seemed innocent enough, but on closer inspection, there were some problems, not least of which is that we retrieve data from the database, iterate over that data, and perform two database queries on each of those entries.")]),e._v(" "),a("h3",{attrs:{id:"the-fix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-fix"}},[e._v("#")]),e._v(" The Fix")]),e._v(" "),a("p",[e._v("The fix was simple enough. Rather than grabbing a pile of data, then iterating over it to filter it based on some other tables and fields, I let the database do what it does well, joining the tables and filtering out on the single query. It does require two joins on a single query, but that is infinitely preferable to what the original coder did.")]),e._v(" "),a("h3",{attrs:{id:"pitfalls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pitfalls"}},[e._v("#")]),e._v(" Pitfalls")]),e._v(" "),a("p",[e._v("Ruby on Rails really does give you the ability to write code quickly, get things up and running without getting in your way, most of the time. Coding by convention gets you access to a pile of really cool things, essentially for free.")]),e._v(" "),a("p",[e._v("Unfortunately, implementing things \"at the speed of business\" (don't hate me. I didn't make that up. I just remembered and used it) can lead you to overlook some very basic things. And Rails, especially, isn't always very clear about what it's doing when you write some code.")]),e._v(" "),a("p",[e._v("Want a field on a model? Sure. Just access it. Rails will take care of that for you. But what you might not understand (or you might not care about, because you're trying to implement features, not optimize prematurely) is that, in the background, if your model was lazily loaded, accessing that field will be running a query against the database. Not a huge deal when you're operating on a single model one time, and certainly preferable, performance-wise to always getting every associated model in all cases.")]),e._v(" "),a("p",[e._v("But there are drawbacks -- and those drawbacks are not always immediately apparent.")]),e._v(" "),a("p",[e._v("In my case:")]),e._v(" "),a("ul",[a("li",[e._v("running the function when there were 250 candidate rows took just under a second.")]),e._v(" "),a("li",[e._v("running the function when there were 500 candidate rows took just over 2.5 seconds.")]),e._v(" "),a("li",[e._v("running the function when there were 1000 candidate rows took just about 6 seconds.")]),e._v(" "),a("li",[e._v("running the function when there were 5000 candidate rows took 70 seconds.")])]),e._v(" "),a("p",[a("small",[e._v("(I feel like it's important to tell you that none of my tests took more than 0.02 seconds to run with the new algorithm.)")])]),e._v(" "),a("p",[e._v("That Jesus-Christ-cover-your-eyes last row took me by surprise, and I'm not really 100% sure what it means. Does it mean that we should put more emphasis on load testing? Maybe. I like the idea of performance testing as a development tool, just like unit tests are a development tool. Implement something different, and if it blows up your times, you need to look into things. My last job was pretty big into performance metrics -- being an SEO-dependent business makes that a very high priority. It isn't a super-huge priority at my current place, y'know, until it is.")]),e._v(" "),a("p",[e._v("Another thing that I would absolutely say it means is that, before you put something into production (this API endpoint is in production), you should absolutely understand what you've implemented. It's easy to judge code in retrospect, and I don't want to cast aspersions on those who came before. It's funny, though. When I'm in a job interview and people ask me about code reviews, the example I use for reviews adding value is having a loop with a database query inside of it. "),a("strong",[e._v("I")]),e._v(" would have missed this on code review, I won't lie, because Rails hides all those pesky implementation details behind the scenes, and I guess my path to mastery of Ruby and Rails is going to travel through understanding what's happening under the hood when seemingly innocuous method calls are made.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
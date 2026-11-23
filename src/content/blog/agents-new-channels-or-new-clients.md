---
title: "Agents: new channels for shopping or new type of clients?"
description: "Agents aren't really a new channel. They're a new kind of customer, and we should evaluate them that way."
pubDate: '2026-11-23'
---

Every few years ecommerce gets a new place to sell. Marketplaces, social shops, live shopping. The playbook is always the same: open an account, upload the catalog, buy some ads, watch a new row appear in the channel report. So when ChatGPT and Google started showing products and buying things for people, most of us reached for that playbook again.

I think that playbook misses what's going on. From the outside, agents look like a channel. Watch what they actually do and they behave like a customer, a very particular one that most shops aren't built for.

## What actually happened

OpenAI launched Instant Checkout in September 2025, so US users could buy from Etsy sellers without leaving the chat. In March 2026 it stepped back: discovery stays in ChatGPT, and the purchase now happens on the merchant's own site. Then on 13 November 2026 OpenAI launched ChatGPT Wallet, which lets a user's agent pay on their behalf after the person approves each purchase with a fingerprint or Face ID. For now it's only for Pro users in the US.

Google went its own way. In January 2026 it launched a commerce protocol for AI Mode and Gemini, and its help pages describe an agentic checkout that "buys things on the customer's behalf directly on a merchant's website." Visa and Mastercard have both built ways for a shop to recognise a registered shopping agent before it pays, working with Cloudflare.

The growth is real. The scale isn't there yet. Adobe says AI referrals to US retail sites grew 71% year over year in September 2026 and converted 90% better than other traffic. And it isn't only a US story: Bain's latest survey says 36% of European consumers now use AI assistants for some part of their shopping, up from 8% in September 2025, a bit ahead of the US at 33%. Still, by Bain's own estimate, AI assistants bring retailers less than 1% of their web traffic. Nobody needs to panic. But the direction is clear enough to plan for.

## Why it isn't a channel

A channel is a place where you show things to a person. You control the ad, the landing page, the banner and the retargeting. An agent switches most of that off. It reads your product data, prices, stock and return policy, then compares them with other shops in seconds. It doesn't see your hero image, it doesn't click your cookie banner, and you can't follow it around the internet with an ad for the sofa it looked at.

The person who sent it often shows up only at the end, to approve a payment. OpenAI already says it expects people to pre-approve purchases within spending limits, and then the person may not show up at all. That's a customer, and a demanding one: the kind who reads the fine print and leaves if it's unclear.

The fair objection is that the agent has no money of its own, so the person is still the customer. True. But the person handed over the comparing and the choosing, and the agent judges on different things than a person does. That's who you have to win.

Most sites aren't ready for that customer. Adobe found the average US retail homepage is only 63% readable by AI systems, so over a third of what brands put there is invisible to the visitor doing the research. OpenAI's own guidance warns that some sites "may unintentionally block" agent purchases, and that risk systems may decline legitimate ones. Picture a shop with a doorman who turns away some paying customers because they walk a bit oddly.

## The part your dashboard misses

When we built AI bot tracking at Hardal, we had to start from one awkward fact: many of these visitors never run the JavaScript your analytics depends on. They hit your server, read the page and leave. Google Analytics, for example, drops known bots automatically and won't tell you how many it dropped. When the human comes back later to pay, the sale can land as "direct", with no trace of the agent that did the homework.

We also keep apart two things that look similar: an agent fetching a page, and a person clicking a link inside ChatGPT. Add them together and the number means nothing. One is the customer's assistant reading your shelf, the other is the customer walking in.

Then there's the money side. ChatGPT now sells ads, and that part really is a channel: it reaches the person, not the agent. OpenAI also offers a conversions API so advertisers can send back which orders actually happened. If ChatGPT never learns which ads turned into sales, it's guessing. It's the same problem we've had with Meta and Google for years, with a new audience on top.

## What I would do first

Start with what the agent reads. Put current prices, stock and a clear return policy in your product feed and on the page as plain text, not inside images or pop-ups. If you sell on Shopify or Etsy, your catalog is already connected to ChatGPT shopping. It's live only in the US for now, so this is a good moment to check what it says about you before it reaches your market.

Next, check the door. Ask whoever runs your CDN or firewall whether signed shopping agents get through, and ask your payment provider how it treats purchases made by agents. A ready buyer turned away at checkout is the most expensive lost sale there is.

Finally, make the invisible visible. Measure agent visits on the server, separately from human visits, and look at which pages they read and which they skip. And if you advertise, make sure your conversion data reaches every ad platform you pay, ChatGPT included.

I don't know how big this gets or how fast. Even OpenAI walked back its first checkout after six months, so everyone is still learning, me very much included. Worst case, you end up with cleaner product data, a firewall that stops turning away paying customers and analytics that see a bit more.

So, to answer my own title: agents aren't really a new channel. They're a kind of customer, and we should evaluate them like one, by what they need from us, what makes them leave and whether we can even tell they came.

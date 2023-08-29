<!-- assignment 1 -->

# Assignment

## _Q1.What is a protocol stack, and how is it used in web development?_


A protocol stack is a set of communication protocols and software layers that work together to enable communication between different devices or components over a network. In web development, the most common protocol stack used is the TCP/IP (Transmission Control Protocol/Internet Protocol) stack.


When you access a new website, your browser may need to make a DNS request:

Application Layer: DNS
Transport Layer: UDP
Network Layer: IP (v4)
Link Layer: Ethernet or Wireless LAN 

This stack of protocols is used when a DNS request is sent through the Internet:
 


 [![N|Solid](https://cdn.kastatic.org/ka-perseus-images/918dc8144c8813382ea3ffbbf76db1535d97421a.svg)](https://nodesource.com/products/nsolid)
 
 Then your browser will make an HTTP request to fetch the webpage. This protocol stack is used when an HTTP request is sent through the Internet:
 
 [![N|Solid](https://cdn.kastatic.org/ka-perseus-images/49e49dd1e8744a2422215288147e00443fc0916c.svg)](https://nodesource.com/products/nsolid)

If the webpage is served over HTTPS, then the stack includes multiple protocols at the application layer (both HTTP and TLS):

[![N|Solid](https://cdn.kastatic.org/ka-perseus-images/de452773728c35833566ddae2f78289ecae61340.svg)](https://nodesource.com/products/nsolid)

## _Q2.What are the different types of web servers, and how do they differ in terms of functionality and performance?_

Web Server: Web server is a program which processes the network requests of the users and serves them with files that create web pages. This exchange takes place using Hypertext Transfer Protocol (HTTP).

![WEB SERVER IMAGE](https://media.geeksforgeeks.org/wp-content/uploads/20190927155217/webserver.png)

There are many web servers available in the market both free and paid. Some of them are described below:

* Apache HTTP server: It is the most popular web server and about 60 percent of the world’s web server machines run this web server. The Apache HTTP web server was developed by the Apache Software Foundation. It is an open-source software which means that we can access and make changes to its code and mold it according to our preference. The Apache Web Server can be installed and operated easily on almost all operating systems like Linux, MacOS, Windows, etc.

![APACHE HTTP SERVER](https://media.geeksforgeeks.org/wp-content/uploads/20190927171921/apache.png)


* Microsoft Internet Information Services (IIS): IIS (Internet Information Services) is a high performing web server developed by Microsoft. It is strongly united with the operating system and is therefore relatively easier to administer. It is developed by Microsoft, it has a good customer support system which is easier to access if we encounter any issue with the server. It has all the features of the Apache HTTP Server except that it is not an open-source software and therefore its code is inaccessible which means that we cannot make changes in the code to suit our needs. It can be easily installed in any Windows device.

![microsoft iis picture](https://media.geeksforgeeks.org/wp-content/uploads/20190927171931/miscrosoftIIS.png)


* Lighttpd: Lighttpd is pronounced as ‘Lightly’. It currently runs about 0.1 percent of the world’s websites. Lighttpd has a small CPU load and is therefore comparatively easier to run. It has a low memory footprint and hence in comparison to the other web servers, requires less memory space to run which is always an advantage. It also has speed optimizations which means that we can optimize or change its speed according to our requirements. It is an open-source software which means that we can access its code and add changes to it according to our needs and then upload our own module (the changed code).

![Lighttpd fly light img](https://media.geeksforgeeks.org/wp-content/uploads/20190927171929/lighttpd.png)


* Jigsaw Server: Jigsaw has been written in the Java language and it can run CGI (common gateway interference) scripts as well as PHP programs. It is not a full-fledged server and was developed as an experimental server to demonstrate the new web protocols. It is an open-source software which means that we can access its code and add changes to it according to our needs and then upload our own module (the changed code). It can be installed on any device provided that the device supports Java language and modifications in Java.

![Jigsaw](https://media.geeksforgeeks.org/wp-content/uploads/20190927171926/jigsaw.png) 

* Sun Java System: The Sun Java System supports various languages, scripts, and technologies required for Web 2.0 such as Python, PHP, etc. It is not an open-source software and therefore its code is inaccessible which means that we cannot make changes in the code to suit our needs.

![sun microsystems](https://media.geeksforgeeks.org/wp-content/uploads/20190927171924/javasun.png)

## _Q3.What is web hosting, and what are the different types of hosting services available for websites?_

-->In web development, hosting refers to the service of storing and making websites accessible on the internet. There are various types of hosting available, each catering to different needs and requirements. Let's explore each type and understand where and when to use them:

![type of server](https://pesto.b-cdn.net/reading_material_assets/Assets/types-of-servers.png)

#### 1. Shared Hosting:
 Shared hosting is like sharing an apartment with roommates. Multiple websites share the same server resources, such as storage, memory, and processing power.
Use Shared Hosting When: You have a small website with low traffic or are just starting with web development on a budget.

##### Examples: 
1.  Bluehost (https://www.bluehost.com/)
2.  HostGator (https://www.hostgator.com/)
3.  SiteGround (https://www.siteground.com/)

#### 2 VPS Hosting (Virtual Private Server):
 VPS hosting is like renting a private room in a shared house. It offers more resources and flexibility than shared hosting, as you get a virtual server dedicated to your website.
Use VPS Hosting When: Your website traffic is increasing, and you need better performance and control over server settings.

##### Examples: 
1. DigitalOcean (https://www.digitalocean.com/)
2. Linode (https://www.linode.com/)
3. Vultr (https://www.vultr.com/)


#### 3. Dedicated Hosting:
Dedicated hosting is like owning a standalone house. You get an entire physical server dedicated solely to your website, offering the highest level of performance and customization.
Use Dedicated Hosting When: You have a large, resource-intensive website with high traffic, or you need complete control over server configurations.

##### Examples: 
1. Liquid Web (https://www.liquidweb.com/)
2. InMotion Hosting (https://www.inmotionhosting.com/)
3. Hostwinds (https://www.hostwinds.com/)


#### 4. Cloud Hosting:
Cloud hosting is like living in a flexible apartment building. It uses multiple interconnected servers to provide scalability and reliability.
Use Cloud Hosting When: You want to handle varying traffic levels effectively, as cloud hosting can dynamically scale resources up or down.


##### Examples: 
1. Amazon Web Services (AWS) (https://aws.amazon.com/)
2. Google Cloud Platform (https://cloud.google.com/)
3. Microsoft Azure (https://azure.microsoft.com/)




#### 5. Managed WordPress Hosting:
Managed WordPress hosting is like having a maintenance team for your WordPress website. The hosting provider takes care of updates, backups, and security.
Use Managed WordPress Hosting When: You run a WordPress site and want to focus on content creation without dealing with technical aspects.


##### Examples: 
1. WP Engine (https://wpengine.com/)
2. Flywheel (https://getflywheel.com/)
3. Kinsta (https://kinsta.com/)


#### 6. Reseller Hosting:
Reseller hosting is like being a middleman. You purchase hosting resources in bulk from a provider and sell smaller hosting plans to others.
Use Reseller Hosting When: You want to start your web hosting business or manage multiple websites for clients.


##### Examples: 
1. HostPapa (https://www.hostpapa.com/)
2. A2 Hosting (https://www.a2hosting.com/)
3. HostGator Reseller Hosting (https://www.hostgator.com/reseller-hosting)

### _Q4. What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?_
 
-> Website scaling is the process of improving your website’s performance by adding resources to your hosting server so it can effectively handle more traffic.
*Simply put, the goal of website scaling is to have your website perform as smoothly with 100,000 visitors as it does with 100.*
#### Importance of Scaling your Web Application 
Receiving more traffic to your website is undoubtedly rewarding. But, if your website hosting solution isn’t equipped to handle a large amount of traffic, you may experience a drop in your website’s performance.
*In the worst-case scenario, your website might crash, leading you to a loss of visitors, revenue, and reputation.*
* Q4 Website scaling lets you grow your website by providing you with enough computing resources.
* The biggest challenges with website scaling are estimating future website traffic, financing the scaling process, and improving the website’s performance.
* You should consider scaling your website to increase your website’s speed, avoid downtime, and most importantly, allow more users to access your website.
##### 1. Three main website scaling strategies include:
* Horizontal scaling
* Vertical Scaling
* Automatic Scaling

###### 1. *Horizontal Scaling*
Horizontal scaling allows you to scale your website by adding additional servers to your web hosting solution to increase your website’s performance.
This way, you’re creating a server cluster that can manage heavy traffic coming to your website by distributing the load across several servers.

###### 2. *Vertical Scaling*
With vertical scaling, you’re adding hardware components, such as memory or storage to your existing server to boost your website’s performance.
If, for instance, your current server is using all the RAM, your website will become very slow and might crash. To avoid server downtime, your best solution might be to add more RAM to your server.
One thing you should keep in mind, though, is that each web hosting server has a set amount of resources you can add to it, meaning that there are certain limits to vertical scaling.

###### 3. *Automatic Scaling*
As automatic scaling adjusts the server resources to meet your website’s demand, you only have to pay for the resources that your website uses.
Perhaps the easiest way to scale your website is by using cloud dedicated servers to host your website.

Cloud servers differ from dedicated hosting servers as they automatically take up resources from a cloud network of bare-metal servers. Therefore, you don’t have to contact your hosting provider to upgrade your server and scale up your website.

## Horizontal Scaling Vs Vertical Scaling
Horizontal scaling means scaling by adding more machines to your pool of resources (also described as “scaling out”), whereas vertical scaling refers to scaling by adding more power (e.g. CPU, RAM) to an existing machine (also described as “scaling up”).
One of the fundamental differences between the two is that horizontal scaling requires breaking a sequential piece of logic into smaller pieces so that they can be executed in parallel across multiple machines. In many respects, vertical scaling is easier because the logic really doesn’t need to change. Rather, you’re just running the same code on higher-spec machines. However, there are many other factors to consider when determining the appropriate approach.

![hs vs vs](https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-ee2d61cd57858fd254d4bc83ee4ab75a_l3.svg)

### _Q5. What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?_

##### Search Engine Optimization

SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries, and as a consequence, search engines rank them better.
Search engines help people find what they’re looking for online. Whether researching a product, looking for a restaurant, or booking a vacation, search engines are a common starting point when you need information. For business owners, they offer a valuable opportunity to direct relevant traffic to your website.
Search engine optimization (SEO) is the practice of orienting your website to rank higher on a search engine results page (SERP) so that you receive more traffic.

### *How Developers Can Optimize their websites* 
Moslty Developers have to do On page technical seo which includes the below mentioned aspects 

##### 1- High-Quality Page Content
Page content is the heart of on-page SEO. It tells both search engines and readers what your website and business are all about.
##### 2- Page Titles
Page content is the heart of on-page SEO. It tells both search engines and readers what your website and business are all about.
##### 3-Headers
Page content is the heart of on-page SEO. It tells both search engines and readers what your website and business are all about.
##### 4-Meta Descriptions
Page content is the heart of on-page SEO. It tells both search engines and readers what your website and business are all about.
##### 5-Image Alt-text
Page content is the heart of on-page SEO. It tells both search engines and readers what your website and business are all about.
##### 6-Structured Markup
Page content is the heart of on-page SEO. It tells both search engines and readers what your website and business are all about.
##### 7-Page URLs
Page content is the heart of on-page SEO. It tells both search engines and readers what your website and business are all about.
##### 8-Internal Linking
Internal linking is important for on-page SEO because internal links send readers to other pages on your website, keeping them around longer and thus telling Google your site is valuable and helpful.
##### 9-Mobile Responsiveness
Your Website Should be Mobile responsive it also improve your search engine visibility
##### 10-Site Speed
Whether viewed on a mobile device or desktop, your site must be able to load quickly. When it comes to on-page SEO, page speed counts big-time

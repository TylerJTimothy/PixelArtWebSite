# **8-bit Pixel Art Editor Startup**
There are many uses for a simple 8-bit pixel art editor.  From making video game sprites or simple logos pixel art is one of the most approachable forms of art.  8-bit pixel art editor will allow you to easily make and share basic pixel art!  Start making your art today and share with other users to see!
> "8-bit pixel art editor is going to be straight fire" - Tyler


![Mockup for 8-bit pixel art ediotr](https://github.com/TylerJTimothy/startup/blob/main/website%20mockup.PNG)
## Key features
- Place pixels on an 8x8 or bigger pixel grid!
- Choose from custom 8-bit color palletts!
- Share your art for others to see!
- See how many people are currently making art!
## Use of various technologies
1. Authentication: 8-bit pixel art editor will allow users to make an account and log in when they make their art.
2. Database data: 8-bit pixel art editor will save art made by different users and allow recent ones to be seen.
3. Websocket data: 8-bit pixel art editor will tell you when people are currently working on their own art, when they post, and even what color they are currently using!
## HTML Deliverables
- HTML pages - Four HTML pages.  Art, About, view, and home (index)
- Links - Pages to other pages on the site and to this repository
- Text - Text telling users to choose a color and displaying usernames
- Images - For now the drawing grid is just an image
- Login - Input box and submit button for login.
- Database - Other's artwork stored on a databse
- WebSocket - Showing which colors other users are using
## CSS Deliverables
- Consistent Bootstrap Header, consistent footer, and main layout 
- Navigate through the header including my brand icon I made
- Responsive design, other than the art canvas and images
- Consistent color scheme and contrast
- Consistent fonts
- Ordered my images using CSS grids
## JavaScript deliverable
For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- login - When you press enter or the login button it takes you to the pixel art creation page.
- database - Stores the photos you've made on local storage and displays them on the gallery page.
- WebSocket - Right now I jused javascript to randomly switch colors that other people could be using.
- application logic - You can create images pixel by pixel on a cavnas element

## Service deliverable
For this deliverable I added backend endpoints that make calls to an api to get a suggested color palette. 

- Node.js/Express HTTP service - done!
- Static middleware for frontend - done!
- Calls to third party endpoints - calls a color palette api
- Frontend calls service endpoints - I did this using the fetch function on a button press

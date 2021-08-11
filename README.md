# Udayy Assignment - (2 view website navigator)

The assignment is live here: https://gifted-volhard-4dc1e0.netlify.app/

## Explanation:

I have made use of React Redux template and react-iframe dependency. I have also used Font Awesome CDN link for font awesome icons.

Login information and URLs is stored in redux. To persist the login state, I have made use of localstorage. As mentioned in the assignment I have mocked the login page. So, you can enter anything for the credentials to login.

After logging in, User redirects to the main page. Username, Search bar 1, Search bar 2, Logout button are displayed in the Header section of main page. Two react iframes are used in the main page to load the URLs entered in the search bars. 

Note: The Views (iFrames) can be collapsed/expanded. The collapse/expand icon is visible when hovered on the view

A full qualified URL needs to be entered in the search bar. (or) any search term would do (uses Bing as search engine).

Some Examples to enter are: 
1. https://codesandbox.io/s/react-iframe-demo-g3vst?file=/src/index.js:208-410
2. https://www.instahyre.com/ (or) instahyre.com
3. https://www.naukri.com/ (or) naukri.com
4. IPL
5. Latest news
6. https://aahmed.netlify.app/ (or) aahmed.netlify.app

This app is completely responsive and works fine for the resolutions of iPhone 5s/SE (320 x568) and above.

## Instructions:
### Run the React App:
1. Assuming that you have node.js installed, Open a command prompt in the assignment directory.
2. Run “npm i". This will install all the node modules required for the app.
3. Run “npm start”. This will bring up the react app on http://localhost:3000.

### About the App:
1. There are 2 textboxes (Search bars) in the header.
2. First textbox takes in a complete URL/Search terms and renders the website in the first iFrame in the body section.
3. Second textbox takes in a complete URL/Search terms and renders the website in the second iFrame in the body section.


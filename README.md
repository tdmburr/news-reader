## Abstract

This was a take home challenge to create a news reading application using the News API. The application allows you to view the top 20 headlines for a specific category such as technology. As a user you'll be able to click an article to view more details specific to that article. The application also includes a search function that filters through the titles of the articles for letters/words that are case insenstive and includes error handling to indicate if an article doesn't exist with the typed in search criteria.

## Install Instructions

- Fork the repository to your GitHub account.
- Copy the SSH key from GitHub by navigating to the code dropdown.
- Using the terminal, run the following command: git clone [SSH key here].
- Change into the repository directory: cd news-reader.
- Open the repository in your preferred code editor, such as Visual Studio Code.
- Install the necessary dependencies by running: npm install.
- Start the application by running: npm start.
- Click the hyperlink where the project is running to launch the application in your web browser, or enter http://localhost:3000/ into your web browser's address bar.

- The API is available at [News API](https://newsapi.org/)

## Context

This was a take home challenge project assigned in Mod 4 to simulate an in field technical take home challenge. 
The challenge was to limit yourself to a 6-8 hour implementation period, with a 1 hour planning period. 
This challenge was completed in roughly 8 hours.

## Learning Goals

- A strong understanding of React JS and Front-End best practices
- Your ability to prioritize for MVP
- An understanding of basic usability practices and standards
- A clear hierarchy of information
- Clean, well thought out code

## Initial Wireframe

![Screen Shot 2023-07-27 at 11 04 56 AM](https://github.com/tdmburr/news-reader/assets/109426263/0c69537d-1eaf-4137-8def-d3c6f212b309)

## Preview of App

![News-demo](https://github.com/tdmburr/news-reader/assets/109426263/988e9798-bec6-4720-9102-557077879823)

## Contributors

| [<img alt="Trey Marshall" width="100" src="https://user-images.githubusercontent.com/120869196/253777102-92b26459-2e10-497c-91f2-7bb784de7d66.png"/>](https://www.linkedin.com/in/tdmars/) | 
| ------------ |
| Trey Marshall |
| Front-end Developer | 
| [GitHub](https://github.com/tdmburr) | 
| [LinkedIn](https://www.linkedin.com/in/tdmars/) | 

<br>

## Wins + Challenges

Wins: This was my first solo implementation of using React Hooks. Learning and implementing both new (useMemo) and familiar (such as useEffect) hooks was a great learning experience from only having previous (solo) experience using a class based component system.

Challenges: In the same vein as the wins... Learning how to effectively use Hooks and learning what they represented in comparison to a class based component (such as the similarity between useEffect and componentDidMount) was a challenge. 
Additionally, near completion of the project, a bug was discovered regarding the indexes not appropriately updating (IE: once an article was clicked, the wrong data was displayed as the previous index had not been updated) that was fixed through refactoring (learning useMemo) and re-assessing the previous code.

## Technologies Used

- RESTful API
- React Framework
- Router v5
- LightHouse
- GitHub Project Board
- JavaScript
- CSS
- HTML

## Possible Updates / Revisions

- Add placeholder images for images that return as "null"
- Expanding to use an additional API call to filter through more than one static category.




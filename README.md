# VoteBook Mobile
## Repo Guidelines and practices
- Nobody should commit directly to main. 
- You must create your own branch for each feature you are working on and open a Pull Request into main
- Each new module should be paired with a Jest Test so that we can unit test each piece of code. 
- When you open a Pull request, a build verify github action will run all of the Jest Tests, and if it fails, you need to go back and fix it. 
- Pull Requests should be linked to an issue ticket by way of using closing keywords in the PR description
##Project Management
- This repo will have issue tickets created on it that are linked with our Jira project board so monitor the issues tab on Github (theres a mobile app), and monitor the Jira board (surprise there's a mobile app).
- All branches must be be linked to both the github issue ticket and the Jira issue ticket
- Documentation will be written within your code in standard JSDOC form, and in the form of Confluence pages that you MUST fill out

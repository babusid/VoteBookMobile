# VoteBook Mobile
## Repo Guidelines and practices
- Nobody should commit directly to main. 
- You must create your own branch for each feature you are working on and open a Pull Request into main
- Each new module should be paired with a Jest Test so that we can unit test each piece of code. 
- When you open a Pull request, a build verify github action will run all of the Jest Tests, and if it fails, you need to go back and fix it. 
- Pull Requests should be linked to an issue ticket by way of using closing keywords in the PR description

## Project Management
- All branches must be be linked to the github issue ticket 
- Documentation will be written within your code in standard JSDOC form.

## Testing app before opening Pull Request
- You must write a unit test for any modules/supermodules that you develop, and place them in the tests folder. Then you must check that all tests run before requesting a review. In order to run these tests: 
```bash
# Go into __tests__ folder
cd __tests__
#run all unit tests
npm run test
```

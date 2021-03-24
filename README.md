# TASK live demo

https://gracious-mahavira-cce793.netlify.app/

# marketune_test

**test description**:
The task consists of the following
1 - consume an API that returns an array of 3000 documents.
2- The returned documents represent the users activities on an ads sharing platform.
3- **The required** is to visualize the data to show a graph that helps the viewer see the relation between points_in (earned points by the user) against the goal_type (represents the activity that the user did).
4 - **Bonus**: let the viewer filter the data by a specific date using the createdAt field
5- json object fields that can exist in documents

_Note_: _the data is not strictly structured the goal object for example can a subdocument or as given below_

- \_id
- goal (can be an object that has (goal_type,points_in,points_out))
- goal_type
- points_in
- points_out
- status
- userid
- corpid
- createdAt

**Please follow the following steps** :
1 - clone this repository
2 - create a branch and let its name be your email address or whatsapp number
3 - make a pull request with your branch
4 - if you could deploy your code at any static content free host like 000webhost add the link to your hosted solution in the reamde file in your branch
5 - if you find any problems or need any help, send an email with the title "data-visualization-test" to freelancers@marketune.com and include your branch name in the email in case you made the pull request

### API to use

## _the data returned by these apis might be helpful along with the 'createdAt' field in the documents returned by the getData endpoint_

#### path

https://marketune-visualization-test.herokuapp.com/getData

#### method

`get`

#### _\_response_

3,000 documents represeting user activities in an ads sharing platform

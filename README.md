# IntergratedWeatherMachine
HW 5 - Integrating Software Testing with Jenkins 

In this assignment, you will apply the concepts of Chapter 8 of Sommerville's Software Engineering text to create a continuous integration pipeline using the Jenkins server installed in HW 1
The goal is to automate the testing process for a sample Weather Station application
1.Create a sample Weather Station application: Develop a simple Weather Station application using a programming language and framework of your choice. The application should include basic functionality, such as data collection, data storage, data transmission, data analysis, and a user interface.

2.Write tests for the Weather Station application: Based on the test plan you created in the previous assignment, write test cases to cover the main functions of the Weather Station application. Use a testing framework compatible with your chosen programming language (e.g., JUnit for Java, pytest for Python, Mocha for JavaScript).

3.Set up version control: If you haven't already, create a repository for the Weather Station application using a version control system like Git. Commit your application's source code and tests to the repository.

4.Configure the Jenkins server: Create a new Jenkins job to build and test the Weather Station application. Configure the job to fetch the source code and tests from your version control repository. Set up the build process to compile the application (if applicable) and run the tests using the chosen testing framework.

5.Automate the testing process: Configure the Jenkins job to trigger automatically whenever changes are pushed to the version control repository. This will ensure that the tests are executed every time a new version of the application is committed, providing continuous feedback on the application's quality.

6.Analyze test results: Configure the Jenkins job to generate test reports and display them on the Jenkins dashboard. This will allow you and your team to monitor the testing process and quickly identify any issues or regressions.

7.(Optional) Configure notifications: Set up the Jenkins job to send email notifications to team members when a build fails or when new test failures are detected. This can help ensure that issues are addressed promptly.

8.Documentation: Write a brief report that documents the steps you took to set up the continuous integration pipeline and the testing process. Include information on the testing framework used, the Jenkins configuration, and any challenges you encountered during the assignment.

Deliverables:

Weather Station application source code and tests (link to repo)
Jenkins job configuration
Test reports generated by Jenkins
Documentation report
The report should be divided into sections, with headings and subheadings that clearly delineate the different aspects of the continuous integration pipeline and testing process. Here's a suggested outline for the documentation report:

Introduction Briefly describe the purpose of the report and provide an overview of the Weather Station application.

Application Overview Give a high-level description of the Weather Station application, its main components, and the programming language, build tool, and testing framework used.

Version Control System Describe the version control system used for the project (e.g., Git) and how the repository was set up.

Jenkins Configuration Explain the process of configuring the Jenkins job for the Weather Station application, including: a. Creating a new Freestyle project b. Configuring Source Code Management c. Configuring Build Triggers d. Configuring Build Environment e. Configuring Build Steps f. Configuring Post-build Actions g. (Optional) Configuring Email Notifications

Test Execution and Monitoring Describe how the tests are executed and monitored within the Jenkins pipeline, including: a. How test results are reported in Jenkins b. How to access the test results on the Jenkins dashboard c. Any additional monitoring or notification mechanisms that have been set up

Challenges and Lessons Learned Discuss any challenges you encountered during the assignment and how you addressed them. Share any valuable lessons learned and insights gained from the experience.

Conclusion Summarize the main points of the report and highlight the benefits of using Jenkins for continuous integration and automated testing.

Ensure that the report uses clear language, proper grammar, and appropriate formatting. Include any relevant screenshots or code snippets to illustrate the configuration steps and the testing process. The goal is to create a comprehensive document that can be easily understood by others, facilitating knowledge sharing and collaboration within the team.

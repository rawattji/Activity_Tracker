Title: Activity Tracker

Description:

Activity Tracker empowers you to take control of your browsing habits in Chrome. It provides a suite of features to help you track website usage, restrict access to distracting sites, and set time limits to promote focused browsing.

Features:

-Track Website Usage: Gain insights into which websites you visit and how much time you spend on them. This data helps you identify areas for improvement and optimize your browsing behavior.
-Restricted Sites: Block access to websites that hinder your productivity or concentration. If you attempt to visit a restricted site, Activity Tracker redirects you to a designated restricted page, gently reminding you of your goals.
-Time Limits: Set healthy time limits for specific websites. When the limit is reached, you'll be redirected to a limit exceeded page, encouraging you to take a break or focus on more pressing tasks.
-Coming Soon:
  -Feedback: Share your thoughts and suggestions to help shape future development.
  -Motivation: Receive inspirational quotes and nudges to stay on track with your browsing goals.
  -Reports: Generate detailed reports on your website activity for comprehensive analysis (available in a future update).
Settings: Manage stored data and customize your experience (currently limited to removing data and logging out).

Screenshots:

The README will include clear and informative captions for each screenshot, guiding users through the extension's functionalities:

Login Page:
![Screenshot 2024-05-22 165203](https://github.com/rawattji/Activity_tracker/assets/140943192/548118cd-93d0-4edb-a4fc-f36a30738a02)


Sign in with your existing account or 

![Screenshot 2024-05-22 165235](https://github.com/rawattji/Activity_tracker/assets/140943192/d95140dc-44fd-4f36-b2ab-84b7ad881584)

create a new one to start tracking your activity.

Activity Dashboard: 
![Screenshot 2024-05-22 165518](https://github.com/rawattji/Activity_tracker/assets/140943192/67d91bac-5385-4290-a770-7d69139089a7)
![Screenshot 2024-05-22 165530](https://github.com/rawattji/Activity_tracker/assets/140943192/51a56328-d7a2-4cdf-b97f-0cabbe5eadd1)

View a breakdown of your website usage, including visited websites and time spent.

Restricted Sites Management: 

![Screenshot 2024-05-22 165540](https://github.com/rawattji/Activity_tracker/assets/140943192/a4a2c45b-b93e-4f78-a06c-278fe011ffa5)

Add, remove, or edit websites you want to restrict.

Restricted Page Layout:

![image](https://github.com/rawattji/Activity_tracker/assets/140943192/6ba7b080-16a7-444f-ad5d-6473c07fbb94)

See the message displayed when you attempt to access a blocked site.

Time Limit Settings:

![Screenshot 2024-05-22 165953](https://github.com/rawattji/Activity_tracker/assets/140943192/e9693e31-9a5d-4e51-8e05-5e4fa80d13f4)

Set time limits for specific websites to control your browsing time.

Limit Exceeded Page Design:

![image](https://github.com/rawattji/Activity_tracker/assets/140943192/f17ee3dd-4d86-4580-9b9a-38e206d9469f)

Understand the notification you'll receive when a website's time limit expires.

Dropdown Menu (Minimized):

![Screenshot 2024-05-22 170102](https://github.com/rawattji/Activity_tracker/assets/140943192/df8a90bf-912f-4987-b360-4bd5bfbf2183)

Access forthcoming features like feedback, motivation quotes, and reports (coming soon).

Settings Page: 

![Screenshot 2024-05-22 170113](https://github.com/rawattji/Activity_tracker/assets/140943192/00f6228f-25b7-4596-9696-080c9ea59e9d)

Clear your browsing data stored by the extension and log out (logout redirects to the login page).


Installation:
clone the git repo and run the backend on the localhost:3000 and frontend on localhost:3001
dont forget to install necessary library and do bundle install in backend to insall gems 

and in the backend run this command 

rails db:migrate       (then enter)

rails console          (then enter)

User.create(email:'yourmail@gmail.com', password:'password', password_confirmation: 'password')      (then enter)

in the chrome extension use the developer mode and load the unpackage and then upload the build folder inside the frontend folder


before running the chrome extension run the command in you frontend directory 'npm run build'


then You can use the chrome extension, if you are facing issue you can mail me on amanrawatmait@gmail.com

How to Use:
If you're a new user, sign up for an account. Otherwise, log in to your existing account.
Explore the features described in the "Features" section above.
Additional Notes:

Feedback and motivation features are currently under development and will be available in a future update.
Reports functionality for in-depth analysis of your browsing activity is also planned for a future release.
Disclaimer:

This README has been crafted based on the information provided. If any discrepancies exist between this description and the actual extension's functionality, the actual extension behavior takes precedence.

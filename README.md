# Netflix Clone Project

3 different file:

main file: frontend in terminal write `yarn` to install packages then `yarn start` . In register page you can register as new user. 

api file : you have to install packages here as well. To run some api call use can use postman. To start you should write `nodemon` in terminal. Postman links:
to auth register - post `http://localhost:8800/api/auth/register` in body(raw/json) username,email,password is must(to make admin isAdmin must true).  Auth login - post `http://localhost:8800/api/auth/login` email and password. To get 1 movie : link get `http://localhost:8800/api/movies/find/637791b00143867b10e10213` and in headers should writes new line `"token" and value "Bearer <TokenValueFromLogin>"` . etc can check rest in api file.

adminpage file: you have to install packages here as well. To start you should write in terminal `yarn start`. It start with localhost:4000. Only admin permission users can enter this page.
## With 3 parts Frontend - Backend API - Admin

### Frontend and Admin uses ReactJS

![home page](/public/img/homepage.jpg "home")

![login page](/public/img/login.jpg "login")

![register page](/public/img/register.jpg "register")

### Backend api uses ExpressJs 


![adminpage](/public/img/adminpage.jpg "adminpage")

![movielist](/public/img/movielisyt.jpg "movielist")

![movieedit](/public/img/movieedit.jpg "movieedit")




# `Only for learning purpose!`
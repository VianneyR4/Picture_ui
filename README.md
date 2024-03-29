## Deployed app: https://picture-frontend-app.herokuapp.com/

Use this link to quickly test the application with `Integrated API`.

<!-- Note: to use this deployed `Client side` you have to run the `Server side` (`API server`) before... (see how: `https://github.com/VianneyR4/Picture_api`) -->

# Picture API

I wanted to build a website(or any other client with User Interface) and web service that will have 
- Users `login`/`register`
- Uploading and showing images. 
- Require `Username(email)` and `Password` parameters for the login 
- Detail for images: `Title` and `Description`. 
- The website should show all the images that users `uploaded` and `sort by date of upload` Ascending(`asc`) and Descending(`desc`). And that’s it. 
- The website should display them somehow allowing us to `change the sorting`. 
- Also the important part is that Api should not allow posting images to `api` without `authentication`. 


## Project setup in your local

If you dont want to use the deployed `Application` please follow this staps below to install the application in your local

1. Install `nodejs` if you don't have it installed ( check it in the `terminal`, type `$ node -v` or `$ npm -v`)
2. Clone the project from the terminal (type `$ git clone https://github.com/VianneyR4/Picture_ui.git`) or you can download a ZIP file
3. Then open the main directory of the project then type in the `terminal` the below cmd

```
npm install
```

### Compiles and hot-reloads for development

1. Go back again in the `terminal` and type the below cmd to run the `Client Server`

```
npm run serve
```


Note: By default i link this `Client side` to the deployed `API server`, it's mean you will dont have to configer any thing for the `Server side` in your local, what you have to do is just to run your `Client side server`.

But if you want you can change it and link to the `Local API server`, and for that make sure that the `API Server` in your `Local` is `Running` before to start using the `Client app`.  if you don't have the `API Server` for this app please folow this link `https://github.com/VianneyR4/Picture_api` and proccess the staps from the `README.MD` file. and then change the link of the deployed `API server` to the link of the local `API server`. (in `./src/api/files.js` and `./src/api/user.js`, the defaul `local link` in commented )

### Compiles and minifies for production

1. Go back again in the `terminal` and type the below cmd to build the `Client app` for the production 

```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Contact the Developer

Contact the `Developer` for more details or if there is any issues...

- E-mail adress: `vianneyrwicha2017@gmail.com`
- Skype: `Vianney Rwicha` or `vianneyrwicha2017@gmail.com`
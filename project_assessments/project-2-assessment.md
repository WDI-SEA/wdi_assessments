<img src="https://i.imgur.com/sX12DTc.png">

# Project 2 Assessment

## Introduction (By Instructor)

This **Introduction** section will be read in class by the instructor.

Students are to have their laptops closed until directed to open them.

Students will be self-directed beginning with the **Instructions & Time Guidelines** section below.

### GOAL

The goal of this project assessment is to gauge your ability to develop a minimal full-stack web application using the Express framework running in Node, including your ability to:

- Define a Model with Sequelize
- Run Sequelize migrations
- Define routes that perform basic CRUD and either redirect or render EJS templates
- Write an EJS template that displays a list of data and shows a form
- Demonstrate proper RESTful routing and naming conventions

### DEMO

The instructor will now demonstrate the app you will be building.

### OVERALL APPLICATION REQUIREMENTS

As you saw, the application consists of:

- A **SINGLE** page (template) with a title of "Wacky Widgets", that displays all widgets in the database and provides a form to add a new widget.
- When browsing to the root route of the application (`http://localhost:3000`), the "Wacky Widgets" page is displayed.
- The widgets were displayed in `<div>` elements (with provided styles).
- Each widget's `<div>` has three things to display:
    - The `description` field value
    - The `quantity` field value
    - A button used to delete a widget
- After a widget is added or deleted, the app redirects back to the "Wacky Widgets" page.
- If there are no widgets in the database, show a message "No Widgets Exist" instead of the table of widgets.

Use the screenshots below as your "wireframes".

There are a few "hints" offered along the way.

The layout and styling of this assessment is secondary to its functionality. As long as the app behaves as required and displays all elements specified, you will pass.

There is a CSS file included which styles the elements you might need. Feel free to use them.

### PROCESS

This assessment is an **individual** assignment - no collaboration please.

It's "open book" - you may reference anything on your computer, Google, use notes, etc. 

It is anticipated that it will take approximately **90 minutes** to complete this assessment, however, if necessary, you have up to 3 hours to finish.

When finished you will demo your app to an instructor and slack them the link to your personal GitHub repo.

## Instructions & Estimated Time Guidelines (You've Got This!)

Please follow the following steps in order:

- **STEP 1 - Prepare** (&asymp; 5 minutes)
- **STEP 2 - Set Up the App** (&asymp; 10 minutes)
- **STEP 3 - Implement the App's Requirements** (&asymp; 75 minutes)
- **STEP 4 - Deploy & Slack Link to Your Instructor**

> The above times are just guidelines

## Assessment Steps to Complete

### STEP 1 - Prepare (&asymp; 5 minutes)

Briefly read through the rest of this assignment to better understand what is required before starting to code.

### STEP 2 - Set Up the App (&asymp; 10 minutes)

Fork and clone [the starter code repo](https://github.com/WDI-SEA/project-2-assessment) to get the starter code. All necessary node modules have been added as dependencies. For reference, here is what they are:

* ejs
* express
* method-override
* pg
* sequelize

You will need to install these after cloning down your fork using `npm i`.

YOU DO NOT NEED TO RUN SEQUELIZE INIT!!!

The necessary sequelize files and folders are already in place and a **Mac** version of the config.json is present. **If you are using WSL on a PC, remember to add your username and password. See your instructor or IA if you need help with the configuration.**

You **DO** need to create a database named exactly `unit2_assessment`. You can use the `createdb` command from postgres to do this.

The app does **not** use a user model nor authentication.

This app will require only one data model - `widget`. Use normal sequelize commands to create this. The `widget` model only has two attributes:

- `description` -  a `string`
- `quantity` - an `integer`

The app only requires a single EJS template, therefore there is no need to spend time installing and using EJS Layouts unless you want to.

Some basic CSS is also provided to you.

### STEP 3 - Implement the App's Requirements (&asymp; 75 minutes)

#### Planning

Before you start coding, think about your data and your routes. Refer to the big [RESTful routing chart](https://github.com/WDI-SEA/wdi_assessments/blob/master/project_assessments/project2_remote_self_assessment.md). You can *add* a widget. You can *delete* a widget. You *read an index* of all widgets. Those are the only actions you need to plan for. What are the HTTP verbs you use for those operations? What are the URLs? Refer to the chart!

#### STEP 3.1 - Root Route

Browsing to the root route of the application display your app's single template, i.e., _index.ejs_, with a title of "Wacky Widgets":

<img src="https://i.imgur.com/qOnvKTj.png">

The "Wacky Widget" page title is an `<h1>` element.

#### STEP 3.2 - No Widgets in the Database

After this step is completed, your app should look something like this:

<img src="https://i.imgur.com/aLuM1GQ.png">

When there are no widgets in the database, a "No Widgets Exist" message should be displayed.

The "No Widgets Exist" is an `<h3>` followed by an `<hr>`.

##### Hint

You can use the `if` statement and the `length` property of the widgets to render different things in the template like this:

```html
<% if (widgets.length === 0) { %>

<% } else { %>

<% } %>
```

Note that the name of `widgets` will be the name of the variable holding the list of widgets.

#### STEP 3.3 - Form for Adding Widgets

After the form for adding a new widget has been added to the template, the display should look something like this:

<img src="https://i.imgur.com/2Qnb450.png">

The "Add Widget" heading is an `<h4>` below the `<hr>`.

Then comes the `form` for the `widget` model.

#### STEP 3.4

When there are widgets in the database, the display should look something like this:

<img src="https://i.imgur.com/JPpQCWR.png">

Each widget is being displayed as a `<div>` with text elements inside it.

The button deletes that widget from the database. For example, no more JavaScript Jelly Beans:

<img src="https://i.imgur.com/XHLet6w.png">

**Congrats, you're done!**

### STEP 4 - Deploy to Heroku & Slack Live Site Link to Your Instructor

**Take your computer and demo the app's functionality to your instructor.**

Once you have completed the requirements, deploy the app to Heroku or some other platform of your choice. You can reference the [class notes on deployment](https://gawdiseattle.gitbook.io/wdi/00-config-deployment/deploy-node) for this step. Take the link to the live site (not your Github repo), and send it via slack to your instructional team.

**Slack your app's link to your instructors**

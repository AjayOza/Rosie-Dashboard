# Rosie-Dashboard

A test area for specific requirement. This repo is unlikely to be of help to you but feel free to have a look.

Part of prospective ROSIE project - more detials on that project are not available.

### Requirements

A section of website that is affectively a **dashboard** to show the performance of number of subjects according to a number of measures. The other areas of the website (e.g. menu) will be built elsewhere. There should be no sidebar and other features and the dashboard should take-up the full width of the screen. There is a need to display data in a succinct manner so use sparklines for visualisation.

The user would select a subject of interest and the details of performance by each measure will be displayed in a table along with details of the subject (name, short description etc). Also displayed will be another table of performances of individuals within the group that the individual subject belongs to, defaulted to the first performance measure. The measure by which the group is measured can be changed by clicking a different measure on above table. The details (units of measure, short description, url etc) of selected measure will also be desplayed.

R will be used to generate the performance analyses (averages per group, trends, year-to-date etc). R will obtain raw data and push JSON files of that will be used by this section to display performace of each subject.

These are short names used:

* `H` represents subjects of interest e.g. collection of Heroes (or hotels, hospitals or employees)
* `G` represents groups that an individual `H` is a member of e.g. a region or skill-set or area of activity
* `M` represents measures used to guage the performance of e.g. speed, agility (or complaints). These could be grouped for future reference
* `A` represents performance analyses (averages per group, trends, year-to-date etc).)

Elements to display:

Element | Description | Type | Filter 
------- | -------------------------- | -------------- | ------------------
**L1**  | List of `H` items | Drop-down list | None 
**T1**  | Details | Form layout | Selected or default `H` item 
**T2**  | Table of perfomance analyses for each `M` | Tabular layout | `A` on selected or default `H`
**L2**  | List of `G` items | Group of buttons | None
**T3**  | Table of perfomance analyses for each `H` within `G` that `H` in T1 belongs to | Tabular layout  | `A` on `G` in T1 and first or selected item `M` as in T2
**L3**  | List of `M` items | Group of buttons | None
**T4**  | Details | Form layout | Selected or default `M` item 

Actions for each element:

Element | Actions 
------- | -------------------------- 
**L1**  | Change will trigger new H to be loaded in T1, T2, L2 and T3 (with filters)
**T1**  | None (perhaps urls for external links)
**T2**  | Click on inidvidual M will change L3 selected item and filter of T3
**L2**  | Selection will change L1 and trigger filtering of T1, T2 and T3 but not L3 and T4
**T3**  | None
**L3**  | Selection will change T3 filtering and new item will be loaded in T4
**T4**  | None (perhaps urls for external links)

###Road map

####Step 0: Development Enviroment

RStudio project as the analyses from the raw data will take place here and easy to manage via GitHub. Angular JS 1.5 will be used as framework. (: Not ready for 2.0 but using Heroes! :) The backgound project will use Bootstarp CSS and so JQuery will be available.

####Step 1: Concept testing

These are importanat areas to test out before full coding can take place
* Controllers, components and design/layout with fake data
* Double-check with site host that background website can support layout/folders/libs
* Sparklines within AngularJS directive (use JQuery as there already)
* Data access via ngResource to fetch JSON files
* Routing of secondary set of measures or different grouping paramter into tabs

####Step 2: Quick display to start off project

Do up the L1, T1 and T3 with realistic data

####Step 3: Code-up 

Full section deployed in the section

####Step 4: Testing and closing










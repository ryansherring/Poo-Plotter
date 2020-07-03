### This is PooPlotter!

I know the name is... different. That's because this is an Aquaponic Garden planner! This is an app that plots out a self-sustainable, self-sufficient garden for the user's own backyard or classroom. 

### What is Aquaponics?

Aquaponics is a sustainable form of farming/gardening in which plants are grown with no soil! It simulates a deconstructed river in that fish in a tank provide nutrient-rich waste, fed through a filtered water stream to plant beds, also growing in water. The plants then take up the waste nutrients and clean the water for the fish, sending the water via pump back to the fish tank, and the cycle continues! 

For those interested in a deeper dive in how aquaponics is an ideal food growing system, a quick search on google, youtube, or udemy will yield hundreds if not thousands of results from commercial and hobby growers alike!

Gardening this way can recycle up to 92% of the water used and is recycled! Additionally, this is a great way to become independant from external markets for the production of all vegetables in your diet!

### Alright, So How Does PooPlotter Help?

PooPlotter utilizes React.js, Node.js, and javascript algorithms to find exactly what you need to grow based on your garden size, plant needs, and quantity of those plants you want to grow! For example, based on your backyard, 3 sqft box you have, pooplotter will calculate how much fish you need to maintain in what size fish tank for proper nutrients, how much grow media like clay pelleets you need, what kind of siphons and plumbing, and even requirements for a wate pump!

### What Can It Currently Do?

In only one week of development, PooPlotter has full CRUD on users and garden plots! When viewing each garden, users can see basc metrics on fish required, fish tank required, hydroton media required, and water pump stats based on how many people they would like to feed in the household. 

The Node backend is fully functional (though some of the HTTP requests going unused could use some trimming)

The current build of pooplotter only works on IBC sized media beds, with equations being based on one ibc bed per 3 squarefeet of growspace, or in simpler terms, one person fed.

### What Features Are In Development?

This is still in early development, and Im experimenting with different methods of styling to make the UI more tolerable. It's as ugly as a mississippi catfish at the moment. 

For now, I've included a hardcoded database of plants that have similar nutritional and chemical needs. I'm working on interfacing the plants with the garden plots in a way that edits the garden plot schema model. This means that the totals on the right side change to consider plant requirements via my equations, and cap the plants one is able to add via the space required by each plant adding up to a total equal to the garden's space available.

If you're seeing this and you're not familiar with coding, these features are harder than you think!

### What Features Are Still Being Planned?

PooPlotter is in a position to move in many directions. However here is the currently planned roadmap:
1. Finish base garden plans
2. Add deepwater culture garden plot options
3. Add planner options for educational and commercial settings/sizings.
4. Create base pricing estimates per item and overall for project budgeting.
5. Add API calls for finding grants and loans to match aquaponics and price range (for larger and educational projects). 

### To Test The App In It's Current State:
1. Download Repos and install dependancies using 'npm -i' in the terminal
2. Load the plantSeed database using 'node plantSeed' in the terminal and break the process with ctrl+c
3. Run the backend repo listed in my profile under 'capstone backend' with the terminal command 'nodemon'
4. Run the frontend using 'npm start' in another terminal
5. You're set to jet! Happy Farming

### You're Awesome, I Want to Hire You!

Well aren't you a lucky duck! I'm looking to be hired!

Check out my linkedin here: https://www.linkedin.com/in/ryan-sherring/
Feel free to contact me there or via the contact info I have currently listed on linkedIn.
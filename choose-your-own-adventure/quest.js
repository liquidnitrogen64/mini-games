/* TEA STORY:
Worldbuilding:
    Flora/fauna: flora is mostly huge pond plants, as world rains often. Fauna is a lot of birds and creatures with vertical mobility.
    Development: basically a medieval-era world
    Religion: Cult of the Tea is the predominant religion, and tea cerimonies are regarded as extremely holy
    Politics:
        Major players: Cult of the Tea, The Camellian Empire, Assam Kingdom, The Kanton Federation: (Kilner City (major, independently-ruled trading center), Rooibos Polis, The State of Shennong)
        Relationships:
        Cult of the Tea: has largely remained unbiased, and has yet to express any direct support for anyone.
        The Camellian Empire: Is currently attacking Kilner City, which in response has formed a federation with similarly-sized allies in order to resist the Empire. The Empire is allied with the Assam Kingdom, but has yet to recieve any aid in their war effort.
        Assam Kingdom: Is allied with the Camellian Empire, but only maintains this relationship in order to not be conquered immediately. Has no desire to get involved in the Camellian/Kanton War.
        The Kanton Federation: See below
            Contributions:
                Kilner City: Supplies most of the funds and supplies for the war effort.
                Rooibos Polis: Organized the legal documents of the Kanton Federation, sends delegates and diplomats in attempt to resolve the conflict
                The State of Shennong: Militaristic state that deals with most of the manpower and war strategy.
            Tensions/Issues:
                Kilner City: Considers the Federation to be a distasteful, temporary arrangement that should quickly resolve the war so they can go back to pretending to be better than everyone else
                Rooibos Polis: Rooibos Polis cannot afford and is not prepared for an all-out-war, hence the focus on diplomacy. Of the Federation, they are the smallest (and weakest) party, and are worried that they will be taken over by their allies.
                The State of Shennong: Their economy has become reliant on most of the population being enlisted in the military, and in exchange being given goods for free from Kilner City. They cannot afford to end the war, lest their economy collapse.


So how's the logic of this gonna work?

storychoice?
    Tea Merchant: Would you like to read the overview of the story? (It's probably important)

        Yes: In a continent fraught with war, you are a novice tea merchant (definitely not a part of some weird tea cult), with a passion to spread the only things that you know: magical tea and unsolicited advice. You firmly believe that the power of tea can solve all world problems. Travel the world and spread the holy word of tea! [go to starting_prompt]
        No (starting_prompt): Now that you are free to bring tea to whomever you wish, what sort of people deserve your tea (and advice)?
            The common, downtrodden folk: You travel through the countryside, before settling in a town named [TOWN_NAME]. There you set up your teashop, [SHOP_NAME], that most definitely does not double as a cult outpost. There, you meet your first customer: (random customers, each visit a couple times, and have their own questline/problems that you help them with) [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]
            Only those of noble blood deserve my tea!: How utterly british of you! (affectionately.) But soon enough, you recieve your first royal invitation, from the Assam Kingdom. Do you accept or decline?
                Decline: Didn't you want to serve those of noble blood? This is your chance! Perhaps you are reconsidering? [back to Starting Prompt]
                Accept: After responding affirmatively to the letter, you begin your travels towards the Assam Kingdom. [Assam Arrive]
                Assam_arrive:  Upon arriving at Assam, you are met with a honor guard and brought to the capital. You are immediately recieved in the royal palace by Darjee, Sovreign Leader of Assam. A small boy of about nine, with dark hair and soft blue eyes, looks up at you from his comically oversized uniform and cape. "Teamaster," he adresses you in a young, yet also somehow imperious, voice. "I have invited you here to offer a deal. I understand that you have only recently reached your current standing in the Cult of the Tea. Young, innovative Teamasters such as you are valuable, oft-overlooked trailblazers. The Kingdom of Assam is offering to give you a fortune, to use as you wish. You can attempt to create new teas, or simply sit in luxury. All I ask for in exchange, is that you regularly perform tea ceremonies for those we request, and you sell your tea exclusively to my kingdom."
                    Seems Legit! I'll do it (assam_offer): Darjee smiles. "Excellent. I will have the guards take you to your new residence within my palace. I will summon you and explain in detail the responsibilites of your position as soon as I have a spare moment. But you must excuse me." The young boy begins to walk away, his cape trailing behind him. The guards that escorted you here take you to a beautiful room, decorated with brightly dyed silks. Almost everything lined with gold. The window lights up the room with a soft glow, and when you look out, you can see the whole city. Beautiful spires and onion domes, marble white and topped with gold, stretch into the sky. People dressed in colorful, fashionable clothes walk in the street or take carriages, making small talk, gossiping, and laughing politely. How do you want to spend your time?"
                        Just like take a nap or something (nap): Soon enough, you are summoned by the guards who you are, by now, almost certain are solely assigned to you. [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]
                        Explore! (explore_assam): You try the door, and it is locked.
                            Ok, I'll just wait: Soon enough, you are summoned by the guards who you are, by now, almost certain are solely assigned to you. [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]
                            Oh shoot, this is getting really weird, I need to get out: Sounds like a smart choice. (but what about the moneyyyy) How will you attempt your escape? [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]
                    This is kinda suspicious, I think I'll pass: Darjee frowns. "What a shame. There are plenty who would have killed to be in your position. But no matter. You will see reason eventually. Until then, you shall simply stay within the dungeon." Before you have the chance to protest (or maybe not, if you're into this), the same honor guard that escorted you here grabs you and deposits you in a dank, stone cell. The bars are rusting, and the window is just a hole carved in the wall. The view's pretty nice, though. Looking out, you can see a slightly gritty, but largely well-maintained city. Despite the generally good conditions, you can hear an odd silence that hangs around the city. People are afraid of something. You, however, have more pressing issues. How are you gonna get out of this cell?
                        Whatever, they'll let me out eventually: After a few weeks, Darjee returns with the same offer. Do you accept?:
                            Yes: (Go to assam_offer)
                            No: Darjee leaves. Do you want to attempt to escape?
                                Yes: (Go to escape_sequence)
                                No: Again, you are let rot in your cell for a while before being visited again. Accept Darjee's offer?
                                Yes: (Go to assam_offer)
                                No: How many times are you going to do this? Are you sure you do not want to escape? Your chances are dwindling.
                                    Fine, I'll escape: (Go to escape_sequence)
                                    Nope, I love prison!: Eventually, Darjee returns. "You are testing my patience. Never has there been one of common blood who has dared deny me so. You WILL see reason, or you will die." The guards begin to advance towards you, their blades gleaming with light from the window.
                                        Nothing like the threat of death to make you reconsider!: Darjee smiles. "Excellent. I knew you weould see reason eventually. I will have the guards take you to your new residence within my palace. I will summon you and explain in detail the responsibilites of your position as soon as I have a spare moment. But you must excuse me." The young boy begins to walk away, his neat cape trailing behind him, contrasting sharply with the dirty floor of your former cell. The guards that... "escorted" you here march you out of prison and take you to a beautiful room, decorated with brightly dyed silks. Almost everything lined with gold. The window lights up the room with a soft glow. When you look out, you can see the whole city. Beautiful spires and onion domes, marble white and topped with gold, stretch into the sky. People dressed in colorful, fashionable clothes walk in the street or take carriages, making small talk, gossiping, and laughing politely. How do you want to spend your time?
                                            Just like, take a nap or something: (go to nap)
                                            Explore!: (go to explore_assam)
                                        Guess I'll die: Wow, that was stupid! When you do not respond, the guards surround you, grinning with a bloody eagerness. They seem to loom larger than life, casting long shadows over you. With a sudden pounce, one lunges for your neck. The crimson shash tied to their arm flares out behind the arc of their blade with a sudden snap. You squeeze your eyes shut, desperately holding out your hands in a futile attempt to block the blade. A flash of red. Then, nothing. [end_game]
                                        I need to try and escape NOW: Took you long enough! There don't seem to be many options though...
                                            Make a run for it! [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]
                                            Jump out the window!: [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]
                        Oooh, I've always wanted to do an escape sequence! (escape_sequence):  [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]
*/

const storyData = {
    start: {
        text: "Would you like to read the overview of the story? (It's probably important)",
        choices: [
            {text: "Yes", target: "overview"},
            {text: "No", target: "starting_prompt"}
        ]
    },

    overview: {
        text: "In a continent fraught with war, you are a novice tea merchant (deeefinitely not part of some weird tea cult), with a passion to spread the only things you know: magical tea and unsolicited advice. You firmly believe that the power of tea can solve all world problems. Let's find out if you're right! Travel the world and spread the holy word of tea!",
        choices: [
            {text: "I'm so excited to start!", target: "starting_prompt"}
        ]
    },

    starting_prompt:{
        text: "Now that you are free to bring tea to whomever you wish, what sorts of people deserve your tea (and advice)?",
        choices: [
            {text: "The common, downtrodden folk need my tea in these trying times", target: "town_story"},
            {text: "Only those of noble blood deserve the taste of my tea!", target: "noble_story"}
        ]
    },

    town_story: {
        text: "You travel through the countryside, before settling in a town named [TOWN_NAME]. There you set up your teashop, [SHOP_NAME], that most definitely does not double as a cult outpost. [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]",
        choices: []
    },

    noble_story: {
        text: "How utterly british of you! (affectionately.) But soon enough, you recieve your first royal invitation, from the Assam Kingdom. Do you accept or decline?",
        choices: [
            {text: "Decline", target: "decline_invite"},
            {text: "Accept", target: "assam_arrive"}
        ]
    },

    decline_invite: {
        text: "Didn't you want to serve those of noble blood? This is your chance! Perhaps you are reconsidering?",
        choices: [
            {text: "Reconsider", target: "starting_prompt"},
            {text: "Accept the invitation", target: "assam_arrive"}
        ]
    },

    assam_arrive: {
        text: "Upon arriving in Assam, you are met with an honor guard and brought to the capital city. You are immdediately recieved in the royal palace by Darjee, Sovereign Leader of Assam. A small boy of about nine, with dark hair and soft blue eyes, looks up at you from his comically oversized uniform and cape. \n\"Teamaster,\" he addresses you in a young yet imperious voice, \"I have invited you here to offer a deal. I understand that you have only recently reached your current standing in the Cult of the Tea. Young, innovative Teamasters such as you are valuable, oft-overlooked trailblazers. The Kingdom of Assam is offering to give you a fortune, to use as you wish. You can attempt to create new teas, or simply sit in luxury. All I ask for in exchange, is that you regularly perform tea ceremonies for those we request, and you sell your tea exclusively to my kingdom.\"",
        choices: [
            {text: "Seems legit! I'll do it.", target: "assam_offer"},
            {text: "This is kinda suspicious, I think I'll pass", target: "assam_dungeon"}
        ]
    },

    assam_offer: {
        text: "Darjee smiles. \n\"Excellent. I will have the guards take you to your new residence within my palace. I will summon you and explain in detail the responsibilites of your position as soon as I have a spare moment. But you must excuse me.\" The young boy begins to walk away, his cape trailing behind him. The guards that escorted you here take you to a beautiful room, decorated with brightly dyed silks. Almost everything is lined with gold. The window lights up the room with a soft glow, and when you look out, you can see the whole city. Beautiful spires and onion domes, marble white and topped with gold, stretch into the sky. People dressed in colorful, fashionable clothes walk in the street or take carriages, making small talk, gossiping, and laughing politely. How do you want to spend your time?",
        choices: [
            {text: "Just like take a nap or something", target: "darjee_summons"},
            {text: "Explore!", target: "explore_locked"}
        ]
    },

    explore_locked: {
        text: "You try the door, and it is locked.",
        choices: [
            {text: "Ok, I'll just wait", target: "darjee_summons"},
            {text: "This is getting weird, I need to get out", target: "escape_luxury"}
        ]
    },

    escape_luxury: {
        text: "Sounds like a smart choice. (but what about the moneyyyy) How will you attempt your escape? [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]",
        choices: []
    },

    darjee_summons: {
        text: "Soon enough, you are summoned by the guards who you are, by now, almost certain are solely assigned to you. [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]",
        choices: []
    },

    assam_dungeon: {
        text: "Darjee frowns. \"What a shame. There are plenty who would have killed to be in your position. But no matter. You will see reason eventually. Until then, you shall simply stay within the dungeon.\" Before you have the chance to protest (or maybe not, if you're into this), the same honor guard that escorted you here grabs you and deposits you in a dank, stone cell. The bars are rusting, and the window is just a hole carved in the wall. The view's pretty nice, though. Looking out, you can see a slightly gritty, but largely well-maintained city. Despite the generally good conditions, you can hear an odd silence that hangs around the city. People are afraid of something. You, however, have more pressing issues. How are you gonna get out of this cell?",
        choices: [
            {text: "Whatever, they'll let me out evetually", target: "cell_wait_1"},
            {text: "Oooh, I've always wanted to do an escape sequence!", target: "escape_cell"}
        ]
    },

    cell_wait_1: {
        text: "After a few weeks, Darjee returns with the same offer. Do you accept?",
        choices: [
            {text: "Yes", target: "assam_offer"},
            {text: "No", target: "cell_wait_2"}
        ]
    },

    cell_wait_2: {
        text: "Darjee leaves. Do you want to attempt to escape?",
        choices: [
            {text: "Yes", target: "escape_cell"},
            {text: "No", target: "cell_wait_last"}
        ]
    },

    escape_cell: {
        text: "[congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]",
        choices: []
    },

    cell_wait_last: {
        text: "How many times are you going to do this? Are you sure you don't want to escape? Your chances are dwindling.",
        choices: [
            {text: "Fine, I'll escape", target: "escape_sequence"},
            {text: "Nope, I love prison!", target: "offer_last"}
        ]
    },

    offer_last: {
        text: "Eventually, Darjee returns. \"You are testing my patience. Never has there been one of common blood who has dared deny me so. You WILL see reason, or you will die.\" The guards begin to advance towards you, their blades gleaming with light from the window.",
        choices: [
            {text: "Nothing like the treat of death to make you reconsider!", target: "accept_last"},
            {text: "Guess I'll die!", target: "cell_death"},
            {text: "Oh no! I need to escape!", target: "escape_last"}
        ]
    },

    accept_last: {
        text: "Darjee smiles. \"Excellent. I knew you weould see reason eventually. I will have the guards take you to your new residence within my palace. I will summon you and explain in detail the responsibilites of your position as soon as I have a spare moment. But you must excuse me.\" The young boy begins to walk away, his neat cape trailing behind him, contrasting sharply with the dirty floor of your former cell. The guards that... \"escorted\" you here march you out of prison and take you to a beautiful room, decorated with brightly dyed silks. Almost everything lined with gold. The window lights up the room with a soft glow. When you look out, you can see the whole city. Beautiful spires and onion domes, marble white and topped with gold, stretch into the sky. People dressed in colorful, fashionable clothes walk in the street or take carriages, making small talk, gossiping, and laughing politely. How do you want to spend your time?",
        choices: [
            {text: "Just like take a nap or something", target: "darjee_summons"},
            {text: "Explore!", target: "explore_locked"}
        ]
    },

    escape_last: {
        text: "Took you long enough! There don't seem to be many options though... [congrats, random person! you reached the end of the game (so far) you must be so disappointed! but fear not, there will be more games, or a continuation of the current games, by next week!]",
        choices: []
    },

    cell_death: {
        text: "Wow, that was stupid! When you do not respond, the guards surround you, grinning with a bloody eagerness. They seem to loom larger than life, casting long shadows over you. With a sudden pounce, one lunges for your neck. The crimson shash tied to their arm flares out behind the arc of their blade with a sudden snap. You squeeze your eyes shut, desperately holding out your hands in a futile attempt to block the blade. A flash of red. Then, nothing.",
        choices: []
    }
}